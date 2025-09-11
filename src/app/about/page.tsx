"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 0.55, 0.25, 0.95] as [number, number, number, number], delay },
  viewport: { once: true, amount: 0.4 }
});

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center relative">
      {/* Decorative backdrop elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-blue-900/20" />
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-1/5 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full" />
      </div>

      <section className="max-w-5xl mx-auto text-center pt-8 pb-16 px-4 md:px-0">
        <motion.h1 {...fadeUp()} className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight relative">
          <span className="relative inline-block">
            About Contech
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
          </span>
        </motion.h1>
        <motion.p {...fadeUp(0.12)} className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          We build AI infrastructure and decision systems that give small and mid-sized businesses an unfair advantage. Our mission is to compress the time between question and insight, idea and execution.
        </motion.p>
      </section>

      {/* Unified wide card replacing two split cards */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-20">
        <motion.div {...fadeUp(0.05)} className="card-base card-loose relative overflow-hidden">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.2),transparent_72%)]" />
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
              <p className="text-gray-200 leading-relaxed">
                Contech delivers AI-enabled automation, forecasting, data enrichment, and intelligent workflow orchestration—without forcing teams to re-platform. We integrate seamlessly with existing tools and expose capabilities through modular APIs and dashboards.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Why It Matters</h2>
              <p className="text-gray-200 leading-relaxed">
                The AI divide is growing. Enterprises move fast; smaller operators get left behind. We close that gap. Our pricing aligns with growth so teams can adopt AI safely, incrementally, and affordably.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-blue-500/10 border border-blue-300/30 px-4 py-3 text-sm text-blue-100">Modular APIs</div>
                <div className="rounded-xl bg-blue-500/10 border border-blue-300/30 px-4 py-3 text-sm text-blue-100">Fast Integration</div>
                <div className="rounded-xl bg-blue-500/10 border border-blue-300/30 px-4 py-3 text-sm text-blue-100">Usage-Based</div>
                <div className="rounded-xl bg-blue-500/10 border border-blue-300/30 px-4 py-3 text-sm text-blue-100">No Lock-In</div>
              </div>
            </div>
          </div>
          {/* Stats band */}
          <div className="mt-14 grid gap-6 sm:grid-cols-3 relative z-10">
            {[
              { k: "< 4 wks", v: "Avg Deploy Time" },
              { k: "95%+", v: "Retention on Pilots" },
              { k: "$0", v: "Upfront Platform Fee" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-5 text-center flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent tracking-tight">{s.k}</span>
                <span className="text-xs uppercase tracking-wider text-gray-400 mt-2">{s.v}</span>
              </div>
            ))}
          </div>
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 w-px h-[70%] bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        </motion.div>
      </section>

      {/* Metrics band */}
      <motion.section {...fadeUp(0.05)} className="w-full max-w-6xl px-4 md:px-0 mb-24">
        <div className="card-base p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-[linear-gradient(110deg,rgba(255,255,255,0.12),transparent)]" />
          <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight relative z-10 max-w-md">
            Shipping durable intelligence, not slideware.
          </h3>
          <div className="grid grid-cols-3 gap-6 relative z-10 w-full md:w-auto">
            {[
              { n: "12+", l: "Connectors" },
              { n: "30%", l: "Avg Efficiency Gain" },
              { n: "3x", l: "Faster Iteration" },
            ].map((m) => (
              <div key={m.l} className="text-center">
                <div className="text-xl font-bold text-white">{m.n}</div>
                <div className="text-[0.65rem] tracking-wider uppercase text-gray-400 mt-1">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Founders */}
      <section className="max-w-5xl w-full px-4 md:px-0">
        <motion.h2 {...fadeUp()} className="text-3xl font-bold text-white mb-8 text-center">Founders</motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[{
            name: "Connor Barbaccia",
            role: "Co-Founder",
            img: "https://media.licdn.com/dms/image/v2/D5603AQF7WilUXNAAPA/profile-displayphoto-shrink_400_400/B56ZbpdDWfGsAg-/0/1747673430938?e=1755734400&v=beta&t=6_qfeTJJQDz-u0Ttx8o7L6ZEggn6gvSAAfrM7aWbE8M",
            link: "https://www.linkedin.com/in/connor-barbaccia/"
          }, {
            name: "Connor Kulawiak",
            role: "Co-Founder",
            img: "https://media.licdn.com/dms/image/v2/D4E03AQG50n37PU9jiw/profile-displayphoto-shrink_400_400/B4EZbhUPbwHYAg-/0/1747536902376?e=1755734400&v=beta&t=xXmFS3VZAPbK5EUeOFgDbyp6aNJrjhHdAJbUSQOOa5U",
            link: "https://www.linkedin.com/in/connor-kulawiak/"
          }].map((f, i) => (
            <motion.div key={f.name} {...fadeUp(0.05 * (i + 1))} className="card-base p-8 group overflow-hidden relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_70%)]" />
              <div className="flex flex-col items-center relative z-10 text-center">
                <div className="p-[2px] rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 mb-4">
                  <Image src={f.img} alt={f.name} width={120} height={120} className="w-32 h-32 rounded-full object-cover" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-1">{f.name}</h3>
                <p className="text-blue-300 mb-2">{f.role}</p>
                <a href={f.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 transition">LinkedIn</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 mb-12 max-w-4xl mx-auto text-center px-4 md:px-0">
        <motion.div {...fadeUp()} className="card-base card-loose relative overflow-hidden">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.22),transparent_68%)]" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">We Grow When You Grow</h3>
          <p className="text-gray-200 leading-relaxed mb-6 relative z-10">
            Adoption should be frictionless. Start with targeted use-cases, expand when ROI is real. No over-commitment, no trapped value.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 relative z-10">
            Talk To Us
          </a>
        </motion.div>
      </section>
    </main>
  );
}
