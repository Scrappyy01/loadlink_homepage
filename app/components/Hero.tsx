'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const heroServices = [
  {
    icon: 'fa-solid fa-box',
    title: 'Book a Parcel',
    href: 'https://parcelfreight.loadlink.com.au/parcel-freight',
    image: '/images/guy-box.webp',
    bgColor: 'bg-orange-50/90',
    borderColor: 'border-orange-200',
    iconColor: 'text-loadlink-orange',
  },
  {
    icon: 'fa-solid fa-truck-moving',
    title: 'LoadLink Connect',
    href: 'https://portal.loadlink.com.au/register/',
    image: '/images/Truck-2.jpg',
    bgColor: 'bg-blue-50/90',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    icon: 'fa-solid fa-truck-fast',
    title: 'Carriers Loadboard',
    href: 'https://app.loadlink.com.au/listings/',
    image: '/images/Truck.png',
    bgColor: 'bg-emerald-50/90',
    borderColor: 'border-emerald-200',
    iconColor: 'text-emerald-600',
  },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/images/Videos/Fortis Stockvideo3.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-loadlink-navy/90 via-loadlink-navy/70 to-loadlink-navy/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-loadlink-navy/60 via-transparent to-transparent"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Content */}
      <div className="relative z-10 w-full px-[5%] md:px-[8%] py-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: Main Content */}
          <div className="flex-1 max-w-2xl">
         

          {/* Headline */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Ship smarter.
            <br />
            <span className="gradient-text">Save more.</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            From parcels to heavy freight — connect with the most competitive shipping rates 
            across Australia. One platform, endless possibilities.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link 
              href="#services" 
              className="group bg-loadlink-orange text-white py-4 px-8 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-loadlink-orange/30 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3"
            >
              Get Started
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="#" 
              className="group bg-white/10 backdrop-blur-md border border-white/30 text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className={`flex flex-wrap gap-8 md:gap-16 transition-all duration-700 delay-[900ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { value: '1.5M+', label: 'km transported' },
              { value: '50+', label: 'Carrier partners' },
              { value: '99.2%', label: 'On-time delivery' },
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          </div>

          {/* Right: Service Cards (Desktop Only) */}
          <div className={`hidden lg:flex flex-col gap-4 w-full max-w-md transition-all duration-700 delay-[900ms] ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {heroServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className={`group relative backdrop-blur-xl ${service.bgColor} border-2 ${service.borderColor} rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-x-2`}
              >
                <div className="flex items-center gap-4">
                  {/* Image */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-sm">
                    <Image 
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg font-bold ${service.iconColor} mb-1`}>
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
                      Learn More
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 delay-[1100ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
