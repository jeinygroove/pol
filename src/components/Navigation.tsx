'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { routing } from '@/routing';

const localeLabels: Record<string, string> = { de: 'DE', en: 'EN', ru: 'RU' };

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/schedule', label: t('schedule') },
    { href: '/gallery', label: t('gallery') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/images/logo-polerinna.png"
            alt="Polerinna Poledance Studio"
            width={160}
            height={64}
            className={`h-12 w-auto object-contain transition-all ${scrolled ? 'brightness-0' : 'brightness-0 invert'}`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const fullHref = `/${locale}${link.href === '/' ? '' : link.href}`;
            const isActive = pathname === fullHref;
            return (
              <Link
                key={link.href}
                href={fullHref}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  isActive
                    ? 'text-rose-700 font-semibold'
                    : 'text-neutral-700 hover:text-rose-600'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Language switcher + Book CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs tracking-wider">
            {routing.locales.map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="text-neutral-300 mx-1">|</span>}
                <Link
                  href={`/${l}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`}
                  className={`transition-colors ${
                    l === locale
                      ? 'text-rose-700 font-semibold'
                      : 'text-neutral-500 hover:text-rose-600'
                  }`}
                >
                  {localeLabels[l]}
                </Link>
              </span>
            ))}
          </div>
          <Link
            href={`/${locale}/schedule`}
            className="bg-rose-700 text-white text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-rose-800 transition-colors"
          >
            {t('home') === 'Главная' ? 'Записаться' : t('home') === 'Home' ? 'Book Now' : 'Buchen'}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-neutral-800 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-neutral-800 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-neutral-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const fullHref = `/${locale}${link.href === '/' ? '' : link.href}`;
            return (
              <Link
                key={link.href}
                href={fullHref}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-neutral-700 hover:text-rose-600"
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-3 pt-2 border-t border-neutral-100">
            {routing.locales.map((l) => (
              <Link
                key={l}
                href={`/${l}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`}
                onClick={() => setMenuOpen(false)}
                className={`text-xs tracking-wider ${
                  l === locale ? 'text-rose-700 font-semibold' : 'text-neutral-500'
                }`}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
