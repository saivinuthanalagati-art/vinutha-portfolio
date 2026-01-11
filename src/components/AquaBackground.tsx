"use client";

import { useEffect, useMemo, useRef } from "react";
import { useMode } from "../lib/mode";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
};

export default function AquaBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { mode } = useMode();

  const settings = useMemo(() => {
    return mode === "Deep Dive"
      ? { count: 160, speed: 1.05, glow: 1.15 }
      : { count: 55, speed: 0.55, glow: 0.6 };
  }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: settings.count }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 0.8 + Math.random() * 2.4,
      vx: (-0.15 + Math.random() * 0.3) * settings.speed,
      vy: (-0.35 + Math.random() * 0.2) * settings.speed,
      a: 0.06 + Math.random() * 0.14,
    }));

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      if (mode === "Deep Dive") {
        const grd = ctx.createLinearGradient(0, 0, 0, h);
        grd.addColorStop(0, "rgba(160, 230, 255, 0.09)");
        grd.addColorStop(0.35, "rgba(160, 230, 255, 0.03)");
        grd.addColorStop(1, "rgba(120, 255, 240, 0)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, w, h);
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) p.y = h + 10;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const alpha = p.a * settings.glow ;
        ctx.fillStyle = `rgba(120, 210, 255, ${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [mode, settings.count, settings.glow, settings.speed]);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-[#020814] via-[#021327] to-[#01040a]" />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_55%_5%,rgba(120,210,255,0.22),transparent_55%),radial-gradient(1100px_circle_at_50%_35%,rgba(10,90,170,0.35),transparent_60%),radial-gradient(900px_circle_at_15%_55%,rgba(0,35,90,0.55),transparent_65%),radial-gradient(900px_circle_at_85%_60%,rgba(0,35,90,0.55),transparent_65%),radial-gradient(1200px_circle_at_50%_95%,rgba(0,0,0,0.65),transparent_60%)]" />

      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 -z-10 opacity-80"
      />

      {mode === "Deep Dive" && (
        <video
          className="pointer-events-none fixed inset-0 z-[-1]
                    w-full h-full object-cover 
                    opacity-70 "
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/jellyfish.mp4" type="video/mp4" />
        </video>
      )}

\      <div className="pointer-events-none fixed inset-0 -z-10 opacity-30 [background:radial-gradient(circle_at_50%_22%,rgba(170,230,255,0.08),transparent_60%)]" />
    </>
  );
}
