"use client";

import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-14 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-blue-900/30" />
        <div className="absolute top-32 left-1/5 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-24 right-1/4 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full" />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-tight text-center">Contact</h1>
      <div className="card-base card-loose max-w-xl w-full flex flex-col items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_65%)]" />
        <p className="text-gray-200 text-lg md:text-xl mb-8 text-center leading-relaxed relative z-10">
          Ready to explore what we can deploy together? Reach out—no sales theatre, just real capability.
        </p>
        <div className="flex flex-col gap-4 w-full relative z-10">
          <a
            href="mailto:contact@contech.ai"
            className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition text-center"
          >
            Email Us
          </a>
          <a
            href="https://www.linkedin.com/company/contech-ai/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl shadow-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition text-center"
          >
            LinkedIn
          </a>
          <a
            href="tel:3313857946"
            className="w-full px-8 py-4 bg-blue-950/70 hover:bg-blue-900/70 text-blue-100 font-semibold rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition text-center"
          >
            Call Us: (331) 385-7946
          </a>
        </div>
      </div>
    </main>
  );
}
