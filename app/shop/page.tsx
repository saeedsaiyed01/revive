"use client";

import Image from "next/image";

// Shop Page Content Data
const shopPageData = {
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
  const data = shopPageData;
  return (
    <main className="text-white">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <section
          className="relative w-full min-h-screen"
          style={{ 
            backgroundImage: `url('${data.bgImage}')`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Stone Overlay Background */}
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: `url('${data.stoneOverlay.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />

          <div className="relative z-10 px-4 py-8">
            {/* Main Content Card */}
            <div className="bg-white rounded-[25px] shadow-lg p-6 mb-6">
              <h1 className="text-2xl font-serif font-bold text-black mb-3 text-center" style={{ fontFamily: 'Isenheim, serif' }}>
                {data.heroCard.title}
              </h1>
              <p className="text-sm text-gray-700 leading-relaxed text-center" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                {data.heroCard.subtitle}
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-[25px] shadow-lg p-4 mb-8">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
                  <circle cx="11" cy="11" r="7"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder={data.searchBar.placeholder}
                  className="w-full outline-none bg-transparent font-helvetica text-sm"
                  style={{ fontFamily: 'Helvetica, sans-serif' }}
                />
              </div>
            </div>

            {/* Footer Contact Card with Stone Stacks */}
            <div className="relative">
              {/* Left Stone Stack */}
              <div 
                className="absolute left-4 top-8 z-50"
                style={{
                  width: "252.72311401367188px",
                  height: "251px",
                  top: "6086px",
                  left: "-84px",
                  transform: "rotate(0deg)",
                  opacity: 1
                }}
              >
                <img
                  src="/Images/rockFooter.png"
                  alt="Rock Footer Left"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Right Stone Stack */}
              <div 
                className="absolute right-4 top-8 z-50"
                style={{
                  width: "252.72311401367188px",
                  height: "251px",
                  top: "6086px",
                  right: "-84px",
                  transform: "rotate(0deg)",
                  opacity: 1
                }}
              >
                <img
                  src="/Images/rockFooter.png"
                  alt="Rock Footer Right"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Central Contact Card */}
              <div className="relative z-30 flex justify-center pt-16">
                <div className="bg-white rounded-[25px] shadow-lg p-6 w-full max-w-sm">
                  <div className="text-center space-y-6">
                    {/* Phone */}
                    <div>
                      <p className="font-medium mb-1 text-gray-900 text-lg">{data.footer.info.phone}</p>
                      <p className="text-gray-600 text-sm">contact us with phone</p>
                    </div>

                    {/* Email */}
                    <div>
                      <p className="font-medium mb-1 text-gray-900 text-lg">{data.footer.info.email}</p>
                      <p className="text-gray-600 text-sm">contact us with mail</p>
                    </div>

                    {/* Address */}
                    <div>
                      <p className="font-medium mb-1 text-gray-900 text-lg">{data.footer.info.addressTitle}</p>
                      <p className="text-gray-600 text-sm">{data.footer.info.address1}</p>
                      <p className="text-gray-600 text-sm">{data.footer.info.address2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <section
          className="relative w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${data.bgImage}')`, backgroundSize: "120% auto" }}
        >
          {/* Page frame */}
          <div className="relative mx-auto" style={{ width: "1440px", minHeight: "2600px" }}>
            <div
              className="absolute bg-no-repeat rounded-[40px] overflow-hidden"
              style={{
                width: `${data.stoneOverlay.width}px`,
                height: `${data.stoneOverlay.height}px`,
                top: `${data.stoneOverlay.top}px`,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: `${data.stoneOverlay.borderRadius}px`,
                backgroundImage: `url('${data.stoneOverlay.image}')`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "100% auto",
                backgroundPosition: "center top",
              }}
            />

            <div
              className="absolute bg-white/95 text-black text-center shadow-sm "
              style={{
                width: `${data.heroCard.width}px`,
                height: `${data.heroCard.height}px`,
                top: `${data.heroCard.top}px`,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: `${data.heroCard.radius}px`,
              }}
            >
              <div className="pt-6 px-8">
                <h1 className="font-isenheim text-black" style={{ fontSize: "44px", lineHeight: "1.1" }}>
                  {data.heroCard.title}
                </h1>
                <p className="mt-3 text-black/70 font-helvetica text-center" style={{ width: "520px", minWidth: "520px", maxWidth: "520px", margin: "0 auto", fontSize: "16px", lineHeight: "1.4" }}>
                  {data.heroCard.subtitle}
                </p>
              </div>
            </div>

            <div
              className="absolute bg-white text-black flex items-center gap-3 shadow-sm"
              style={{
                width: `${data.searchBar.width}px`,
                height: `${data.searchBar.height}px`,
                top: `${data.searchBar.top}px`,
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
                placeholder={data.searchBar.placeholder}
                className="w-full outline-none bg-transparent font-helvetica"
              />
            </div>

            <Image
              src={data.footer.rock.src}
              alt="Rock stack left"
              width={data.footer.rock.width}
              height={data.footer.rock.height}
              className="absolute"
              style={{ top: `${data.footer.rock.top}px`, left: `${data.footer.rock.left}px` }}
            />
            

            <div
              className="absolute bg-white text-black grid grid-cols-3 items-center px-10"
              style={{
                width: `${data.footer.info.width}px`,
                height: `${data.footer.info.height}px`,
                top: `${data.footer.info.top}px`,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: `${data.footer.info.radius}px`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <div>
                <div className="text-sm text-black/60">contact us with phone</div>
                <div className="text-lg font-medium">{data.footer.info.phone}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-black/60">contact us with mail</div>
                <div className="text-lg font-medium">{data.footer.info.email}</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-medium">{data.footer.info.addressTitle}</div>
                <div className="text-sm">{data.footer.info.address1}</div>
                <div className="text-sm">{data.footer.info.address2}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


