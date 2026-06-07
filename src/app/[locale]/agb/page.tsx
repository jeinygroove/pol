import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'AGB', robots: { index: false } };

const SECTIONS = [
  {
    title: '1. Geltungsbereich',
    text: [
      'Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen, Kurse und Angebote des Polerinna Studios.',
      'Mit der Buchung eines Kurses oder einer Mitgliedschaft akzeptieren die Teilnehmer diese AGB.',
    ],
  },
  {
    title: '2. Anmeldung und Buchung',
    text: [
      'Die Anmeldung zu Kursen und Angeboten erfolgt über die Plattform Eversports oder über Wellpass.',
      'Jede Buchung ist verbindlich und verpflichtet zur Zahlung der jeweiligen Kursgebühr.',
      'Mit Abschluss der Buchung kommt ein verbindlicher Vertrag zustande.',
    ],
  },
  {
    title: '3. Preise und Zahlung',
    text: [
      'Die jeweils aktuellen Preise sind auf der Buchungsplattform Eversports einsehbar.',
      'Die Zahlung erfolgt direkt bei der Buchung über Eversports oder im Rahmen der Wellpass-Mitgliedschaft gemäß den jeweiligen Wellpass-Konditionen.',
    ],
  },
  {
    title: '4. Stornierung und Nichterscheinen',
    text: [
      'Stornierungen von über Eversports gebuchten Kursen sind ausschließlich über Eversports möglich. Stornierungen von über Wellpass gebuchten Kursen erfolgen gemäß den Wellpass-Stornierungsregeln.',
      'Eine kostenfreie Stornierung ist bis spätestens 24 Stunden vor Kursbeginn möglich.',
      'Bei späteren Stornierungen oder Nichterscheinen verfällt die gebuchte Einheit ersatzlos. Eine Rückerstattung oder Nachholung ist in diesem Fall ausgeschlossen.',
    ],
  },
  {
    title: '5. Kursorganisation',
    text: [
      'Das Studio behält sich vor, Kurse bei zu geringer Teilnehmerzahl oder aus organisatorischen Gründen abzusagen oder zu verschieben.',
      'Im Falle einer Absage durch das Studio wird ein Ersatztermin angeboten oder die Kursgebühr gutgeschrieben bzw. erstattet.',
      'Änderungen im Kursplan werden rechtzeitig bekanntgegeben.',
    ],
  },
  {
    title: '6. Teilnahmevoraussetzungen und Gesundheit',
    text: [
      'Die Teilnahme an den Kursen erfolgt auf eigene Verantwortung.',
      'Die Teilnehmer bestätigen mit der Buchung, dass sie gesundheitlich in der Lage sind, am Training teilzunehmen.',
      'Den Anweisungen der Trainer ist Folge zu leisten.',
    ],
  },
  {
    title: '7. Haftung',
    text: [
      'Das Studio haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen.',
      'Für einfache Fahrlässigkeit haftet das Studio nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten).',
      'Eine Haftung für persönliche Gegenstände wird nicht übernommen.',
    ],
  },
  {
    title: '8. Hausordnung',
    text: [
      'Die Teilnehmer verpflichten sich, die Räumlichkeiten und das Equipment pfleglich zu behandeln.',
      'Gefährdendes oder respektloses Verhalten kann zum Ausschluss vom Training führen.',
    ],
  },
  {
    title: '9. Bild- und Tonaufnahmen',
    text: [
      'Foto- und Videoaufnahmen sind nur zulässig, sofern andere Teilnehmer nicht ohne deren Zustimmung aufgenommen werden und der Kursablauf nicht gestört wird.',
    ],
  },
  {
    title: '10. Datenschutz',
    text: [
      'Informationen zur Verarbeitung personenbezogener Daten sind in der separaten Datenschutzerklärung auf der Website einsehbar.',
    ],
  },
  {
    title: '11. Schlussbestimmungen',
    text: [
      'Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.',
      'Es gilt das Recht der Bundesrepublik Deutschland.',
    ],
  },
];

export default function AGBPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-12">
          Allgemeine Geschäftsbedingungen (AGB) – Polerinna Studio
        </h1>

        {SECTIONS.map((s, i) => (
          <section key={i} className="mb-8">
            <h2 className="font-semibold text-neutral-900 mb-3">{s.title}</h2>
            <div className="flex flex-col gap-3">
              {s.text.map((para, j) => (
                <p key={j} className="text-neutral-600 leading-relaxed">{para}</p>
              ))}
            </div>
            {i < SECTIONS.length - 1 && <hr className="mt-8 border-neutral-100" />}
          </section>
        ))}
      </div>
    </div>
  );
}
