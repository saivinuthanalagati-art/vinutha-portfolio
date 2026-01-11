"use client";

import { BadgeCheck, GraduationCap } from "lucide-react";

export default function HeroProfileCard() {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center">
      <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4] overflow-hidden rounded-3xl">
        <img
          src="/profilepic.jpg"
          alt="Sai Vinutha Nalagati"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 items-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-5 py-2 text-sm text-emerald-100 backdrop-blur">
          <BadgeCheck size={16} />
          Open to Work
        </span>

        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm text-white/85 backdrop-blur">
          <GraduationCap size={16} />
          Graduating May 2026
        </span>
      </div>
    </div>
  );
}
