"use client";

import React, { useEffect, useState } from "react";

export default function About() {
  // Neural network layer definitions
  const layers = [6, 8, 8, 4];
  const layerX = [200, 700, 1300, 1720];

  // Safe vertical positions for each layer
  const layerY = (n: number) => {
    if (n === 1) return [540]; // center if only one node
    return Array.from({ length: n }, (_, i) => 200 + i * ((1080 - 400) / (n - 1)));
  };

  // Generate a random valid path across layers
  function generateRoute() {
    const idxs = [Math.floor(Math.random() * layers[0])];
    for (let l = 1; l < layers.length; l++) {
      const prev = idxs[l - 1];
      const maxIdx = layers[l] - 1;
      const min = Math.max(0, prev - 1);
      const max = Math.min(maxIdx, prev + 1);
      const next = Math.floor(Math.random() * (max - min + 1)) + min;
      idxs.push(Math.max(0, Math.min(maxIdx, next)));
    }
    return idxs;
  }

  // Only generate the route on the client to avoid hydration mismatch
  function useRouteRefresh(interval: number) {
    const [route, setRoute] = useState<number[] | null>(null);

    useEffect(() => {
      setRoute(generateRoute()); // set initial route on client only
      const id = setInterval(() => {
        setRoute(generateRoute());
      }, interval);
      return () => clearInterval(id);
    }, [interval]);

    return route;
  }

  const route = useRouteRefresh(2500);
  const cxVals = route ? route.map((_, l) => layerX[l]).join(";") : "";
  const cyVals = route ? route.map((idx, l) => layerY(layers[l])[idx]).join(";") : "";

  return (
    <>
      {/* Neural Network Background Animation */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/70 to-blue-600/60" />
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <g>
            {/* Edges */}
            {(() => {
              const lines = [];
              for (let l = 0; l < layers.length - 1; l++) {
                const y1s = layerY(layers[l]);
                const y2s = layerY(layers[l + 1]);
                for (let i = 0; i < layers[l]; i++) {
                  for (let j = 0; j < layers[l + 1]; j++) {
                    lines.push(
                      <line
                        key={`edge-${l}-${i}-${j}`}
                        x1={layerX[l]}
                        y1={y1s[i]}
                        x2={layerX[l + 1]}
                        y2={y2s[j]}
                        stroke="#3b82f6"
                        strokeOpacity="0.15"
                        strokeWidth="1.5"
                      />
                    );
                  }
                }
              }
              return lines;
            })()}

            {/* Nodes */}
            {layers.map((count, l) =>
              layerY(count).map((y, i) => (
                <circle
                  key={`node-${l}-${i}`}
                  cx={layerX[l]}
                  cy={y}
                  r="12"
                  fill="#60a5fa"
                  fillOpacity="0.6"
                />
              ))
            )}

            {/* Animated Signal */}
            {route && (
              <circle r="16" fill="#fff" fillOpacity="0.95" key={route.join("-")}>
                <animate
                  attributeName="cx"
                  values={cxVals}
                  keyTimes="0;0.33;0.66;1"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values={cyVals}
                  keyTimes="0;0.33;0.66;1"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        </svg>
      </div>

      <div
        className="fixed inset-0 w-full h-full bg-gradient-to-br from-black/80 via-blue-900/70 to-blue-600/60 z-0"
        aria-hidden="true"
      ></div>

      <main className="min-h-screen flex flex-col items-center px-4 py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 drop-shadow-xl text-center">
          About Us
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl text-center mb-12">
          <span className="font-semibold text-white">Contech</span> is an AI startup dedicated
          to empowering small and medium businesses with actionable insights, process automation,
          and digital transformation. We make advanced AI accessible, practical, and impactful
          for your business.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-300">Founders</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Founder 1 */}
          <div className="flex flex-col items-center bg-gray-900/70 rounded-2xl p-6 shadow-lg w-64">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQF7WilUXNAAPA/profile-displayphoto-shrink_400_400/B56ZbpdDWfGsAg-/0/1747673430938?e=1755734400&v=beta&t=6_qfeTJJQDz-u0Ttx8o7L6ZEggn6gvSAAfrM7aWbE8M"
              alt="Connor Barbaccia"
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-700 shadow"
            />
            <div className="text-white font-semibold text-lg">Connor Barbaccia</div>
            <div className="text-blue-300 text-md">Co-Founder</div>
            <a
              href="https://www.linkedin.com/in/connor-barbaccia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2"
            >
              LinkedIn
            </a>
          </div>

          {/* Founder 2 */}
          <div className="flex flex-col items-center bg-gray-900/70 rounded-2xl p-6 shadow-lg w-64">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQG50n37PU9jiw/profile-displayphoto-shrink_400_400/B4EZbhUPbwHYAg-/0/1747536902376?e=1755734400&v=beta&t=xXmFS3VZAPbK5EUeOFgDbyp6aNJrjhHdAJbUSQOOa5U"
              alt="Connor Kulawiak"
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-700 shadow"
            />
            <div className="text-white font-semibold text-lg">Connor Kulawiak</div>
            <div className="text-blue-300 text-md">Co-Founder</div>
            <a
              href="https://www.linkedin.com/in/connor-kulawiak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
