"use client";

import { useEffect, useState } from "react";
import { useMode } from "../lib/mode";

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

export default function StatsCards() {
  const { mode } = useMode();
  const [t, setT] = useState(0);

  useEffect(() => {
    if (mode !== "Deep Dive") return;
    const id = window.setInterval(() => setT((x) => x + 1), 900);
    return () => window.clearInterval(id);
  }, [mode]);

  if (mode !== "Deep Dive") return null;

  const throughput = clamp(820 + Math.sin(t / 2) * 90 + Math.random() * 20, 650, 980);
  const latency = clamp(14 + Math.cos(t / 2.6) * 3 + Math.random() * 1.2, 10, 22);
  const uptime = clamp(99.92 + Math.sin(t / 5) * 0.03, 99.85, 99.99);

  const items = [
    { label: "Throughput", value: `${throughput.toFixed(0)} evt/s`, hint: "simulated" },
    { label: "Latency", value: `${latency.toFixed(1)} ms`, hint: "simulated" },
    { label: "Uptime", value: `${uptime.toFixed(2)}%`, hint: "simulated" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.label}
          className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <div className="text-sm text-white/70">{it.label}</div>
          <div className="mt-2 text-2xl font-semibold text-white">{it.value}</div>
          <div className="mt-2 text-xs text-white/45">{it.hint}</div>
        </div>
      ))}
    </div>
  );
}
