import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Partners | LoadLink',
  description: 'LoadLink works with Australia\'s leading carriers and ecommerce platforms — including FedEx, Couriers Please, Direct Couriers, Hunter Express, Shopify, and WooCommerce.',
};

const deliveryPartners = [
  {
    src: '/images/fedex-express-6.svg',
    alt: 'FedEx',
    name: 'FedEx',
    category: 'Express & International Delivery',
    description:
      'FedEx is one of the world\'s most recognised logistics companies, delivering to over 220 countries and territories. Through LoadLink\'s integration with FedEx, customers gain access to competitive express and international shipping rates, reliable transit times, and world-class tracking technology — all managed from a single dashboard.',
    highlight: 'Express domestic & international delivery',
    color: 'border-purple-500',
    badge: 'bg-purple-50 text-purple-700',
  },
  {
    src: '/images/Couriers Please.png',
    alt: 'Couriers Please',
    name: 'Couriers Please',
    category: 'Domestic Parcel Delivery',
    description:
      'Couriers Please is one of Australia\'s most trusted domestic courier networks, offering affordable parcel delivery to residential and commercial addresses nationwide. Their wide reach across metropolitan and regional Australia makes them a popular choice for ecommerce businesses and individuals alike. Via LoadLink, compare Couriers Please rates instantly and book with ease.',
    highlight: 'Affordable Australia-wide parcel delivery',
    color: 'border-orange-500',
    badge: 'bg-orange-50 text-orange-700',
  },
  {
    src: '/images/Direct Couriers Logo.png',
    alt: 'Direct Couriers',
    name: 'Direct Couriers',
    category: 'Same-Day & Specialised Freight',
    description:
      'Direct Couriers specialises in same-day, overnight, and specialised freight solutions for businesses that need reliable, time-sensitive deliveries. With a strong presence across major Australian cities, Direct Couriers brings speed and flexibility to the LoadLink marketplace — ideal for urgent shipments and business-critical freight that can\'t afford delays.',
    highlight: 'Same-day and time-critical deliveries',
    color: 'border-blue-500',
    badge: 'bg-blue-50 text-blue-700',
  },
  {
    src: '/images/hunterexpress.svg',
    alt: 'Hunter Express',
    name: 'Hunter Express',
    category: 'Road Freight & General Cargo',
    description:
      'Hunter Express is a well-established Australian road freight carrier with extensive coverage across the eastern seaboard and beyond. Known for handling general cargo, palletised freight, and bulkier consignments, Hunter Express brings competitive road freight pricing to LoadLink users — making it easy to move larger loads without the complexity of traditional freight booking.',
    highlight: 'Road freight and bulk general cargo',
    color: 'border-yellow-500',
    badge: 'bg-yellow-50 text-yellow-700',
  },
];

const ecommercePartners = [
  {
    src: '/images/shopify.png',
    alt: 'Shopify',
    name: 'Shopify',
    category: 'Ecommerce Platform Integration',
    description:
      'Shopify is the world\'s leading ecommerce platform, powering millions of online stores globally. LoadLink\'s Shopify integration lets store owners display real-time shipping rates at checkout, automatically generate shipping labels, and manage fulfilment — all without leaving their workflow. It\'s the simplest way to bring professional-grade logistics to your Shopify store.',
    highlight: 'Real-time rates at checkout & label printing',
    color: 'border-green-500',
    badge: 'bg-green-50 text-green-700',
    integrationHref: '/intergrations/shopify',
  },
  {
    src: '/images/woocommerce).png',
    alt: 'WooCommerce',
    name: 'WooCommerce',
    category: 'WordPress Ecommerce Integration',
    description:
      'WooCommerce is the most popular ecommerce plugin for WordPress, used by millions of merchants worldwide. LoadLink\'s WooCommerce plugin connects your store directly to our carrier network, offering live shipping quotes, automated freight booking, and manifest management — all from within your existing WordPress admin panel.',
    highlight: 'Live shipping quotes & automated booking',
    color: 'border-indigo-500',
    badge: 'bg-indigo-50 text-indigo-700',
    integrationHref: '/intergrations/woocommerce',
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-[5%] md:px-[8%] bg-loadlink-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-loadlink-orange/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Partners
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            The network behind every delivery
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            LoadLink works with Australia&apos;s most trusted carriers and leading ecommerce platforms to give you access to the best delivery options, all in one place.
          </p>
        </div>
      </section>

      {/* Delivery Partner Logos Strip */}
      <section className="py-10 px-[5%] md:px-[8%] bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-10">
          {[...deliveryPartners, ...ecommercePartners].map((p) => (
            <div key={p.alt} className="relative h-10 w-28 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <Image src={p.src} alt={p.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Partners */}
      <section className="py-24 px-[5%] md:px-[8%] bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-loadlink-orange text-sm font-bold tracking-widest uppercase">Carrier Partners</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy">Trusted delivery carriers</h2>
            <p className="text-gray-500 mt-3 max-w-2xl">
              Our carrier network spans express parcels, domestic freight, same-day delivery, and road freight — giving you the right option for every job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {deliveryPartners.map((partner) => (
              <div
                key={partner.name}
                className={`bg-white rounded-2xl border-l-4 ${partner.color} border border-gray-200 p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="relative h-12 w-36 flex-shrink-0">
                    <Image src={partner.src} alt={partner.alt} fill className="object-contain object-left" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${partner.badge} flex-shrink-0`}>
                    {partner.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-loadlink-navy mb-3">{partner.name}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-4">{partner.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-loadlink-navy">
                  <svg className="w-4 h-4 text-loadlink-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {partner.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecommerce Partners */}
      <section className="py-24 px-[5%] md:px-[8%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-loadlink-orange text-sm font-bold tracking-widest uppercase">Platform Partners</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy">Ecommerce integrations</h2>
            <p className="text-gray-500 mt-3 max-w-2xl">
              Connect LoadLink directly to your online store. Display live shipping rates, automate fulfilment, and manage everything from your existing platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ecommercePartners.map((partner) => (
              <div
                key={partner.name}
                className={`bg-gray-50 rounded-2xl border-l-4 ${partner.color} border border-gray-200 p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="relative h-12 w-36 flex-shrink-0">
                    <Image src={partner.src} alt={partner.alt} fill className="object-contain object-left" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${partner.badge} flex-shrink-0`}>
                    {partner.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-loadlink-navy mb-3">{partner.name}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-5">{partner.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-loadlink-navy">
                    <svg className="w-4 h-4 text-loadlink-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {partner.highlight}
                  </div>
                  {partner.integrationHref && (
                    <Link
                      href={partner.integrationHref}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-loadlink-orange hover:text-loadlink-navy transition-colors"
                    >
                      View Guide
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-24 px-[5%] md:px-[8%]" style={{ background: 'linear-gradient(180deg, #0B1E3F 0%, #132B55 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
            Work With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Interested in becoming a LoadLink partner?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Whether you&apos;re a carrier looking to grow your customer base or a platform ready to offer smarter shipping options, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-loadlink-navy transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href="/abous-us"
              className="border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              Learn About LoadLink
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}