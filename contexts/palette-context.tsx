"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Palette = "emerald" | "violet" | "rose" | "sky" | "amber";

const VALID: Palette[] = ["emerald", "violet", "rose", "sky", "amber"];
const STORAGE_KEY = "portfolio-palette";

interface PaletteContextValue {
  palette: Palette;
  setPalette: (p: Palette) => void;
}

const PaletteContext = createContext<PaletteContextValue>({
  palette: "emerald",
  setPalette: () => {},
});

function applyPalette(p: Palette) {
  const root = document.documentElement;
  if (p === "emerald") {
    root.removeAttribute("data-palette");
  } else {
    root.setAttribute("data-palette", p);
  }
}

export function PaletteProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPaletteState] = useState<Palette>("emerald");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Palette | null;
    if (stored && VALID.includes(stored)) {
      applyPalette(stored);
      setPaletteState(stored);
    }
  }, []);

  function setPalette(p: Palette) {
    setPaletteState(p);
    applyPalette(p);
    localStorage.setItem(STORAGE_KEY, p);
  }

  return (
    <PaletteContext.Provider value={{ palette, setPalette }}>
      {children}
    </PaletteContext.Provider>
  );
}

export const usePalette = () => useContext(PaletteContext);
