// Component-local data
'use client'
export const data = {
  logo: { src: "/logos/LogoMain.png", alt: "Revive logo" },
  bgTexture: "/Images/default-bg.png",
  items: [
    { label: "Home", href: "/" },
    { label: "Who we are?", href: "/about" },
    { label: "Our programs", href: "/ourprogram" },
    { label: "Retreats", href: "/retreats" },
    { label: "Wellness shop", href: "/shop" },
    { label: "Blog", href: "/blog" },
    { label: "Contacts", href: "/contacts" },
  ],
  icons: [
    { src: "/logos/Account.png", alt: "Account", href: "/account" },
    { src: "/logos/Cart.png", alt: "Cart", href: "/cart" },
  ],
};

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar(props) {
  const content = { ...data, ...(props?.data || {}) };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <header
      className="w-full z-50 absolute top-0 left-0 right-0"
      style={{
        backgroundImage: "url(/Images/BGfor3-4Section.jpg)",
        backgroundSize: "100% auto",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center top",
      }}
    >
      <nav className="mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] py-4">
        <div className="flex items-center gap-4">
          {/* Logo - Left aligned; boxed on non-home routes */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Home">
              {isHome ? (
                <Image src={content.logo.src} alt={content.logo.alt} width={86} height={70} priority />
              ) : (
                <div
                  className="rounded-[20px] bg-white flex items-center justify-center"
                  style={{ width: "121px", height: "88px", opacity: 1 }}
                >
                  <Image src={content.logo.src} alt={content.logo.alt} width={86} height={70} priority />
                </div>
              )}
            </Link>
          </div>

          {/* Desktop center group: nav + icons */}
          <div className="hidden lg:flex items-center gap-6 mx-auto">
            {/* Desktop Navigation - Center with gold texture background */}
            <div
              className="rounded-[28px] h-[56px] flex items-center overflow-hidden px-0 mt-1"
              style={{
                backgroundImage: `url(${content.bgTexture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <ul className="flex items-stretch gap-6 w-full h-full rounded-[2px]">
                {content.items.map((item) => (
                  <li key={item.href} className="shrink-0">
                    <Link
                      href={item.href}
                      onClick={() => handleTabClick(item.label)}
                      className={[
                        "navbar-text inline-flex items-center justify-center rounded-[28px] px-6 py-0 h-[56px] transition-all duration-200 ",
                        activeTab === item.label
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
              {content.icons.map((icon) => (
                <Link key={icon.alt} href={icon.href || '#'}>
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} className="shrink-0" />
                </Link>
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
                {content.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        handleTabClick(item.label);
                        setIsMobileMenuOpen(false);
                      }}
                      className={[
                        "navbar-text block w-full py-3 px-4 rounded-xl transition-colors",
                        activeTab === item.label
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
                {content.icons.map((icon) => (
                  <Image key={icon.alt} src={icon.src} alt={icon.alt} width={28} height={28} className="shrink-0" />
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


