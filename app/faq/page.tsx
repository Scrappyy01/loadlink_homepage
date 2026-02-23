import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description:
    "Find answers to common questions about LoadLink — Australia's freight and logistics marketplace. Learn about shipping, pricing, cargo types, and support.",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ | LoadLink Australia',
    description:
      'Find answers to common questions about LoadLink — shipping, pricing, cargo types, and support.',
    url: 'https://www.loadlink.com.au/faq',
  },
};

const sections = [
  {
    category: 'General',
    items: [
      {
        question: 'What Is Loadlink?',
        plainText: "LoadLink is Australia's marketplace for moving anything. Whether it's a small parcel, a pallet of goods, or a full truck load, LoadLink makes it easy to find the best delivery solutions and competitive pricing in minutes. Founded in 2022, LoadLink was created to solve a real problem — the overwhelming need for an easy-to-use platform where anyone can list what needs to be moved and get access to the best transport options available. Whether you're shipping one parcel or one hundred, LoadLink helps you find the right solution at the best price.",
        answer: (
          <>
            <p>LoadLink is Australia&apos;s marketplace for moving anything. Whether it&apos;s a small parcel, a pallet of goods, or a full truck load, LoadLink makes it easy to find the best delivery solutions and competitive pricing in minutes.</p>
            <p>Founded in 2022, LoadLink was created to solve a real problem — the overwhelming need for an easy-to-use platform where anyone can list what needs to be moved and get access to the best transport options available. Whether you&apos;re an ecommerce business, a small shipper, or someone moving goods locally, LoadLink connects you with delivery solutions tailored to your needs.</p>
            <p>From a single parcel to multi-pallet loads, if it needs to be moved, LoadLink can get you the best options. We integrate with major delivery providers and carriers to give you competitive pricing and reliable service across all shipment types.</p>
            <p>Our online platform makes it simple to post your shipment, compare options, and arrange transport — all within minutes. LoadLink helps businesses and individuals save time and money by providing access to multiple delivery solutions in one place.</p>
            <p className="font-semibold text-loadlink-navy">Whether you&apos;re shipping one parcel or one hundred, LoadLink helps you find the right solution at the best price.</p>
          </>
        ),
      },
      {
        question: 'Who Is LoadLink For?',
        plainText: "LoadLink is designed for anyone who needs to move goods — from individuals sending a single parcel, to small ecommerce businesses, to large enterprises with complex supply chains. Our simple platform works whether you ship once a year or multiple times a day.",
        answer: (
          <p>LoadLink is designed for anyone who needs to move goods — from individuals sending a single parcel, to small ecommerce businesses, to large enterprises with complex supply chains. Our simple platform works whether you ship once a year or multiple times a day.</p>
        ),
      },
      {
        question: 'Why Should I Join LoadLink?',
        plainText: 'LoadLink gives you access to multiple delivery options in one place, helping you compare pricing and find the best solution for your shipment needs. Our platform is transparent and easy to use, with verified transport providers and competitive rates. We handle the heavy lifting so you can focus on your business.',
        answer: (
          <>
            <p>LoadLink gives you access to multiple delivery options in one place, helping you compare pricing and find the best solution for your shipment needs.</p>
            <p>Our platform is transparent and easy to use, with verified transport providers and competitive rates. We handle the heavy lifting so you can focus on your business.</p>
          </>
        ),
      },
      {
        question: 'What Kinds Of Cargo Can I Transport Using LoadLink?',
        plainText: 'LoadLink supports any type of shipment — from small parcels to heavy haulage. Whether you have a single package, a pallet, or a full truck load, we have transport solutions for you. Common shipments include: parcels and packages, palletised goods, furniture and appliances, cars, boats and motorcycles, industrial machinery and equipment, construction materials, livestock, and specialized freight.',
        answer: (
          <>
            <p>LoadLink supports any type of shipment — from small parcels to heavy haulage. Whether you have a single package, a pallet, or a full truck load, we have transport solutions for you.</p>
            <p>Common shipments include: parcels and packages, palletised goods, furniture and appliances, cars, boats and motorcycles, industrial machinery and equipment, construction materials, livestock, and specialized freight requiring step-decks, semi-trailers, floats, B-doubles, and road trains.</p>
            <p>If it needs to move, we can help connect you with the right carrier. Please refer to the Cargo Categories for a full list via our home page.</p>
          </>
        ),
      },
    ],
  },
  {
    category: 'Support',
    items: [
      {
        question: 'Can You Help Me?',
        plainText: 'Get support immediately with our team. Email info@loadlink.com.au, call 07 5518 8894, or use our online contact form to get in touch.',
        answer: (
          <>
            <p>Get support immediately with our team.</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-loadlink-orange w-4"></i>
                <a href="mailto:info@loadlink.com.au" className="text-loadlink-orange hover:underline">info@loadlink.com.au</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-loadlink-orange w-4"></i>
                <a href="tel:0755188894" className="text-loadlink-orange hover:underline">07 5518 8894</a>
              </li>
            </ul>
            <p className="mt-3">Or use our <Link href="/contact" className="text-loadlink-orange hover:underline font-semibold">online contact form</Link> to get in touch.</p>
          </>
        ),
      },
      {
        question: "I'm Having Trouble Logging In",
        plainText: "The user interface of your device can sometimes interfere with logging in to your account. Deleting your cache may be of assistance. Alternatively, please try to use another device. If the problem still persists, contact us. For a complete list of help and support articles visit the Help and Support Centre.",
        answer: (
          <>
            <p>The user interface of your device can sometimes interfere with logging in to your account. Deleting your cache may be of assistance.</p>
            <p>Alternatively, please try to use another device. If the problem still persists, <Link href="/contact" className="text-loadlink-orange hover:underline">contact us here</Link>.</p>
            <p className="mt-3 font-semibold text-loadlink-navy">Loadlink Online Help and Support Centre</p>
            <p>For a complete list of help and support articles visit the Help and Support Centre. Access our knowledge base or learn more about our platforms.</p>
            <a href="https://www.loadlink.com.au/help/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-loadlink-orange font-semibold hover:underline">
              Visit Help Centre
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </>
        ),
      },
    ],
  },
  {
    category: 'Loads',
    items: [
      {
        question: 'LoadLink Fees',
        plainText: 'It is completely free for shippers to list a load with LoadLink! Our trusted Carriers are charged a monthly, quarterly or yearly subscription fee which you can find on our pricing page.',
        answer: (
          <>
            <p>It is completely <span className="font-semibold text-emerald-600">free</span> for shippers to list a load with LoadLink!</p>
            <p>Our trusted Carriers are charged a monthly, quarterly or yearly subscription fee which you can find on our pricing page.</p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 mt-4 bg-loadlink-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-loadlink-navy transition-colors duration-300"
            >
              View Carrier Pricing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </>
        ),
      },
    ],
  },
];

