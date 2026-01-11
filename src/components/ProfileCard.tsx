"use client";

import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] hover:bg-white/7 transition">
      <div className="text-lg font-semibold text-white">{project.title}</div>
      <div className="mt-1 text-sm text-white/70">{project.subtitle}</div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
          >
            {t}
          </span>
        ))}
      </div>

      <button
        onClick={() => onOpen(project)}
        className="mt-5 w-full rounded-2xl border border-white/10 bg-white/10 py-3 text-sm text-white/90 hover:bg-white/15 transition"
      >
        Open Case Study
      </button>
    </div>
  );
}
