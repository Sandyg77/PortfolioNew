"use client";

import { usePalette, type Palette } from "@/contexts/palette-context";
import { cn } from "@/lib/utils";

const PALETTES: { id: Palette; label: string; swatch: string }[] = [
  { id: "emerald", label: "Emerald", swatch: "#34d399" },
  { id: "violet", label: "Violet",  swatch: "#a78bfa" },
  { id: "rose",   label: "Rose",    swatch: "#fb7185" },
  { id: "sky",    label: "Sky",     swatch: "#38bdf8" },
  { id: "amber",  label: "Amber",   swatch: "#fbbf24" },
];

export function PaletteToggle({ className }: { className?: string }) {
  const { palette, setPalette } = usePalette();

  return (
    <div
      className={cn(
        "glass flex items-center gap-2 rounded-full px-3 py-2",
        className,
      )}
      role="group"
      aria-label="Color palette"
    >
      {PALETTES.map((p) => (
        <button
          key={p.id}
          type="button"
          title={p.label}
          aria-label={`${p.label} palette${palette === p.id ? " (active)" : ""}`}
          onClick={() => setPalette(p.id)}
          className={cn(
            "h-3.5 w-3.5 rounded-full transition-all duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-1",
            palette === p.id
              ? "scale-125"
              : "opacity-40 hover:opacity-80 hover:scale-110",
          )}
          style={{
            backgroundColor: p.swatch,
            boxShadow:
              palette === p.id
                ? `0 0 0 2px var(--background), 0 0 0 3.5px ${p.swatch}`
                : undefined,
          }}
        />
      ))}
    </div>
  );
}
