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
          {/* Brightened layered gradient + radial accents */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1824] via-[#12304c] to-[#0b3a63]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(99,167,255,0.40),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(56,189,248,0.28),transparent_65%)]" />
        </div>
        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-8">
          <Navbar />
        </div>
  {/* Spacer for fixed navbar height */}
  <div className="pt-28 pb-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto bg-black/10 dark:bg-white/4 backdrop-blur-md border border-white/6 rounded-3xl p-6 md:p-8 overflow-hidden">
            <main id="main" tabIndex={-1}>
              {children}
            </main>
          </div>
          {/* Global Footer */}
          <footer className="w-full text-gray-300 mt-12 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Column 1: Brand */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Image src="/logo.png" alt="Contech" width={96} height={96} className="h-10 w-auto object-contain" />
                  <span className="text-xl font-bold text-white">Contech</span>
                </div>
                <p className="text-sm text-gray-400 max-w-sm">Operational AI that compounds your advantage — forecasting, automation, and generative insights without re-platforming.</p>
              </div>

              {/* Column 2: Links */}
              <div>
                <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li><Link href="/products" className="hover:text-white">Products</Link></li>
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                  <li><Link href="/why" className="hover:text-white">Why Now</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>

              {/* Column 3: Contact & Social */}
              <div>
                <h4 className="text-white font-semibold mb-3">Contact</h4>
                <p className="text-sm"><a href="mailto:crbarbaccia@crimson.ua.edu" className="hover:text-white underline">crbarbaccia@crimson.ua.edu</a></p>
                <p className="text-sm text-gray-400 mt-2">Prefer a quick chat? Reply to the email above and we’ll schedule.</p>

                <div className="mt-4 flex items-center gap-3">
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

            <div className="border-t border-white/6 text-center py-4 text-sm text-gray-400">
              <p>© {year} <span className="text-white font-semibold">Contech</span>. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
