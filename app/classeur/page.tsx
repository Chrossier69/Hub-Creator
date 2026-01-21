'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/Card';
import { Modal } from '@/components/Modal';
import { defaultData, loadData, type Fiche, type HubData } from '@/lib/storage';

export default function ClasseurPage() {
  const [data, setData] = useState<HubData>(defaultData);
  const [search, setSearch] = useState('');
  const [favorisOnly, setFavorisOnly] = useState(false);
  const [difficulty, setDifficulty] = useState('');
  const [selected, setSelected] = useState<Fiche | null>(null);

  useEffect(() => {
    setData(loadData());
  }, []);

  const fiches = useMemo(() => {
    return data.fiches.filter((fiche) => {
      const matchesSearch = fiche.titre.toLowerCase().includes(search.toLowerCase());
      const matchesFavoris = favorisOnly ? fiche.favoris : true;
      const matchesDifficulty = difficulty ? fiche.difficulte === difficulty : true;
      return matchesSearch && matchesFavoris && matchesDifficulty;
    });
  }, [data.fiches, search, favorisOnly, difficulty]);

  return (
    <section className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <Card className="h-fit">
        <h2 className="text-lg font-semibold">Filtres</h2>
        <div className="mt-4 space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase text-slate-400">Recherche</label>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher une fiche"
              className="mt-2 w-full rounded-xl border border-hub-border bg-white px-3 py-2 text-sm"
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={favorisOnly}
              onChange={(event) => setFavorisOnly(event.target.checked)}
              className="h-4 w-4 rounded border-hub-border"
            />
            Favoris uniquement
          </label>
          <div>
            <label className="text-xs font-semibold uppercase text-slate-400">Difficulté</label>
            <select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
              className="mt-2 w-full rounded-xl border border-hub-border bg-white px-3 py-2 text-sm"
            >
              <option value="">Toutes</option>
              <option value="Facile">Facile</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Avancée">Avancée</option>
            </select>
          </div>
        </div>
      </Card>

      <div>
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-slate-400">Classeur</p>
          <h1 className="mt-2 text-2xl font-semibold">Fiches essentielles</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {fiches.map((fiche) => (
            <motion.button
              key={fiche.id}
              type="button"
              onClick={() => setSelected(fiche)}
              whileHover={{ y: -6 }}
              className="text-left"
            >
              <Card className="h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{fiche.titre}</h3>
                  {fiche.favoris && <span className="text-xs font-semibold text-hub-js">★ Favori</span>}
                </div>
                <p className="mt-2 text-sm text-slate-500">{fiche.contenu}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {fiche.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.button>
          ))}
        </div>
      </div>

      <Modal open={Boolean(selected)} onClose={() => setSelected(null)}>
        {selected && (
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">{selected.difficulte}</p>
              <h2 className="mt-2 text-2xl font-semibold">{selected.titre}</h2>
              <p className="mt-2 text-sm text-slate-600">{selected.contenu}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700">Exemples</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                {selected.exemples.map((exemple) => (
                  <li key={exemple}>{exemple}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700">Notes personnelles</h3>
              <p className="mt-2 text-sm text-slate-600">{selected.notes}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
