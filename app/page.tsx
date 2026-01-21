'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { TaskItem } from '@/components/TaskItem';
import { defaultData, loadData, type HubData } from '@/lib/storage';

export default function DashboardPage() {
  const [data, setData] = useState<HubData>(defaultData);

  useEffect(() => {
    setData(loadData());
  }, []);

  const tasksToday = useMemo(() => data.taches.slice(0, 5), [data]);
  const doneCount = tasksToday.filter((task) => task.statut === 'done').length;

  return (
    <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
      <Card>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Cahier du jour</p>
            <h2 className="mt-2 text-2xl font-semibold">Focus du jour</h2>
            <p className="mt-1 text-sm text-slate-500">{doneCount}/5 tâches complétées</p>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'short' })}
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {tasksToday.map((task) => (
            <TaskItem key={task.id} title={task.titre} done={task.statut === 'done'} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button type="button">+ Nouvelle tâche</Button>
          <Link href="/cahier" className="inline-flex">
            <Button type="button" variant="ghost">
              Voir la semaine
            </Button>
          </Link>
        </div>
      </Card>

      <Card className="flex flex-col">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">Ampoule du jour</p>
          <h2 className="mt-2 text-2xl font-semibold">Rappels inspirants</h2>
        </div>
        <div className="mt-6 space-y-4">
          {[
            'Transformer chaque fiche en mini histoire pour mieux retenir.',
            'Réutiliser le code appris dans un mini projet de 15 minutes.',
            'Programmer un rappel pour réviser les notions clés demain.'
          ].map((reminder) => (
            <div key={reminder} className="rounded-2xl border border-hub-border bg-white p-4 shadow-sm">
              <p className="text-sm text-slate-600">{reminder}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/classeur" className="inline-flex">
            <Button type="button" variant="ghost">
              Voir tous les rappels
            </Button>
          </Link>
        </div>
      </Card>
    </section>
  );
}
