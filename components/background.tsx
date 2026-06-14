"use client";

import { useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Neural constellation canvas                                        */
/* ------------------------------------------------------------------ */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const LINK_DIST = 120;
const MOUSE_DIST = 190;

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let particles: Particle[] = [];
    let rgb: [number, number, number] = [52, 211, 153];
    let raf = 0;
    let width = 0;
    let height = 0;
    const mouse = { x: -9999, y: -9999 };

    function readAccent() {
      const accent = getComputedStyle(document.documentElement)
        .getPropertyValue("--electric")
        .trim();
      if (/^#[0-9a-f]{6}$/i.test(accent)) rgb = hexToRgb(accent);
    }

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density-based count: ~1 node per 18k px², capped for performance
      const count = Math.min(90, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.7,
      }));
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const [r, g, b] = rgb;

      for (const p of particles) {
        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},0.5)`;
        ctx.fill();
      }

      // Node-to-node links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${(1 - dist / LINK_DIST) * 0.18})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        // Cursor links — the network "reaches" toward the visitor
        const dxm = particles[i].x - mouse.x;
        const dym = particles[i].y - mouse.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < MOUSE_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${r},${g},${b},${(1 - dm / MOUSE_DIST) * 0.32})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }

    function loop() {
      draw();
      if (!reducedMotion) raf = requestAnimationFrame(loop);
    }

    function onMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }
    function onVisibility() {
      cancelAnimationFrame(raf);
      if (!document.hidden) loop();
    }

    readAccent();
    resize();
    loop();

    // Re-read the accent color when the theme class flips
    const observer = new MutationObserver(readAccent);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

/* ------------------------------------------------------------------ */
/*  Cursor glow — a soft light that follows the pointer                */
/* ------------------------------------------------------------------ */

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let targetX = -9999;
    let targetY = -9999;
    let x = targetX;
    let y = targetY;

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function tick() {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      if (el) el.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute left-0 top-0 hidden h-[600px] w-[600px] rounded-full md:block"
      style={{
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--electric) 7%, transparent), transparent 65%)",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Composite background                                               */
/* ------------------------------------------------------------------ */

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Drifting aurora orbs */}
      <div className="animate-aurora absolute -left-40 -top-40 h-[640px] w-[640px] rounded-full bg-electric/10 blur-[140px]" />
      <div
        className="animate-aurora absolute -right-48 top-1/3 h-[560px] w-[560px] rounded-full bg-emeraldine/10 blur-[150px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-aurora absolute -bottom-48 left-1/4 h-[600px] w-[600px] rounded-full bg-amberglow/5 blur-[150px]"
        style={{ animationDelay: "-12s" }}
      />

      {/* Neural constellation */}
      <NeuralCanvas />

      {/* Cursor-following light */}
      <CursorGlow />

      {/* Film grain for premium texture */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{ backgroundImage: NOISE_SVG }}
      />
    </div>
  );
}
