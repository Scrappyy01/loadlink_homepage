import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://stagingapi.loadlink.com.au/api/v1";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const number = searchParams.get("number");

  if (!number || number.trim() === "") {
    return NextResponse.json(
      { error: "Tracking number is required." },
      { status: 400 },
    );
  }

  const orderCode = number.trim();

  // Step 1: Search for the freight by order_code
  let freightData: Record<string, unknown>;
  try {
    const searchRes = await fetch(`${BASE_URL}/freight/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ q: orderCode }),
    });

    if (!searchRes.ok) {
      return NextResponse.json(
        { error: "Tracking information not found.", fallback: true },
        { status: 404 },
      );
    }

    const searchJson = await searchRes.json();
    const raw = searchJson?.data ?? searchJson;
    // API may return a single object or an array; take first
    freightData = Array.isArray(raw) ? raw[0] : raw;

    if (!freightData?.id) {
      return NextResponse.json(
        { error: "Tracking information not found.", fallback: true },
        { status: 404 },
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Unable to retrieve tracking information.", fallback: true },
      { status: 502 },
    );
  }

  // Step 2: Fetch courier tracking events
  let trackingEvents: unknown[] = [];
  if (freightData.order_code || freightData.consignment_number) {
    try {
      const trackRes = await fetch(
        `${BASE_URL}/freight/${freightData.id}/get_couriers_tracking`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ order_code: freightData.order_code }),
        },
      );
      if (trackRes.ok) {
        const trackJson = await trackRes.json();
        const rawTrack = trackJson?.data ?? trackJson;
        trackingEvents = Array.isArray(rawTrack) ? rawTrack : rawTrack ? [rawTrack] : [];
      }
    } catch {
      // tracking events are optional — continue without them
    }
  }

  return NextResponse.json({
    freight: freightData,
    tracking: trackingEvents,
  });
}
