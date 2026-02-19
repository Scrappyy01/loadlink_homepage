import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'LoadLink | Parcel Freight & Logistics Marketplace Australia',
    template: '%s | LoadLink Australia',
  },
  description: 'Compare shipping rates, book parcel delivery, and access freight services across Australia. LoadLink connects you with trusted carriers and competitive pricing — from parcels to full loads.',
  keywords: ['parcel freight', 'shipping Australia', 'logistics marketplace', 'ecommerce shipping', 'courier comparison', 'freight quotes', 'LoadLink', 'delivery services Australia'],
  metadataBase: new URL('https://www.loadlink.com.au'),
  openGraph: {
    title: 'LoadLink | Parcel Freight & Logistics Marketplace Australia',
    description: 'Compare shipping rates, book parcel delivery, and access freight services across Australia.',
    url: 'https://www.loadlink.com.au',
    siteName: 'LoadLink',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LoadLink | Parcel Freight & Logistics Marketplace Australia',
    description: 'Compare shipping rates, book parcel delivery, and access freight services across Australia.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon-loadlink-270x270.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LoadLink',
              url: 'https://www.loadlink.com.au',
              logo: 'https://www.loadlink.com.au/images/Icons/Loadlink-Logo.svg',
              description:
                'Australia\'s marketplace for moving anything — from parcels to full loads. Compare shipping rates and book delivery services.',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+61-7-5518-8894',
                email: 'info@loadlink.com.au',
                contactType: 'customer service',
                areaServed: 'AU',
                availableLanguage: 'English',
              },
              sameAs: [
                'https://www.facebook.com/loadlink',
                'https://www.linkedin.com/company/loadlink',
                'https://www.instagram.com/loadlink',
              ],
            }),
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
