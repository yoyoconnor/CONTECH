/*
  Removed import from "next/font/google" because that module is unavailable in this environment.
  Define the actual font-face or load Google Fonts via globals.css (or a CDN) and keep CSS variable
  names used in this file. This provides a fallback so references to geistSans.variable and
  geistMono.variable still work without the next/font package.
*/
import "./globals.css";
import { Navbar } from "./Navbar";
import Image from "next/image";
import Link from "next/link";
/* eslint-disable @typescript-eslint/no-explicit-any */

// Fallback stubs for the font variables — set the real font variables in globals.css.
const geistSans = { variable: "--font-geist-sans" };
const geistMono = { variable: "--font-geist-mono" };

export const metadata = {
  title: "Contech — Operational AI",
  description: "Deploy operational AI to automate processes, forecast demand, and surface insights—fast. Usage-based, no lock-in.",
  applicationName: "Contech",
  authors: [{ name: "Contech Team", url: "thecontech.com" }],
  keywords: ["operational ai", "forecasting", "automation", "ai analytics", "generative ai"],
  openGraph: {
    title: "Contech — Operational AI",
    description: "Deploy operational AI to automate processes, forecast demand, and surface insights—fast.",
    siteName: "Contech",
    images: [
      { url: "/logo.png", width: 1200, height: 630, alt: "Contech logo" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contech — Operational AI",
    description: "Deploy operational AI to automate processes, forecast demand, and surface insights—fast.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: any }) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
    {/* suppressHydrationWarning: some browser extensions (e.g. Grammarly) inject attributes
      into the DOM on the client which can cause benign hydration mismatches. Adding
      this flag silences those warnings for the body subtree while we keep the UI
      deterministic. */}
    <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        {/* Skip link for screen-reader / keyboard users */}
        <a
          href="#main"
          className="skip-link absolute left-4 top-4 z-60 rounded-md px-3 py-2 text-sm font-medium bg-white/8 text-white/90 focus:bg-white/20 focus:translate-y-0 focus:opacity-100"
        >
          Skip to content
        </a>
        {/* Global Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(30,58,95,0.5),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.18),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.12),transparent_45%)]" />
        </div>
        <div className="min-h-screen w-full flex flex-col">
          <Navbar />
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden bg-white/[0.06] backdrop-blur-xl">
            <main id="main" tabIndex={-1} className="font-display min-h-full px-4 sm:px-6 md:px-8 pt-6 pb-8">
              {children}
            </main>
            {/* Global Footer */}
            <footer className="w-full text-gray-300 border-t border-white/10 px-4 sm:px-6 md:px-8 pt-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start">
              {/* Column 1: Brand */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Image src="/logo.png" alt="Contech" width={96} height={96} className="h-11 w-auto object-contain" />
                  <span className="text-xl font-bold text-white tracking-tight">Contech</span>
                </div>
                <p className="text-sm text-gray-400 max-w-xs leading-relaxed">Operational AI consulting — we help you add forecasting, automation, and generative insights without re-platforming.</p>
              </div>

              {/* Column 2: Links */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-90">Quick Links</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/why" className="text-gray-400 hover:text-white transition-colors">Why Now</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Column 3: Contact & Social */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-90">Contact</h4>
                <p className="text-sm"><a href="mailto:crbarbaccia@crimson.ua.edu" className="text-gray-300 hover:text-white transition-colors underline underline-offset-2">crbarbaccia@crimson.ua.edu</a></p>
                <p className="text-sm text-gray-500 mt-2 max-w-xs">Reply to schedule a quick chat.</p>

                <div className="mt-5 flex items-center gap-2">
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-14h4v2"/><rect x="2" y="9" width="4" height="11" rx="1"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0018 4.77 5.07 5.07 0 0017.91 1S16 0 12 2a13.38 13.38 0 00-7 0C2 0 1 1.77 1 1.77A5.07 5.07 0 00.09 4.77 5.44 5.44 0 005 11c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0010.5 20.13V24"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/8 mt-8 pt-6 text-center text-sm text-gray-500">
              © {year} <span className="text-white/90 font-medium">Contech</span>. All rights reserved.
            </div>
          </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
