import { getTranslations } from 'next-intl/server';

export default async function DatenschutzPage() {
  const t = await getTranslations('datenschutz');

  const sections = [
    { title: t('responsible_title'), text: t('responsible_text') },
    { title: t('cookies_title'), text: t('cookies_text') },
    { title: t('hosting_title'), text: t('hosting_text') },
    { title: t('rights_title'), text: t('rights_text') },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-4">{t('title')}</h1>
        <p className="text-neutral-600 leading-relaxed mb-12">{t('intro')}</p>

        {sections.map((s) => (
          <section key={s.title} className="mb-10">
            <h2 className="text-sm tracking-widest uppercase text-rose-700 mb-4">{s.title}</h2>
            <p className="text-neutral-600 leading-relaxed">{s.text}</p>
          </section>
        ))}

        <section className="mb-10 p-6 bg-neutral-50 border-l-4 border-rose-200">
          <p className="text-sm text-neutral-500">
            Diese Datenschutzerklärung wurde erstellt und entspricht den Anforderungen der DSGVO (Datenschutz-Grundverordnung) und des BDSG (Bundesdatenschutzgesetz). Bei Fragen wenden Sie sich bitte an uns.
          </p>
        </section>
      </div>
    </div>
  );
}
