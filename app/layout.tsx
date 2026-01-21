import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'HubCréator',
  description: 'HubCréator MVP - organiser son apprentissage et ses idées.'
};

const routes = [
  { href: '/', label: 'Dashboard' },
  { href: '/classeur', label: 'Classeur' },
  { href: '/cahier', label: 'Cahier' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/ia', label: 'IA' }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <nav className="border-b border-hub-border bg-white">
          <div className="mx-auto flex max-w-6xl gap-4 px-6 py-3 text-sm font-semibold text-slate-500">
            {routes.map((route) => (
              <Link key={route.href} href={route.href} className="transition hover:text-slate-900">
                {route.label}
              </Link>
            ))}
          </div>
        </nav>
        <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
