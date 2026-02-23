import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Your Competitive Advantage',
  description:
    'Discover how LoadLink helps businesses ship smarter, deliver consistently, and drive sustainable growth — with lower costs, real-time tracking, and seamless ecommerce integration.',
  alternates: {
    canonical: '/advantages',
  },
  openGraph: {
    title: 'Your Competitive Advantage | LoadLink Australia',
    description:
      'Ship smarter, deliver consistently, and drive sustainable growth with LoadLink.',
    url: 'https://www.loadlink.com.au/advantages',
  },
};

const advantages = [
  {
    id: 'smarter-shipping',
    label: 'Smarter Shipping',
    headline: 'Cut shipping costs by up to 47% with data-backed decisions',
    image: '/images/guy-box.webp',
    imageAlt: 'Person preparing parcels for shipment with LoadLink',
    color: 'border-loadlink-orange',
    badge: 'bg-orange-50 text-loadlink-orange',
    icon: 'fa-solid fa-bolt',
    intro:
      'Shipping costs are one of the biggest variables in running an ecommerce or logistics business. LoadLink gives you the tools to take control — comparing rates across multiple carriers in real time, so you always pay the right price for every job.',
    points: [
      {
        title: 'Multi-carrier rate comparison',
        body: 'Stop settling for a single carrier\'s pricing. LoadLink pulls live rates from our entire partner network — FedEx, Couriers Please, Hunter Express, Direct Couriers, and more — so you can compare and choose the best option for every shipment, every time.',
      },
      {
        title: 'Smart routing & carrier matching',
        body: 'Our platform analyses your shipment\'s size, weight, destination, and urgency to surface the most cost-effective carrier options. No more manually comparing quotes or navigating multiple carrier portals.',
      },
      {
        title: 'Volume pricing without the volume',
        body: 'Because LoadLink aggregates shipments across our entire customer base, you benefit from competitive rates that would normally only be available to high-volume shippers — even if you\'re just getting started.',
      },
      {
        title: 'Streamlined booking in minutes',
        body: 'Whether you\'re booking a single parcel or managing daily fulfilment runs, LoadLink makes the end-to-end process fast and simple. Post a shipment, choose your preferred option, and confirm — all in a few clicks.',
      },
    ],
    stat: { value: '47%', label: 'Average cost reduction' },
  },
  {
    id: 'consistent-delivery',
    label: 'Consistent Every Time',
    headline: 'Build customer loyalty through reliable, transparent delivery',
    image: '/images/parcel-track.jpg',
    imageAlt: 'Real-time parcel tracking on a dashboard',
    color: 'border-blue-500',
    badge: 'bg-blue-50 text-blue-700',
    icon: 'fa-solid fa-circle-check',
    intro:
      'One bad delivery experience can cost you a customer for life. LoadLink helps you build a reputation for reliability by giving both you and your customers visibility and confidence at every step of the delivery journey.',
    points: [
      {
        title: 'Real-time shipment tracking',
        body: 'Every booking made through LoadLink comes with live tracking, so you always know where your shipment is. Share tracking links with customers directly and eliminate the "where is my order?" questions that waste your support team\'s time.',
      },
      {
        title: 'Proactive delivery notifications',
        body: 'Automated email notifications keep customers informed at key milestones — when a label is created, when their parcel is picked up, and when it\'s out for delivery. Proactive communication builds trust and reduces post-purchase anxiety.',
      },
      {
        title: 'Verified, accountable carriers',
        body: 'Every carrier on our platform goes through a verification process. You\'re not booking through a faceless system — you\'re connected to accountable, professional operators who take delivery performance seriously.',
      },
      {
        title: 'Centralised order management',
        body: 'Manage all your bookings, tracking details, and delivery history from one clean dashboard. Whether you ship five parcels a week or five hundred, you have a clear, organised record of everything in one place.',
      },
    ],
    stat: { value: '99.2%', label: 'On-time delivery rate' },
  },
  {
    id: 'sustainable-growth',
    label: 'Drive Sustainable Growth',
    headline: 'Scale your business with smarter logistics and ecommerce integration',
    image: '/images/ecommerce_pc.png',
    imageAlt: 'Ecommerce store connected to LoadLink for automated shipping',
    color: 'border-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700',
    icon: 'fa-solid fa-chart-line',
    intro:
      'Logistics shouldn\'t be a bottleneck for growth. LoadLink is built to scale with your business — whether you\'re a solo trader expanding into new markets or an established ecommerce brand increasing your fulfilment capacity.',
    points: [
      {
        title: 'Native ecommerce platform integrations',
        body: 'Connect your Shopify or WooCommerce store to LoadLink in minutes. Display competitive live shipping rates at checkout, reduce cart abandonment caused by unexpected shipping costs, and automate your fulfilment workflow from day one.',
      },
      {
        title: 'Expand your reach across Australia',
        body: 'Our carrier network covers metropolitan, regional, and remote Australia, so you can confidently sell to customers anywhere in the country without worrying about whether delivery is available at their postcode.',
      },
      {
        title: 'Reduce fulfilment overhead as you scale',
        body: 'As your order volume grows, manual shipping processes become a major operational drag. LoadLink\'s automated booking, label generation, and manifest management means your fulfilment workflow scales without a proportional increase in admin time.',
      },
      {
        title: 'Data to inform smarter decisions',
        body: 'Your shipping history and performance data are available through your LoadLink dashboard — giving you insights into carrier performance, cost trends, and delivery times that help you make better sourcing and fulfilment decisions over time.',
      },
    ],
    stat: { value: '3x', label: 'Faster fulfilment setup' },
  },
];

