import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Your Shipment",
  description:
    "Track your parcel or freight shipment in real-time with LoadLink. Enter your tracking number to get live updates on your delivery status.",
  alternates: {
    canonical: "/tracking",
  },
  openGraph: {
    title: "Track Your Shipment | LoadLink Australia",
    description:
      "Real-time tracking for your LoadLink parcel and freight shipments.",
    url: "https://www.loadlink.com.au/tracking",
  },
};

export default function TrackingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
