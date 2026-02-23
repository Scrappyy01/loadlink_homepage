import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Integration Guide',
  description:
    'Connect your Shopify store to LoadLink for live shipping rates, automated label generation, and seamless order fulfilment across Australia.',
  alternates: {
    canonical: '/integrations/shopify',
  },
  openGraph: {
    title: 'Shopify Integration Guide | LoadLink Australia',
    description:
      'Connect your Shopify store to LoadLink for live shipping rates and automated fulfilment.',
    url: 'https://www.loadlink.com.au/integrations/shopify',
  },
};

export default function ShopifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
