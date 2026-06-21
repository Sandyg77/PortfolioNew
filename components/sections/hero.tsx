"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { HERO_KEYWORDS, SITE } from "@/constants/data";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const socials = [
  { label: "GitHub", href: SITE.social.github, icon: Github },
  { label: "LinkedIn", href: SITE.social.linkedin, icon: Linkedin },
  { label: "Email", href: SITE.social.email, icon: Mail },
];

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      {/* Grid pattern, faded toward the edges so the constellation shows through */}
      <div
        aria-hidden
        className="absolute inset-0 grid-pattern"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 40%, black 25%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 40%, black 25%, transparent 80%)",
        }}
      />

      {/* Floating accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        <div className="animate-float-slow absolute left-[12%] top-[24%] h-3 w-3 rounded-full bg-electric/60" />
        <div
          className="animate-float-slow absolute right-[16%] top-[32%] h-2 w-2 rounded-full bg-neon/60"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="animate-float-slow absolute bottom-[28%] left-[20%] h-2 w-2 rounded-full bg-emeraldine/60"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="animate-float-slow absolute bottom-[34%] right-[12%] h-3 w-3 rounded-full bg-amberglow/50"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-5 pb-24 pt-32 text-center md:px-8"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emeraldine opacity-75 [animation:pulse-ring_1.8s_ease-out_infinite]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emeraldine" />
            </span>
            Associate Front-End Engineer
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m <span className="shimmer-text">Sandumi</span>.
          <br />I craft intelligent solutions.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          Frontend engineer building AI-powered products, combining modern web
          development with LLMs, agent workflows, and user-centered design.
        </motion.p>
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <ButtonLink href="#projects" variant="gradient" size="lg">
              <Sparkles className="h-4 w-4" />
              View Projects
            </ButtonLink>
          </Magnetic>
          <Magnetic>
            <ButtonLink
              href={SITE.resumeUrl}
              variant="outline"
              size="lg"
              download
            >
              <Download className="h-4 w-4" />
              Resume
            </ButtonLink>
          </Magnetic>
          <Magnetic>
            <ButtonLink href="#contact" variant="ghost" size="lg">
              Contact Me
            </ButtonLink>
          </Magnetic>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-center gap-3"
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-1 hover:text-electric hover:shadow-lg hover:shadow-electric/10"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Keyword marquee */}
      <div className="absolute bottom-16 left-0 right-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap py-3">
          {[...HERO_KEYWORDS, ...HERO_KEYWORDS].map((keyword, i) => (
            <span
              key={`${keyword}-${i}`}
              className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-muted/50"
            >
              {keyword}
              <span className="h-1 w-1 rounded-full bg-electric/40" />
            </span>
          ))}
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
