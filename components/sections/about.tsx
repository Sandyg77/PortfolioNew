"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ImagePlus, Sparkles } from "lucide-react";
import { ABOUT, SITE } from "@/constants/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { GlassCard } from "@/components/ui/card";

function Portrait() {
  return (
    <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0">
      {/* Glow behind the frame */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-4xl bg-electric/15 blur-3xl"
      />
      <div className="glass relative aspect-4/5 overflow-hidden rounded-3xl">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />
        {SITE.portrait ? (
          <Image
            src={SITE.portrait}
            alt={`Portrait of ${SITE.name}`}
            fill
            sizes="(min-width: 1024px) 360px, 90vw"
            className="object-cover"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-electric/10 text-electric">
              <ImagePlus className="h-7 w-7" />
            </span>
            <p className="text-sm font-semibold text-foreground">
              Your photo goes here
            </p>
            <p className="text-xs leading-relaxed text-muted">
              Add <code className="text-electric">portrait.jpg</code> to{" "}
              <code className="text-electric">/public</code> and set{" "}
              <code className="text-electric">SITE.portrait</code> in{" "}
              <code className="text-electric">constants/data.ts</code>
            </p>
          </div>
        )}
        {/* Bottom gradient fade for a premium photo finish */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background/80 to-transparent"
        />
      </div>
      {/* Floating name chip */}
      <div className="glass absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 shadow-lg">
        <Sparkles className="h-4 w-4 text-electric" />
        <span className="text-sm font-semibold text-foreground">
          {SITE.shortName}
        </span>
        <span className="text-xs text-muted">· {SITE.role}</span>
      </div>
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="About"
          title="My Journey"
          description={ABOUT.intro}
        />

        <div className="grid items-start gap-14 lg:grid-cols-5 lg:gap-12">
          {/* Portrait */}
          <div className="lg:col-span-2">
            <Portrait />
          </div>

          {/* Story */}
          <div className="space-y-6 lg:col-span-3">
            {ABOUT.story.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <blockquote className="relative mt-8 border-l-2 border-electric pl-6">
                <p className="font-display text-lg font-medium italic text-foreground md:text-xl">
                  &ldquo;Learn deeply, then move forward. Depth in understanding
                  compounds over time.&rdquo;
                </p>
                <footer className="mt-2 text-sm text-muted">
                  — My learning philosophy
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {ABOUT.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="h-full p-6">
                <p className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  {stat.value}
                  <span className="gradient-text">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-sm leading-snug text-muted">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
