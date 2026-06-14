"use client";

import { useEffect, useState } from "react";

/** Tracks which section id is currently in view. */
export function useScrollSpy(ids: readonly string[], offset = 0.3) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: `-${offset * 100}% 0px -${(1 - offset) * 100}% 0px` }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
