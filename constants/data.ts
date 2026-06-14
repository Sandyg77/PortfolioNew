import {
  Bot,
  BrainCircuit,
  Camera,
  Code2,
  Database,
  GraduationCap,
  Megaphone,
  Package,
  Palette,
  PenTool,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Site                                                               */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: "Sandumi Sathdahara Godage",
  shortName: "Sandumi",
  role: "Associate Front-end Engineer",
  headline: "Hi, I'm Sandumi. I craft intelligent solutions.",
  tagline:
    "Frontend engineer shipping production AI systems — from LLM orchestration and judge agents to knowledge graphs and human-centered interfaces.",
  location: "Colombo, Sri Lanka",
  portrait: "/test3.jpeg" as string,
  email: "sandumigodage77@gmail.com",
  phone: "+94 71 275 7620",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/Sandyg77",
    linkedin: "https://www.linkedin.com/in/sandumi-godage-877399294/",
    email: "mailto:sandumigodage77@gmail.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_KEYWORDS = [
  "Agentic AI",
  "LLM Orchestration",
  "Generative AI",
  "Prompt Engineering",
  "Knowledge Graphs",
  "Search Engine Optimization",
  "Modern Web Engineering",
  "Human-Centered Design",
] as const;

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */

export const ABOUT = {
  intro:
    "I'm a Computer Science undergraduate at the University of Westminster and an engineer with a strong interest in building practical software and learning through real-world experience.",
  story: [
    "At Incubate Labs, I contribute to products used by real customers: AI-powered content generation engine, LLM judge agents, schema visualization, and the frontend applications that support them. Six months after joining as a Frontend Intern, I joined as a Frontend Intern and later progressed to an Associate Front-End Engineer role.",
    "My learning philosophy is simple, master a concept deeply before moving on. I enjoy understanding how systems work beneath the surface. I'd rather understand why a system works than memorize how to use it. That mindset is what lets me move fast across new territory.",
    "Beyond software development, I'm interested in sharing knowledge, mentoring others, and helping teams grow. In the long term, I hope to continue working across AI, product development, and engineering while contributing to meaningful products.",
  ],
  stats: [
    { value: "5", suffix: "", label: "Projects contributed to" },
    { value: "1", suffix: "yr", label: "Building software" },
    { value: "Frontend", suffix: "", label: "Specialization" },
    { value: "∞", suffix: "", label: "Curiosity & learning" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  color: "electric" | "emeraldine" | "amberglow" | "neon";
  highlights: string[];
  badges: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Associate Front-End Engineer",
    company: "Incubate Labs",
    period: "2025 — Present",
    type: "Full-time",
    color: "electric",
    highlights: [
      "Build AI content generation systems powering production publishing pipelines",
      "Integrate LLMs into product workflows, including a Judge Agent system for automated quality evaluation",
      "Engineer multi-language content export pipelines for international markets",
      "Implement JSON-LD structured data driving search visibility at scale",
      "Promoted from intern within six months; named Innovator of the Year 2026",
    ],
    badges: [
      "LLM Orchestration",
      "Judge Agents",
      "JSON-LD",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    role: "Front-End Engineer Intern",
    company: "Incubate Labs",
    period: "2024 — 2025",
    type: "Internship",
    color: "emeraldine",
    highlights: [
      "Built interactive knowledge graph visualizations with ReactFlow",
      "Implemented Schema.org structured data across production surfaces",
      "Shipped production UI used by real customers from week one",
      "Earned a fast-track promotion to Associate Front-End Engineer",
    ],
    badges: ["Knowledge Graphs", "ReactFlow", "Schema.org", "React"],
  },
  {
    role: "Sales Intern",
    company: "Sampath Bank",
    period: "2023",
    type: "Internship",
    color: "amberglow",
    highlights: [
      "Developed client-facing communication skills in a high-trust environment",
      "Learned to translate complex products into clear, human language",
      "Built the professional foundations that now shape how I collaborate and present",
    ],
    badges: ["Communication", "Client Relations", "Professionalism"],
  },
];

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  challenges: string;
  impact: string;
  tech: string[];
  gradient: string;
  icon: LucideIcon;
  github?: string;
  live?: string;
  placeholder?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "AI Engine",
    subtitle: "Cloud of Goods",
    description:
      "An AI-powered content generation engine for a national US rental marketplace — orchestrating LLMs to produce, evaluate, and publish structured content at scale.",
    challenges:
      "Designed LLM pipelines with a Judge Agent layer to keep generated content accurate and on-brand, plus JSON-LD structured data for search optimization.",
    impact:
      "Powers content across a production marketplace, turning a manual publishing bottleneck into an automated, quality-gated pipeline.",
    tech: ["Next.js", "TypeScript", "Vercel AI SDK", "LLM Agents", "JSON-LD"],
    gradient: "from-emerald-500 via-emerald-700 to-slate-950",
    icon: BrainCircuit,
    live: "https://www.cloudofgoods.com",
  },
  {
    title: "PredicTea",
    subtitle: "Predictive Analytics Platform",
    description:
      "A machine-learning platform bringing predictive intelligence to Sri Lanka's tea industry — turning historical data into forecasts growers can act on.",
    challenges:
      "Bridging an ML prediction backend with an approachable frontend that non-technical users in a traditional industry can trust and understand.",
    impact:
      "Live at predic-tea.com — demonstrating end-to-end delivery from model to deployed product.",
    tech: ["Machine Learning", "React", "Python", "Data Visualization"],
    gradient: "from-green-400 via-emerald-600 to-emerald-900",
    icon: Sparkles,
    live: "https://www.predic-tea.com",
  },
  {
    title: "SafeHaven",
    subtitle: "Community Safety Platform",
    description:
      "A full-stack application focused on safety and support — connecting people in need with resources and help when it matters most.",
    challenges:
      "Designing for users in stressful situations: clarity, speed, and trust had to come before visual flourish.",
    impact:
      "Open source on GitHub — a study in human-centered design under real constraints.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    gradient: "from-emerald-300 via-emerald-500 to-emerald-800",
    icon: Users,
    github: "https://github.com/Sandyg77/Safe_Haven",
  },
  {
    title: "Ticket-Wave",
    subtitle: "Real-Time Ticketing System",
    description:
      "A CLI-based event ticketing system simulating real-time ticket releases and purchases with a producer-consumer architecture.",
    challenges:
      "Managing concurrent vendors and customers safely — thread synchronization, race conditions, and graceful state handling.",
    impact:
      "A deep, practical exercise in concurrency and systems thinking beyond the browser.",
    tech: ["Java", "OOP", "Multithreading", "CLI"],
    gradient: "from-emerald-600 via-emerald-800 to-slate-950",
    icon: Code2,
    github: "https://github.com/Sandyg77/Ticket_Event_System_CLI",
  },
  {
    title: "AutoVault",
    subtitle: "Vehicle Inventory Management",
    description:
      "An inventory management system for vehicle dealerships — structured CRUD workflows, search, and reporting over a relational data model.",
    challenges:
      "Modeling real-world inventory rules into a clean schema and keeping the interface fast as the dataset grows.",
    impact:
      "Sharpened my fundamentals in data modeling and full-stack CRUD architecture.",
    tech: ["Java", "MySQL", "OOP", "Data Modeling"],
    gradient: "from-green-500 via-emerald-700 to-emerald-950",
    icon: Database,
    github: "https://github.com/Sandyg77",
  },
  {
    title: "What's Next?",
    subtitle: "Currently in the lab",
    description:
      "Multi-agent systems, LLM orchestration experiments, and products that don't exist yet. The best project is always the next one.",
    challenges:
      "Staying patient enough to master each layer before stacking the next.",
    impact: "Watch this space.",
    tech: ["Agentic AI", "Multi-Agent Systems", "???"],
    gradient: "from-slate-500 via-slate-600 to-slate-800",
    icon: Rocket,
    placeholder: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */

export interface SkillCategory {
  title: string;
  description: string;
  color: "electric" | "emeraldine" | "amberglow" | "neon";
  icon: LucideIcon;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Production interfaces, shipped daily",
    color: "electric",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "ReactFlow",
    ],
  },
  {
    title: "AI Engineering",
    description: "Where I'm building my edge",
    color: "neon",
    icon: Bot,
    skills: [
      "Vercel AI SDK",
      "LangChain",
      "Prompt Engineering",
      "LLM Integration",
      "Agentic Workflows",
      "Judge Agents",
    ],
  },
  {
    title: "Backend & Data",
    description: "The systems behind the screens",
    color: "emeraldine",
    icon: Database,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Emerging Technologies",
    description: "Actively expanding territory",
    color: "amberglow",
    icon: Sparkles,
    skills: [
      "Prisma",
      "Neon",
      "Knowledge Graphs",
      "Schema Engineering",
      "JSON-LD",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Achievements                                                       */
/* ------------------------------------------------------------------ */

export interface Achievement {
  title: string;
  org: string;
  year: string;
  description: string;
  color: "electric" | "emeraldine" | "amberglow" | "neon";
  featured?: boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Innovator of the Year",
    org: "Incubate Labs",
    year: "2026",
    description:
      "Recognized company-wide for driving AI innovation across production systems — from content engines to agentic quality pipelines.",
    color: "amberglow",
    featured: true,
  },
  {
    title: "Intern → Associate in 6 Months",
    org: "Incubate Labs",
    year: "2025",
    description:
      "Fast-tracked from Frontend Intern to Associate Front-End Engineer on the strength of production delivery and learning velocity.",
    color: "electric",
  },
  {
    title: "John Keells IT Pitchathon",
    org: "John Keells Holdings",
    year: "2025",
    description:
      "Pitched a technology solution to one of Sri Lanka's largest conglomerates — sharpening the bridge between engineering and business storytelling.",
    color: "emeraldine",
  },
  {
    title: "Cutting Edge 2025",
    org: "University of Westminster / IIT",
    year: "2025",
    description:
      "Showcased innovative project work at Cutting Edge, presenting engineering built to production standards as an undergraduate.",
    color: "neon",
  },
];

/* ------------------------------------------------------------------ */
/*  Beyond Engineering                                                 */
/* ------------------------------------------------------------------ */

export interface BeyondItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "electric" | "emeraldine" | "amberglow" | "neon";
}

export const BEYOND: BeyondItem[] = [
  {
    title: "Photography & Modelling",
    description:
      "Composition, light, and story — on both sides of the lens. From creative photography to a few photoshoots in front of the camera.",
    icon: Camera,
    color: "electric",
  },
  {
    title: "Product Packaging Design",
    description:
      "Designing physical packaging taught me that constraints are the most honest creative brief.",
    icon: Package,
    color: "amberglow",
  },
  {
    title: "Branding",
    description:
      "Identity systems, voice, and visual language — building brands that feel inevitable, not assembled.",
    icon: Palette,
    color: "neon",
  },
  {
    title: "Social Media Marketing",
    description:
      "Growing audiences and crafting campaigns — understanding attention is a superpower for product work.",
    icon: Megaphone,
    color: "emeraldine",
  },
  {
    title: "Freelance Work",
    description:
      "Client projects across design and development — scoping, delivering, and owning outcomes end to end.",
    icon: PenTool,
    color: "electric",
  },
  {
    title: "Teaching & Mentoring",
    description:
      "Explaining things until they're simple is how I learn. Mentoring is the career thread I never want to drop.",
    icon: GraduationCap,
    color: "amberglow",
  },
];

/* ------------------------------------------------------------------ */
/*  Learning Journey                                                   */
/* ------------------------------------------------------------------ */

export interface LearningStage {
  stage: string;
  label: string;
  color: "electric" | "emeraldine" | "amberglow" | "neon";
  items: { name: string; note: string }[];
}

export const LEARNING: LearningStage[] = [
  {
    stage: "Now",
    label: "Deep in it",
    color: "electric",
    items: [
      { name: "Agentic AI", note: "Designing autonomous, tool-using systems" },
      {
        name: "LLM Orchestration",
        note: "Chaining, routing, and evaluating model calls",
      },
      {
        name: "Advanced Prompt Engineering",
        note: "From craft to measurable discipline",
      },
      { name: "PostgreSQL", note: "Going deep on the relational layer" },
    ],
  },
  {
    stage: "Next",
    label: "Queued up",
    color: "emeraldine",
    items: [
      {
        name: "Multi-Agent Systems",
        note: "Coordination, communication, emergence",
      },
      {
        name: "Prisma + Neon",
        note: "Modern typed data layer, serverless Postgres",
      },
      { name: "Laravel + Blade", note: "Widening the backend toolbox" },
      {
        name: "SASS",
        note: "Mastering the styling layer beneath the frameworks",
      },
    ],
  },
  {
    stage: "Horizon",
    label: "The long game",
    color: "neon",
    items: [
      {
        name: "Neural Networks",
        note: "From using models to understanding them",
      },
      {
        name: "Software Architecture",
        note: "Systems that survive their creators",
      },
      {
        name: "Teaching & Academia",
        note: "Postgraduate study and giving knowledge back",
      },
      {
        name: "Technical Leadership",
        note: "Multiplying impact through people",
      },
    ],
  },
];
