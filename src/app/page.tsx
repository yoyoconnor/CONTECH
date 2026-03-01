"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const featureCards = [
    {
      title: "AI-Powered Analytics",
      desc: "Convert raw operational data into forward-looking intelligence.",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" className="text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" /><path d="M18 9l-5 5-4-4-3 3" />
        </svg>
      ),
    },
    {
      title: "Process Automation",
      desc: "Eliminate repetitive workflows with adaptive orchestration.",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" className="text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Generative AI",
      desc: "Deploy tailored generation for content, personalization & insights.",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" className="text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 014 4v2h2a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2h2V6a4 4 0 014-4z" /><path d="M9 14l2 2 4-4" />
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
    <div className="min-h-full w-full flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-4xl flex flex-col items-center text-center pt-8 md:pt-14 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.22),transparent_65%)] pointer-events-none" />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400/90 mb-6"
        >
          Operational AI
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] leading-[1.08] font-extrabold mb-6 tracking-tight max-w-4xl text-white relative"
        >
          <span className="bg-gradient-to-r from-sky-200 via-cyan-100 to-blue-300 bg-clip-text text-transparent inline-block animate-[gradientMove_8s_ease-in-out_infinite] bg-[length:200%_auto]">
            Intelligence
          </span>{" "}
          that compounds your advantage
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-gray-400 text-base md:text-xl mb-10 max-w-2xl leading-relaxed"
        >
          Deploy forecasting, automation, enrichment, and decision flows—without re-platforming. Start narrow, prove value, expand. Usage-based. No lock-in.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          {[
            { label: "Explore Products", href: "/products", primary: true },
            { label: "Talk To Us", href: "/contact" },
          ].map((btn) => (
            <Link key={btn.label} href={btn.href} legacyBehavior>
              <motion.a
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={
                  btn.primary
                    ? "px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold shadow-lg shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2 focus:ring-offset-[#080f18] transition-all duration-200"
                    : "px-7 py-3.5 rounded-xl bg-white/8 hover:bg-white/14 text-white font-semibold border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#080f18] transition-all duration-200"
                }
              >
                {btn.label}
              </motion.a>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Features — inline, no boxes */}
      <section id="services" className="w-full max-w-5xl pb-2 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-10 md:gap-8"
        >
          {featureCards.map((card) => (
            <motion.div
              key={card.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="flex flex-col items-center text-center md:border-r md:border-white/10 last:border-r-0 md:pr-8 last:md:pr-0"
            >
              <div className="mb-4 text-sky-400/90">{card.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-1.5 tracking-tight">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Templates Section */}
      <section className="w-full max-w-6xl py-16 md:py-20 relative" id="templates">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Starter Templates</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Pre-configured solution patterns. Customize and scale without rebuilding.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {templateSolutions.map((tpl) => (
            <motion.div
              key={tpl.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -3 }}
              className={`card-base p-5 group overflow-hidden bg-gradient-to-br ${tpl.color} border-white/10`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-base font-semibold text-white mb-1.5 tracking-tight">{tpl.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{tpl.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Now CTA */}
      <motion.section
        id="why"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl text-center py-16 md:py-20 relative"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">Why Now?</h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Most teams know AI is inevitable—but execution lags. Contech turns intention into deployed value. Start narrow, expand as impact compounds.
        </p>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl text-center pb-12 relative"
      >
        <div className="card-base card-loose text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white tracking-tight">Let&apos;s Build The Future</h2>
          <p className="text-gray-400 mb-8 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re exploring or scaling—we&apos;ll design the adaptive systems that move your business forward.
          </p>
          <a
            href="mailto:crbarbaccia@crimson.ua.edu"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-[#080f18] transition-all duration-200 text-base md:text-lg"
          >
            Get in Touch
          </a>
        </div>
      </motion.section>

      {/* Global footer is rendered in layout */}
    </div>
  );
}
