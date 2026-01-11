"use client";
import HeroProfileCard from "@/components/HeroProfileCard";
import Navbar from "@/components/Navbar";
import AquaBackground from "@/components/AquaBackground";
import ProjectGrid from "@/components/ProjectGrid";
import StatsCards from "@/components/StatsCards";
import ShowoffConsole from "@/components/ShowoffConsole";
import { SectionShell } from "@/components/Sections";
import { useMode } from "@/lib/mode";
import { projects } from "@/data/projects";
import { useState } from "react";
import ProjectDrawer from "@/components/ProjectDrawer";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";

export default function Page() {
  const { mode } = useMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const openById = (id: string) => {
    const p = projects.find((x) => x.id === id) || null;
    if (!p) return;
    setSelected(p);
    setDrawerOpen(true);
  };

  return (
    <main id="top" className="relative min-h-screen">
      <AquaBackground />
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 pt-28 pb-20">

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-7 md:p-10 relative overflow-hidden">

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(120,255,240,0.30),transparent_60%)]" />
            <div className="absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_60%_60%,rgba(90,180,255,0.22),transparent_60%)]" />
          </div>

          <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <div className="text-white/70 text-sm">Computer Science • UIC</div>
              <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
                Sai Vinutha Nalagati
              </h1>
              <p className="mt-4 text-white/75 text-base md:text-lg leading-relaxed">
                I build <span className="text-white">high-performance, real-time systems</span> and 
                <span className="text-white"> full-stack applications</span> using 
                <span className="text-white"> Python</span> and 
                <span className="text-white"> JavaScript</span> with a strong focus on speed, clarity, and reliability.
                <span className="block mt-2">
                  I’m highly adaptable, learn fast, and genuinely enjoy taking ideas from 
                  <span className="text-white"> concept → code → demo-ready</span>.
                </span>
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "JavaScript", "MySQL", "C++", "React", "Node", "Firebase", "Docker", "Kafka/Redpanda", "Postgres", "AWS"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15 transition"
                >
                  View Resume
                </a>
                <a
                  href="https://github.com/saivinuthanalagati-art"
                  target="_blank"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/85 hover:bg-white/10 transition"
                >
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/85 hover:bg-white/10 transition"
                >
                  Contact
                </a>
              </div>

              {mode === "recruiter" && (
                <div className="mt-6 text-sm text-white/65">
                  Recruiter Mode: clean + fast. Flip to Deep Dive for extra personality.
                </div>
              )}
            </div>

            <motion.div
              className="relative Deep Dive-glow"
              animate={
                mode === "Deep Dive"
                  ? { y: [0, -8, 0], opacity: [0.9, 1, 0.9] }
                  : { y: 0, opacity: 0.95 }
              }
              transition={mode === "Deep Dive" ? { duration: 4.2, repeat: Infinity } : { duration: 0.2 }}
            >
            
                
              <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="text-sm text-white/70"> <HeroProfileCard /></div>

                <div className="mt-4 grid grid-cols-2 gap-3">

                </div>


              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <StatsCards />
          <ShowoffConsole onOpen={openById} />
        </div>

        <div className="mt-10" />
        <SectionShell
          id="projects"
          title="Projects"
        >
          <ProjectGrid />
        </SectionShell>

        <div className="mt-10" />
        <SectionShell
          id="skills"
          title="Skills"
          
        >
          <div className="grid gap-4 md:grid-cols-2">
            <SkillCard
              title="Systems & Performance"
              lines={[
                "C++ • concurrency patterns • structured event processing",
                "Used and Learnt in : PulseStream (engine + metrics + dashboard)",
              ]}
            />
            <SkillCard
              title="Real-time Pipelines"
              lines={[
                "Kafka/Redpanda • Node workers • Postgres persistence • Docker compose",
                "Proof: FraudStream (ingest → score → persist → dashboard)",
              ]}
            />
            <SkillCard
              title="Full-Stack Engineering"
              lines={[
                "JavaScript • Python • React UI systems • API layers • interactive tool-style dashboards",
                "Proof: PulseStream + FraudStream dashboards • Full Stack Software Engineer Intern : Easyrewardz Software Services Pvt. Ltd.(Delhi,India)",
              ]}
            />
            <SkillCard
              title="Product & UX Polish"
              lines={[
                "Clean flows • consistent visual systems • readable UI states",
                "Proof: Ledgerly (finance UX), BetterBite (nutrition UI) • Software Developer Intern : Bridgelabz Solutions LLP(Remote)",
              ]}
            />
          </div>
        </SectionShell>

        <div className="mt-10" />
        <SectionShell
          id="experience"
          title="Experience & Leadership"
        >
          <div className="space-y-4">
            <RoleCard
              title="Computer Technical Specialist : School of Public Health (Chicago,IL)"
              lines={[
                "Provided technical support across Windows, macOS, and Unix-based systems for students and staff.",
                "Assisted in building and maintaining internal software tools and scripts used for system support and daily operations.",
                "Diagnosed and resolved hardware, software, and network-related issues to maintain system reliability and minimize downtime.",
                "Supported day-to-day IT operations, including system setup, troubleshooting, and user assistance in a production environment.",
              ]}
            />
            <RoleCard
              title="Full Stack Software Engineer Intern : Easyrewardz Software Services Pvt. Ltd.(Delhi,India)"
              lines={[
              "Designed and developed full-stack reward management portals for three enterprise banking clients using Python-based services and JavaScript frontends.",
              "Optimized backend APIs and data processing workflows, improving response times and reducing overall processing latency",
              "Debugged and resolved issues across frontend and backend layers, contributing to improved stability and user experience.",
              "Collaborated with senior engineers during testing and deployment cycles, identifying and fixing bugs before production release."
            ]}
            />
            <RoleCard
              title="Software Developer Intern : Bridgelabz Solutions LLP(Remote)"
              lines={[
              "Worked with MySQL databases to store, retrieve, and update application data, ensuring data consistency and correct query behavior.",
              "Debugged functional issues by tracing backend execution flow, inspecting logs, and validating database interactions across services.",
              "Assisted in improving code structure and reliability by following team coding standards and participating in peer code reviews.",
              "Gained hands-on experience with real-world development workflows, including debugging in shared codebases, feature iteration, and deployment readiness."
            ]}
            />
            <RoleCard
              title="President: Delta Phi Omega Sorority, Incorporated"lines={[]}
            />
            <RoleCard title="Webmaster : Delta Phi Omega Sorority, Incorporated" lines={[]} />
            <RoleCard title="Volunteer : Asha for Education" lines={[]} />
            <RoleCard title="Volunteer : NanuBhai Education Foundation" lines={[]} />
          </div>
        </SectionShell>

        <div className="mt-10" />
        <SectionShell
          id="contact"
          title="Contact"
          subtitle="If you’re hiring, I’d love to chat."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/70">Email</div>
              <div className="mt-2 text-lg font-semibold">saivinuthanalagati@gmail.com</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/70">Links</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm hover:bg-white/15 transition"
                  href="https://github.com/saivinuthanalagati-art"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10 transition"
                  href="https://www.linkedin.com/in/vinutha-nalagati"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </SectionShell>
      </div>

      <ProjectDrawer open={drawerOpen} project={selected} onClose={() => setDrawerOpen(false)} />
    </main>
  );
}

function MiniTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

function SkillCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-lg font-semibold text-white">{title}</div>
      <ul className="mt-3 space-y-2">
        {lines.map((l, i) => (
          <li key={i} className="text-sm text-white/75">
            <span className="text-white/50 mr-2">•</span>
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoleCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-base font-semibold text-white">{title}</div>
      <ul className="mt-3 space-y-2">
        {lines.map((l, i) => (
          <li key={i} className="text-sm text-white/75">
            <span className="text-white/50 mr-2">•</span>
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
