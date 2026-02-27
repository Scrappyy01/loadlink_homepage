"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const GET_STARTED_EXTERNAL =
  "https://parcelfreight.loadlink.com.au/parcel-freight";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const onGetStarted = pathname === "/get-started";
  return (
    <Header
      forceScrolled={onGetStarted}
      ctaHref={onGetStarted ? GET_STARTED_EXTERNAL : "/get-started"}
      ctaTarget={onGetStarted ? "_blank" : "_self"}
    />
  );
}
