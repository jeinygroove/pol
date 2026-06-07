'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const STUDIOS = [
  {
    key: 'polerinna',
    logo: '/images/logo-polerinna.png',
    logoClass: 'brightness-0 invert',
    logoSize: 'h-80',
    logoMargin: '-mt-[7.5rem] -mb-10',
    photo: '/images/studio-1.jpg',
    address: 'Lindwurmstraße 101',
    zip: '80337 München',
    phone: '+49 157 30677320',
    email: 'Polerinna@t-online.de',
    instagram: 'https://www.instagram.com/pole_dance_munich',
    instagramHandle: '@pole_dance_munich',
    eversportsUrl: 'https://www.eversports.de/s/pole-dance-muenchen-polerinna',
    mapsEmbed:
      'https://maps.google.com/maps?q=Lindwurmstra%C3%9Fe+101,+80337+M%C3%BCnchen&output=embed&hl=de&z=15',
    mapsUrl: 'https://maps.app.goo.gl/dKnSJjXQ8Y7dNXoy8',
    theme: {
      bg: 'bg-neutral-900',
      accentText: 'text-neutral-400',
      btn: 'bg-white text-neutral-900 hover:bg-gold-300',
      instagram: 'text-neutral-400 hover:text-gold-300',
      number: 'text-neutral-700',
      text: 'text-white',
      subtext: 'text-neutral-400',
      border: 'border-neutral-500 text-neutral-300 hover:border-gold-300 hover:text-gold-300',
    },
  },
  {
    key: 'gold',
    logo: '/images/logo-polerinna-gold.png',
    logoClass: '',
    logoSize: 'h-40',
    logoMargin: '-mt-6',
    photo: '/images/studio-2.jpg',
    address: 'Hofmannstraße 7A',
    zip: '81379 München',
    phone: '+49 157 30677320',
    email: 'Polerinna@t-online.de',
    instagram: 'https://www.instagram.com/poledancemunchen',
    instagramHandle: '@poledancemunchen',
    eversportsUrl: 'https://www.eversports.de/s/polerinna-gold',
    mapsEmbed:
      'https://maps.google.com/maps?q=Hofmannstra%C3%9Fe+7A,+81379+M%C3%BCnchen&output=embed&hl=de&z=15',
    mapsUrl: 'https://maps.app.goo.gl/zFoJGV21jj3m1LxW6',
    theme: {
      bg: 'bg-white',
      accentText: 'text-gold-600',
      btn: 'bg-neutral-900 text-white hover:bg-gold-600',
      instagram: 'text-gold-600 hover:text-gold-800',
      number: 'text-neutral-200',
      text: 'text-neutral-900',
      subtext: 'text-neutral-500',
      border: 'border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900',
    },
  },
];

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Studios() {
  const t = useTranslations('studios');

  return (
    <section id="studios" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">München</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-neutral-500 text-lg">2 Standorte in München</p>
        </div>

        {/* Studio cards */}
        <div className="flex flex-col gap-6">
          {STUDIOS.map((studio, index) => (
            <div key={studio.key} className={studio.theme.bg}>
              {/* Layout: info left, map right (alternates) */}
              <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                {/* Info panel */}
                <div className={`p-10 lg:p-14 flex flex-col justify-between ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    {/* Number + Logo */}
                    <div className="flex items-start justify-between mb-8">
                      <span className={`font-serif text-8xl font-bold leading-none select-none ${studio.theme.number}`}>
                        {index + 1}
                      </span>
                      <Image
                        src={studio.logo}
                        alt={studio.key}
                        width={520}
                        height={200}
                        className={`${studio.logoSize} w-auto object-contain ${studio.logoMargin} ${studio.logoClass}`}
                      />
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-3 mb-5">
                      <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${studio.theme.accentText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className={`font-semibold ${studio.theme.text}`}>{studio.address}</p>
                        <p className={studio.theme.subtext}>{studio.zip}</p>
                      </div>
                    </div>

                    {/* Phone + Email */}
                    <div className={`flex flex-col gap-2 mb-5 text-sm ${studio.theme.subtext}`}>
                      <a href={`tel:${studio.phone}`} className="hover:opacity-80 transition-opacity flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {studio.phone}
                      </a>
                      <a href={`mailto:${studio.email}`} className="hover:opacity-80 transition-opacity flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {studio.email}
                      </a>
                    </div>

                    {/* Instagram */}
                    <a
                      href={studio.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm mb-8 transition-colors ${studio.theme.instagram}`}
                    >
                      <InstagramIcon />
                      {studio.instagramHandle}
                    </a>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={studio.eversportsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs tracking-widest uppercase px-6 py-3 transition-colors ${studio.theme.btn}`}
                    >
                      {t('directions') === 'Route planen' ? 'Kurs buchen' : 'Book a Class'}
                    </a>
                    <a
                      href={studio.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs tracking-widest uppercase px-6 py-3 border transition-colors ${studio.theme.border}`}
                    >
                      {t('directions')}
                    </a>
                  </div>
                </div>

                {/* Map panel */}
                <div className={`relative min-h-[360px] lg:min-h-[500px] overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <iframe
                    src={studio.mapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '360px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${studio.key} Karte`}
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
