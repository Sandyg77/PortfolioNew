import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/constants/data";

const socials = [
  { label: "GitHub", href: SITE.social.github, icon: Github },
  { label: "LinkedIn", href: SITE.social.linkedin, icon: Linkedin },
  { label: "Email", href: SITE.social.email, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold text-foreground">
            {SITE.shortName}
            <span className="text-electric">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            Designed &amp; built by {SITE.name} · {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-electric"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
