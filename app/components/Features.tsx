'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useReveal } from '../hooks/useReveal';

const features = [
  {
    icon: 'fa-solid fa-bolt',
    title: 'Instant Quotes',
    description: 'Get real-time pricing from multiple carriers in seconds. Compare rates, delivery times, and service options all in one place.',
    image: '/images/guy-box.webp',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Secure & Insured',
    description: 'Comprehensive insurance coverage and secure handling ensure peace of mind for every delivery, every time.',
    image: '/images/benefit 2.png',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Track Everything',
    description: 'Real-time tracking and delivery notifications keep you informed. Monitor shipments from pickup to delivery with live updates.',
    image: '/images/parcel-track.jpg',
  },
  {
    icon: 'fa-solid fa-headset',
    title: '24/7 Support',
    description: 'Expert help whenever you need it. Our dedicated support team is available around the clock for any questions.',
    image: '/images/benefit 1.png',
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Easy Integration',
    description: 'Connect your ecommerce platform seamlessly. Simple API integration and pre-built plugins make setup quick.',
    image: '/images/benefit 2.png',
  },
];

export default function Features() {
  const ref = useReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      changeFeature((activeIndex + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const changeFeature = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 250);
  };

  const current = features[activeIndex];

  return (
    <section className="py-24 md:py-32 px-[5%] md:px-[8%] bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-3 block">
            Why LoadLink
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-loadlink-navy">
            Built for modern logistics
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center reveal">
          {/* Left: Feature Selector */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <button
                key={feature.title}
                onClick={() => changeFeature(index)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-500 group ${
                  index === activeIndex
                    ? 'bg-white shadow-xl border border-gray-200'
                    : 'hover:bg-white/50 border border-transparent'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${
                    index === activeIndex ? 'bg-loadlink-orange' : 'bg-gray-100 group-hover:bg-gray-200'
                  }`}>
                    <i className={`${feature.icon} text-lg ${index === activeIndex ? 'text-white' : 'text-gray-500'}`}></i>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                      index === activeIndex ? 'text-loadlink-navy' : 'text-gray-600'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-all duration-500 overflow-hidden ${
                      index === activeIndex ? 'text-gray-500 max-h-24 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
                {/* Progress bar */}
                {index === activeIndex && (
                  <div className="mt-4 ml-16 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-loadlink-orange rounded-full animate-[progress_5s_linear]" 
                      style={{ animation: 'progress 5s linear' }}
                      key={activeIndex}
                    ></div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Right: Feature Image */}
          <div className={`relative transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-[0.97]' : 'opacity-100 scale-100'}`}>
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-loadlink-navy/40 via-transparent to-transparent"></div>
              
              {/* Floating label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl px-5 py-3">
                  <span className="text-white text-sm font-medium">{current.title}</span>
                </div>
              </div>
            </div>
            
            {/* Feature counter */}
            <div className="absolute -bottom-4 right-8 bg-loadlink-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              {activeIndex + 1}/{features.length}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
