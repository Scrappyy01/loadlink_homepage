'use client';

import Link from 'next/link';
import { useReveal } from '../hooks/useReveal';

export default function SmartLabels() {
  const ref = useReveal();

  return (
    <section className="py-24 md:py-32 px-[5%] md:px-[8%] bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto reveal">
        <div className="relative rounded-3xl overflow-hidden bg-loadlink-navy p-10 md:p-16">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          {/* Glow orbs */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-loadlink-orange/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Icon side */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                <i className="fa-solid fa-map-location-dot text-5xl md:text-6xl text-loadlink-orange"></i>
              </div>
            </div>

            {/* Content side */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-3 block">
                New Feature
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Smart Labels: Track in Real-Time
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
                Experience absolute precision with our <strong className="text-white">Smart Labels</strong>. Locate and monitor your shipments with live updates every step of the way.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-loadlink-navy transition-all duration-300 group"
              >
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
