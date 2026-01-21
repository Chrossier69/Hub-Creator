import { Card } from '@/components/Card';

export default function IAPage() {
  return (
    <section>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-slate-400">IA</p>
        <h1 className="mt-2 text-2xl font-semibold">Assistant HubCréator</h1>
      </div>
      <Card>
        <p className="text-sm text-slate-600">
          Zone IA prête à accueillir des suggestions de fiches, des résumés et des prompts guidés.
        </p>
      </Card>
    </section>
  );
}
