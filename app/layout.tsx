import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBottomNav from '@/components/MobileBottomNav'
import Providers from '@/components/Providers'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#070d1a' },
    { media: '(prefers-color-scheme: light)', color: '#f8faff' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nitrolube.co.in'),
  title: {
    default: 'NitroLube — Premium Lubricants | Built to Perform. Made to Last.',
    template: '%s | NitroLube Premium Lubricants',
  },
  description:
    'NitroLube is an ISO 9001:2015 certified manufacturer of premium automotive and industrial lubricants — engine oils, gear oils, hydraulic fluids, greases, coolants and more. Engineered for peak performance, trusted for lasting protection.',
  keywords: [
    'NitroLube', 'premium lubricants India', 'engine oil', 'gear oil', 'hydraulic oil',
    'industrial lubricants', 'automotive lubricants', 'ISO certified lubricants',
    'synthetic engine oil', 'lubricant manufacturer India', 'Jharkhand lubricants',
    'brake fluid DOT-3 DOT-4', 'antifreeze coolant', 'lithium grease AP-3', 'UTTO oil tractor',
    'shocker oil', 'power steering fluid', 'NitroLube engine oil SAE', 'buy lubricants online India',
  ],
  authors: [{ name: 'NitroLube Lubricants', url: 'https://nitrolube.co.in' }],
  creator: 'NitroLube',
  publisher: 'NitroLube Lubricants Pvt. Ltd.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nitrolube.co.in',
    siteName: 'NitroLube',
    title: 'NitroLube — Premium Lubricants | Built to Perform. Made to Last.',
    description:
      'ISO 9001:2015 certified manufacturer of premium automotive & industrial lubricants. Engine oils, gear oils, hydraulic fluids, greases, coolants and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NitroLube Premium Lubricants – Built to Perform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NitroLube — Premium Lubricants',
    description: 'ISO 9001:2015 certified premium automotive and industrial lubricants. Built to Perform. Made to Last.',
    creator: '@NitroLube_',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://nitrolube.co.in',
  },
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  category: 'automotive',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://nitrolube.co.in/#organization',
      name: 'NitroLube',
      url: 'https://nitrolube.co.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nitrolube.co.in/logo.jpeg',
      },
      description:
        'ISO 9001:2015 certified manufacturer of premium automotive and industrial lubricants based in Jharkhand, India.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Ranchi Patna Road',
        addressLocality: 'Koderma',
        addressRegion: 'Jharkhand',
        postalCode: '825410',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8709735654',
        contactType: 'customer service',
        email: 'info@nitrolube.co.in',
        availableLanguage: ['English', 'Hindi'],
      },
      sameAs: [
        'https://www.facebook.com/people/NitroLube/61584391217683',
        'https://x.com/NitroLube_',
        'https://www.instagram.com/nitrolube_/',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'NitroLube Product Catalog',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Engine Oil' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Gear Oil' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Hydraulic Oil' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Grease' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Coolant' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Brake Oil' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nitrolube.co.in/#website',
      url: 'https://nitrolube.co.in',
      name: 'NitroLube',
      publisher: { '@id': 'https://nitrolube.co.in/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://nitrolube.co.in/products?search={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', t);
                  document.documentElement.style.colorScheme = t === 'light' ? 'light' : 'dark';
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased bg-[#070d1a] text-white overflow-x-hidden">
        <Providers>
          <Navbar />
          <MobileBottomNav />
          <main className="min-h-screen pb-20 md:pb-0 relative z-10">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
