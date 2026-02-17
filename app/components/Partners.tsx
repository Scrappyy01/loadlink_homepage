'use client';

import Image from 'next/image';
import { useReveal } from '../hooks/useReveal';

const partners = [
  { src: '/images/fedex-express-6.svg', alt: 'FedEx' },
  { src: '/images/Couriers Please.png', alt: 'Couriers Please' },
  { src: '/images/Direct Couriers Logo.png', alt: 'Direct Couriers' },
  { src: '/images/hunterexpress.svg', alt: 'Hunter Express' },
  { src: '/images/shopify.png', alt: 'Shopify' },
  { src: '/images/woocommerce).png', alt: 'WooCommerce' },

];

export default function Partners() {
  const ref = useReveal();
  const doubled = [...partners, ...partners];

  return (
    <section className="py-20 bg-gray-50/50 overflow-hidden" ref={ref}>
      <div className="text-center mb-12 px-[5%] reveal">
        <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-3 block">
          Trusted Partners
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy">
          Integrated with industry leaders
        </h2>
      </div>
      
      {/* Infinite Marquee */}
      <div className="relative reveal-scale">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-gray-50/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-gray-50/50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="marquee-track flex items-center gap-12 md:gap-16 w-max py-8">
          {doubled.map((partner, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[140px] md:w-[180px] h-[80px] flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
            >
              <Image 
                src={partner.src} 
                alt={partner.alt}
                width={160}
                height={80}
                className="object-contain max-h-[60px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
