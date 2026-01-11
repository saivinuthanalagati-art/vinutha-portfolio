"use client";

import { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useMode } from "@/lib/mode";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const { mode } = useMode();

  return (
    <motion.div
      className="group rounded-3xl border border-white/10 bg-white/6 backdrop-blur-xl p-6 hover:bg-white/10 transition relative"
      initial={mode === "Deep Dive" ? { opacity: 0, y: 10 } : false}
      whileInView={mode === "Deep Dive" ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: mode === "Deep Dive" ? 0.45 : 0.2 }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(120,255,240,0.35),transparent_60%)]" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_60%_60%,rgba(90,180,255,0.28),transparent_60%)]" />
      </div>

      <div className="relative">
        {project.media?.cover ? (
          <div className="relative w-full h-[380px] md:h-[420px] rounded-xl bg-black/10 flex items-center justify-center">

              <img
                src={project.media.cover}
                alt={`${project.title} screenshot`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
        ) : null}

        <div className="text-lg font-semibold text-white">{project.title}</div>
        <div className="text-sm text-white/70 mt-1">{project.subtitle}</div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((h, idx) => (
            <li key={idx} className="text-sm text-white/75 leading-relaxed break-words">
              <span className="text-white/50 mr-2">•</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2">
            {project.links.github && (
              <a
                className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 grid place-items-center hover:bg-white/10 transition"
                href={project.links.github}
                target="_blank"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {project.links.demo && (
              <a
                className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 grid place-items-center hover:bg-white/10 transition"
                href={project.links.demo}
                target="_blank"
                aria-label="Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <button
            onClick={() => onOpen(project)}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
          >
            Case Study
          </button>
        </div>
      </div>
    </motion.div>
  );
}
