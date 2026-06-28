"use client";

import { useEffect, useRef, useState } from "react";
import { Palette } from "lucide-react";
import { usePalette, type Palette as PaletteId } from "@/contexts/palette-context";
import { cn } from "@/lib/utils";

const PALETTES: { id: PaletteId; label: string; swatch: string }[] = [
  { id: "emerald", label: "Emerald", swatch: "#34d399" },
  { id: "teal",    label: "Teal",    swatch: "#2dd4bf" },
  { id: "sky",     label: "Sky",     swatch: "#38bdf8" },
  { id: "indigo",  label: "Indigo",  swatch: "#818cf8" },
  { id: "violet",  label: "Violet",  swatch: "#a78bfa" },
  { id: "fuchsia", label: "Fuchsia", swatch: "#e879f9" },
  { id: "rose",    label: "Rose",    swatch: "#fb7185" },
  { id: "orange",  label: "Orange",  swatch: "#fb923c" },
  { id: "amber",   label: "Amber",   swatch: "#fbbf24" },
];

export function PaletteToggle({ className, inline }: { className?: string; inline?: boolean }) {
  const { palette, setPalette } = usePalette();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = PALETTES.find((p) => p.id === palette)!;

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  if (inline) {
    return (
      <div className={cn("flex flex-wrap items-center gap-2", className)}>
        {PALETTES.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPalette(p.id)}
            aria-label={p.label}
            title={p.label}
            className="h-4 w-4 rounded-full transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            style={{
              backgroundColor: p.swatch,
              boxShadow: palette === p.id
                ? `0 0 0 2px var(--background), 0 0 0 3.5px ${p.swatch}`
                : undefined,
              transform: palette === p.id ? "scale(1.25)" : undefined,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative isolate", className)}>
      <button
        type="button"
        aria-label="Color palette"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "glass relative flex h-10 w-10 items-center justify-center rounded-full",
          "text-muted transition-all duration-300 hover:text-foreground hover:scale-105",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
        )}
      >
        <Palette className="h-[18px] w-[18px]" />
        <span
          className="absolute bottom-1.5 right-1.5 h-2 w-2 rounded-full border-2 border-background"
          style={{ backgroundColor: active.swatch }}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-50 mt-2 min-w-[130px] rounded-2xl border border-border p-2 shadow-xl"
          style={{
            background: "color-mix(in srgb, var(--background) 85%, transparent)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          {PALETTES.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => { setPalette(p.id); setOpen(false); }}
              className={cn(
                "flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-colors",
                "hover:bg-subtle",
                palette === p.id ? "text-foreground font-medium" : "text-muted",
              )}
            >
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-full transition-transform"
                style={{
                  backgroundColor: p.swatch,
                  boxShadow: palette === p.id
                    ? `0 0 0 2px var(--background), 0 0 0 3.5px ${p.swatch}`
                    : undefined,
                  transform: palette === p.id ? "scale(1.25)" : undefined,
                }}
              />
              {p.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
