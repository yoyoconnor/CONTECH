"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    name: "All-in-One Customer Business Solution",
    description: "We help you design and implement an all-in-one customer and business solution—CRM, support, analytics, and automation unified for your team.",
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

const previousProjects = [
  {
    name: "Tpara Web App",
    description: "Custom web application for streamlined workflows and user-driven operations.",
    outcome: "Deployed and in use for target users.",
  },
  {
    name: "Churn & Retention Flow",
    description: "At-risk customer detection with automated retention workflows.",
    outcome: "Improved retention and LTV.",
  },
  {
    name: "Knowledge Base Q&A",
    description: "Context-grounded generative Q&A over operational data.",
    outcome: "Faster internal support and onboarding.",
  },
];

export default function Products() {
  return (
    <div className="min-h-full w-full flex flex-col items-center py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="card-base card-loose group overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
            <div className="relative z-10 mb-5 p-3.5 rounded-2xl bg-white/10 border border-white/10 w-fit">
              <Image src={product.image} alt={product.name} width={56} height={56} className="w-14 h-14 object-contain opacity-90" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2 tracking-tight relative z-10">{product.name}</h2>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-8 relative z-10 flex-1">{product.description}</p>
            <a
              href={product.link}
              className="relative z-10 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/18 text-white text-sm font-medium border border-white/15 transition-colors w-fit"
            >
              Learn More
            </a>
          </motion.div>
        ))}
      </div>

      {/* Previous Projects */}
      <section className="w-full max-w-6xl mt-16 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight text-center">Previous Projects</h2>
        <p className="text-gray-400 text-center text-sm md:text-base max-w-xl mx-auto mb-10">
          Selected past engagements and proof-of-concept work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previousProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="card-base p-6 group overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
              <h3 className="text-lg font-semibold text-white mb-2 tracking-tight relative z-10">{project.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 relative z-10 flex-1">{project.description}</p>
              <p className="text-sky-300/90 text-sm font-medium relative z-10">
                <span className="text-gray-500 font-normal">Outcome: </span>
                {project.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
