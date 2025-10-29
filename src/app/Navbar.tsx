"use client";
/* @ts-nocheck */

import React, { useState, useEffect } from "react";

// Lightweight Navbar without external imports to avoid type/runtime diagnostics in this environment.
export function Navbar() {
  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="w-full">
  <nav className="relative flex items-center justify-between h-16 md:h-20 rounded-none bg-transparent px-4 md:px-10 overflow-visible">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-white/6 dark:bg-white/4/10 rounded-full px-3 py-1">
            <img src="/logo.png" alt="Contech Logo" width={110} height={110} className="h-8 md:h-12 w-auto object-contain" />
            <span className="text-lg md:text-2xl font-extrabold tracking-tight drop-shadow-md select-none">
              <span className="text-white lowercase">con</span>
              <span className="text-blue-400 lowercase">tech</span>
            </span>
          </div>
        </div>
        <ul className="hidden md:flex flex-1 justify-center gap-6 md:gap-10 text-sm md:text-base font-medium items-center">
          <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
          <li><a href="/products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
          <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
          <li><a href="/why" className="text-gray-300 hover:text-white transition-colors">Why Now</a></li>
          <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
        </ul>

        <div className="flex items-center gap-3">
          {/* Mobile menu button only (theme toggle removed per request) */}
          <button
            onClick={() => setMenuOpen((s: boolean) => !s)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="md:hidden p-2 rounded-md bg-white/6 hover:bg-white/10 transition text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </div>

        {/* Mobile menu (small screens) */}
        <div className={`md:hidden absolute left-4 right-4 top-full mt-3 z-40 ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="bg-black/6/10 dark:bg-white/6 backdrop-blur-sm border border-white/6 rounded-3xl p-4 shadow-lg backdrop-clip-padding">
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors block">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white transition-colors block">Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors block">About</a></li>
              <li><a href="/why" className="text-gray-300 hover:text-white transition-colors block">Why Now</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors block">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}