'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-white/90 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.08)] border-b border-gray-200/50' 
          : 'py-5 bg-transparent'
      }`}>
        <div className="flex justify-between items-center px-[5%] md:px-[8%]">
          <Link href="/" className="relative z-10 hover:opacity-80 transition-opacity">
            <Image 
              src={scrolled ? "/images/Icons/Loadlink-Logo.svg" : "/images/Icons/logo-loadlink-white.svg"}
              alt="LoadLink Logo" 
              width={140}
              height={35}
              className={`transition-all duration-300 ${scrolled ? 'h-[32px]' : 'h-[38px]'} w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { label: 'Ship & Track', href: '#' },
              { label: 'Solutions', href: '#' },
              { label: 'Integrations', href: '#' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link 
                key={item.label}
                href={item.href} 
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg hover:bg-loadlink-orange/10 ${
                  scrolled ? 'text-loadlink-navy' : 'text-white'
                } hover:text-loadlink-orange`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="#" 
              className="ml-4 bg-loadlink-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-loadlink-orange/90 hover:shadow-lg hover:shadow-loadlink-orange/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              scrolled ? 'text-loadlink-navy' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-[320px] bg-white z-[999] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="flex flex-col p-8 pt-24 gap-1">
          {[
            { label: 'Ship & Track', href: '#' },
            { label: 'Solutions', href: '#' },
            { label: 'Integrations', href: '#' },
            { label: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link 
              key={item.label}
              href={item.href} 
              className="text-loadlink-navy font-medium text-lg py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="#" 
            className="mt-6 bg-loadlink-orange text-white px-6 py-4 rounded-xl font-semibold hover:bg-loadlink-orange/90 transition-all text-center text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
