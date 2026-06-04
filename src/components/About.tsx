'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  const values = [
    {
      icon: '💪',
      title: t('values_strength'),
      desc: t('values_strength_desc'),
    },
    {
      icon: '🌿',
      title: t('values_flexibility'),
      desc: t('values_flexibility_desc'),
    },
    {
      icon: '✨',
      title: t('values_community'),
      desc: t('values_community_desc'),
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
              <img
                src="/images/about.jpg"
                alt="Polerinna Studio"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-neutral-300 text-sm tracking-wider">
                FOTO HIER
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500 -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">
              Polerinna Studio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-8 text-neutral-900">
              {t('title')}
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-12">
              {t('text')}
            </p>

            <div className="flex flex-col gap-8">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{v.icon}</span>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{v.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
