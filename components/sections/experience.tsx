"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "@/constants/data";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/card";
import { Badge, type BadgeColor } from "@/components/ui/badge";

const dotColor: Record<string, string> = {
  electric: "bg-electric shadow-electric/50",
  emeraldine: "bg-emeraldine shadow-emeraldine/50",
  amberglow: "bg-amberglow shadow-amberglow/50",
  neon: "bg-neon shadow-neon/50",
};

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Learning Through Practice"
          description="Growing through practical experience, steady learning, and contributing to real-world products."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute bottom-4 left-[11px] top-2 w-px bg-gradient-to-b from-electric via-emeraldine to-transparent md:left-1/2"
          />

          <div className="space-y-12">
            {EXPERIENCE.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${job.role}-${job.period}`}
                  initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative pl-10 md:w-[calc(50%-2rem)] md:pl-0 ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Timeline dot */}
                  <span
                    aria-hidden
                    className={`absolute left-1.5 top-2 h-3 w-3 rounded-full shadow-[0_0_12px_3px] md:top-3 ${
                      dotColor[job.color]
                    } ${isLeft ? "md:left-auto md:-right-[2.45rem]" : "md:-left-[2.45rem]"}`}
                  />

                  <GlassCard className="p-6 md:p-7">
                    <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {job.period}
                      </span>
                      <Badge color={job.color as BadgeColor}>{job.type}</Badge>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {job.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-electric">
                      {job.company}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {job.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emeraldine" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.badges.map((badge) => (
                        <Badge key={badge}>{badge}</Badge>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
