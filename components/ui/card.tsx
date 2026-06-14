"use client";

import { useRef, useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds a cursor-following glow highlight on hover. */
  spotlight?: boolean;
}

/** Frosted-glass card with an optional cursor spotlight effect. */
export function GlassCard({
  className,
  spotlight = true,
  children,
  ...props
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!spotlight || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={cn(
        "glass group relative overflow-hidden rounded-2xl",
        "transition-all duration-500 hover:border-electric/30",
        "hover:shadow-xl hover:shadow-electric/5 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {spotlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: hovering ? 1 : 0,
            background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, color-mix(in srgb, var(--electric) 9%, transparent), transparent 60%)`,
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
