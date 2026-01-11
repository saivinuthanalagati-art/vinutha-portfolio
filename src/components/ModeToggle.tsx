"use client";

import { useMode } from "../lib/mode";
import { cn } from "@/lib/cn";

export default function ModeToggle() {
  const { mode, setMode } = useMode();

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
      <button
        onClick={() => setMode("recruiter")}
        className={cn(
          "rounded-full px-3 py-1 text-xs transition",
          mode === "recruiter"
            ? "bg-white/15 text-white"
            : "text-white/70 hover:text-white"
        )}
      >
        Recruiter
      </button>
      <button
        onClick={() => setMode("Deep Dive")}
        className={cn(
          "rounded-full px-3 py-1 text-xs transition",
          mode === "Deep Dive"
            ? "bg-white/15 text-white"
            : "text-white/70 hover:text-white"
        )}
      >
        Deep Dive 
      </button>
    </div>
  );
}
