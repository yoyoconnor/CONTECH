"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-full w-full flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight text-center">Contact</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card-base card-loose max-w-md w-full flex flex-col items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),transparent_60%)]" />
        <p className="text-gray-400 text-base md:text-lg mb-8 text-center leading-relaxed relative z-10">
          Ready to explore what we can deploy together? Reach out—no sales theatre, just real capability.
        </p>
        <div className="flex flex-col gap-3 w-full relative z-10">
          <a
            href="mailto:crbarbaccia@crimson.ua.edu"
            className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-center shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-[#080f18] transition-all duration-200"
          >
            Email Us
          </a>
          <a
            href="https://www.linkedin.com/company/contech-ai/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-3.5 rounded-xl bg-white/8 hover:bg-white/14 text-white font-medium border border-white/15 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#080f18] transition-all duration-200 text-center"
          >
            LinkedIn
          </a>
          <a
            href="tel:3313857946"
            className="w-full px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2 focus:ring-offset-[#080f18] transition-all duration-200 text-center"
          >
            Call (331) 385-7946
          </a>
        </div>
      </motion.div>
    </div>
  );
}
