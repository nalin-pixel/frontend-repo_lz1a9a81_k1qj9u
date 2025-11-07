import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Immersive Product Showcase',
    description: '3D-enabled storefront with Spline, SSR and smooth WebGL transitions.',
    tags: ['React', 'Spline', 'WebGL', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Collaboration Board',
    description: 'Canvas-based multiplayer board powered by CRDTs and WebSockets.',
    tags: ['React', 'WS', 'Framer Motion', 'Zustand'],
    link: '#',
  },
  {
    title: 'Motion-first Marketing Site',
    description: 'High-performance landing with orchestrated scroll, parallax and LCP optimizations.',
    tags: ['Vite', 'Framer Motion', 'Perf'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Selected Work</h2>
        <p className="mt-2 max-w-2xl text-white/70">A few projects highlighting interaction design, performance, and delightful details.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            target={p.link.startsWith('http') ? '_blank' : undefined}
            rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 backdrop-blur-sm"
          >
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900">
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(59,130,246,.25),transparent_35%)] transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-4 flex-1">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-white/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
