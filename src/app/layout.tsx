import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polerinna – Pole Dance Studio München',
  description: 'Pole Dance und Aerial Arts Studio in München. Kurse für alle Levels.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
