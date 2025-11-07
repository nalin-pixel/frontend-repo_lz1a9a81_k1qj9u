import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

const badgeVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient glow overlays (non-blocking for pointer) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <Rocket className="h-4 w-4 text-indigo-400" />
          <span className="text-sm text-white/80">Interactive React Developer Portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-['Mona_Sans',Inter,ui-sans-serif] text-4xl font-semibold leading-tight tracking-tight text-white drop-shadow-sm md:text-6xl"
        >
          Hi, I build playful, modern web experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg"
        >
          Fusing 3D, motion and performance with React, TypeScript and WebGL to craft
          responsive, accessible interfaces that feel alive.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          className="mt-8 flex items-center gap-3"
        >
          <motion.a
            custom={1}
            variants={badgeVariant}
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110"
          >
            View Projects
          </motion.a>
          <motion.a
            custom={2}
            variants={badgeVariant}
            href="https://github.com" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </motion.a>
          <motion.a
            custom={3}
            variants={badgeVariant}
            href="https://linkedin.com" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </motion.a>
          <motion.a
            custom={4}
            variants={badgeVariant}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> Contact
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
