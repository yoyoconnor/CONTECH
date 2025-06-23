"use client";

import React from "react";

export default function Contact() {
  return (
    <>
      {/* Remove neural network animation background, keep only gradient background */}
      <main className="min-h-screen flex flex-col items-center px-4 py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 drop-shadow-xl text-center">Contact</h1>
        <div className="bg-gray-900/70 rounded-2xl p-8 shadow-lg max-w-xl w-full flex flex-col items-center">
          <p className="text-gray-200 text-lg md:text-xl mb-6 text-center">
            Ready to start your AI journey or have questions? Reach out to us!
          </p>
          <a
            href="mailto:contact@contech.ai"
            className="inline-block px-10 py-5 bg-blue-600 text-white font-bold rounded-xl shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition text-xl md:text-2xl mb-4"
          >
            Email Us
          </a>
          <a
            href="https://www.linkedin.com/company/context-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-blue-900 text-blue-200 font-bold rounded-xl shadow-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition text-xl md:text-2xl mb-4"
          >
            LinkedIn
          </a>
          <a
            href="tel:3313857946"
            className="inline-block px-10 py-5 bg-blue-950 text-blue-100 font-bold rounded-xl shadow-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition text-xl md:text-2xl"
          >
            Call Us: (331) 385-7946
          </a>
        </div>
      </main>
    </>
  );
}
