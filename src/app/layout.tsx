import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Polerinna – Pole Dance Studios München',
    template: '%s | Polerinna München',
  },
  description: 'Pole Dance Studios in München – zwei Standorte in Lindwurmstraße & Hofmannstraße. Kurse für alle Levels. Jetzt Kurs buchen bei Polerinna!',
  keywords: ['Pole Dance München', 'Pole Dance Studios München', 'Polerinna', 'Polerinna Gold', 'Pole Dance Kurs', 'Stangentanz München'],
  authors: [{ name: 'Polerinna Studio' }],
  creator: 'Polerinna Studio',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteConfig.url,
    siteName: 'Polerinna Pole Dance Studio München',
    title: 'Polerinna – Pole Dance Studios München',
    description: 'Pole Dance Studios in München – zwei Standorte. Kurse für alle Levels. Jetzt buchen!',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Polerinna Pole Dance Studios München' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polerinna – Pole Dance Studio München',
    description: 'Pole Dance Studio in München mit zwei Standorten. Kurse für alle Levels.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
