'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

/*
  SOZIALE NETZWERKE — trage hier deine echten Links ein:
*/
const SOCIAL_LINKS = {
  instagram_polerinna: 'https://www.instagram.com/pole_dance_munich',
  instagram_gold: 'https://www.instagram.com/poledancemunchen',
  facebook: 'https://www.facebook.com/DEINE_SEITE',
  tiktok: 'https://www.tiktok.com/@DEIN_ACCOUNT',
};

/*
  KONTAKT — trage hier deine echten Kontaktdaten ein:
*/
const CONTACT = {
  email: 'Polerinna@t-online.de',
  phone: '+49 157 30677320',
};

export default function Footer() {
  const t = useTranslations('footer');
  const ct = useTranslations('contact');
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logo-polerinna.png"
                alt="Polerinna Poledance Studio"
                width={180}
                height={72}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Pole Dance & Aerial Arts in München. Zwei Studios – ein Zuhause für deine Leidenschaft.
            </p>
          </div>

          {/* Studios */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-neutral-400 mb-4">Studios</h3>
            <div className="flex flex-col gap-6">
              <div>
                <Image
                  src="/images/logo-polerinna.png"
                  alt="Polerinna"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain brightness-0 invert mb-1"
                />
                <p className="text-neutral-400 text-xs">Lindwurmstraße 101, 80337 München</p>
              </div>
              <div>
                <Image
                  src="/images/logo-polerinna-gold.png"
                  alt="Polerinna GOLD"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain mb-1"
                />
                <p className="text-neutral-400 text-xs">Hofmannstraße 7A, 81379 München</p>
              </div>
            </div>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
              {ct('follow')}
            </h3>
            <div className="flex flex-col gap-3 mb-6">
              {/* Instagram Polerinna */}
              <a
                href={SOCIAL_LINKS.instagram_polerinna}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 border border-neutral-700 flex items-center justify-center group-hover:border-white transition-colors flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </span>
                <span className="text-xs">@pole_dance_munich</span>
              </a>

              {/* Instagram GOLD */}
              <a
                href={SOCIAL_LINKS.instagram_gold}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-amber-500 hover:text-amber-300 transition-colors group"
              >
                <span className="w-8 h-8 border border-amber-700 flex items-center justify-center group-hover:border-amber-400 transition-colors flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </span>
                <span className="text-xs">@poledancemunchen</span>
              </a>
            </div>

            <div className="flex flex-col gap-1 text-sm text-neutral-400">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`} className="hover:text-white transition-colors">
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs">
            © {year} Polerinna. {t('rights')}.
          </p>
          <div className="flex items-center gap-6 text-xs text-neutral-500">
            <Link href={`/${locale}/impressum`} className="hover:text-white transition-colors">
              {t('impressum')}
            </Link>
            <Link href={`/${locale}/datenschutz`} className="hover:text-white transition-colors">
              {t('datenschutz')}
            </Link>
            <Link href={`/${locale}/agb`} className="hover:text-white transition-colors">
              {t('agb')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
