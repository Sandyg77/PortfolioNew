import {
  Bot,
  BrainCircuit,
  Camera,
  Code2,
  Database,
  GraduationCap,
  PenTool,
  Sparkles,
  Wand2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Site                                                               */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: "Sandumi Sathdahara Godage",
  shortName: "Sandumi",
  role: "Associate Front-End Engineer",
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
    { value: "5+", suffix: "", label: "Projects contributed to" },
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
      "Promoted from intern to Associate within six months and received Innovator of the Year 2026 recognition.",
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
  challenges?: string;
  challengeLabel?: string;
  impact?: string;
  impactLabel?: string;
  tech: string[];
  gradient?: string;
  icon?: LucideIcon;
  github?: string;
  live?: string;
  note?: string;
  tier: "active" | "flagship" | "other";
  image?: string;
}

export const PROJECTS: Project[] = [
  // ── Active / In Progress ──
  {
    title: "Cloud of Goods",
    subtitle: "Rental Marketplace · Frontend",
    description:
      "A US-based rental marketplace platform connecting customers with rental providers across various product categories. I contributed as a Frontend Developer as part of the company's work on this product.",
    challenges:
      "Worked on frontend development for marketplace features, focusing on user-facing interfaces and integrating dynamic data from backend services into marketplace and listing workflows.",
    challengeLabel: "Contribution",
    impact:
      "Building and maintaining UI components for marketplace flows, ensuring consistent rendering of dynamic content, and supporting structured data integration for listings where required.",
    impactLabel: "Focus Areas",
    tech: ["Laravel Blade", "HTML", "CSS / SASS", "JavaScript", "JSON-LD"],
    gradient: "from-emerald-500 via-emerald-700 to-slate-950",
    icon: BrainCircuit,
    live: "https://www.cloudofgoods.com/",
    image: "/cloudofgoods.png",
    tier: "active",
  },
  {
    title: "AI Content Engine",
    subtitle: "Internal Tool · LLMs and Agentic AI",
    description:
      "An internal LLM-powered content engine for generating and managing structured content across multiple languages and markets.",
    challenges:
      "Worked on frontend systems for content generation workflows, while also contributing to AI-driven pipelines for text and image generation outputs. Built interfaces supporting generation, review, and publishing flows used by internal content teams.",
    challengeLabel: "Contribution",
    impact:
      "Developing UI for LLM-based text and image generation, integrating AI pipeline outputs into structured workflows, and supporting evaluation and quality-control processes for generated content.",
    impactLabel: "Focus Areas",
    tech: ["Next.js", "TypeScript", "LangGraph", "LLM Agents", "MongoDB"],
    gradient: "from-violet-500 via-purple-700 to-slate-950",
    icon: Wand2,
    image: "/aicontentengine.png",
    tier: "active",
  },
  // ── Flagship ──
  {
    title: "PredicTea",
    subtitle: "Predictive Analytics · Machine Learning",
    description:
      "A predictive analytics web application for tea auction pricing, built as a group project combining statistical forecasting with a user-facing dashboard. I contributed to the statistics page — building interactive line charts and filters to visualize historical and SARIMAX-based forecast data, and also supported product positioning and stakeholder outreach.",
    challenges:
      "Translating SARIMAX model outputs into clear, interactive visualizations that non-technical users in the tea industry can understand and use for decision-making.",
    impact:
      "Delivered as a deployed product showcased at Cutting Edge 2025, bridging statistical forecasting outputs with an accessible user experience for real-world users.",
    tech: [
      "React.js",
      "Chart.js",
      "JavaScript",
      "Python",
      "SARIMAX",
      "Data Visualization",
    ],
    gradient: "from-green-400 via-emerald-600 to-emerald-900",
    icon: Sparkles,
    github: "https://github.com/PredicTea/predic-tea",
    live: "https://predic-tea.com/",
    image: "/predictea.png",
    tier: "flagship",
  },
  // ── Other ──
  {
    title: "AutoVault",
    subtitle: "Vehicle Inventory Management",
    description:
      "Vehicle inventory management system built as a full-stack web application for managing vehicle records and inventory workflows.",
    tech: [
      "Next.js",
      "Prisma",
      "Neon (PostgreSQL)",
      "Tailwind CSS",
      "TypeScript",
    ],
    github: "https://github.com/Sandyg77/AutoVault",
    live: "https://auto-vault-eight.vercel.app/",
    image: "/autovault.png",
    tier: "other",
  },
  {
    title: "SafeHaven",
    subtitle: "Property Platform",
    description:
      "University project focused on a property platform for browsing and managing property listings with a user-focused interface.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Sandyg77/Safe_Haven",
    image: "/safehaven.png",
    tier: "other",
  },
  {
    title: "FilmCube",
    subtitle: "Film Discovery App",
    description:
      "Movie discovery frontend application for browsing and exploring films.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Sandyg77/MovieExplorer",
    live: "https://filmcube.netlify.app/",
    image: "/filmcube.png",
    tier: "other",
  },
  {
    title: "TicketWave",
    subtitle: "Real-Time Ticketing System",
    description:
      "Real-time ticketing system built as a university project, focusing on concurrency and backend system design.",
    note: "Core experience was gaining hands-on exposure to Java backend development and Spring Boot fundamentals through project implementation.",
    tech: ["Java", "Multithreading", "CLI"],
    github: "https://github.com/Sandyg77/Ticket_System_Backend",
    image: "/ticketWave.png",
    tier: "other",
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
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Laravel Blade",
      "SCSS / SASS",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "ReactFlow",
    ],
  },
  {
    title: "AI Engineering",
    description: "Where I'm building my edge",
    color: "neon",
    icon: Bot,
    skills: [
      "LangChain",
      "LangGraph",
      "Multi-agent systems",
      "Zod",
      "Prompt engineering",
      "LLMs",
      "Generative AI",
      "Image generation",
    ],
  },
  {
    title: "Backend & Data",
    description: "The systems behind the screens",
    color: "emeraldine",
    icon: Database,
    skills: [
      "Next.js API routes",
      "MongoDB",
      "Auth.js / NextAuth v5",
      "REST APIs",
      "CMS integration",
      "Cloudinary",
    ],
  },
  {
    title: "Emerging & Cross-cutting",
    description: "Schema, SEO, AIEO & dev tooling",
    color: "amberglow",
    icon: Sparkles,
    skills: [
      "Schema.org / JSON-LD",
      "Knowledge graphs",
      "SEO & AIEO",
      "Google Rich Results",
      "Git / GitLab",
      "Postman",
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
      "Received the Innovator of the Year award in recognition of contributions to AI-driven projects and initiatives across the organization.",
    color: "amberglow",
    featured: true,
  },
  {
    title: "Intern → Associate in 6 Months",
    org: "Incubate Labs",
    year: "2025",
    description:
      "Progressed from Frontend Intern to Associate Front-End Engineer within six months, taking on increasing responsibilities across development projects.",
    color: "electric",
  },
  {
    title: "John Keells IT Pitchathon",
    org: "John Keells Holdings",
    year: "2025",
    description:
      "Presented a technology solution as part of the John Keells IT Pitchathon, gaining experience in communicating technical ideas to a business audience.",
    color: "emeraldine",
  },
  {
    title: "Cutting Edge 2025",
    org: "University of Westminster / IIT",
    year: "2025",
    description:
      "Showcased the PredicTea project at Cutting Edge 2025 as part of a collaborative undergraduate team effort.",
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
    title: "Visual & Creative Practice",
    description:
      "Creative photography, occasional modelling, and working with composition, light, and storytelling from both sides of the lens.",
    icon: Camera,
    color: "electric",
  },
  {
    title: "Design & Freelance Work",
    description:
      "Freelance projects across product packaging, branding, and social media content, working with tools like Affinity and Canva to deliver practical design solutions under real constraints.",
    icon: PenTool,
    color: "amberglow",
  },
  {
    title: "Knowledge Sharing",
    description:
      "I enjoy teaching and sharing knowledge as a personal interest, since breaking down concepts simply helps others and also strengthens my own understanding.",
    icon: GraduationCap,
    color: "neon",
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
    label: "Deep in active work",
    color: "electric",
    items: [
      {
        name: "Next.js",
        note: "Production frontend with modern React architecture.",
      },
      {
        name: "Advanced Prompt Engineering",
        note: "Structured techniques for reliable LLM outputs.",
      },
      {
        name: "Laravel Blade",
        note: "Working with server-rendered UI templates and frontend view layers in Laravel.",
      },
      {
        name: "Agentic Orchestration & LLM Systems",
        note: "Agent-based workflows and generative AI systems.",
      },
    ],
  },
  {
    stage: "Next",
    label: "Queued up",
    color: "emeraldine",
    items: [
      {
        name: "Vector Databases",
        note: "Embeddings, similarity search, and retrieval.",
      },
      {
        name: "PostgreSQL",
        note: "Relational data modeling and query performance.",
      },
      {
        name: "Spring Boot (Java)",
        note: "Backend engineering in enterprise Java.",
      },
      {
        name: "RAG (Retrieval-Augmented Generation)",
        note: "Combining retrieval systems with generative models.",
      },
    ],
  },
  {
    stage: "Horizon",
    label: "Long-term exploration",
    color: "neon",
    items: [
      {
        name: "Neural Networks & Deep Learning",
        note: "How models learn under the hood.",
      },
      {
        name: "Agentic AI Systems",
        note: "Autonomous, multi-step decision-making agents.",
      },
      {
        name: "AI Workflows & System Design",
        note: "Scalable, reliable AI-powered architectures.",
      },
    ],
  },
];
