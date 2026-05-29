import { getTranslations } from 'next-intl/server';

export default async function AGBPage() {
  const t = await getTranslations('agb');

  const sections = Array.from({ length: 10 }, (_, i) => ({
    title: t(`section${i + 1}_title`),
    text: t(`section${i + 1}_text`),
  }));

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-12">{t('title')}</h1>

        {sections.map((s, i) => (
          <section key={i} className="mb-8">
            <h2 className="font-semibold text-neutral-900 mb-3">{s.title}</h2>
            <p className="text-neutral-600 leading-relaxed">{s.text}</p>
            {i < sections.length - 1 && <hr className="mt-8 border-neutral-100" />}
          </section>
        ))}
      </div>
    </div>
  );
}
