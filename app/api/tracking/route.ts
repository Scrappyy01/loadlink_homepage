import { NextRequest, NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Mock data — use tracking number "MOCK-001" to preview the UI without hitting
// the real LoadLink APIs.
// ---------------------------------------------------------------------------
const MOCK_RESPONSE = {
  id: "MOCK-001",
  tracking_number: "MOCK-001",
  carrier: "LoadLink Express",
  description: "Industrial machinery parts – fragile",
  tracking_status: "In Transit",
  tracking_events: [
    { seq: 1, status: "Lodged",     date: "28/03/2026", time: "08:15", depot: "Sydney Depot" },
    { seq: 2, status: "Collected",  date: "28/03/2026", time: "11:30", depot: "Sydney Depot" },
    { seq: 3, status: "In Transit", date: "29/03/2026", time: "06:45", depot: "Melbourne Hub" },
  ],
  pickup_suburb: "Sydney",
  pickup_state: "NSW",
  dropoff_suburb: "Melbourne",
  dropoff_state: "VIC",
  weight_kg: 120,
  length_mm: 1200,
  width_mm: 800,
  height_mm: 600,
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const number = searchParams.get("number");

  if (!number || number.trim() === "") {
    return NextResponse.json(
      { error: "Tracking number is required." },
      { status: 400 },
    );
  }

  const id = number.trim();

  // Return mock data for preview / testing
  if (id.toUpperCase() === "MOCK-001") {
    return NextResponse.json(MOCK_RESPONSE);
  }

  const endpoints = [
    `https://app.loadlink.com.au/api/listings/${encodeURIComponent(id)}`,
    `https://parcelfreight.loadlink.com.au/api/tracking/${encodeURIComponent(id)}`,
  ];

  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        headers: { Accept: "application/json" },
        next: { revalidate: 60 },
      });
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      }
    } catch {
      // try next endpoint
    }
  }

  return NextResponse.json(
    { error: "Tracking information not found.", fallback: true },
    { status: 404 },
  );
}
