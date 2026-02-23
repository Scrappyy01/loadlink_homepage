import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the LoadLink Privacy Policy. Learn how we collect, use, store and protect your personal information in accordance with the Australian Privacy Act 1988.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | LoadLink Australia',
    description:
      'Learn how LoadLink collects, uses, stores and protects your personal information under the Australian Privacy Act 1988.',
    url: 'https://www.loadlink.com.au/privacy-policy',
  },
};

const sections = [
  {
    number: '1',
    title: 'Introduction',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>LoadLink Australia Pty Ltd (ABN 30 007 423 312) (<strong className="text-loadlink-navy">we</strong>, <strong className="text-loadlink-navy">us</strong>, <strong className="text-loadlink-navy">our</strong>) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).</p>
        <p>By accessing or using our website at <a href="https://www.loadlink.com.au" className="text-loadlink-orange hover:underline">www.loadlink.com.au</a> and our related services, you consent to the collection, use and disclosure of your personal information in the manner described in this Privacy Policy.</p>
        <p>We may update this Privacy Policy from time to time. The updated version will be posted on our website and will be effective from the date of posting. We encourage you to review this page periodically.</p>
      </div>
    ),
  },
  {
    number: '2',
    title: 'What Information We Collect',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>We may collect the following types of personal information:</p>
        <div>
          <p className="font-semibold text-loadlink-navy mb-1">Identity &amp; Contact Information</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full name, email address, phone number, and postal address</li>
            <li>Business name and ABN (where applicable)</li>
            <li>Account credentials (username and encrypted password)</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-loadlink-navy mb-1">Transactional Information</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Shipment details, booking history, and freight quotes requested</li>
            <li>Payment information (processed securely via third-party payment providers — we do not store full card details)</li>
            <li>Invoice and billing records</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-loadlink-navy mb-1">Technical &amp; Usage Information</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address, browser type and version, device type</li>
            <li>Pages visited, time spent on pages, click-through data</li>
            <li>Referral source and search terms used to find our site</li>
            <li>Cookie data (see Section 8 — Cookies)</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-loadlink-navy mb-1">Communications</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Messages sent via our contact form or support channels</li>
            <li>Records of email communications with our team</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    number: '3',
    title: 'How We Collect Your Information',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>We collect personal information in the following ways:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong className="text-loadlink-navy">Directly from you</strong> — when you register an account, submit a form, request a quote, place a booking, or contact our support team</li>
          <li><strong className="text-loadlink-navy">Automatically</strong> — through cookies, log files, and analytics tools when you browse our website</li>
          <li><strong className="text-loadlink-navy">From third parties</strong> — such as carrier partners when fulfilling a shipment, or payment processors when completing a transaction</li>
          <li><strong className="text-loadlink-navy">From ecommerce integrations</strong> — such as Shopify or WooCommerce, when you connect your store to our platform</li>
        </ul>
        <p>Where it is lawful and practicable, you may interact with us anonymously or use a pseudonym. However, some features of the Services require your personal information to function.</p>
      </div>
    ),
  },
  {
    number: '4',
    title: 'How We Use Your Information',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>We use your personal information to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide, operate and improve our Services</li>
          <li>Create and manage your account</li>
          <li>Process shipment bookings, quotes and payments</li>
          <li>Communicate with you about your account, bookings, and support requests</li>
          <li>Send transactional emails and service notifications</li>
          <li>Send marketing communications where you have consented (you may opt out at any time)</li>
          <li>Analyse usage trends to improve the platform and user experience</li>
          <li>Detect, prevent and respond to fraud, security incidents, or Terms of Use violations</li>
          <li>Comply with our legal obligations</li>
        </ul>
        <p>We will not use your personal information for purposes that are incompatible with those described above without your consent, unless required by law.</p>
      </div>
    ),
  },
  {
    number: '5',
    title: 'Disclosure of Your Information',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>We may disclose your personal information to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong className="text-loadlink-navy">Carrier and logistics partners</strong> — to fulfil your shipments (e.g. FedEx, Couriers Please, Hunter Express, Direct Couriers)</li>
          <li><strong className="text-loadlink-navy">Service providers</strong> — including hosting, analytics, email delivery, and payment processing providers acting on our behalf</li>
          <li><strong className="text-loadlink-navy">Ecommerce platforms</strong> — such as Shopify or WooCommerce, when you have connected your store</li>
          <li><strong className="text-loadlink-navy">Legal and regulatory authorities</strong> — where required by law, court order, or to protect our rights</li>
          <li><strong className="text-loadlink-navy">Business successors</strong> — in the event of a merger, acquisition, or sale of assets, where the successor will be bound by this Privacy Policy</li>
        </ul>
        <p>We do not sell, rent or trade your personal information to third parties for marketing purposes.</p>
        <p>Where we disclose your information to overseas recipients (for example, cloud hosting providers), we take reasonable steps to ensure those recipients handle your information in accordance with the APPs.</p>
      </div>
    ),
  },
  {
    number: '6',
    title: 'Data Security',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>We take reasonable steps to protect the personal information we hold from misuse, interference, loss, unauthorised access, modification or disclosure. Our security measures include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Encrypted data transmission (HTTPS/TLS)</li>
          <li>Secure, access-controlled server environments</li>
          <li>Password hashing and secure authentication practices</li>
          <li>Regular security reviews and staff data handling training</li>
        </ul>
        <p>No method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.</p>
        <p>If you become aware of any unauthorised use of your account or any security breach, please contact us immediately at <a href="mailto:info@loadlink.com.au" className="text-loadlink-orange hover:underline">info@loadlink.com.au</a>.</p>
      </div>
    ),
  },
  {
    number: '7',
    title: 'Data Retention',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>We retain your personal information for as long as necessary to provide the Services and to comply with our legal obligations. When your information is no longer required, we will take reasonable steps to securely destroy or de-identify it.</p>
        <p>Account data is generally retained for the lifetime of your account plus a reasonable period thereafter to resolve disputes or comply with legal obligations. You may request deletion of your account and associated data at any time (see Section 9 — Your Rights).</p>
      </div>
    ),
  },
  {
    number: '8',
    title: 'Cookies',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>Our website uses cookies and similar tracking technologies to improve your experience, analyse traffic, and personalise content.</p>
        <p>Types of cookies we use:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong className="text-loadlink-navy">Essential cookies</strong> — required for core website functionality (e.g. session management, security)</li>
          <li><strong className="text-loadlink-navy">Analytics cookies</strong> — help us understand how visitors use our site (e.g. Google Analytics)</li>
          <li><strong className="text-loadlink-navy">Preference cookies</strong> — remember your settings and preferences</li>
        </ul>
        <p>You can control or disable cookies through your browser settings. Disabling certain cookies may affect the functionality of our Services.</p>
      </div>
    ),
  },
  {
    number: '9',
    title: 'Your Rights',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>Under the Australian Privacy Act 1988 and the APPs, you have the right to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong className="text-loadlink-navy">Access</strong> — request access to the personal information we hold about you</li>
          <li><strong className="text-loadlink-navy">Correction</strong> — request that inaccurate, incomplete or outdated information be corrected</li>
          <li><strong className="text-loadlink-navy">Deletion</strong> — request deletion of your personal information (subject to legal retention requirements)</li>
          <li><strong className="text-loadlink-navy">Opt out of marketing</strong> — unsubscribe from marketing communications at any time via the unsubscribe link in emails or by contacting us</li>
          <li><strong className="text-loadlink-navy">Complain</strong> — lodge a complaint about our handling of your personal information</li>
        </ul>
        <p>To exercise any of these rights, please contact our Privacy Officer at <a href="mailto:info@loadlink.com.au" className="text-loadlink-orange hover:underline">info@loadlink.com.au</a>. We will respond within a reasonable timeframe and in accordance with our obligations under the Privacy Act.</p>
        <p>If you are not satisfied with our response, you may lodge a complaint with the <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-loadlink-orange hover:underline">Office of the Australian Information Commissioner (OAIC)</a>.</p>
      </div>
    ),
  },
  {
    number: '10',
    title: 'Links to Third-Party Websites',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>Our Services may contain links to third-party websites. This Privacy Policy applies only to information collected by LoadLink. We are not responsible for the privacy practices of third-party websites and encourage you to review their privacy policies before providing any personal information.</p>
      </div>
    ),
  },
  {
    number: '11',
    title: 'Children\'s Privacy',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us and we will take steps to delete it promptly.</p>
      </div>
    ),
  },
  {
    number: '12',
    title: 'Contact Us',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>If you have any questions, concerns or complaints about this Privacy Policy or our handling of your personal information, please contact our Privacy Officer:</p>
        <div className="bg-gray-50 rounded-xl p-5 space-y-2 border border-gray-200 mt-2">
          <p><strong className="text-loadlink-navy">LoadLink Australia Pty Ltd</strong></p>
          <p>ABN 30 007 423 312</p>
          <p>PO Box 3463, Helensvale Town Centre QLD 4212, Australia</p>
          <p>
            Email:{' '}
            <a href="mailto:info@loadlink.com.au" className="text-loadlink-orange hover:underline">
              info@loadlink.com.au
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+61755188894" className="text-loadlink-orange hover:underline">
              +61 7 5518 8894
            </a>
          </p>
        </div>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-[5%] md:px-[8%] bg-loadlink-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-loadlink-orange/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">Legal</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-6">
            Effective from: January 2023
          </p>
          <p className="text-gray-400 text-sm max-w-3xl leading-relaxed p-4 bg-white/5 border border-white/10 rounded-xl">
            <span className="font-semibold text-white">LoadLink Australia Pty Ltd</span> is committed to protecting your privacy and handling your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="py-8 px-[5%] md:px-[8%] bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.number}
                href={`#section-${s.number}`}
                className="text-xs font-semibold text-loadlink-navy/60 hover:text-loadlink-orange px-3 py-1.5 rounded-full border border-gray-200 hover:border-loadlink-orange/30 transition-colors duration-200"
              >
                {s.number}. {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-[5%] md:px-[8%] bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-6">
          {sections.map((section) => (
            <div
              id={`section-${section.number}`}
              key={section.number}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-loadlink-orange/20 transition-colors duration-300 hover:shadow-md scroll-mt-24"
            >
              <h2 className="text-xl font-bold text-loadlink-navy mb-5 flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-loadlink-orange/10 text-loadlink-orange flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  {section.number}
                </span>
                {section.title}
              </h2>
              <div className="pl-11">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-[5%] md:px-[8%] bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy mb-5">Questions about your privacy?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Our team is happy to answer any questions about how we handle your personal information.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-loadlink-navy transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/terms-and-conditions"
              className="bg-gray-100 text-loadlink-navy px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
