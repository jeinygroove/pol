'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-neutral-900"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <p className="text-rose-300 text-sm tracking-[0.4em] uppercase mb-4">
          Polerinna Studio
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
          {t('tagline')}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-10 font-light">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/schedule`}
            className="bg-rose-700 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-rose-800 transition-colors"
          >
            {t('cta_book')}
          </Link>
          <Link
            href={`/${locale}/schedule`}
            className="border border-white text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            {t('cta_schedule')}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
