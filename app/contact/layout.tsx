import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the LoadLink team. Contact us for shipping questions, freight support, or partnership enquiries across Australia.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | LoadLink Australia',
    description:
      'Get in touch with the LoadLink team for shipping questions, freight support, or partnership enquiries.',
    url: 'https://www.loadlink.com.au/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
