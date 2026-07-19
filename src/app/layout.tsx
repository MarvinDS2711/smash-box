import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import { restaurant, heroImage } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(restaurant.siteUrl),
  title: {
    default:
      'CANCAN · Brasserie parisienne à L’Haÿ-les-Roses — Cuisine maison, terrasse & cocktails',
    template: '%s · CANCAN L’Haÿ-les-Roses',
  },
  description:
    'CANCAN, brasserie et restaurant français à L’Haÿ-les-Roses (94240). Cuisine maison, plat du jour, terrasse ensoleillée et bar à cocktails. Ouvert 7j/7, service continu de 7h à minuit. Noté 4,6/5 sur Google.',
  keywords: [
    'restaurant L’Haÿ-les-Roses',
    'brasserie L’Haÿ-les-Roses',
    'restaurant français 94240',
    'terrasse Val-de-Marne',
    'CANCAN',
    'cocktails L’Haÿ-les-Roses',
    'brunch L’Haÿ-les-Roses',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: restaurant.siteUrl,
    siteName: 'CANCAN',
    title: 'CANCAN · Brasserie parisienne à L’Haÿ-les-Roses',
    description:
      'Cuisine maison, terrasse & cocktails. Ouvert 7j/7, service continu de 7h à minuit.',
    images: [{ url: heroImage, width: 1200, height: 630, alt: 'Le restaurant CANCAN' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CANCAN · Brasserie parisienne à L’Haÿ-les-Roses',
    description: 'Cuisine maison, terrasse & cocktails. Ouvert 7j/7 de 7h à minuit.',
    images: [heroImage],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: restaurant.name,
  servesCuisine: ['Française', 'Brasserie', 'Cuisine maison'],
  priceRange: restaurant.priceRange,
  telephone: restaurant.phoneIntl,
  url: restaurant.siteUrl,
  image: heroImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: restaurant.address.street,
    addressLocality: restaurant.address.city,
    postalCode: restaurant.address.postalCode,
    addressCountry: restaurant.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: restaurant.geo.lat,
    longitude: restaurant.geo.lng,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: restaurant.rating,
    reviewCount: restaurant.reviewCount,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '07:00',
      closes: '00:00',
    },
  ],
  acceptsReservations: 'True',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Script
          id="ld-restaurant"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-paper"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
