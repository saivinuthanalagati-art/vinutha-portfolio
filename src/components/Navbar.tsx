"use client";

import ModeToggle from "./ModeToggle";
import { Github, Linkedin, FileText } from "lucide-react";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="text-sm text-white/80 hover:text-white transition"
  >
    {label}
  </a>
);

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/10 grid place-items-center">
                <span className="text-sm font-semibold">:)</span>
              </div>
              <div className="hidden sm:block leading-tight">
                <div className="text-sm font-semibold text-white">Sai Vinutha Nalagati</div>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#skills" label="Skills" />
              <NavLink href="#experience" label="Experience" />
              <NavLink href="#contact" label="Contact" />
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/saivinuthanalagati-art"
                target="_blank"
                className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 grid place-items-center hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/vinutha-nalagati"
                target="_blank"
                className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 grid place-items-center hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="/resume.pdf"
                className="hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition"
              >
                <FileText size={16} />
                Resume
              </a>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
