"use client";

import { useMemo, useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDrawer from "./ProjectDrawer";
import { useMode } from "@/lib/mode";

const filters = ["All", "Systems", "Streaming", "Full-Stack", "Mobile" , "Backend"];

function classify(p: Project) {
  const t = p.tags.join(" ").toLowerCase();
  if (t.includes("c++") || t.includes("concurrency")) return "Systems";
  if (t.includes("kafka") || t.includes("redpanda") || t.includes("postgres")) return "Streaming";
  if (t.includes("react") || t.includes("node") || t.includes("javascript")) return "Full-Stack";
  if (t.includes("Python") || t.includes("api") || t.includes("backend")) return "Backend";
  if (t.includes("flutter")) return "Mobile";
  return "Full-Stack";
}

export default function ProjectGrid() {
  const { mode } = useMode();
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const list = useMemo(() => {
    return projects
      .filter((p) => (active === "All" ? true : classify(p) === active))
      .filter((p) => {
        const q = query.trim().toLowerCase();
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
  }, [active, query]);

  const onOpen = (p: Project) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={[
                "rounded-full border px-4 py-2 text-sm transition",
                active === f
                  ? "border-white/15 bg-white/12 text-white"
                  : "border-white/10 bg-white/5 text-white/75 hover:bg-white/10",
              ].join(" ")}
            >
              {f}
            </button>
          ))}
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects (e.g., C++, Kafka, Firebase)"
          className="w-full md:w-[360px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85 placeholder:text-white/45 outline-none focus:border-white/20"
        />
      </div>


      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {list.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={onOpen} />
        ))}
      </div>

      <ProjectDrawer open={open} project={selected} onClose={() => setOpen(false)} />
    </>
  );
}
