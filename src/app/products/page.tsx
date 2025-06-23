"use client";

const products = [
	{
		name: "AI Chatbot",
		description:
			"24/7 customer support powered by generative AI, tailored for small businesses.",
		image: "/globe.svg",
		link: "#",
	},
	{
		name: "Smart Analytics",
		description:
			"Actionable business insights with automated reporting and trend detection.",
		image: "/file.svg",
		link: "#",
	},
	{
		name: "Workflow Automator",
		description:
			"Automate repetitive tasks and connect your favorite business tools with AI.",
		image: "/window.svg",
		link: "#",
	},
];

export default function Products() {
	return (
		<>
			{/* Remove neural network animation background, keep only gradient background */}
			<main className="min-h-screen flex flex-col items-center px-4 py-16 relative z-10">
				<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 drop-shadow-xl text-center">
					Our Products
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
					{products.map((product) => (
						<div
							key={product.name}
							className="bg-gradient-to-br from-gray-900/90 via-gray-950/90 to-blue-900/80 rounded-2xl p-8 flex flex-col items-center shadow-2xl border border-blue-900 hover:scale-105 hover:border-blue-400 transition-transform duration-300 group cursor-pointer backdrop-blur-md"
						>
							<img
								src={product.image}
								alt={product.name}
								className="h-20 w-20 mb-6 object-contain drop-shadow-lg"
							/>
							<h2 className="text-2xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition text-center">
								{product.name}
							</h2>
							<p className="text-gray-200 text-lg text-center mb-4">
								{product.description}
							</p>
							<a
								href={product.link}
								className="mt-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
							>
								Learn More
							</a>
						</div>
					))}
				</div>
			</main>
		</>
	);
}
