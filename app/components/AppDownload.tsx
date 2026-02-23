"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "../hooks/useReveal";

const features = [
  {
    icon: "fa-mobile-screen",
    title: "Fully Responsive",
    desc: "Access the full Loadlink platform from any mobile browser",
  },
  {
    icon: "fa-location-crosshairs",
    title: "Track Anywhere",
    desc: "Monitor your shipments from your phone",
  },
  {
    icon: "fa-bolt",
    title: "Instant Quotes",
    desc: "Get freight quotes and book shipments on the go",
  },
];

export default function AppDownload() {
  const ref = useReveal();

  return (
    <section
      className="relative py-24 md:py-32 px-[5%] md:px-[8%] bg-gray-50 overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-loadlink-orange/5 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-loadlink-navy/5 rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Content */}
          <div className="flex-1 reveal-left">
            <div className="text-center lg:text-left mb-10">
              <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-3 block">
                On The Go
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-loadlink-navy mb-5 leading-tight">
                Ship from your phone,
                <br />
                Right now
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto lg:mx-0">
                No app needed. Loadlink is fully responsive — book, track and
                manage your freight directly from your mobile browser.
              </p>
            </div>

            <div className="space-y-5 mb-12">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-loadlink-orange/5 transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-loadlink-orange/10 flex items-center justify-center flex-shrink-0">
                    <i
                      className={`fa-solid ${f.icon} text-loadlink-orange text-base`}
                    ></i>
                  </div>
                  <div>
                    <strong className="text-loadlink-navy text-[15px] font-semibold block mb-0.5">
                      {f.title}
                    </strong>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="https://parcelfreight.loadlink.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-loadlink-orange text-white font-semibold rounded-full hover:bg-loadlink-orange/90 transition-all hover:scale-105 shadow-lg shadow-loadlink-orange/20"
              >
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                Open on Mobile
              </Link>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-1 flex justify-center reveal-right">
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 bg-loadlink-orange/10 rounded-full blur-3xl scale-90" />
              <div className="absolute inset-8 bg-loadlink-navy/5 rounded-full blur-2xl" />
              <Image
                src="/images/loadlink_app_screenshot_01.png"
                alt="LoadLink Mobile App"
                width={460}
                height={920}
                className="relative z-10 w-full max-w-[380px] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
