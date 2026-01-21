'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './Button';

const classeurs = [
  { name: 'HTML', color: 'bg-hub-html/20 border-hub-html/40 text-hub-html' },
  { name: 'CSS', color: 'bg-hub-css/20 border-hub-css/40 text-hub-css' },
  { name: 'JS', color: 'bg-hub-js/20 border-hub-js/40 text-hub-js' },
  { name: 'React', color: 'bg-hub-react/20 border-hub-react/40 text-hub-react' },
  { name: 'Design', color: 'bg-hub-design/20 border-hub-design/40 text-hub-react' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hub-border bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-slate-900">
          HubCréator
        </Link>
        <nav className="flex flex-1 items-center gap-3">
          {classeurs.map((classeur, index) => (
            <motion.div
              key={classeur.name}
              className={`relative rounded-t-xl border border-b-0 px-4 py-2 text-sm font-semibold shadow-sm ${
                classeur.color
              } ${index === 2 ? 'z-20 -mb-1 shadow-tab' : 'z-10'} `}
              initial={false}
              whileHover={{ y: -4, rotate: -1 }}
            >
              <span className="relative z-10">{classeur.name}</span>
              <span className="absolute inset-0 rounded-t-xl bg-gradient-to-b from-white/30 via-transparent to-transparent" />
            </motion.div>
          ))}
        </nav>
        <Button type="button">+ Nouveau classeur</Button>
      </div>
    </header>
  );
}
