import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Guarantee | LoadLink',
  description: "LoadLink's promise to shippers and carriers across Australia — a modern marketplace built to make moving anything simple, safe, and cost-effective.",
};

const pillars = [
  {
    icon: 'fa-solid fa-store',
    title: 'Build Your Logistics Business',
    description:
      "Whether you're a solo operator or a growing fleet, LoadLink gives you the tools to reach more customers, win more jobs, and grow your delivery business to new heights.",
  },
  {
    icon: 'fa-solid fa-box-open',
    title: 'Move Your Load or Parcel With Ease',
    description:
      "From a single parcel to a full truckload, listing what you need moved takes minutes. Get competitive quotes from trusted providers and compare pricing in one place.",
  },
  {
    icon: 'fa-solid fa-gauge-high',
    title: 'Manage Everything Online',
    description:
      'Track your shipments, review quotes, manage bookings, and stay on top of every delivery — all from one clean, simple dashboard.',
  },
];

const promises = [
  { icon: 'fa-solid fa-shop', label: 'Modern Marketplace' },
  { icon: 'fa-solid fa-lock', label: 'Secure Online Payments' },
  { icon: 'fa-solid fa-bell', label: 'Email Notifications' },
  { icon: 'fa-solid fa-circle-check', label: 'Verified Providers' },
  { icon: 'fa-solid fa-headset', label: '24/7 Support' },
  { icon: 'fa-solid fa-chart-line', label: 'Live Dashboard' },
  { icon: 'fa-solid fa-map-location-dot', label: 'Australia Wide Coverage' },
  { icon: 'fa-solid fa-handshake', label: 'Deal Directly With Your Provider' },
  { icon: 'fa-solid fa-truck-ramp-box', label: 'Wide Range of Delivery Options' },
  { icon: 'fa-solid fa-infinity', label: 'No Shipment Too Small or Large' },
];

const stats = [
  { value: '2022', label: 'Est. in Australia' },
  { value: '100%', label: 'Digital platform' },
  { value: 'Free', label: 'To list a shipment' },
  { value: '24/7', label: 'Customer support' },
];

export default function OurGuaranteePage() {
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
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-loadlink-orange/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Guarantee
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Moving Anything, Made Simple
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              LoadLink&apos;s marketplace makes moving loads across Australia easier than ever. Whether it&apos;s a single parcel, a pallet of goods, or a heavy haulage job, we connect you with the right delivery solution at the best price — every time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://portal.loadlink.com.au/register/"
                className="bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-loadlink-navy transition-colors duration-300"
              >
                Get Started Free
              </Link>
              <Link
                href="/aboutus#general"
                className="border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Read Our FAQs
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center"
              >
                <div className="text-4xl font-bold text-loadlink-orange mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="py-20 px-[5%] md:px-[8%] bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy mb-6">
            A platform built for everyone who needs to move something
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our goal is to ensure that anyone across Australia — from ecommerce businesses and everyday individuals to logistics professionals — has access to the best delivery options available. Whether you&apos;re dispatching parcels daily through your online store, or arranging a one-off heavy haulage job, LoadLink&apos;s modern platform handles it all, with direct communication, transparent pricing, and verified providers every step of the way.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-20 px-[5%] md:px-[8%] bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-loadlink-orange/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-loadlink-orange/10 flex items-center justify-center mb-6">
                  <i className={`${pillar.icon} text-2xl text-loadlink-orange`}></i>
                </div>
                <h3 className="text-xl font-bold text-loadlink-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + copy split */}
      <section className="py-24 px-[5%] md:px-[8%] bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]">
            <Image
              src="/images/guy-box.webp"
              alt="Person with parcel ready for delivery"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-loadlink-navy/30 to-transparent" />
          </div>
          <div>
            <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
              From Parcels to Pallets
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy mb-6 leading-tight">
              One platform for every type of shipment
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              LoadLink removes the guesswork from getting something delivered. Ecommerce store owners can connect their platforms and print labels in seconds. Businesses moving freight can post a load and receive competitive quotes from vetted transport operators. Everyone gets a fair price and a reliable service.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              No matter the size — a small parcel, a pallet of stock, a car, or a road train — LoadLink has a delivery solution for you, with full transparency from quote to drop-off.
            </p>
            <Link
              href="https://portal.loadlink.com.au/register/"
              className="inline-flex items-center gap-2 bg-loadlink-navy text-white px-8 py-3.5 rounded-full font-semibold hover:bg-loadlink-orange transition-colors duration-300"
            >
              Start for Free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Image + copy split (reversed) */}
      <section className="py-24 px-[5%] md:px-[8%] bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
              For Carriers &amp; Operators
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy mb-6 leading-tight">
              Grow your delivery business with real opportunities
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              LoadLink gives transport operators and delivery businesses direct access to a steady stream of genuine jobs — from parcel runs to full heavy haulage. No middlemen, no guessing. Communicate directly with customers, set your own rates, and build your reputation through our verified provider program.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you run a courier service, a fleet of semi-trailers, or anything in between, LoadLink is your digital home base for finding and managing new work across Australia.
            </p>
            <Link
              href="https://portal.loadlink.com.au/register/"
              className="inline-flex items-center gap-2 bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-loadlink-navy transition-colors duration-300"
            >
              Join as a Carrier
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] order-1 lg:order-2">
            <Image
              src="/images/Truck-2.jpg"
              alt="Truck on the road representing carrier network"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-loadlink-navy/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* The LoadLink Promise */}
      <section className="py-24 px-[5%] md:px-[8%] relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B1E3F 0%, #132B55 100%)' }}>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The LoadLink Promise
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We built LoadLink to give everyone — from first-time senders to high-volume businesses — a platform they can trust. Here&apos;s what you can count on every time you use LoadLink.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {promises.map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-loadlink-orange/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-loadlink-orange/15 flex items-center justify-center mx-auto mb-3">
                  <i className={`${item.icon} text-xl text-loadlink-orange`}></i>
                </div>
                <p className="text-white text-sm font-semibold leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecommerce integration callout */}
      <section className="py-24 px-[5%] md:px-[8%] bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[380px]">
            <Image
              src="/images/ecommerce_pc.png"
              alt="Ecommerce platform on laptop screen"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-loadlink-navy/20 to-transparent" />
          </div>
          <div>
            <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
              Ecommerce Ready
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy mb-6 leading-tight">
              Plug LoadLink into your online store
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              Running a Shopify or WooCommerce store? LoadLink connects directly to your ecommerce platform so you can offer your customers competitive, real-time shipping rates at checkout — without the manual quoting.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Print labels, track packages, and manage all your orders from one place. We also integrate with major couriers like FedEx and Couriers Please, so you always have access to the best available rate for every order.
            </p>
            <Link
              href="/#connect-ecommerce"
              className="inline-flex items-center gap-2 bg-loadlink-navy text-white px-8 py-3.5 rounded-full font-semibold hover:bg-loadlink-orange transition-colors duration-300"
            >
              See Integrations
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-[5%] md:px-[8%] bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy mb-5">
            Ready to experience the LoadLink difference?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Join thousands of businesses and individuals across Australia who trust LoadLink to move what matters most.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://portal.loadlink.com.au/register/"
              className="bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-loadlink-navy transition-colors duration-300"
            >
              Create Free Account
            </Link>
            <Link
              href="/contact"
              className="bg-white border border-gray-200 text-loadlink-navy px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
