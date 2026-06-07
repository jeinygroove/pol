import { getTranslations } from 'next-intl/server';
import ScheduleTabs from '@/components/ScheduleTabs';

export default async function SchedulePage() {
  const t = await getTranslations('schedule');

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
        <ScheduleTabs />
      </div>
    </div>
  );
}
