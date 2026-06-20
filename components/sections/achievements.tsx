"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "@/constants/data";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const accent: Record<string, string> = {
  electric: "text-electric bg-electric/10",
  emeraldine: "text-emeraldine bg-emeraldine/10",
  amberglow: "text-amberglow bg-amberglow/10",
  neon: "text-neon bg-neon/10",
};

export function Achievements() {
  return (
    <section id="achievements" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Moments of Progress"
          description="Awards, accomplishments, and meaningful experiences from my academic and professional journey."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {ACHIEVEMENTS.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 2) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={undefined}
            >
              <GlassCard
                className={cn(
                  "h-full p-7",
                  achievement.featured &&
                    "border-amberglow/30 bg-linear-to-br from-amberglow/5 to-transparent",
                )}
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <span
                    className={cn(
                      "flex h-13 w-13 shrink-0 items-center justify-center rounded-xl p-3",
                      accent[achievement.color],
                    )}
                  >
                    {achievement.featured ? (
                      <Trophy className="h-7 w-7" />
                    ) : (
                      <Award className="h-6 w-6" />
                    )}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3
                        className={cn(
                          "font-display font-bold text-foreground",
                          achievement.featured ? "text-2xl" : "text-lg",
                        )}
                      >
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-semibold text-muted">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-electric">
                      {achievement.org}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
