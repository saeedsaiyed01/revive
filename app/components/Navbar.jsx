'use client'

// Account Popup Content
export const accountPopupData = {
  profile: {
    name: "Kate Johnson",
    image: "/Images/SecondPageBG.png",
    editIcon: "/logos/Editlogo.png"
  },
  menuItems: [
    {
      label: "Account settings",
      icon: "/logos/Settinglogo.png",
      alt: "Settings"
    },
    {
      label: "Payment method", 
      icon: "/logos/PurchaseMethod.png",
      alt: "Payment"
    },
    {
      label: "My purchases",
      icon: "/logos/Mypurchase.png", 
      alt: "Purchases"
    }
  ],
  logout: {
    label: "Log out"
  }
};

// Navigation Data
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
  const popupContent = accountPopupData;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountPopupOpen, setIsAccountPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <header
      className="w-full z-50 absolute top-0 left-0 right-0"
      style={isHome ? {} : {
        backgroundImage: "url(/Images/BGfor3-4Section.jpg)",
        backgroundSize: "100% auto",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center top",
      }}
    >
      <nav className="mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] py-4">
        <div className="flex items-center gap-4">
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

          <div className="hidden lg:flex items-center gap-6 mx-auto">
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

            <div className="hidden lg:flex items-center gap-4 pr-1">
              {content.icons.map((icon) => (
                icon.alt === "Account" ? (
                  <button
                    key={icon.alt}
                    onClick={() => setIsAccountPopupOpen(!isAccountPopupOpen)}
                    className="shrink-0"
                  >
                    <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                  </button>
                ) : (
                  <Link key={icon.alt} href={icon.href || '#'}>
                    <Image src={icon.src} alt={icon.alt} width={24} height={24} className="shrink-0" />
                  </Link>
                )
              ))}
            </div>
          </div>

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
              
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/20">
                {content.icons.map((icon) => (
                  icon.alt === "Account" ? (
                    <button
                      key={icon.alt}
                      onClick={() => {
                        setIsAccountPopupOpen(!isAccountPopupOpen);
                        setIsMobileMenuOpen(false);
                        }}
                      className="shrink-0"
                    >
                      <Image src={icon.src} alt={icon.alt} width={28} height={28} />
                    </button>
                  ) : (
                    <Image key={icon.alt} src={icon.src} alt={icon.alt} width={28} height={28} className="shrink-0" />
                  )
                ))}
              </div>
            </div>
          </div>
        )}

        {isAccountPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-end pt-20">
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsAccountPopupOpen(false)}
            />
            
            <div 
              className="relative bg-white shadow-2xl mx-4 mt-4 overflow-hidden"
              style={{
                width: '350px',
                height: '460px',
                opacity: 1,
                borderRadius: '40px'
              }}
            >
              <div className="p-4 text-center border-b border-gray-100">
                <div className="w-[80px] h-[80px] mx-auto mb-3 rounded-full overflow-hidden">
                  <Image 
                    src={popupContent.profile.image} 
                    alt="Profile" 
                    width={80} 
                    height={80} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-base font-semibold text-gray-800">{popupContent.profile.name}</h3>
                  <button className="text-[#FFA600] hover:text-[#FFA600]">
                    <Image 
                      src={popupContent.profile.editIcon} 
                      alt="Edit" 
                      width={14} 
                      height={14} 
                      className="w-3.5 h-3.5"
                    />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <div className="space-y-0">
                  {popupContent.menuItems.map((item, index) => (
                    <div key={index}>
                      <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-[26px] h-[26px] text-[#FFA600]">
                          <Image 
                            src={item.icon} 
                            alt={item.alt} 
                            width={26} 
                            height={26} 
                            className="w-[26px] h-[26px]"
                          />
                        </div>
                        <span className="text-gray-700">{item.label}</span>
                      </button>
                      {index < popupContent.menuItems.length - 1 && (
                        <div className="h-[2px] bg-[#FFA600] mx-3 my-2"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[2px] bg-[#FFA600] mx-3 my-2"></div>

              <div className="p-4">
                <button className="w-full flex items-center justify-center gap-2 p-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors">
                  <span>{popupContent.logout.label}</span>
                  <svg className="w-4 h-4 text-[#FFA600]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


