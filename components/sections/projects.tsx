"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/constants/data";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've shipped"
          description="Production AI systems, ML platforms, and the projects that taught me how to build them."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <GlassCard
                  className={cn(
                    "flex h-full flex-col",
                    project.placeholder && "border-dashed opacity-80"
                  )}
                >
                  {/* Visual header */}
                  <div
                    className={cn(
                      "relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br",
                      project.gradient
                    )}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 grid-pattern opacity-30"
                    />
                    <Icon className="relative h-12 w-12 text-white/90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                    <span className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-wider text-white/70">
                      {project.subtitle}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <div className="flex shrink-0 gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} on GitHub`}
                            className="text-muted transition-colors hover:text-foreground"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live site`}
                            className="text-muted transition-colors hover:text-electric"
                          >
                            <ArrowUpRight className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-4 space-y-3 text-sm">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-electric">
                          Challenge
                        </p>
                        <p className="mt-1 leading-relaxed text-muted">
                          {project.challenges}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-emeraldine">
                          Impact
                        </p>
                        <p className="mt-1 leading-relaxed text-muted">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {project.tech.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
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
