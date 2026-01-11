"use client";

import { useMemo, useState } from "react";
import { useMode } from "../lib/mode";
import { projects } from "@/data/projects";

const cmds = [
  "help",
  "open pulsestream",
  "open fraudstream",
  "open ledgerly",
  "open betterbite",
  "skills",
  "about",
];

export default function ShowoffConsole({ onOpen }: { onOpen: (id: string) => void }) {
  const { mode } = useMode();
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([
    "vinutha@portfolio:~$ help",
    "commands: help | open <project> | skills | about",
  ]);

  const skillLine = useMemo(
    () =>
      "skills: Python • Dart • Javascript •  C++ • React • Node • Firebase • Docker • Kafka/Redpanda • Postgres • UX polish",
    []
  );

  if (mode !== "Deep Dive") return null;

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    const next: string[] = [`vinutha@portfolio:~$ ${raw}`];

    if (cmd === "help") {
      next.push("commands: help | open <project> | skills | about");
      next.push(`try: ${cmds.slice(1, 5).join(" | ")}`);
    } else if (cmd.startsWith("open ")) {
      const name = cmd.replace("open ", "").trim();
      const found = projects.find((p) => p.id === name || p.title.toLowerCase() === name);
      if (found) {
        next.push(`opening case study: ${found.title} …`);
        onOpen(found.id);
      } else {
        next.push(`not found: "${name}". try: pulsestream | fraudstream | ledgerly | betterbite`);
      }
    } else if (cmd === "skills") {
      next.push(skillLine);
    } else if (cmd === "about") {
      next.push("I build fast, clean systems and UIs that feel alive.");
      next.push("I’m super adaptable , I enjoy learning quickly and shipping real projects.");
    } else {
      next.push(`unknown command. type "help"`);
    }

    setLines((prev) => [...prev, ...next]);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="text-sm text-white/80">Dive Console</div>
        <div className="text-xs text-white/45">try: open pulsestream</div>
      </div>
      <div className="px-4 py-4">
        <div className="h-40 overflow-y-auto rounded-2xl border border-white/10 bg-black/20 p-3 text-sm text-white/80">
          {lines.map((l, i) => (
            <div key={i} className="whitespace-pre-wrap leading-relaxed">
              {l}
            </div>
          ))}
        </div>

        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            run(input);
            setInput("");
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='type "help"'
            className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85 placeholder:text-white/40 outline-none focus:border-white/20"
          />
          <button className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white hover:bg-white/15 transition">
            Run
          </button>
        </form>
      </div>
    </div>
  );
}
