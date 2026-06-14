"use client";

import { motion } from "framer-motion";
import { Compass, Flame, Telescope } from "lucide-react";
import { LEARNING } from "@/constants/data";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stageIcon = [Flame, Compass, Telescope];

const accent: Record<string, { text: string; bg: string; line: string }> = {
  electric: { text: "text-electric", bg: "bg-electric/10", line: "from-electric" },
  emeraldine: { text: "text-emeraldine", bg: "bg-emeraldine/10", line: "from-emeraldine" },
  amberglow: { text: "text-amberglow", bg: "bg-amberglow/10", line: "from-amberglow" },
  neon: { text: "text-neon", bg: "bg-neon/10", line: "from-neon" },
};

export function Learning() {
  return (
    <section id="learning" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Learning Journey"
          title="The roadmap never ends"
          description="What I'm mastering right now, what's queued next, and where the long game leads."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {LEARNING.map((stage, i) => {
            const Icon = stageIcon[i] ?? Flame;
            const colors = accent[stage.color];
            return (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                {/* Connector arrow between stages on desktop */}
                {i < LEARNING.length - 1 && (
                  <div
                    aria-hidden
                    className={cn(
                      "absolute -right-6 top-10 hidden h-px w-6 bg-gradient-to-r to-transparent lg:block",
                      colors.line
                    )}
                  />
                )}
                <GlassCard className="h-full p-7">
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl",
                        colors.bg,
                        colors.text
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {stage.stage}
                      </h3>
                      <p className={cn("text-xs font-semibold uppercase tracking-wider", colors.text)}>
                        {stage.label}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {stage.items.map((topic) => (
                      <li key={topic.name} className="group/item">
                        <p className="text-sm font-semibold text-foreground transition-colors">
                          {topic.name}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted">
                          {topic.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
