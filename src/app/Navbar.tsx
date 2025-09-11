import Image from "next/image";
import Link from "next/link";

// NAVBAR COMPONENT
export function Navbar() {
  return (
    <header className="w-full">
      <nav className="relative flex items-center justify-between h-20 md:h-24 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg px-6 md:px-10 overflow-hidden">
        {/* subtle gradient line */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-400/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        </div>
        <div className="flex items-center gap-2">
          {/* Logo PNG */}
          <Image
            src="/logo.png"
            alt="Contech Logo"
            width={110}
            height={110}
            className="h-14 w-auto md:h-16 object-contain"
            priority
          />
          <span className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg select-none">
            <span className="text-white lowercase">con</span>
            <span className="text-blue-400 lowercase">tech</span>
          </span>
        </div>
        <ul className="flex gap-6 md:gap-10 text-sm md:text-base font-medium items-center">
          <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
          <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
          <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
          <li><Link href="/why" className="text-gray-300 hover:text-white transition-colors">Why Now</Link></li>
          <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}