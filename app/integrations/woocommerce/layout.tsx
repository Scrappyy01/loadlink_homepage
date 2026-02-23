import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WooCommerce Integration Guide',
  description:
    'Connect your WooCommerce store to LoadLink for live shipping rates, automated label generation, and seamless order fulfilment across Australia.',
  alternates: {
    canonical: '/integrations/woocommerce',
  },
  openGraph: {
    title: 'WooCommerce Integration Guide | LoadLink Australia',
    description:
      'Connect your WooCommerce store to LoadLink for live shipping rates and automated fulfilment.',
    url: 'https://www.loadlink.com.au/integrations/woocommerce',
  },
};

export default function WooCommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
