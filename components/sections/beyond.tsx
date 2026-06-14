"use client";

import { motion } from "framer-motion";
import { BEYOND } from "@/constants/data";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const accent: Record<string, string> = {
  electric: "text-electric bg-electric/10",
  emeraldine: "text-emeraldine bg-emeraldine/10",
  amberglow: "text-amberglow bg-amberglow/10",
  neon: "text-neon bg-neon/10",
};

export function Beyond() {
  return (
    <section id="beyond" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Beyond Engineering"
          title="The other half of the brain"
          description="Creativity isn't a side project — it's the same muscle that makes the engineering better."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BEYOND.map((interest, i) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <GlassCard className="h-full p-6">
                  <span
                    className={cn(
                      "mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                      accent[interest.color]
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {interest.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {interest.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
