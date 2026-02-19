'use client';

import Image from "next/image";
import Link from "next/link";
import { useReveal } from '../hooks/useReveal';

const integrations = [
  { src: "/images/shopify-2.svg", alt: "Shopify", comingSoon: false, href: "/intergrations/shopify", description: "Connect your Shopify store for automated shipping.", featured: true },
  { src: "/images/woocommerce.webp", alt: "WooCommerce", comingSoon: false, href: "/intergrations/woocommerce", description: "Seamless WooCommerce plugin with live rates.", featured: true },
  { src: "/images/ebay.svg", alt: "Ebay", comingSoon: true, description: "eBay marketplace integration coming soon." },
  { src: "/images/ShipStation_Logo_0.svg", alt: "Shipstation", comingSoon: true, description: "ShipStation connection in development." },
  { src: "/images/Shippo.png", alt: "Shippo", comingSoon: true, description: "Shippo integration on the roadmap." },
  { src: "/images/Maropost.png", alt: "Maropost", comingSoon: true, description: "Maropost/Neto support coming soon." },
];

export default function ConnectEcommerce() {
  const ref = useReveal();

  return (
    <section className="py-24 md:py-32 px-[5%] md:px-[8%] bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-3 block">
            Integrations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-loadlink-navy mb-5">
            Connect your store
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Free integrations with leading eCommerce platforms. Set up in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {integrations.map((item, index) => {
            const Card = (
              <div className={`group relative bg-white rounded-2xl p-6 border transition-all duration-500 flex flex-col items-center text-center h-full ${
                item.comingSoon 
                  ? 'border-gray-200 opacity-60' 
                  : 'border-gray-200 hover:border-loadlink-orange/30 hover:shadow-xl hover:-translate-y-1 cursor-pointer'
              }`}>
                {/* Logo */}
                <div className="relative w-20 h-20 mb-5 flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={`object-contain scale-180 transition-all duration-500 ${item.comingSoon ? 'grayscale' : 'group-hover:scale-200'}`}
                  />
                </div>

                <h3 className="text-lg font-bold text-loadlink-navy mb-2">{item.alt}</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{item.description}</p>

                {item.comingSoon ? (
                  <span className="mt-auto text-xs font-semibold text-gray-400 uppercase tracking-wider bg-gray-100 px-4 py-2 rounded-full">
                    Coming Soon
                  </span>
                ) : (
                  <span className="mt-auto inline-flex items-center gap-2 text-loadlink-orange font-semibold text-sm group-hover:gap-3 transition-all">
                    Connect
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                )}

                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Live
                  </div>
                )}
              </div>
            );

            return item.comingSoon ? (
              <div key={index}>{Card}</div>
            ) : (
              <Link key={index} href={item.href!} className="block">
                {Card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
