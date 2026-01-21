import type { PropsWithChildren } from 'react';

export function Card({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`rounded-2xl border border-hub-border bg-hub-card p-5 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
