"use client";

import { motion } from "framer-motion";
import { useMode } from "../lib/mode";

export function SectionShell({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const { mode } = useMode();

  return (
    <section id={id} className="scroll-mt-28">
      <motion.div
        initial={mode === "Deep Dive" ? { opacity: 0, y: 10 } : false}
        whileInView={mode === "Deep Dive" ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: mode === "Deep Dive" ? 0.5 : 0.2 }}
        className="rounded-[28px] border border-white/10 bg-white/4 backdrop-blur-xl p-6 md:p-8"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
          </div>
        </div>
        <div className="mt-6">{children}</div>
      </motion.div>
    </section>
  );
}
