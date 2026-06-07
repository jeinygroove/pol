import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Impressum', robots: { index: false } };

export default function ImpressumPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-12">Impressum</h1>

        <section className="mb-10">
          <h2 className="text-sm tracking-widest uppercase text-gold-500 mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-neutral-700 leading-relaxed">
            Inna Zhalybina<br />
            Pole Dance Studio &quot;Polerinna&quot;<br />
            Lindwurmstraße 101<br />
            80337 München
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-sm tracking-widest uppercase text-gold-500 mb-4">Kontakt</h2>
          <p className="text-neutral-700 leading-relaxed">
            Telefon: +49 157 30677320<br />
            E-Mail: Polerinna@t-online.de
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-sm tracking-widest uppercase text-gold-500 mb-4">Postadresse</h2>
          <p className="text-neutral-700 leading-relaxed">
            Hofmannstraße 7A<br />
            81379 München
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-sm tracking-widest uppercase text-gold-500 mb-4">
            Verbraucher&shy;streit&shy;beilegung / Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <p className="text-neutral-400 text-sm">
          Quelle:{' '}
          <a
            href="https://www.e-recht24.de"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-600 transition-colors"
          >
            e-recht24.de
          </a>
        </p>
      </div>
    </div>
  );
}
