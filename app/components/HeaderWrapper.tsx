"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isGetStartedPage = pathname === "/get-started";
  const isHome = pathname === "/";

  return (
    <Header
      forceScrolled={isGetStartedPage}
      showTracking={isHome}
      ctaHref={
        isGetStartedPage
          ? "https://parcelfreight.loadlink.com.au/parcel-freight"
          : "/get-started"
      }
    />
  );
}