const stats = [
  { value: '47%', label: 'Average shipping cost reduction' },
  { value: '99.2%', label: 'On-time delivery rate' },
  { value: '3x', label: 'Faster fulfilment setup' },
  { value: 'Free', label: 'To list a shipment' },
];

export default function AdvantagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-[5%] md:px-[8%] bg-loadlink-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-loadlink-orange/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
              Your Competitive Advantage
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Everything you need to optimise shipping &amp; delight customers
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              LoadLink gives businesses of all sizes the tools to ship smarter, deliver consistently, and grow sustainably — without the complexity and cost of managing multiple carrier relationships.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://portal.loadlink.com.au/register/"
                className="bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-loadlink-navy transition-colors duration-300"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
                <div className="text-4xl font-bold text-loadlink-orange mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage Sections */}
      {advantages.map((adv, i) => (
        <section
          key={adv.id}
          id={adv.id}
          className={`py-24 px-[5%] md:px-[8%] ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-10">
              <span className="text-loadlink-orange text-sm font-bold tracking-widest uppercase">{adv.label}</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Content grid */}
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Image */}
              <div className={`relative rounded-3xl overflow-hidden shadow-2xl h-[400px] ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                <Image
                  src={adv.image}
                  alt={adv.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-loadlink-navy/30 to-transparent" />
                {/* Stat badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-2xl px-5 py-3 shadow-lg">
                  <div className="text-2xl font-bold text-loadlink-navy">{adv.stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{adv.stat.label}</div>
                </div>
              </div>

              {/* Text */}
              <div className={i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5 ${adv.badge}`}>
                  <i className={`${adv.icon} text-xs`}></i>
                  {adv.label}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy mb-5 leading-tight">
                  {adv.headline}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">{adv.intro}</p>

                <div className="space-y-5">
                  {adv.points.map((point) => (
                    <div key={point.title} className={`border-l-4 ${adv.color} pl-5`}>
                      <h3 className="font-bold text-loadlink-navy mb-1">{point.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{point.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 px-[5%] md:px-[8%]" style={{ background: 'linear-gradient(180deg, #0B1E3F 0%, #132B55 100%)' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
              Ready to get started?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Join thousands of businesses already shipping smarter with LoadLink
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              It&apos;s free to list a shipment and get quotes. Create your account in minutes and see the difference competitive pricing, reliable delivery, and a modern platform can make for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://portal.loadlink.com.au/register/"
                className="bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-loadlink-navy transition-colors duration-300"
              >
                Create Free Account
              </Link>
              <Link
                href="/partners"
                className="border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                View Our Partners
              </Link>
            </div>
          </div>

          {/* Quick links to each advantage */}
          <div className="grid gap-4">
            {advantages.map((adv) => (
              <Link
                key={adv.id}
                href={`#${adv.id}`}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-loadlink-orange/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-loadlink-orange/15 flex items-center justify-center flex-shrink-0">
                  <i className={`${adv.icon} text-lg text-loadlink-orange`}></i>
                </div>
                <div>
                  <div className="text-white font-semibold group-hover:text-loadlink-orange transition-colors">{adv.label}</div>
                  <div className="text-gray-400 text-sm">{adv.stat.value} — {adv.stat.label}</div>
                </div>
                <svg className="w-4 h-4 text-gray-500 ml-auto group-hover:text-loadlink-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
