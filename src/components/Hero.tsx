'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #ffffff 0%, #fdfaf0 40%, #f7edcc 100%)',
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(253, 250, 240, 0.25)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-gold-600 text-sm tracking-[0.4em] uppercase mb-4">
          Polerinna Studios
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-neutral-700">
          {t('tagline')}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 mb-10 font-light">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/schedule`}
            className="bg-gold-500 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold-600 transition-colors"
          >
            {t('cta_book')}
          </Link>
          <Link
            href={`/${locale}/schedule`}
            className="border border-neutral-800 text-neutral-800 px-8 py-4 text-sm tracking-widest uppercase hover:bg-neutral-900/10 transition-colors"
          >
            {t('cta_schedule')}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-neutral-400 animate-pulse" />
      </div>
    </section>
  );
}
