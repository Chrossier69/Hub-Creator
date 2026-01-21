'use client';

import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes } from 'react';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full border border-hub-border bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const variantStyles =
    variant === 'primary'
      ? 'shadow-soft hover:-translate-y-0.5 hover:shadow-lg'
      : 'bg-transparent hover:bg-slate-50';

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    />
  );
}
