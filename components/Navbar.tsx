// components/Navbar.tsx
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Determine base style depending on page
  const isTransparent = isHome && !scrolled;
  const isWhiteBg = !isTransparent;

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isWhiteBg ? "bg-white shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="container mx-auto px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <div className="flex flex-col items-start">
              <div
                className={`
                  font-serif text-3xl sm:text-4xl tracking-wider font-medium transition-colors duration-300
                  ${
                    isWhiteBg
                      ? "text-[#1a1a1a]"
                      : "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                  }
                `}
              >
                PANDELI
              </div>
              <div
                className={`
                  h-[2px] w-10 bg-[#D4AF37] mt-1 transition-all duration-400
                  group-hover:w-16
                `}
              />
            </div>
          </Link>

          {/* Desktop menu + Call Now button */}
          <div className="hidden md:flex items-center gap-9 lg:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-sm lg:text-base tracking-widest uppercase font-medium
                  transition-colors duration-300
                  ${
                    isWhiteBg
                      ? "text-[#1a1a1a] hover:text-[#C1440E]"
                      : "text-white hover:text-[#D4AF37] drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}

            {/* Call Now button */}
            <a
              href="tel:+9779841234567"
              className={`
                px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium whitespace-nowrap
                transition-all duration-300 shadow-md
                ${
                  isWhiteBg
                    ? "bg-[#C1440E] text-white hover:bg-[#A03A0C] hover:scale-105"
                    : "bg-[#C1440E]/90 text-white hover:bg-[#C1440E] hover:scale-105 backdrop-blur-sm"
                }
              `}
            >
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`
              md:hidden text-3xl focus:outline-none transition-colors duration-300
              ${isWhiteBg ? "text-[#1a1a1a]" : "text-white"}
            `}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <div
        className={`
          fixed inset-y-0 right-0 z-50 w-4/5 max-w-sm 
          ${isWhiteBg ? "bg-white" : "bg-[#1a120f]"} 
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden shadow-2xl
        `}
      >
        <div className="flex flex-col h-full p-8">
          <button
            className={`
              self-end text-3xl mb-12 focus:outline-none
              ${isWhiteBg ? "text-[#1a1a1a]" : "text-white"}
            `}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X />
          </button>

          <nav
            className={`
            flex flex-col items-center gap-10 
            ${isWhiteBg ? "text-[#1a1a1a]" : "text-white"} 
            text-xl sm:text-2xl tracking-widest uppercase font-medium
          `}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  hover:text-[#C1440E] transition-colors duration-300 hover:scale-105
                `}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Call Now in mobile menu */}
          <a
            href="tel:+9779841234567"
            className="mt-16 bg-[#C1440E] text-white py-5 px-10 rounded-full text-xl font-medium text-center hover:bg-[#A03A0C] transition-all duration-300 shadow-lg"
            onClick={closeMenu}
          >
            Call Now
          </a>

          <div className="mt-auto pt-10 text-center text-sm opacity-80">
            <p>Pandeli Restaurant & Bar</p>
            <p className="mt-1">Sarangkot, Pokhara</p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-500"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
