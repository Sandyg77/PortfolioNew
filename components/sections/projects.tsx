"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { PROJECTS, type Project } from "@/constants/data";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function ImageWrapper({
  live,
  title,
  children,
}: {
  live?: string;
  title: string;
  children: ReactNode;
}) {
  if (live) {
    return (
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${title} live site`}
        className="group/cover relative block h-56 overflow-hidden"
      >
        {children}
      </a>
    );
  }
  return <div className="relative h-56 overflow-hidden">{children}</div>;
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.github) return null;
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} on GitHub`}
      className="shrink-0 text-muted transition-colors hover:text-foreground"
    >
      <Github className="h-5 w-5" />
    </a>
  );
}

export function Projects() {
  const featuredProjects = PROJECTS.filter(
    (p) => p.tier === "active" || p.tier === "flagship",
  );
  const otherProjects = PROJECTS.filter((p) => p.tier === "other");

  return (
    <section id="projects" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Projects I've Worked On"
          description="A collection of projects that highlight the technologies I've used and the problems I've enjoyed solving."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Featured cards */}
          {featuredProjects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <GlassCard className="relative flex h-full flex-col">
                  {project.tier === "active" && (
                    <span className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amberglow" />
                      In Progress
                    </span>
                  )}

                  {(project.image || (Icon && project.gradient)) && (
                    <ImageWrapper live={project.live} title={project.title}>
                      {project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover/cover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div
                            aria-hidden
                            className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
                          />
                          <span className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-wider text-white/80">
                            {project.subtitle}
                          </span>
                        </>
                      ) : (
                        Icon &&
                        project.gradient && (
                          <div
                            className={cn(
                              "flex h-full items-center justify-center bg-linear-to-r",
                              project.gradient,
                            )}
                          >
                            <div
                              aria-hidden
                              className="absolute inset-0 grid-pattern opacity-30"
                            />
                            <Icon className="relative h-10 w-10 text-white/90" />
                            <span className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-wider text-white/70">
                              {project.subtitle}
                            </span>
                          </div>
                        )
                      )}
                    </ImageWrapper>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <div className="flex shrink-0 items-center gap-3">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-electric transition-colors hover:underline"
                          >
                            Visit site
                          </a>
                        )}
                        <ProjectLinks project={project} />
                      </div>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    {project.challenges && (
                      <div className="mt-4 space-y-3 text-sm">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-electric">
                            {project.challengeLabel ?? "Challenge"}
                          </p>
                          <p className="mt-1 leading-relaxed text-muted">
                            {project.challenges}
                          </p>
                        </div>
                        {project.impact && (
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-emeraldine">
                              {project.impactLabel ?? "Impact"}
                            </p>
                            <p className="mt-1 leading-relaxed text-muted">
                              {project.impact}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
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

          {/* Other projects aggregate tile */}
          {otherProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="flex h-full flex-col p-7">
                <h3 className="mb-6 font-display text-xl font-bold text-foreground">
                  More Projects
                </h3>
                <ul className="flex flex-1 flex-col gap-5">
                  {otherProjects.map((project) => (
                    <li
                      key={project.title}
                      className="flex items-start gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-foreground">
                            {project.title}
                          </p>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} on GitHub`}
                              className="text-muted transition-colors hover:text-foreground"
                            >
                              <Github className="h-3.5 w-3.5" />
                            </a>
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-muted">
                          {project.subtitle}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.note && (
                          <p className="mt-1.5 text-xs italic text-muted/70">
                            {project.note}
                          </p>
                        )}
                      </div>
                      {project.image && (
                        <a
                          href={project.live ?? project.github ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} ${project.live ? "live site" : "on GitHub"}`}
                          className="group/thumb shrink-0"
                        >
                          <div className="relative h-20 w-28 overflow-hidden rounded-md ring-1 ring-white/0 transition-all duration-300 group-hover/thumb:ring-white/20">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover object-top transition-transform duration-300 group-hover/thumb:scale-105"
                              sizes="112px"
                            />
                          </div>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
