'use client';

import { motion } from 'framer-motion';

type TaskItemProps = {
  title: string;
  done: boolean;
};

export function TaskItem({ title, done }: TaskItemProps) {
  return (
    <motion.label
      whileHover={{ x: 6 }}
      className="flex cursor-pointer items-center gap-3 rounded-xl border border-hub-border bg-white px-4 py-3 text-sm shadow-sm"
    >
      <motion.span
        initial={false}
        animate={{
          backgroundColor: done ? '#264653' : '#FFFFFF',
          borderColor: done ? '#264653' : '#E5E5E5'
        }}
        className="flex h-5 w-5 items-center justify-center rounded-full border"
      >
        {done && <motion.span layoutId="check" className="h-2.5 w-2.5 rounded-full bg-white" />}
      </motion.span>
      <span className={`${done ? 'line-through text-slate-400' : 'text-slate-700'}`}>{title}</span>
    </motion.label>
  );
}