const stats = [
  { value: '2022', label: 'Founded' },
  { value: '1.5M+', label: 'Items moved' },
  { value: '200+', label: 'Delivery partners' },
  { value: 'Easy', label: 'To use' },
];

export default function AboutUsPage() {
  // Build FAQ structured data for Google rich results
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sections.flatMap((section) =>
      section.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          // Strip JSX to plain text for structured data
          text: item.plainText,
        },
      }))
    ),
  };

  return (
    <>
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      {/* Hero */}
      <section className="pt-36 pb-24 px-[5%] md:px-[8%] bg-loadlink-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-loadlink-orange/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">About Us</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Move Anything, Anytime, Anywhere Across Australia
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-12">
            Founded in 2022, LoadLink is the easiest way to get the best pricing and delivery solutions for anything you need to move across Australia — from single parcels to full loads.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-loadlink-orange mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-[5%] md:px-[8%] bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-16">
          {sections.map((section) => (
            <div key={section.category}>
              {/* Category heading */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-loadlink-orange text-sm font-bold tracking-widest uppercase">{section.category}</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="space-y-6">
                {section.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-loadlink-orange/20 transition-colors duration-300 hover:shadow-md">
                    <h2 className="text-xl font-bold text-loadlink-navy mb-4 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-loadlink-orange/10 text-loadlink-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item.question}
                    </h2>
                    <div className="text-gray-600 leading-relaxed space-y-3 pl-9">
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-[5%] md:px-[8%] bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy mb-5">Ready to find your best delivery option?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Join thousands of businesses and individuals already using LoadLink to move anything across Australia.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://portal.loadlink.com.au/register/"
              className="bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-loadlink-navy transition-colors duration-300"
            >
              Get Started Now
            </Link>
            <Link
              href="/contact"
              className="bg-gray-100 text-loadlink-navy px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
