import { getTranslations, getLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import ScheduleTabs from '@/components/ScheduleTabs';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: 'Stundenplan & Preise',
    en: 'Schedule & Prices',
    ru: 'Расписание и цены',
  };
  const descriptions: Record<string, string> = {
    de: 'Stundenplan, Preise und Gutscheine für Pole Dance Kurse bei Polerinna München. Jetzt online buchen über Eversports.',
    en: 'Schedule, prices and vouchers for pole dance classes at Polerinna Munich. Book online via Eversports.',
    ru: 'Расписание, цены и сертификаты для занятий пол-дэнс в Polerinna Мюнхен. Онлайн-запись через Eversports.',
  };
  return { title: titles[locale] ?? titles.de, description: descriptions[locale] ?? descriptions.de };
}

export default async function SchedulePage() {
  const [t, locale] = await Promise.all([getTranslations('schedule'), getLocale()]);

  return (
    <div className="pt-20 min-h-screen bg-neutral-50 overflow-x-hidden">

      <div className="bg-white border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">
            {t('eversports_note')}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <ScheduleTabs key={locale} />
      </div>
    </div>
  );
}
