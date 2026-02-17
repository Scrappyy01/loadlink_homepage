'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    icon: 'fa-solid fa-box',
    title: 'Book a Parcel',
    description: 'Instant shipping rates from top carriers. Compare, book, and track — all in one place.',
    cta: 'Start Shipping',
    href: 'https://parcelfreight.loadlink.com.au/parcel-freight',
    image: '/images/guy-box.webp',
    bgColor: 'bg-orange-50/70',
    borderColor: 'border-orange-200',
    hoverBorder: 'hover:border-orange-400',
    iconBg: 'bg-white',
    iconColor: 'text-loadlink-orange',
    titleColor: 'text-loadlink-orange',
    ctaColor: 'text-loadlink-orange',
    accentLine: 'from-loadlink-orange to-amber-400',
  },
  {
    icon: 'fa-solid fa-truck-moving',
    title: 'LoadLink Connect',
    description: 'List your freight and get competitive quotes from verified carriers across Australia.',
    cta: 'Get Free Quote',
    href: 'https://portal.loadlink.com.au/register/',
    image: '/images/Truck-2.jpg',
    bgColor: 'bg-blue-50/70',
    borderColor: 'border-blue-200',
    hoverBorder: 'hover:border-blue-400',
    iconBg: 'bg-white',
    iconColor: 'text-blue-600',
    titleColor: 'text-blue-700',
    ctaColor: 'text-blue-600',
    accentLine: 'from-blue-500 to-blue-400',
  },
  {
    icon: 'fa-solid fa-truck-fast',
    title: 'Carriers Loadboard',
    description: 'Find available freight near you. Access real-time listings and maximize return trips.',
    cta: 'View Loadboard',
    href: 'https://app.loadlink.com.au/listings/',
    image: '/images/Truck.png',
    bgColor: 'bg-emerald-50/70',
    borderColor: 'border-emerald-200',
    hoverBorder: 'hover:border-emerald-400',
    iconBg: 'bg-white',
    iconColor: 'text-emerald-600',
    titleColor: 'text-emerald-700',
    ctaColor: 'text-emerald-600',
    accentLine: 'from-emerald-500 to-teal-400',
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-[5%] md:px-[8%] relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
          <div>
            <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-loadlink-navy leading-tight">
              Three ways to ship.<br />
              <span className="text-gray-500">One platform.</span>
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-md md:text-right">
            Whether it&apos;s a parcel, pallet, or full load — choose the service that fits.
          </p>
        </div>

        <div className="space-y-4 stagger-children">
          {services.map((service) => (
            <Link 
              key={service.title}
              href={service.href}
              className={`group relative block rounded-2xl border-2 ${service.borderColor} ${service.hoverBorder} ${service.bgColor} hover:shadow-lg transition-all duration-500 overflow-hidden`}
            >
              <div className="relative z-10 flex items-center gap-6 md:gap-10 p-6 md:p-6">
                {/* Image with fade */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-sm">
                  <Image 
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                  {/* Right fade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80" />
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center transition-colors duration-500 flex-shrink-0 shadow-sm`}>
                  <i className={`${service.icon} text-xl ${service.iconColor} transition-colors duration-500`}></i>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className={`text-xl md:text-2xl font-bold ${service.titleColor} mb-1 transition-colors duration-500`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed hidden sm:block">
                    {service.description}
                  </p>
                </div>

                {/* CTA arrow */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`text-sm font-semibold ${service.ctaColor} transition-colors duration-500 hidden lg:block`}>
                    {service.cta}
                  </span>
                  <div className={`w-10 h-10 rounded-full border-2 ${service.borderColor} ${service.hoverBorder} bg-white flex items-center justify-center transition-all duration-500`}>
                    <svg className={`w-4 h-4 ${service.ctaColor} transition-all duration-500 group-hover:translate-x-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${service.accentLine} transition-all duration-700`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
