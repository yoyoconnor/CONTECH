import React from "react";

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 overflow-hidden">
      {/* Background Image */}
      <img
        src="/back.png"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        aria-hidden="true"
      />
      {/* Overlay for gradient and color blending, now scrolls with content */}

      {/* Hero Section */}
      <section className="w-full max-w-3xl flex flex-col items-center text-center py-32 md:py-48 z-10 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-xl">
          AI-powered systems for small business growth
        </h1>
        <p className="text-gray-200 text-xl md:text-2xl mb-8 max-w-2xl">
          We help small businesses integrate AI into their operations through
          automation, analytics, and generative intelligence.
        </p>
        <a
          href="/products"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition text-lg md:text-xl mt-4"
        >
          Check Out Our Products
        </a>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="w-full max-w-5xl py-12 z-10 relative"
      >
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-950/90 to-blue-900/80 rounded-2xl p-10 flex-1 min-w-[260px] shadow-2xl border border-blue-900 hover:scale-105 hover:border-blue-400 transition-transform duration-300 group cursor-pointer backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition">
              AI-Powered Analytics
            </h3>
            <p className="text-gray-200 text-lg">
              Turn raw data into actionable insights.
            </p>
            <div className="mt-6 flex justify-center">
              <svg
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 24 24"
                className="text-blue-400 group-hover:text-blue-200 transition"
              >
                <path
                  d="M5 12l5 5L20 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-950/90 to-blue-900/80 rounded-2xl p-10 flex-1 min-w-[260px] shadow-2xl border border-blue-900 hover:scale-105 hover:border-blue-400 transition-transform duration-300 group cursor-pointer backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition">
              Process Automation
            </h3>
            <p className="text-gray-200 text-lg">
              Streamline workflows and reduce manual tasks.
            </p>
            <div className="mt-6 flex justify-center">
              <svg
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 24 24"
                className="text-blue-400 group-hover:text-blue-200 transition"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 12l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-950/90 to-blue-900/80 rounded-2xl p-10 flex-1 min-w-[260px] shadow-2xl border border-blue-900 hover:scale-105 hover:border-blue-400 transition-transform duration-300 group cursor-pointer backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition">
              Generative AI
            </h3>
            <p className="text-gray-200 text-lg">
              Deploy advanced AI to create content and engage customers.
            </p>
            <div className="mt-6 flex justify-center">
              <svg
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 24 24"
                className="text-blue-400 group-hover:text-blue-200 transition"
              >
                <path
                  d="M12 2v20M2 12h20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section
        id="why"
        className="w-full max-w-2xl text-center py-12 z-10 relative"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">
          Why Now?
        </h2>
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
          Most businesses know AI is the future—but they don’t know where to
          start.{" "}
          <span className="font-semibold text-white">CONtext</span> is here to
          help them begin that journey.
        </p>
      </section>

      {/* Call to Action Section */}
      <section
        id="contact"
        className="w-full max-w-2xl text-center py-12 z-10 relative"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">
          Let's Build the Future Together
        </h2>
        <p className="text-gray-200 mb-8 text-lg md:text-xl">
          Whether you're ready to integrate or just exploring, we're here to
          help.
        </p>
        <a
          href="mailto:hello@context.ai"
          className="inline-block px-10 py-5 bg-blue-600 text-white font-bold rounded-xl shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition text-xl md:text-2xl animate-pulse hover:animate-none"
        >
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-8 border-t border-gray-800 text-gray-300 text-lg mt-12 z-10 relative">
        © {currentYear}{" "}
        <span className="font-bold text-white">CONtext</span>. All rights
        reserved.
      </footer>
    </main>
  );
}
