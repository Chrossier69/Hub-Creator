'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { defaultData, loadData, type HubData } from '@/lib/storage';

const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

export default function CahierPage() {
  const [data, setData] = useState<HubData>(defaultData);

  useEffect(() => {
    setData(loadData());
  }, []);

  const tasksByDay = useMemo(() => {
    return days.map((day, index) => {
      const date = new Date();
      date.setDate(date.getDate() - date.getDay() + 1 + index);
      const key = date.toDateString();
      const tasks = data.taches.filter((task) => new Date(task.date).toDateString() === key);
      return { day, date, tasks };
    });
  }, [data.taches]);

  return (
    <section className="relative">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-slate-400">Cahier hebdomadaire</p>
        <h1 className="mt-2 text-2xl font-semibold">Timeline de la semaine</h1>
      </div>
      <div className="space-y-6">
        {tasksByDay.map(({ day, date, tasks }) => (
          <div key={day} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{day}</div>
              <div className="mt-2 h-full w-px bg-slate-200" />
            </div>
            <Card className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  {date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                </h2>
                <span className="text-xs text-slate-400">{tasks.length} tâches</span>
              </div>
              <ul className="mt-4 space-y-2">
                {tasks.length === 0 && <li className="text-sm text-slate-400">Aucune tâche prévue.</li>}
                {tasks.map((task) => (
                  <li key={task.id} className="flex items-center gap-2 text-sm text-slate-600">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        task.statut === 'done' ? 'bg-emerald-500' : 'bg-amber-400'
                      }`}
                    />
                    {task.titre}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>

      <motion.div className="fixed bottom-8 right-8" whileHover={{ scale: 1.05 }}>
        <Button type="button" className="rounded-full px-5 py-3 shadow-soft">
          + Ajouter une tâche
        </Button>
      </motion.div>
    </section>
  );
}
