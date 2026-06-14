import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

const colorMap = {
  electric: "text-electric border-electric/30 bg-electric/10",
  emeraldine: "text-emeraldine border-emeraldine/30 bg-emeraldine/10",
  amberglow: "text-amberglow border-amberglow/30 bg-amberglow/10",
  neon: "text-neon border-neon/30 bg-neon/10",
  neutral: "text-muted border-border bg-subtle",
} as const;

export type BadgeColor = keyof typeof colorMap;

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
}

export function Badge({ color = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        "transition-colors duration-300",
        colorMap[color],
        className
      )}
      {...props}
    />
  );
}
