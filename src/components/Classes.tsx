'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Classes() {
  const t = useTranslations('classes');
  const locale = useLocale();

  const classes = [
    { key: 'beginner', icon: '🌸', color: 'border-pink-200' },
    { key: 'intermediate', icon: '⭐', color: 'border-gold-300' },
    { key: 'advanced', icon: '🔥', color: 'border-red-400' },
    { key: 'aerial', icon: '💫', color: 'border-purple-300' },
    { key: 'flexibility', icon: '🧘', color: 'border-green-300' },
    { key: 'kids', icon: '🎀', color: 'border-yellow-300' },
  ] as const;

  return (
    <section id="classes" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">
            {t('subtitle')}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900">
            {t('title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map(({ key, icon, color }) => (
            <div
              key={key}
              className={`p-8 border-t-4 ${color} bg-neutral-50 hover:bg-neutral-100 hover:shadow-md transition-all duration-300`}
            >
              <span className="text-3xl mb-4 block">{icon}</span>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                {t(key)}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {t(`${key}_desc`)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${locale}/schedule`}
            className="inline-block bg-gold-500 text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-gold-600 transition-colors"
          >
            {t('title')}
          </Link>
        </div>
      </div>
    </section>
  );
}
