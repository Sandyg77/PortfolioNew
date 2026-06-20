"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/constants/data";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

const channels = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: SITE.social.linkedin,
    icon: Linkedin,
  },
  {
    label: "Location",
    value: SITE.location,
    href: undefined,
    icon: MapPin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-14 md:py-20">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-120 w-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful together"
          description="Open to opportunities and collaborations in frontend engineering, AI systems, and building practical products."
        />

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            const inner = (
              <GlassCard className="flex h-full items-center gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {channel.label}
                  </p>
                  <p className="truncate text-sm font-medium text-foreground">
                    {channel.value}
                  </p>
                </div>
              </GlassCard>
            );
            return (
              <motion.div
                key={channel.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={
                      channel.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Magnetic>
            <ButtonLink
              href={`mailto:${SITE.email}`}
              variant="gradient"
              size="lg"
            >
              <Mail className="h-4 w-4" />
              Say Hello
            </ButtonLink>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
