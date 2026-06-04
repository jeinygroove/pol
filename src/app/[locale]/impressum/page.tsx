import { getTranslations } from 'next-intl/server';

export default async function ImpressumPage() {
  const t = await getTranslations('impressum');

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-12">{t('title')}</h1>

        <section className="mb-10">
          <h2 className="text-sm tracking-widest uppercase text-gold-500 mb-4">{t('angaben')}</h2>
          <p className="text-neutral-700 whitespace-pre-line">
            {t('owner')}{'\n'}
            {t('address')}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-sm tracking-widest uppercase text-gold-500 mb-4">{t('contact_title')}</h2>
          <p className="text-neutral-700">{t('phone')}</p>
          <p className="text-neutral-700">{t('email')}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-sm tracking-widest uppercase text-gold-500 mb-4">{t('responsible')}</h2>
          <p className="text-neutral-700">
            {t('owner')}{'\n'}
            {t('address')}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-sm tracking-widest uppercase text-gold-500 mb-4">{t('disclaimer')}</h2>
          <p className="text-neutral-600 leading-relaxed">{t('disclaimer_text')}</p>
        </section>
      </div>
    </div>
  );
}
