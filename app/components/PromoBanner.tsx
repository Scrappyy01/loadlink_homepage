"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "../hooks/useReveal";

export default function PromoBanner() {
  const ref = useReveal();

  return (
    <section className="py-24 md:py-32 px-[5%] md:px-[8%] bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto reveal">
        <div className="relative bg-gradient-to-br from-[#fef3e8] to-[#fde8d3] rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Content */}
            <div className="flex-1 p-10 md:p-16 z-10">
              <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-3 block">
                Limited Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-loadlink-navy leading-tight mb-4">
                Up to 47% off*
                <br />
                for shipping
              </h2>
              <p className="text-2xl text-loadlink-navy/70 mb-8">
                You Bet! It&apos;s called{" "}
                <strong className="text-loadlink-navy">Ship & Save.</strong>
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-loadlink-navy transition-all duration-300 group"
              >
                Read more
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <p className="text-xs text-gray-500 mt-6">
                *Based on the National Carriers retails rates.
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-end items-end self-end">
              <Image
                src="/images/men_laodlink_01.png"
                alt="Loadlink team member"
                width={560}
                height={580}
                className="max-h-[580px] block drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
