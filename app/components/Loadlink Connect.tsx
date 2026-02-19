'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function LoadlinkConnect() {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementMiddle = elementTop + rect.height / 2;
        const windowMiddle = window.scrollY + window.innerHeight / 2;
        const offset = (windowMiddle - elementMiddle) * 0.25;
        setOffsetY(offset);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-24 md:py-32 px-[5%] md:px-[8%] bg-white">
      <div className="max-w-6xl mx-auto reveal">
        <div className="relative rounded-3xl overflow-hidden min-h-[450px]">
          {/* Background image with parallax */}
          <div 
            className="absolute inset-[-60px] will-change-transform rounded-3xl overflow-hidden"
            style={{ transform: `translateY(${offsetY}px)` }}
          >
            <Image 
              src="/images/loadlink_connect.webp" 
              alt="Loadlink Connect Background" 
              fill
              className="object-cover"
            />
          </div>
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-loadlink-navy/90 via-loadlink-navy/70 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-full min-h-[450px] p-10 md:p-16 max-w-2xl">
            <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
              Freight Marketplace
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Loadlink Connect
            </h3>
            <p className="text-gray-300 text-lg mb-3 leading-relaxed">
              Your one stop for getting your freight hauled or finding freight to haul.
            </p>
            <p className="text-loadlink-orange text-2xl font-bold mb-10">
              1.5+ million km of transport requested
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#" 
                className="inline-flex items-center gap-3 bg-loadlink-orange text-white py-3.5 px-8 rounded-full font-semibold hover:bg-white hover:text-loadlink-navy transition-all duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 640 512">
                  <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
                List freight
              </Link>
              <Link 
                href="#" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white py-3.5 px-8 rounded-full font-semibold border border-white/20 hover:bg-white hover:text-loadlink-navy transition-all duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"/>
                </svg>
                Find freight
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
