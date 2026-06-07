import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: 'Galerie – Einblicke ins Studio',
    en: 'Gallery – Inside the Studio',
    ru: 'Галерея – жизнь студии',
  };
  return { title: titles[locale] ?? titles.de };
}

export default async function GalleryPage() {
  const t = await getTranslations('gallery');

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">
          Polerinna Studio
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          {t('title')}
        </h1>
      </div>

      <GalleryGrid />
    </div>
  );
}
