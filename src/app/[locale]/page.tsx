import Hero from '@/components/Hero';
import About from '@/components/About';
import Studios from '@/components/Studios';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: 'Pole Dance Studios München – 2 Standorte',
    en: 'Pole Dance Studios Munich – 2 Locations',
    ru: 'Студии Пол-Дэнс Мюнхен – 2 зала',
  };
  return { title: titles[locale] ?? titles.de };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SportsActivityLocation',
      '@id': 'https://polerinna.de/#studio1',
      name: 'Polerinna Pole Dance Studio',
      url: 'https://polerinna.de',
      telephone: '+4915730677320',
      email: 'Polerinna@t-online.de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lindwurmstraße 101',
        postalCode: '80337',
        addressLocality: 'München',
        addressCountry: 'DE',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 48.1274, longitude: 11.5586 },
      sameAs: ['https://www.instagram.com/pole_dance_munich'],
      openingHoursSpecification: [],
      priceRange: '€€',
      image: 'https://polerinna.de/images/studio-1.jpg',
    },
    {
      '@type': 'SportsActivityLocation',
      '@id': 'https://polerinna.de/#studio2',
      name: 'Polerinna Gold Pole Dance Studio',
      url: 'https://polerinna.de',
      telephone: '+4915730677320',
      email: 'Polerinna@t-online.de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hofmannstraße 7A',
        postalCode: '81379',
        addressLocality: 'München',
        addressCountry: 'DE',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 48.0936, longitude: 11.5178 },
      sameAs: ['https://www.instagram.com/poledancemunchen'],
      priceRange: '€€',
      image: 'https://polerinna.de/images/studio-2.jpg',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Studios />
    </>
  );
}
