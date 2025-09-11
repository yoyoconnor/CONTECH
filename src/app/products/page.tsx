"use client";

import Image from "next/image";

const products = [
  {
    name: "AI Chatbot",
    description: "24/7 customer support powered by generative AI, tailored for small businesses.",
    image: "/globe.svg",
    link: "#",
  },
  {
    name: "Smart Analytics",
    description: "Actionable business insights with automated reporting and trend detection.",
    image: "/file.svg",
    link: "#",
  },
  {
    name: "Workflow Automation",
    description: "Automate repetitive tasks and connect your favorite business tools with AI.",
    image: "/window.svg",
    link: "#",
  },
];

export default function Products() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-14 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-blue-900/30" />
        <div className="absolute top-36 left-1/3 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-24 right-1/4 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full" />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 tracking-tight text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {products.map((product) => (
          <div
            key={product.name}
            className="group relative flex flex-col items-start overflow-hidden rounded-3xl p-10 bg-white text-slate-800 shadow-xl shadow-blue-900/10 border border-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus-within:shadow-2xl"
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_70%)]" />
            <div className="mb-6 p-4 rounded-2xl bg-blue-50 border border-blue-200 inline-flex relative z-10">
              <Image src={product.image} alt={product.name} width={64} height={64} className="w-16 h-16 object-contain" />
            </div>
            <h2 className="text-2xl font-bold mb-3 tracking-tight relative z-10 text-slate-900 group-hover:text-blue-700 transition">{product.name}</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8 relative z-10">{product.description}</p>
            <a
              href={product.link}
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white transition mt-auto relative z-10"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
