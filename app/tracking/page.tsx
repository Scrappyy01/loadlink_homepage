"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Footer from "../components/Footer";

// ─── Types ───────────────────────────────────────────────────────────────────

interface TrackingInfo {
  action?: string;
  date?: string;
  time?: string;
  depot?: string;
  location?: string;
  description?: string;
}

interface CouponItem {
  trackingInfo?: TrackingInfo[];
}

interface TrackingEntry {
  consignmentCode?: string;
  itemsCoupons?: CouponItem[];
}

interface FreightRow {
  id: number;
  order_code?: string;
  consignment_number?: string;
  pickup_suburb?: string;
  delivery_suburb?: string;
  pickup_state?: string;
  delivery_state?: string;
  user_name?: string;
  service_name?: string;
  status?: number;
  created_at?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function flattenEvents(data: TrackingEntry[]): TrackingInfo[] {
  return data.flatMap(
    (t) =>
      t.itemsCoupons?.flatMap(
        (coupon) =>
          coupon.trackingInfo?.map((info) => ({
            ...info,
            depot: info.depot || info.location || t.consignmentCode,
          })) ?? []
      ) ?? []
  );
}

function getProgressLevel(events: TrackingInfo[]): number {
  let max = 0;
  for (const ev of events) {
    const s = (ev.action || ev.description || "").toLowerCase();
    let lvl = 0;
    if (s.includes("delivered")) lvl = 5;
    else if (
      s.includes("transit") ||
      s.includes("depot") ||
      s.includes("handover") ||
      s.includes("delivery")
    )
      lvl = 3;
    else if (s.includes("pickup") || s.includes("collect")) lvl = 2;
    else if (s.includes("accepted") || s.includes("lodged")) lvl = 1;
    if (lvl > max) max = lvl;
  }
  return max;
}

const STEPS = ["Lodged", "Collected", "In Transit", "Delivered"];

function stepDone(level: number, stepIdx: number) {
  const thresholds = [1, 2, 3, 5];
  return level > thresholds[stepIdx];
}

function stepCurrent(level: number, stepIdx: number) {
  const thresholds = [1, 2, 3, 5];
  return level === thresholds[stepIdx];
}

// ─── Stepper ──────────────────────────────────────────────────────────────────

function Stepper({ level }: { level: number }) {
  const filledPct = (() => {
    if (level >= 5) return 75;
    if (level >= 3) return 50;
    if (level >= 2) return 25;
    return 0;
  })();

  return (
    <div className="relative flex items-start justify-between px-6 py-6">
      <div
        className="absolute h-0.5 bg-gray-200"
        style={{ top: "2.35rem", left: "calc(12.5%)", right: "calc(12.5%)" }}
      />
      {filledPct > 0 && (
        <div
          className="absolute h-0.5 bg-gray-600 transition-all duration-500"
          style={{
            top: "2.35rem",
            left: "calc(12.5%)",
            width: `${filledPct}%`,
          }}
        />
      )}
      {STEPS.map((label, i) => {
        const done = stepDone(level, i);
        const current = !done && stepCurrent(level, i);
        return (
          <div
            key={label}
            className="flex flex-col items-center z-10"
            style={{ width: "25%" }}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow transition-all ${
                done
                  ? "bg-gray-700 text-white"
                  : current
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-400 border-2 border-gray-300"
              }`}
            >
              {done ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <p
              className={`mt-2 text-xs font-semibold text-center ${
                done
                  ? "text-gray-700"
                  : current
                  ? "text-green-600"
                  : "text-gray-400"
              }`}
            >
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

function TrackingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("number") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [searchedQuery, setSearchedQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [freight, setFreight] = useState<FreightRow | null>(null);
  const [trackingData, setTrackingData] = useState<TrackingEntry[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (initialQuery) doSearch(initialQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doSearch = async (q: string) => {
    const val = q.trim();
    if (!val) return;

    setLoading(true);
    setHasSearched(true);
    setNotFound(false);
    setSearchedQuery(val);
    setFreight(null);
    setTrackingData([]);

    try {
      const res = await fetch(
        `/api/tracking?number=${encodeURIComponent(val)}`
      );
      const json = await res.json();

      if (!res.ok || json.fallback || json.error) {
        setNotFound(true);
        return;
      }

      const found: FreightRow = json.freight;
      if (!found?.id) {
        setNotFound(true);
        return;
      }

      setFreight(found);
      const rawTracking = json.tracking;
      const entries: TrackingEntry[] = Array.isArray(rawTracking)
        ? rawTracking
        : rawTracking
        ? [rawTracking]
        : [];
      setTrackingData(entries);
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.replace(`/tracking?number=${encodeURIComponent(query.trim())}`);
    doSearch(query);
  };

  const events = flattenEvents(trackingData);
  const progressLevel = getProgressLevel(events);

  const pickupLabel = [freight?.pickup_suburb, freight?.pickup_state]
    .filter(Boolean)
    .join(", ");
  const dropoffLabel = [freight?.delivery_suburb, freight?.delivery_state]
    .filter(Boolean)
    .join(", ");

  const mapSrc =
    pickupLabel && dropoffLabel
      ? `https://www.google.com/maps/embed/v1/directions?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&origin=${encodeURIComponent(pickupLabel + ", Australia")}&destination=${encodeURIComponent(dropoffLabel + ", Australia")}&mode=driving`
      : null;

  return (
    <>
      {/* ── Hero / Search ──────────────────────────────────────────────── */}
      <section className="bg-loadlink-navy pt-36 pb-16 px-[5%] md:px-[8%]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-loadlink-orange text-sm font-bold uppercase tracking-widest mb-3">
            Shipment Tracking
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Track your shipment
          </h1>
          <p className="text-gray-300 text-base mb-10">
            Enter your Load ID or tracking number to view shipment details.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 gap-3">
              <i className="fa-solid fa-magnifying-glass text-white/40 shrink-0" />
              <input
                type="text"
                className="flex-1 outline-none text-white text-base placeholder-white/40 bg-transparent min-w-0"
                placeholder="Enter tracking number or Load ID..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="shrink-0 bg-loadlink-orange text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-loadlink-orange/90 hover:shadow-lg hover:shadow-loadlink-orange/30 transition-all duration-300 disabled:opacity-60 cursor-pointer"
              >
                {loading ? "Tracking..." : "Track"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ── Results ───────────────────────────────────────────────────── */}
      <section className="bg-light-bg min-h-[50vh] px-[5%] md:px-[8%] py-10">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Idle */}
          {!hasSearched && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-loadlink-orange/10 flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-magnifying-glass text-2xl text-loadlink-orange" />
              </div>
              <p className="text-base font-medium text-gray-500">
                Enter a tracking number above to get started.
              </p>
            </div>
          )}

          {/* Loading skeleton */}
          {hasSearched && loading && (
            <div className="space-y-4">
              <div className="h-28 bg-white rounded-2xl shadow-sm animate-pulse" />
              <div className="h-56 bg-white rounded-2xl shadow-sm animate-pulse" />
              <div className="h-80 bg-white rounded-2xl shadow-sm animate-pulse" />
            </div>
          )}

          {/* Not found */}
          {hasSearched && !loading && notFound && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-loadlink-orange/10 flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-box-open text-2xl text-loadlink-orange" />
              </div>
              <h2 className="text-xl font-bold text-loadlink-navy mb-3">
                No results found
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-1">
                Tracking results not displayed? Please check you&apos;ve
                correctly entered the tracking number. Still no results? Please
                check back later. It can take up to 48 hours for scan details to
                appear.
              </p>
              <p className="text-gray-500 text-sm mb-6">
                We couldn&apos;t find results for{" "}
                <span className="font-semibold">{searchedQuery}</span>.
              </p>
              <a
                href="https://www.loadlink.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-loadlink-orange/90 hover:shadow-xl hover:shadow-loadlink-orange/25 transition-all duration-300"
              >
                View on LoadLink Platform
                <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          )}

          {/* ── Found ─────────────────────────────────────────────────── */}
          {hasSearched && !loading && freight !== null && (
            <>
              {/* Tracking number header */}
              <div className="bg-loadlink-orange rounded-2xl p-6 text-center">
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">
                  Tracking Number
                </p>
                <p className="text-white text-3xl font-extrabold tracking-widest break-all">
                  {freight.order_code || searchedQuery}
                </p>
                {freight.service_name && (
                  <p className="text-white/70 text-sm mt-1">
                    via {freight.service_name}
                  </p>
                )}
              </div>

              {/* Stepper + Events table */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <Stepper level={progressLevel} />

                {events.length > 0 ? (
                  <div className="overflow-x-auto border-t border-gray-100">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          {["#", "Status", "Date", "Time", "Depot"].map(
                            (h) => (
                              <th
                                key={h}
                                className="py-2.5 px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
                              >
                                {h}
                              </th>
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {events.map((ev, idx) => {
                          const label = ev.action || ev.description || "-";
                          return (
                            <tr
                              key={idx}
                              className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                              <td className="py-3 px-4 text-gray-400 text-xs">
                                {idx + 1}
                              </td>
                              <td className="py-3 px-4 text-loadlink-navy font-medium">
                                {label}
                              </td>
                              <td className="py-3 px-4 text-gray-500">
                                {ev.date || "-"}
                              </td>
                              <td className="py-3 px-4 text-gray-500">
                                {ev.time || "-"}
                              </td>
                              <td className="py-3 px-4 text-gray-500">
                                {ev.depot || "-"}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="border-t border-gray-100 py-8 text-center text-gray-400 text-sm">
                    No tracking events available yet. Check back later.
                  </div>
                )}
              </div>

              {/* Pickup Details + Contact Details */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Pickup Details */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-base font-bold text-loadlink-navy mb-4 pb-2 border-b border-gray-100">
                    Pickup Details
                  </h2>

                  <div className="flex gap-16 mb-5">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange/10 shrink-0">
                        <i className="fa-solid fa-location-dot text-loadlink-orange" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-loadlink-orange mb-1">
                          Pickup
                        </p>
                        <p className="text-base font-bold text-loadlink-navy flex items-center gap-1">
                          <i className="fa-solid fa-location-dot text-loadlink-orange text-sm" />
                          {pickupLabel || "—"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange/10 shrink-0">
                        <i className="fa-solid fa-truck text-loadlink-orange" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-loadlink-orange mb-1">
                          Dropoff
                        </p>
                        <p className="text-base font-bold text-loadlink-navy flex items-center gap-1">
                          <i className="fa-solid fa-location-dot text-green-500 text-sm" />
                          {dropoffLabel || "—"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  {mapSrc ? (
                    <div className="rounded-xl overflow-hidden border border-gray-100 w-full h-96 bg-gray-50">
                      <iframe
                        src={mapSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Route map"
                      />
                    </div>
                  ) : (
                    <div className="rounded-xl bg-gray-100 flex items-center justify-center h-44">
                      <p className="text-gray-400 text-sm">
                        Address information not available
                      </p>
                    </div>
                  )}
                </div>

                {/* Contact Details */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3">
                  <h3 className="text-base font-bold text-loadlink-navy pb-3 border-b border-gray-100">
                    Contact Details
                  </h3>

                  <p className="text-xs font-semibold text-loadlink-orange">
                    (Please Login or Register to see Contact Details)
                  </p>

                  {["Contact Name", "Company Name", "Contact Phone", "Contact Email"].map(
                    (label) => (
                      <div key={label}>
                        <p className="text-xs text-gray-400">{label}:</p>
                        <p className="text-sm text-gray-700 font-medium min-h-[1.2rem]" />
                      </div>
                    )
                  )}

                  <div className="flex gap-2 pt-1">
                    <a
                      href="https://parcelfreight.loadlink.com.au/parcel-freight"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-loadlink-navy text-white text-sm font-semibold py-2.5 rounded-xl text-center hover:bg-loadlink-dark transition-colors"
                    >
                      Login
                    </a>
                    <a
                      href="https://parcelfreight.loadlink.com.au/parcel-freight"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-loadlink-orange text-loadlink-orange text-sm font-semibold py-2.5 rounded-xl text-center hover:bg-loadlink-orange hover:text-white transition-colors"
                    >
                      Register
                    </a>
                  </div>

                  <div className="border-t border-gray-100 pt-3 mt-auto">
                    <p className="text-sm font-bold text-loadlink-navy mb-1">
                      Like to Submit a Quote?
                    </p>
                    <p className="text-xs text-loadlink-orange mb-3">
                      (Please Login or Register)
                    </p>
                    <a
                      href={`https://parcelfreight.loadlink.com.au/my-parcel-freights`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-loadlink-orange text-white text-sm font-semibold py-3 rounded-xl text-center hover:bg-loadlink-orange/90 transition-colors"
                    >
                      View Full Listing
                    </a>
                  </div>
                </div>
              </div>

              {/* Back to Home */}
              <div className="text-center py-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-loadlink-navy transition-colors text-sm"
                >
                  <i className="fa-solid fa-arrow-left" />
                  Back to Home
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default function TrackingPage() {
  return (
    <Suspense>
      <TrackingContent />
    </Suspense>
  );
}
