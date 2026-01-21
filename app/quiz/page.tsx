import { Card } from '@/components/Card';

export default function QuizPage() {
  return (
    <section>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-slate-400">Quiz</p>
        <h1 className="mt-2 text-2xl font-semibold">Préparer un quiz rapide</h1>
      </div>
      <Card>
        <p className="text-sm text-slate-600">
          Cet espace accueillera le générateur de quiz et les sessions de révision interactives.
        </p>
      </Card>
    </section>
  );
}
