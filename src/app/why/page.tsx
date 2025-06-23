"use client";

import React from "react";
import Image from "next/image";

export default function WhyNow() {
  return (
    <>
      <div className="fixed inset-0 w-full h-full z-0" aria-hidden="true">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/80 via-blue-900/70 to-blue-600/60" />
        <Image
          src="/rag.png"
          alt="Background"
          fill
          className="w-full h-full object-cover object-center absolute inset-0"
        />
      </div>
      <main className="min-h-screen flex flex-col items-center px-4 py-16 relative z-10">
        <div className="bg-black/60 rounded-3xl shadow-2xl p-10 md:p-16 max-w-3xl w-full flex flex-col items-center backdrop-blur-md">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 drop-shadow-xl text-center">Why Now?</h1>
          <article className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl text-center mb-10">
            <p className="mb-6">
              The world is changing fast&mdash;AI is no longer a luxury, it&apos;s a necessity for businesses that want to stay competitive. Small and medium businesses that implement AI today gain a massive edge in efficiency, customer experience, and growth. Waiting means falling behind as competitors automate, analyze, and adapt faster than ever before.
            </p>
            <p className="mb-6">
              <span className="font-semibold text-white">Contech</span> makes it easy to start your AI journey now, with no upfront cost and a pricing model that grows only as your business succeeds. We believe in your growth: if you grow, we grow—no risk, no barriers.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">How can we improve your buisness</h2>
            <ul className="text-left text-gray-200 text-lg md:text-xl mb-8 list-disc list-inside mx-auto max-w-xl">
              <li className="mb-2"><span className="font-semibold text-blue-300">Restaurants:</span> Reduce food waste by up to 30% with AI-powered demand forecasting and smarter inventory management.</li>
              <li className="mb-2"><span className="font-semibold text-blue-300">Retailers:</span> Improve inventory turnover and avoid costly stockouts or overstocking with predictive analytics.</li>
              <li className="mb-2"><span className="font-semibold text-blue-300">Service Businesses:</span> Boost sales by identifying high-value customers and automating personalized outreach.</li>
              <li className="mb-2"><span className="font-semibold text-blue-300">All Industries:</span> Optimize labor scheduling, reduce overtime, and improve employee satisfaction with AI-driven workforce management.</li>
            </ul>
            <p className="mb-2 text-blue-200 font-semibold">Contech helps you solve real business problems, save money, and unlock new growth—no matter your industry.</p>
            <div className="bg-white/10 rounded-xl p-6 text-white font-bold text-xl shadow-lg max-w-xl mx-auto mt-12 backdrop-blur-sm">
              $0 upfront. We only charge as your business scales. Start for free, pay as you grow.
            </div>
          </article>
        </div>
      </main>
    </>
  );
}