'use client';

import Image from "next/image";
import Link from "next/link";
import { useReveal } from '../hooks/useReveal';

const features = [
  {
    title: "Smarter Shipping",
    description:
      "Lower costs by up to 47% and increase efficiency through smart, data-backed decisions and seamless multi-carrier integration.",
    image: "/images/benefit 1.png",
    span: "",
    height: "h-[340px]",
  },
  {
    title: "Consistant Everytime",
    description:
      "Build lasting customer loyalty with real-time tracking, tailored communication, and proactive notifications.",
    image: "/images/guyparcel.jpg",
    span: "",
    height: "h-[340px]",
  },
  {
    title: "Drive Sustainable Growth",
    description:
      "Grow your online sales and reach new markets with intelligent shipping and optimised ecommerce integration.",
    image: "/images/benefit 1.png",
    span: "",
    height: "h-[340px]",
  },
];

export default function BenefitCards() {
  const ref = useReveal();

  return (
    <section className="py-24 md:py-32 px-[5%] md:px-[8%] bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-3 block">
            Benefits
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-loadlink-navy mb-5">
            Your competitive advantage
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything you need to optimise your shipping operations and delight customers.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-children">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${feature.span} ${feature.height}`}
            >
              {/* Background Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-loadlink-navy/90 via-loadlink-navy/30 to-transparent transition-all duration-500 group-hover:from-loadlink-navy/95"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-transform duration-500 group-hover:-translate-y-2">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100">
                  {feature.description}
                </p>
                <Link 
                  href="#"
                  className="inline-flex items-center gap-2 text-loadlink-orange text-sm font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
