"use client";

import { Project } from "@/data/projects";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/lib/mode";

export default function ProjectDrawer({
  open,
  project,
  onClose,
}: {
  open: boolean;
  project: Project | null;
  onClose: () => void;
}) {
  const { mode } = useMode();

  return (
    <AnimatePresence>
      {open && project && (
        <>
          <motion.button
            aria-label="Close drawer overlay"
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 h-full w-full sm:w-[640px] border-l border-white/10 bg-white/5 backdrop-blur-2xl flex flex-col"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: mode === "Deep Dive" ? 0.35 : 0.2 } }}
            exit={{ x: 40, opacity: 0, transition: { duration: 0.18 } }}
          >
            <div className="flex items-start justify-between p-5 border-b border-white/10 shrink-0">
              <div>
                <div className="text-xl font-semibold text-white">{project.title}</div>
                <div className="text-white/70 text-sm">{project.subtitle}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 grid place-items-center hover:bg-white/10 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5 space-y-6 overflow-y-auto h-[calc(100%-72px)]">
              <Section title="Problem" items={[project.details.problem]} />
              <Section title="Approach" items={project.details.approach} />
              <Section title="Architecture" items={project.details.architecture} />
              <Section title="Challenges" items={project.details.challenges} />
              <Section title="Results" items={project.details.results} />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold text-white">{title}</div>
      <ul className="mt-3 space-y-2">
        {items.map((x, i) => (
          <li key={i} className="text-sm text-white/75 leading-relaxed">
            <span className="text-white/50 mr-2">•</span>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}
