"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isGetStartedPage = pathname === "/get-started";

  return (
    <Header
      forceScrolled={isGetStartedPage}
      ctaHref={
        isGetStartedPage
          ? "https://parcelfreight.loadlink.com.au/parcel-freight"
          : "/get-started"
      }
    />
  );
}
