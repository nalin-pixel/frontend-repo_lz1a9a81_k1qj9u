import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const layers = [
  { color: 'from-indigo-500/20 to-purple-500/20', speed: 0.2 },
  { color: 'from-cyan-400/15 to-blue-500/10', speed: 0.5 },
  { color: 'from-fuchsia-400/20 to-rose-500/10', speed: 0.9 },
];

export default function ParallaxGallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -220]);

  useEffect(() => {
    // Ensure the section has height for parallax to act
  }, []);

  return (
    <section ref={ref} className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="absolute inset-0 -z-[1]">
        <motion.div style={{ y: y1 }} className="pointer-events-none absolute inset-x-10 top-10 h-56 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl" />
        <motion.div style={{ y: y2 }} className="pointer-events-none absolute inset-x-20 top-40 h-56 rounded-3xl bg-gradient-to-r from-cyan-400/15 to-blue-500/10 blur-2xl" />
        <motion.div style={{ y: y3 }} className="pointer-events-none absolute inset-x-10 bottom-10 h-56 rounded-3xl bg-gradient-to-r from-fuchsia-400/20 to-rose-500/10 blur-2xl" />
      </div>

      <div className="relative">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Parallax Playground</h2>
        <p className="mt-2 max-w-2xl text-white/70">Layers of motion that respond to your scroll, showcasing an eye for delightful yet performant interactions.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,.25),transparent_35%)] transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-medium">Interaction #{i}</h3>
                <p className="text-sm text-white/70">Micro-animations, motion curves and timing tuned for feel.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
