import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Read the LoadLink Terms and Conditions. Understand the rules governing your access to and use of our freight and logistics platform.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | LoadLink Australia',
    description:
      'Read the LoadLink Terms and Conditions governing use of our freight and logistics platform.',
    url: 'https://www.loadlink.com.au/terms-and-conditions',
  },
};

const sections = [
  {
    number: '1',
    title: 'Terms of Use',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>Your access to and use of Our Website and/or Online Services (collectively, Services) are subject to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>these Terms;</li>
          <li>Our Privacy Policy;</li>
          <li>any other terms, conditions, notices, or disclaimers displayed on Our Website; (collectively, Terms of Use).</li>
        </ul>
        <p>We make the Services available to You on these Terms of Use. You must only access and use the Services in accordance with these Terms of Use.</p>
        <p>By accessing and using the Services, You are deemed to accept these Terms of Use and agree to be bound by them.</p>
        <p>Certain legislation, including the Competition and Consumer Act 2010 (Cth), may imply warranties, conditions or guarantees or impose obligations or remedies which cannot be excluded or modified. To the extent that such legislation applies, these Terms of Use must be read subject to those statutory provisions and nothing in these Terms of Use is intended to alter or restrict the operation of those provisions.</p>
      </div>
    ),
  },
  {
    number: '2',
    title: 'Changes to the Terms of Use',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>We may change the Terms of Use from time to time by publishing an updated version to Our Website.</p>
        <p>By continuing to use the Services, You are deemed to have accepted the updated Terms of Use and agree to be bound by them.</p>
      </div>
    ),
  },
  {
    number: '3',
    title: 'Registration',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>We may require You to register with Us in order to access some parts of the Services.</p>
        <p>You are solely responsible for the use of Your user account, and must ensure that You keep all passwords secure. You will be responsible for any access to the Services using Your registration details, even if that access is by another person.</p>
      </div>
    ),
  },
  {
    number: '4',
    title: 'Subscriptions',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>If You purchase a subscription to access any of Our Services, Your use of those subscription features will be subject to Our Subscription Terms and Conditions, which form part of and operate alongside these Terms of Use. In the event of any inconsistency, the Subscription Terms and Conditions will prevail in relation to subscription matters.</p>
      </div>
    ),
  },
  {
    number: '5',
    title: 'Access and Availability',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>We reserve the right to modify, discontinue, or disable all or part of the Services, on either a permanent or temporary basis, at any time. We will endeavour to provide You with prior notice of any modifications by posting on Our Website, however, You accept it may not always be possible to provide prior notice.</p>
        <p>We may suspend, terminate or limit Your access to all or part of the Services at any time if You breach the Terms of Use.</p>
      </div>
    ),
  },
  {
    number: '6',
    title: 'Acceptable Use',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>You must not post, transmit to or via Our Website and/or Online Services any information or content which:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>breaches any laws or regulations;</li>
          <li>infringes a third party&apos;s rights or privacy;</li>
          <li>is offensive, misleading, defamatory, false, obscene, racist, or otherwise inappropriate;</li>
          <li>includes unauthorised advertising or promotional material.</li>
        </ul>
        <p>You must not permit or enable another person to do any of those things.</p>
        <p>You must not transmit to or via the Services any virus, or engage in any conduct which:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>tampers with or hinders the operation of the Services;</li>
          <li>inhibits any other user from using the Services;</li>
          <li>accesses areas of the Services not intended for You.</li>
        </ul>
      </div>
    ),
  },
  {
    number: '7',
    title: 'Liability',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>To the maximum extent permitted by law:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>We do not represent or warrant that the Services or any Content is accurate, reliable, or complete;</li>
          <li>We exclude all warranties and liabilities (including for negligence) to You in connection with Your use of the Services;</li>
          <li>Our liability for breach of a non-excludable condition or warranty is limited to the resupply of Services.</li>
        </ul>
        <p>You agree to fully compensate and hold Us harmless for any loss, damage, costs, expenses and penalties arising out of Your material breach of these Terms of Use or any unlawful conduct by You.</p>
        <p>We exclude liability for any loss or damage to the extent that it is caused by You.</p>
        <p>To the maximum extent permitted by law, We are not liable for damage or loss of any kind arising from or in connection with Your access to, or use of, or inability to use, the Services.</p>
      </div>
    ),
  },
  {
    number: '8',
    title: 'Third Party Sites',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>The Services may contain links to third-party websites. These links are provided for Your convenience only and do not indicate any endorsement. You access third-party websites at Your own risk.</p>
        <p>We and Our contractors make no representation about the accuracy or suitability of the information or links provided on the Services. The information is provided on an &apos;as is&apos; and &apos;as available&apos; basis, without express or implied warranty. We take no responsibility for the content of internet sites that link from the Services.</p>
      </div>
    ),
  },
  {
    number: '9',
    title: 'Security',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>We will endeavour to take all reasonable steps to keep secure any information which We hold about You. Your information is stored on secure servers that are protected in controlled facilities, in accordance with Our Privacy Policy.</p>
      </div>
    ),
  },
  {
    number: '10',
    title: 'Intellectual Property',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>You must not do anything which breaches or interferes with Our intellectual property rights.</p>
        <p>All copyright and other intellectual property rights subsisting in the Services and the Content and material on Our Websites (including, without limitation, the software, design, text and graphics, and the selection and layout of Our Websites) are owned by or licensed to Us and protected by copyright under the laws of Australia and other countries.</p>
        <p>You may view the Services and use its Content for personal and non-commercial purposes.</p>
        <p>You may not distribute, reproduce, frame, transmit (including broadcast), communicate, adapt, distribute, sell, publish, alter, modify or create derivative works from any part of the Services or the Content on the Services except as permitted by statute or with Our written consent.</p>
        <p>If You submit, post, transmit, or otherwise make any material available via Our Website (Your Content), You grant to Us a non-exclusive, irrevocable, perpetual, worldwide, royalty free, transferrable licence to use, reproduce, modify, adapt, publish or communicate to the public Your Content for the reasonable purposes of Our business, and the right to sublicense those rights to others. You also consent to any act or omission that would otherwise infringe any of Your rights (including Your moral rights) in Your Content.</p>
        <p>You warrant that You have the right to grant the above licence, and that Our exercise of the licence rights above will not infringe the intellectual property rights of any third party, and that Your Content is not defamatory and does not breach any law.</p>
        <p>We may review Your Content, but are not obliged to do so. We may also alter or remove any of Your Content at any time, including to ensure the functionality of Our Services.</p>
      </div>
    ),
  },
  {
    number: '11',
    title: 'Copyright',
    content: (
      <div className="space-y-3 text-gray-600 leading-relaxed">
        <p>The Copyright Act 1968 (Cth) protects materials such as films, music, books, and computer programs. You break the law if You download, copy, share or distribute this material, unless You are allowed to do so by the Act or You have the copyright owner&apos;s permission.</p>
        <p>Please do not use Our Services to do any of these things, because if You do, we may have to cancel Your services and the copyright owner could take legal action against You.</p>
        <p>You must not obscure, remove, mask or replace any attribution statements or copyright notices or logos which are embedded in any information provided to You.</p>
      </div>
    ),
  },
  {
    number: '12',
    title: 'General',
    content: (
      <div className="space-y-4 text-gray-600 leading-relaxed">
        {[
          { heading: 'Inconsistencies', body: 'If any terms in this document conflict with other terms displayed on Our Website, the more specific terms prevail to the extent of the inconsistency.' },
          { heading: 'No Waiver', body: 'If We do not act in relation to a breach of the Terms of Use by You, We do not waive any rights to act in relation to that breach or any later breach by You. Likewise, if You do not act in relation to a breach by Us, You do not waive any rights.' },
          { heading: 'Privacy and Personal Information', body: 'Any personal information collected by Us through the Services will be handled in accordance with Our Privacy Policy.' },
          { heading: 'Severability', body: 'If any provision of the Terms of Use is invalid or unenforceable in a jurisdiction, the provision should be read down or severed in that jurisdiction to the extent of the invalidity or unenforceability. It will not affect the validity or enforceability of that provision in another jurisdiction or the remaining provisions.' },
          { heading: 'Governing Law', body: 'The Terms of Use are governed by the laws in force in Queensland, Australia. You and We submit to the non-exclusive jurisdiction of the courts of Queensland and waive any claim or objection based on absence of jurisdiction or inconvenient forum.' },
        ].map(({ heading, body }) => (
          <div key={heading}>
            <p className="font-semibold text-loadlink-navy">{heading}</p>
            <p>{body}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '13',
    title: 'Definitions',
    content: (
      <div className="space-y-4 text-gray-600 leading-relaxed">
        {[
          { term: 'Content', def: 'Content, information or material made available on or via the Services, including but not limited to text, sounds, music, software, photographs, videos, data, graphics, images, logos, button icons, audio clips, messages, links, digital map data, directory listings or any other content made available on the Services.' },
          { term: 'Online Services', def: 'Any functions, features, access to and use of the internet, internet information and/or other services, various service and communication channels and facilities through the internet, or communication facilities or services made available by LoadLink Australia Pty Ltd, including but not limited to the Share Service, online transactions, messaging services, single sign-on, search engines, automated services, e-commerce facilitators, chats, discussion groups and/or emails and any other products and/or services provided by LoadLink.' },
          { term: 'Services', def: 'Our Website and/or Online Services.' },
          { term: 'Share Service', def: 'The "share to mobile" service and its application version and/or the "share to e-mail service."' },
          { term: 'Subsidiary', def: 'Has the meaning given to it under the Corporations Act 2001 (Cth).' },
          { term: 'Terms of Use', def: 'These terms and conditions which govern the relationship between You and LoadLink for the use of the Services.' },
          { term: 'LoadLink Australia', def: 'LoadLink Australia Pty Ltd (ABN 30 007 423 312) and/or its Subsidiaries, as may be applicable.' },
          { term: 'Website', def: 'The website located at https://www.loadlink.com.au and/or such other websites operated by Us, which are subject to change from time to time.' },
          { term: 'We, Our, Us', def: 'LoadLink Australia Pty Ltd (ABN 30 007 423 312).' },
          { term: 'You, Your', def: 'The person or entity accessing and using the Services.' },
        ].map(({ term, def }) => (
          <div key={term} className="flex gap-3">
            <span className="font-semibold text-loadlink-navy min-w-fit">{term}:</span>
            <span>{def}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-[5%] md:px-[8%] bg-loadlink-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-loadlink-orange/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-loadlink-orange text-sm font-semibold tracking-widest uppercase mb-4 block">Legal</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-6">
            Effective from: January 2023
          </p>
          <p className="text-gray-400 text-sm max-w-3xl leading-relaxed p-4 bg-white/5 border border-white/10 rounded-xl">
            <span className="font-semibold text-white">Note:</span> All terms in <strong>BOLD</strong> are defined in the Definitions section at the end of this document. This Terms of Use sets out the basis on which you agree to access and use the Services. Please read it carefully.
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
          <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy mb-5">Questions about our Terms?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Our team is happy to clarify anything in our Terms &amp; Conditions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-loadlink-navy transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy-policy"
              className="bg-gray-100 text-loadlink-navy px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
