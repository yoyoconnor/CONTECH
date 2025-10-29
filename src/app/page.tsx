"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const featureCards = [
    {
      title: "AI-Powered Analytics",
      desc: "Convert raw operational data into forward-looking intelligence.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" className="text-blue-400">
          <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Process Automation",
      desc: "Eliminate repetitive workflows with adaptive orchestration.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" className="text-blue-400">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Generative AI",
      desc: "Deploy tailored generation for content, personalization & insights.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" className="text-blue-400">
          <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const templateSolutions = [
    { name: "Demand Forecasting", blurb: "Predict volume & inventory with time-series + causal drivers.", color: "from-blue-500/30 to-cyan-400/20" },
    { name: "Churn Detection", blurb: "Surface at-risk customers early and trigger retention flows.", color: "from-indigo-500/30 to-purple-400/20" },
    { name: "Workflow Orchestrator", blurb: "Chain tools, LLM calls, and data events into adaptive pipelines.", color: "from-emerald-500/30 to-teal-400/20" },
    { name: "Generative Knowledge Base", blurb: "Context-grounded Q&A over your operational data.", color: "from-fuchsia-500/30 to-pink-400/20" },
  ];

  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 overflow-hidden">
      {/* Background image subtle overlay */}
      <Image
        src="/back.png"
        alt="Background"
        fill
        className="fixed inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-screen pointer-events-none select-none -z-10"
        aria-hidden="true"
      />

      {/* Hero */}
  <section className="w-full max-w-5xl flex flex-col items-center text-center pt-10 md:pt-16 pb-24 relative rounded-3xl overflow-hidden">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_70%)] pointer-events-none" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-[3.5rem] leading-[1.1] font-extrabold mb-8 tracking-tight max-w-5xl text-white relative"
        >
          <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-400 bg-clip-text text-transparent inline-block animate-[gradientMove_6s_linear_infinite] bg-[length:200%_auto]">
            Operational AI
          </span>{" "}that compounds your advantage
          <span className="absolute -inset-x-10 -bottom-4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-gray-300 text-lg md:text-2xl mb-12 max-w-3xl leading-relaxed"
        >
          Deploy intelligence into forecasting, automation, enrichment, and decision flows—without re-platforming. Start narrow, prove value, expand with momentum. Usage-based. No lock‑in.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {[
            { label: "Explore Products", href: "/products", primary: true },
            { label: "Talk To Us", href: "/contact" },
          ].map((btn) => (
            <Link key={btn.label} href={btn.href} legacyBehavior>
              <motion.a
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
                className={
                  btn.primary
                    ? "px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-900/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
                    : "px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/15 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition"
                }
              >
                {btn.label}
              </motion.a>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Feature Grid */}
  <section id="services" className="w-full max-w-6xl pb-8 relative rounded-3xl overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-3 gap-8"
        >
          {featureCards.map((card) => (
            <motion.div
              key={card.title}
              variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1 } }}
              whileHover={{ scale: 1.03 }}
              className="card-base card-loose group overflow-hidden"
            >
              {/* subtle hover sheen */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_65%)]" />
              <div className="relative z-10 flex flex-col items-start">
                <div className="mb-4 p-3 rounded-xl bg-blue-500/15 border border-blue-400/30">{card.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-blue-100 transition">{card.title}</h3>
                <p className="text-gray-200 text-base leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Templates Section */}
  <section className="w-full max-w-6xl py-24 relative rounded-3xl overflow-hidden" id="templates">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Starter Templates</h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Launch faster with pre-configured solution patterns. Customize, extend, and scale without rebuilding primitives.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templateSolutions.map((tpl) => (
            <motion.div
              key={tpl.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -4 }}
              className="card-base p-6 group overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent)]" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{tpl.name}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{tpl.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Now CTA */}
      <motion.section
        id="why"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
  className="w-full max-w-4xl text-center py-24 relative rounded-3xl overflow-hidden"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Why Now?</h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Most teams know AI is inevitable—but execution lags. Contech turns intention into deployed value. Start narrow, expand as impact compounds.
        </p>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
  className="w-full max-w-4xl text-center pb-16 relative rounded-3xl overflow-hidden"
      >
        <div className="card-base card-loose">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let&apos;s Build The Future</h2>
          <p className="text-gray-200 mb-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re exploring or scaling—let&apos;s design the adaptive systems that move your business forward.
          </p>
          <a
            href="mailto:crbarbaccia@crimson.ua.edu"
            className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-900/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition text-lg md:text-xl"
          >
            Get in Touch
          </a>
        </div>
      </motion.section>

      {/* Global footer is rendered in layout */}
    </main>
  );
}
