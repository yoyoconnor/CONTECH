"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <header className="shrink-0 w-full bg-white/[0.06] backdrop-blur-xl border-b border-white/[0.1]">
      <nav className="relative flex items-center justify-between h-14 md:h-16 px-4 md:px-6 overflow-visible">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2.5 rounded-full pl-1.5 pr-4 py-1.5">
            <Image src="/logo.png" alt="Contech Logo" width={40} height={40} className="h-9 w-auto object-contain" />
            <span className="text-lg md:text-xl font-bold tracking-tight select-none">
              <span className="text-white">con</span>
              <span className="text-sky-400">tech</span>
            </span>
          </div>
        </div>
        <ul className="hidden md:flex flex-1 justify-center gap-1">
          {["Home", "Products", "About", "Why Now", "Contact"].map((label) => (
            <li key={label}>
              <Link
                href={label === "Home" ? "/" : label === "Why Now" ? "/why" : `/${label.toLowerCase()}`}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <button
            onClick={() => setMenuOpen((s: boolean) => !s)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="md:hidden p-2.5 rounded-xl bg-white/8 hover:bg-white/12 transition text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </div>

        <div className={`md:hidden absolute left-0 right-0 top-full z-40 ${menuOpen ? "block" : "hidden"}`}>
          <div className="rounded-b-2xl bg-white/[0.08] backdrop-blur-xl border border-t-0 border-white/10 p-4 shadow-xl">
            <ul className="flex flex-col gap-0.5 text-sm">
              {["Home", "Products", "About", "Why Now", "Contact"].map((label) => (
                <li key={label}>
                  <Link
                    href={label === "Home" ? "/" : label === "Why Now" ? "/why" : `/${label.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}