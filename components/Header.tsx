import { Menu, Phone } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#2D6A4F] flex items-center justify-center">
              <span className="text-white font-bold text-sm">CN</span>
            </div>
            <span className="text-xl font-bold text-[#2D6A4F]">
              CHINS <span className="text-[#52B788]">NORTH</span>
            </span>
          </Link>
          <span className="hidden md:inline text-sm text-gray-600 ml-2">
            Clean Air Solutions
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#2D6A4F] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="bg-[#2D6A4F] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#24523d] transition-colors"
          >
            Book Now
          </Link>
          <a
            href="tel:+12816877575"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#2D6A4F]"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">(281) 687-7575</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
}