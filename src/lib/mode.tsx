"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Mode = "recruiter" | "Deep Dive";

type ModeCtx = {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggle: () => void;
};

const ModeContext = createContext<ModeCtx | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("recruiter");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio_mode") as Mode | null;
    if (saved === "recruiter" || saved === "Deep Dive") setModeState(saved);
  }, []);

  const setMode = (m: Mode) => {
    setModeState(m);
    window.localStorage.setItem("portfolio_mode", m);
    document.documentElement.dataset.mode = m;
  };

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      setMode,
      toggle: () => setMode(mode === "recruiter" ? "Deep Dive" : "recruiter"),
    }),
    [mode]
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}
