"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

interface TrackingEvent {
  seq: number;
  status: string;
  date: string;
  time: string;
  depot: string;
}

interface LoadData {
  id?: number | string;
  load_id?: number | string;
  tracking_number?: string;
  carrier?: string;
  description?: string;
  job_description?: string;
  date_available?: string;
  created_at?: string;
  load_author?: string | number;
  author?: string;
  user_id?: number | string;
  user_name?: string;
  role?: string;
  length_mm?: number | string;
  width_mm?: number | string;
  height_mm?: number | string;
  weight_kg?: number | string;
  length?: number | string;
  width?: number | string;
  height?: number | string;
  weight?: number | string;
  pickup?: string;
  pickup_suburb?: string;
  pickup_state?: string;
  dropoff?: string;
  dropoff_suburb?: string;
  dropoff_state?: string;
  distance?: string;
  travel_time?: string;
  image?: string;
  image_url?: string;
  contact_name?: string;
  company_name?: string;
  contact_phone?: string;
  contact_email?: string;
  tracking_status?: string;
  tracking_events?: TrackingEvent[];
  status?: string;
  fallback?: boolean;
  error?: string;
}

function TrackingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialNumber = searchParams.get("number") ?? "";

  const [inputValue, setInputValue] = useState(initialNumber);
  const [trackingNumber, setTrackingNumber] = useState(initialNumber);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<LoadData | null>(null);
  const [searched, setSearched] = useState(false);

  const fetchTracking = async (num: string) => {
    if (!num.trim()) return;
    setLoading(true);
    setSearched(true);
    setData(null);
    try {
      const res = await fetch(
        `/api/tracking?number=${encodeURIComponent(num.trim())}`,
      );
      const json = await res.json();
      setData(json);
    } catch {
      setData({ fallback: true, error: "Unable to retrieve information." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialNumber) fetchTracking(initialNumber);
  }, [initialNumber]);

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    const n = inputValue.trim();
    setTrackingNumber(n);
    router.replace(`/tracking?number=${encodeURIComponent(n)}`);
    fetchTracking(n);
  };

  const pickupFull =
    [data?.pickup_suburb ?? data?.pickup, data?.pickup_state]
      .filter(Boolean)
      .join(", ") || "—";
  const dropoffFull =
    [data?.dropoff_suburb ?? data?.dropoff, data?.dropoff_state]
      .filter(Boolean)
      .join(", ") || "—";

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-loadlink-navy pt-36 pb-16 px-[5%] md:px-[8%]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-loadlink-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Shipment tracking
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Track your shipment
          </h1>
          <p className="text-white/60 text-lg mb-10">
            Enter your Load ID or tracking number to view shipment details.
          </p>
          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 max-w-xl mx-auto">
            <i className="fa-solid fa-magnifying-glass text-white/40 ml-4 mr-1" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Enter tracking number or Load ID"
              aria-label="Tracking number"
              className="flex-1 bg-transparent text-white placeholder-white/40 text-sm px-3 py-1.5 outline-none min-w-0"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="bg-loadlink-orange text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-loadlink-orange/90 hover:shadow-lg hover:shadow-loadlink-orange/30 transition-all duration-300 shrink-0 disabled:opacity-60"
            >
              {loading ? "Searching..." : "Track"}
            </button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-light-bg min-h-[50vh] px-[5%] md:px-[8%] py-12">
        <div className="max-w-6xl mx-auto">
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-14 h-14 rounded-full border-4 border-loadlink-orange/20 border-t-loadlink-orange animate-spin" />
              <p className="text-gray-500 font-medium">
                Searching for{" "}
                <span className="text-loadlink-navy font-bold">
                  {trackingNumber}
                </span>
                …
              </p>
            </div>
          )}

          {/* Fallback */}
          {!loading && searched && data?.fallback && (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-loadlink-orange/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <i className="fa-solid fa-box-open text-2xl text-loadlink-orange" />
              </div>
              <h2 className="text-2xl font-bold text-loadlink-navy mb-2">
                No results found
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-xl mx-auto mb-8">
                Tracking results not displayed? Please check you&apos;ve correctly
                entered the tracking number. Still no results? Please check back
                later. It can take up to 48 hours for scan details to appear.
                <br />
                We couldn&apos;t find results for{" "}
                <span className="font-semibold">{trackingNumber}</span>.
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

          {/* Load Details */}
          {!loading && data && !data.fallback && (
            <div className="flex flex-col gap-6">
              {/* Top row */}
              <div className="flex justify-center">
                {/* Tracking Status */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5 w-full">
                  {/* Tracking number banner */}
                  {(data.tracking_number ?? data.id) && (
                    <div className="bg-loadlink-orange rounded-xl px-5 py-4 text-center">
                      <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-1">Tracking Number</p>
                      <p className="text-white text-2xl font-bold tracking-wide">{data.tracking_number ?? String(data.id)}</p>
                      {data.carrier && (
                        <p className="text-white/70 text-xs mt-1">via {data.carrier}</p>
                      )}
                    </div>
                  )}

                  {/* Progress steps */}
                  {(() => {
                    const steps = ["Lodged", "Collected", "In Transit", "Delivered"];
                    const statusMap: Record<string, number> = {
                      lodged: 0, collected: 1, "in transit": 2, delivered: 3,
                    };
                    const currentStep = statusMap[(data.tracking_status ?? "").toLowerCase()] ?? -1;
                    if (currentStep < 0 && !data.tracking_events?.length) return null;
                    const activeStep = currentStep >= 0 ? currentStep : Math.min((data.tracking_events?.length ?? 1) - 1, 3);
                    return (
                      <div className="relative flex items-center justify-between px-2">
                        {/* connector line */}
                        <div className="absolute top-4 left-6 right-6 h-1 bg-gray-200 rounded-full">
                          {/* completed segments: gray */}
                          {activeStep > 1 && (
                            <div
                              className="absolute top-0 left-0 h-full bg-gray-400 rounded-full"
                              style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
                            />
                          )}
                          {/* active segment: green */}
                          {activeStep > 0 && (
                            <div
                              className="absolute top-0 h-full bg-green-500 rounded-full transition-all duration-500"
                              style={{
                                left: `${((activeStep - 1) / (steps.length - 1)) * 100}%`,
                                width: `${(1 / (steps.length - 1)) * 100}%`,
                              }}
                            />
                          )}
                        </div>
                        {steps.map((step, i) => {
                          const done = i < activeStep;
                          const active = i === activeStep;
                          return (
                            <div key={step} className="relative flex flex-col items-center gap-1.5 z-10">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs font-bold transition-all ${
                                done ? "bg-gray-600 border-gray-600 text-white"
                                : active ? "bg-green-500 border-green-500 text-white"
                                : "bg-white border-gray-300 text-gray-400"
                              }`}>
                                {done ? <i className="fa-solid fa-check text-xs" /> : i + 1}
                              </div>
                              <span className={`text-xs font-semibold whitespace-nowrap ${
                                done ? "text-gray-600" : active ? "text-green-600" : "text-gray-400"
                              }`}>{step}</span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}

                  {/* Events table */}
                  {data.tracking_events && data.tracking_events.length > 0 && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b border-gray-100">
                            {["#", "Status", "Date", "Time", "Depot"].map((h) => (
                              <th key={h} className="text-left py-2 px-2 text-gray-400 font-semibold uppercase tracking-wider">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {data.tracking_events.map((ev) => (
                            <tr key={ev.seq} className="hover:bg-gray-50 transition-colors">
                              <td className="py-2 px-2 text-gray-400">{ev.seq}</td>
                              <td className="py-2 px-2 text-loadlink-navy font-medium">{ev.status}</td>
                              <td className="py-2 px-2 text-gray-500">{ev.date}</td>
                              <td className="py-2 px-2 text-gray-500">{ev.time}</td>
                              <td className="py-2 px-2 text-gray-500">{ev.depot}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {!data.tracking_number && !data.tracking_events?.length && (
                    <div className="flex flex-col items-center justify-center py-8 gap-3">
                      <i className="fa-solid fa-satellite-dish text-3xl text-gray-200" />
                      <p className="text-gray-400 text-sm">No parcel tracking data available</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Pickup Details + Map */}
                <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5">
                  <h2 className="text-xl font-bold text-loadlink-navy pb-2 border-b border-gray-100">
                    Pickup Details
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-start gap-4">
                      <i className="fa-solid fa-location-dot text-loadlink-navy text-2xl mt-1" />
                      <div>
                        <p className="text-sm text-loadlink-orange font-semibold mb-1">
                          Pickup
                        </p>
                        <p className="text-loadlink-navy font-bold text-base">
                          <i className="fa-solid fa-location-dot text-loadlink-orange mr-1 text-sm" />
                          {pickupFull}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <i className="fa-solid fa-truck text-loadlink-navy text-2xl mt-1" />
                      <div>
                        <p className="text-sm text-loadlink-orange font-semibold mb-1">
                          Dropoff
                        </p>
                        <p className="text-loadlink-navy font-bold text-base">
                          <i className="fa-solid fa-location-dot text-green-500 mr-1 text-sm" />
                          {dropoffFull}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Map */}
                  <div className="rounded-xl overflow-hidden border border-gray-100 w-full h-96 bg-gray-50">
                    {pickupFull !== "—" && dropoffFull !== "—" ? (
                      <iframe
                        src={`https://www.google.com/maps/embed/v1/directions?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&origin=${encodeURIComponent(pickupFull)}&destination=${encodeURIComponent(dropoffFull)}&mode=driving`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Route map"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                        <i className="fa-solid fa-map text-4xl text-gray-200" />
                        <p className="text-gray-400 text-sm">
                          Map not available
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5">
                  <div>
                    <h2 className="text-lg font-bold text-loadlink-navy pb-2 border-b border-gray-100 mb-3">
                      Contact Details
                    </h2>
                    {data.contact_name ||
                    data.company_name ||
                    data.contact_phone ||
                    data.contact_email ? (
                      <table className="w-full text-sm">
                        <tbody className="divide-y divide-gray-50">
                          {(
                            [
                              ["Contact Name", data.contact_name ?? "—"],
                              ["Company Name", data.company_name ?? "—"],
                              ["Contact Phone", data.contact_phone ?? "—"],
                              ["Contact Email", data.contact_email ?? "—"],
                            ] as [string, string][]
                          ).map(([label, value]) => (
                            <tr key={label}>
                              <td className="py-2 text-gray-400 pr-2 text-xs">
                                {label}:
                              </td>
                              <td className="py-2 font-medium text-loadlink-navy text-xs">
                                {value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div>
                        <p className="text-loadlink-orange text-xs mb-3">
                          (Please Login or Register to see Contact Details)
                        </p>
                        <table className="w-full text-sm">
                          <tbody className="divide-y divide-gray-50">
                            {[
                              "Contact Name",
                              "Company Name",
                              "Contact Phone",
                              "Contact Email",
                            ].map((label) => (
                              <tr key={label}>
                                <td className="py-2 text-gray-400 text-xs">
                                  {label}:
                                </td>
                                <td className="py-2" />
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="flex gap-3 mt-5">
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
                            className="flex-1 border border-loadlink-orange text-loadlink-orange text-sm font-semibold py-2.5 rounded-xl text-center hover:bg-loadlink-orange hover:text-white transition-colors"
                          >
                            Register
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="text-base font-bold text-loadlink-navy mb-1">
                      Like to Submit a Quote?
                    </h3>
                    <p className="text-loadlink-orange text-xs mb-4">
                      (Please Login or Register)
                    </p>
                    <a
                      href="https://parcelfreight.loadlink.com.au/my-parcel-freights"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-loadlink-orange text-white text-sm font-semibold py-3 rounded-xl text-center hover:bg-loadlink-orange/90 transition-colors"
                    >
                      View Full Listing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Empty state */}
          {!loading && !searched && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 bg-loadlink-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-truck-moving text-3xl text-loadlink-navy/30" />
              </div>
              <p className="text-gray-400 text-lg">
                Enter a tracking number above to get started.
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="bg-light-bg pb-10 px-[5%] md:px-[8%] text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-loadlink-navy transition-colors text-sm"
        >
          <i className="fa-solid fa-arrow-left" />
          Back to Home
        </Link>
      </div>

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
