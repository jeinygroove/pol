import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/routing';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';
import '../globals.css';

const localeMetadata: Record<string, { title: string; description: string; ogLocale: string }> = {
  de: {
    title: 'Polerinna – Pole Dance Studios München',
    description: 'Pole Dance Studios in München – zwei Standorte in Lindwurmstraße & Hofmannstraße. Kurse für alle Levels. Jetzt Kurs buchen!',
    ogLocale: 'de_DE',
  },
  en: {
    title: 'Polerinna – Pole Dance Studios Munich',
    description: 'Pole dance studios in Munich with two locations. Classes for all levels – beginner to advanced. Book your class now!',
    ogLocale: 'en_GB',
  },
  ru: {
    title: 'Polerinna – Студии Пол-Дэнс в Мюнхене',
    description: 'Студии пол-дэнс в Мюнхене – два зала, занятия для всех уровней. Запишитесь на курс прямо сейчас!',
    ogLocale: 'ru_RU',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = localeMetadata[locale] ?? localeMetadata.de;

  const alternates: Record<string, string> = {};
  routing.locales.forEach((l) => {
    alternates[l] = `${siteConfig.url}/${l}`;
  });

  return {
    title: { default: meta.title, template: `%s | Polerinna München` },
    description: meta.description,
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: alternates,
    },
    openGraph: {
      locale: meta.ogLocale,
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => localeMetadata[l].ogLocale),
    },
  };
}

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'de' | 'en' | 'ru')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={montserrat.variable}>
      <body className="font-sans bg-white text-neutral-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
