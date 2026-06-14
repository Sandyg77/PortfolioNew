"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/constants/data";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const accent: Record<string, { icon: string; chip: string; ring: string }> = {
  electric: {
    icon: "text-electric bg-electric/10",
    chip: "hover:border-electric/50 hover:text-electric hover:shadow-electric/10",
    ring: "group-hover:border-electric/30",
  },
  emeraldine: {
    icon: "text-emeraldine bg-emeraldine/10",
    chip: "hover:border-emeraldine/50 hover:text-emeraldine hover:shadow-emeraldine/10",
    ring: "group-hover:border-emeraldine/30",
  },
  amberglow: {
    icon: "text-amberglow bg-amberglow/10",
    chip: "hover:border-amberglow/50 hover:text-amberglow hover:shadow-amberglow/10",
    ring: "group-hover:border-amberglow/30",
  },
  neon: {
    icon: "text-neon bg-neon/10",
    chip: "hover:border-neon/50 hover:text-neon hover:shadow-neon/10",
    ring: "group-hover:border-neon/30",
  },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="An evolving skill ecosystem"
          description="Not a static list — a living map of what I use in production today and where I'm pushing next."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((category, i) => {
            const Icon = category.icon;
            const colors = accent[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 2) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <GlassCard className="h-full p-7">
                  <div className="mb-5 flex items-center gap-4">
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl",
                        colors.icon
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + j * 0.05, duration: 0.35 }}
                        className={cn(
                          "glass cursor-default rounded-full px-4 py-2 text-sm font-medium text-muted",
                          "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
                          colors.chip
                        )}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
