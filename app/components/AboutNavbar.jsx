'use client'
import Link from "next/link";
import { useState } from "react";

export default function AboutNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Who we are?", href: "/about" },
    { label: "Our programs", href: "/programs" },
    { label: "Retreats", href: "/retreats" },
    { label: "Wellness shop", href: "/shop" },
    { label: "Blog", href: "/blog" },
    { label: "Contacts", href: "/contacts" },
  ];

  const icons = [
    { src: "/logos/Account.png", alt: "Account" },
    { src: "/logos/Cart.png", alt: "Cart" },
  ];

  return (
    <header className="w-full z-50 absolute top-0 left-0 right-0">
      <nav className="mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] py-4">
        <div className="flex items-center gap-4">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Home">
              <div className="bg-white rounded-[28px] px-6 py-3 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[#c79a2f] text-xs mb-1">✦</div>
                  <div className="text-[#c79a2f] font-serif text-xl font-bold">REVIVE</div>
                  <div className="text-[#c79a2f] text-xs mt-1">✦</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop center group: nav + icons */}
          <div className="hidden lg:flex items-center gap-6 mx-auto">
            {/* Desktop Navigation - Center with gradient background */}
            <div className="rounded-[28px] h-[56px] flex items-center overflow-hidden px-0 mt-1 bg-gradient-to-r from-[#c79a2f] to-[#8B4513]">
              <ul className="flex items-stretch gap-6 w-full h-full rounded-[2px]">
                {navItems.map((item) => (
                  <li key={item.href} className="shrink-0">
                    <Link
                      href={item.href}
                      className={[
                        "navbar-text inline-flex items-center justify-center rounded-[28px] px-6 py-0 h-[56px] transition-all duration-200 ",
                        item.label === "Who we are?"
                          ? "bg-white text-[#c79a2f] shadow-sm"
                          : "text-white hover:bg-white/20"
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Icons - placed next to center nav */}
            <div className="hidden lg:flex items-center gap-4 pr-1">
              {icons.map((icon) => (
                <img key={icon.alt} src={icon.src} alt={icon.alt} width={24} height={24} className="shrink-0" />
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="rounded-2xl bg-black/30 backdrop-blur-sm p-6">
              <ul className="space-y-3 text-white">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={[
                        "navbar-text block w-full py-3 px-4 rounded-xl transition-colors",
                        item.label === "Who we are?"
                          ? "bg-white/95 text-[#c79a2f]"
                          : "hover:bg-white/20"
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Mobile Icons */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/20">
                {icons.map((icon) => (
                  <img key={icon.alt} src={icon.src} alt={icon.alt} width={28} height={28} className="shrink-0" />
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}



