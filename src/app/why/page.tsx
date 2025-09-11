"use client";

import React from "react";

export default function WhyNow() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-10 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-blue-900/30" />
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-16 right-1/4 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full" />
      </div>

      <div className="w-full max-w-4xl text-center pt-8 pb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Why Now?</h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          AI adoption is accelerating. The gap between those who integrate decision automation and those who wait is widening. Early movers compound efficiency, intelligence, and customer closeness.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl mb-20">
        <div className="card-base card-loose relative overflow-hidden">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.16),transparent_65%)]" />
          <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Industry Impact</h2>
          <ul className="text-left text-gray-200 space-y-3 text-base leading-relaxed relative z-10">
            <li><span className="text-blue-200 font-semibold">Restaurants:</span> AI demand forecasting cuts waste and stabilizes margins.</li>
            <li><span className="text-blue-200 font-semibold">Retail:</span> Predictive inventory prevents cash drag & stockouts.</li>
            <li><span className="text-blue-200 font-semibold">Services:</span> Intelligent routing and personalization increases lifetime value.</li>
            <li><span className="text-blue-200 font-semibold">All Operators:</span> Labor optimization and forecasting reduce overtime and volatility.</li>
          </ul>
        </div>
        <div className="card-base card-loose relative overflow-hidden">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.16),transparent_65%)]" />
          <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Why Contech</h2>
          <p className="text-gray-200 leading-relaxed mb-4 relative z-10">
            We abstract complexity. No multi-quarter integration cycles. Deploy targeted capability, measure lift, expand intentionally. Our pricing tracks utilization—aligned incentives, zero lock-in.
          </p>
          <div className="mt-6 px-6 py-5 rounded-2xl bg-blue-500/15 border border-blue-300/30 text-white font-semibold tracking-tight shadow relative z-10">
            $0 upfront. Scale-based pricing. Value before commitment.
          </div>
        </div>
      </div>

      <div className="max-w-3xl text-center mb-24">
        <h2 className="text-3xl font-bold text-white mb-4">The Window Is Now</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Market advantage shifts toward operators who compress decision cycles and leverage predictive signals. Those who wait inherit higher competitive baselines. We help you move now—deliberately.
        </p>
      </div>

      <div className="w-full max-w-4xl mb-16">
        <div className="card-base card-loose text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.18),transparent_65%)]" />
          <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Begin With One Workflow</h3>
          <p className="text-gray-200 mb-6 leading-relaxed relative z-10">We don&apos;t sell transformation theatre. We deploy durable capability. Start small—expand with proof.</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition relative z-10">Talk To Us</a>
        </div>
      </div>
    </main>
  );
}