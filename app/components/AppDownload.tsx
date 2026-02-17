'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useReveal } from '../hooks/useReveal';

const features = [
  { icon: 'fa-location-crosshairs', title: 'Real-Time Accuracy', desc: 'Instant tracking via Smart Labels' },
  { icon: 'fa-shield-halved', title: 'Total Control', desc: 'Manage everything from your phone' },
  { icon: 'fa-bell', title: 'Push Notifications', desc: 'Stay updated on every shipment' },
];

export default function AppDownload() {
  const ref = useReveal();

  return (
    <section className="py-24 md:py-32 px-[5%] md:px-[8%] bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Content */}
          <div className="flex-1 reveal-left">
            <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-3 block">
              Mobile App
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-loadlink-navy mb-6 leading-tight">
              Ship on the go
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-md leading-relaxed">
              Book, track, and manage shipments from anywhere with the Loadlink app.
            </p>
            
            <div className="space-y-6 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-loadlink-orange/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fa-solid ${f.icon} text-loadlink-orange`}></i>
                  </div>
                  <div>
                    <strong className="text-loadlink-navy text-[15px] block">{f.title}</strong>
                    <p className="text-gray-500 text-sm mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <Link href="#" className="transition-transform hover:scale-105">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play" 
                  width={150}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="#" className="transition-transform hover:scale-105">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="App Store" 
                  width={150}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>
          
          {/* Phone mockup */}
          <div className="flex-1 flex justify-center reveal-right">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-loadlink-orange/10 rounded-full blur-3xl scale-75" />
              <Image 
                src="/images/loadlink_app_screenshot.png" 
                alt="LoadLink Mobile App" 
                width={400}
                height={800}
                className="relative z-10 w-full max-w-[340px] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
