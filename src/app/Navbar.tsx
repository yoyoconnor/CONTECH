import Image from "next/image";
import Link from "next/link";

// NAVBAR COMPONENT
export function Navbar() {
  return (
    <header className="w-full z-20 relative">
      <nav className="flex items-center justify-between py-0 px-0 max-w-7xl mx-auto">
        <div className="flex items-center gap-0 -ml-8 md:-ml-4">
          {/* Logo PNG */}
          <Image
            src="/logo.png"
            alt="Contech Logo"
            width={160}
            height={112}
            className="h-40 md:h-28 object-contain -ml-4 md:-ml-2"
          />
          <span className="text-5xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg select-none ml-[-14px] md:ml-[-8px]">
            <span className="text-white lowercase">con</span>
            <span className="text-blue-400 lowercase">tech</span>
          </span>
        </div>
        <ul className="flex gap-8 text-lg font-medium mt-0 w-auto justify-end">
          <li>
            <Link href="/" className="text-gray-200 hover:text-blue-300 transition">Home</Link>
          </li>
          <li>
            <a href="/products" className="text-gray-200 hover:text-blue-300 transition">Products</a>
          </li>
          <li>
            <a href="/about" className="text-gray-200 hover:text-blue-300 transition">About Us</a>
          </li>
          <li>
            <a href="/why" className="text-gray-200 hover:text-blue-300 transition">Why Now?</a>
          </li>
          <li>
            <a href="/contact" className="text-gray-200 hover:text-blue-300 transition">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}