import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For this demo, just show success state
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-24">
      <div className="mb-10 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 backdrop-blur-sm">
          <Mail className="h-4 w-4 text-indigo-400" />
          <span>Get in touch</span>
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">Let's build something delightful</h2>
        <p className="mt-2 text-white/70">Have a project in mind or want to collaborate? Drop a line and I'll get back to you.</p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm text-white/70" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-indigo-500/40 focus:outline-none"
              placeholder="Ada Lovelace"
            />
          </div>
          <div>
            <label className="text-sm text-white/70" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-indigo-500/40 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-white/70" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-indigo-500/40 focus:outline-none"
              placeholder="Tell me about your idea..."
            />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-white/60">I typically reply within 24–48 hours.</p>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110"
          >
            {sent ? (
              <>
                <span>Sent!</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </motion.form>

      <footer className="mt-16 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Your Name • Built with React, Tailwind & Framer Motion
      </footer>
    </section>
  );
}
