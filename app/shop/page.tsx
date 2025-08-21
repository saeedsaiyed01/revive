"use client";

import Image from "next/image";

// Configurable layout tokens for Wellness Shop
const shopData = {
  bgImage: "/Images/BGfor3-4Section.jpg",
  stoneOverlay: {
    image: "/Images/UpperBG.png",
    width: 1230,
    height: 2050,
    top: 120,
    left: 105, // Centered: (1440 - 1230) / 2 = 105
    borderRadius: 40,
  },
  heroCard: {
    width: 787,
    height: 200,
    top: 224,
    left: 326.5, // Centered: (1440 - 787) / 2 = 326.5
    radius: 40,
    title: "Wellness Shop",
    subtitle:
      "Explore our carefully curated collection of wellness products designed to enhance your practice and nourish your body and mind.",
  },
  searchBar: {
    width: 877,
    height: 60,
    top: 511,
    left: 281.5, // Centered: (1440 - 877) / 2 = 281.5
    placeholder: "Search products...",
  },
  footer: {
    rock: {   src: "/Images/rockFooter.png",  width: 440, height: 437, top: 2060, left: -120  },        
    info: {
      width: 1011,
      height: 138,
      top: 2310,
      left: 214.5, // Centered: (1440 - 1011) / 2 = 214.5
      radius: 30,
      phone: "+966 53 867 4556",
      email: "ritayoga@hotmail.com",
      addressTitle: "United States",
      address1: "205 Middle Road, 2nd",
      address2: "Floor, New York",
    },
  },
};

export default function ShopPage() {
  return (
    <main className="text-white">
      {/* Sand background */}
      <section
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url('${shopData.bgImage}')`, backgroundSize: "120% auto" }}
      >
        {/* Page frame */}
        <div className="relative mx-auto hidden md:block" style={{ width: "1440px", minHeight: "2600px" }}>
          {/* Stone overlay - vertical repeating */}
          <div
            className="absolute bg-no-repeat rounded-[40px] overflow-hidden"
            style={{
              width: `${shopData.stoneOverlay.width}px`,
              height: `${shopData.stoneOverlay.height}px`,
              top: `${shopData.stoneOverlay.top}px`,
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: `${shopData.stoneOverlay.borderRadius}px`,
              backgroundImage: `url('${shopData.stoneOverlay.image}')`,
              backgroundRepeat: "repeat-y",
              backgroundSize: "100% auto",
              backgroundPosition: "center top",
            }}
          />

          {/* Hero card */}
          <div
            className="absolute bg-white/95 text-black text-center shadow-sm mt-10"
            style={{
              width: `${shopData.heroCard.width}px`,
              height: `${shopData.heroCard.height}px`,
              top: `${shopData.heroCard.top}px`,
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: `${shopData.heroCard.radius}px`,
            }}
          >
            <div className="pt-6 px-8">
              <h1 className="font-isenheim text-black" style={{ fontSize: "44px", lineHeight: "1.1" }}>
                {shopData.heroCard.title}
              </h1>
              <p className="mt-3 text-black/70 font-helvetica text-center" style={{ width: "520px", minWidth: "520px", maxWidth: "520px", margin: "0 auto", fontSize: "16px", lineHeight: "1.4" }}>
                {shopData.heroCard.subtitle}
              </p>
            </div>
          </div>

          {/* Search bar */}
          <div
            className="absolute bg-white text-black flex items-center gap-3 shadow-sm"
            style={{
              width: `${shopData.searchBar.width}px`,
              height: `${shopData.searchBar.height}px`,
              top: `${shopData.searchBar.top}px`,
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "30px",
              padding: "0 18px",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder={shopData.searchBar.placeholder}
              className="w-full outline-none bg-transparent font-helvetica"
            />
          </div>

          {/* Footer zone - rocks and info card */}
          <Image
            src={shopData.footer.rock.src}
            alt="Rock stack left"
            width={shopData.footer.rock.width}
            height={shopData.footer.rock.height}
            className="absolute"
            style={{ top: `${shopData.footer.rock.top}px`, left: `${shopData.footer.rock.left}px` }}
          />
          

          <div
            className="absolute bg-white text-black grid grid-cols-3 items-center px-10"
            style={{
              width: `${shopData.footer.info.width}px`,
              height: `${shopData.footer.info.height}px`,
              top: `${shopData.footer.info.top}px`,
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: `${shopData.footer.info.radius}px`,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <div>
              <div className="text-sm text-black/60">contact us with phone</div>
              <div className="text-lg font-medium">{shopData.footer.info.phone}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-black/60">contact us with mail</div>
              <div className="text-lg font-medium">{shopData.footer.info.email}</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-medium">{shopData.footer.info.addressTitle}</div>
              <div className="text-sm">{shopData.footer.info.address1}</div>
              <div className="text-sm">{shopData.footer.info.address2}</div>
            </div>
          </div>

          {/* Responsive mobile layout: stacked elements */}
          <div className="md:hidden relative w-full px-4 pt-32 pb-24">
            <div
              className="rounded-[30px] bg-white/95 text-black text-center mx-auto p-6"
              style={{ backgroundClip: "padding-box" }}
            >
              <h1 className="font-isenheim text-black" style={{ fontSize: "38px", lineHeight: "1.1" }}>
                {shopData.heroCard.title}
              </h1>
              <p className="mt-3 text-black/70 font-helvetica">
                {shopData.heroCard.subtitle}
              </p>
            </div>
            <div className="mt-4 bg-white text-black flex items-center gap-3 rounded-[30px] h-[56px] px-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" placeholder={shopData.searchBar.placeholder} className="w-full outline-none bg-transparent font-helvetica" />
            </div>

            <div className="mt-16 bg-white text-black grid grid-cols-1 gap-6 rounded-[30px] p-6">
              <div className="text-center">
                <div className="text-sm text-black/60">contact us with phone</div>
                <div className="text-lg font-medium">{shopData.footer.info.phone}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-black/60">contact us with mail</div>
                <div className="text-lg font-medium">{shopData.footer.info.email}</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium">{shopData.footer.info.addressTitle}</div>
                <div className="text-sm">{shopData.footer.info.address1}</div>
                <div className="text-sm">{shopData.footer.info.address2}</div>
              </div>
            </div>
          </div>
        </div>
      {/* Responsive mobile layout: stacked elements */}
      <div className="md:hidden relative w-full px-4 pt-32 pb-24">
        <div
          className="rounded-[30px] bg-white/95 text-black text-center mx-auto p-6"
          style={{ backgroundClip: "padding-box" }}
        >
          <h1 className="font-isenheim text-black" style={{ fontSize: "38px", lineHeight: "1.1" }}>
            {shopData.heroCard.title}
          </h1>
          <p className="mt-3 text-black/70 font-helvetica">
            {shopData.heroCard.subtitle}
          </p>
        </div>
        <div className="mt-4 bg-white text-black flex items-center gap-3 rounded-[30px] h-[56px] px-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder={shopData.searchBar.placeholder} className="w-full outline-none bg-transparent font-helvetica" />
        </div>

        <div className="mt-16 bg-white text-black grid grid-cols-1 gap-6 rounded-[30px] p-6">
          <div className="text-center">
            <div className="text-sm text-black/60">contact us with phone</div>
            <div className="text-lg font-medium">{shopData.footer.info.phone}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-black/60">contact us with mail</div>
            <div className="text-lg font-medium">{shopData.footer.info.email}</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-medium">{shopData.footer.info.addressTitle}</div>
            <div className="text-sm">{shopData.footer.info.address1}</div>
            <div className="text-sm">{shopData.footer.info.address2}</div>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}


