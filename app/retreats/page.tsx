"use client";

import { useState } from "react";
import InsightsSection from "../components/InsightsSection";
import RetreatCard from "../components/RetreatCard";

// Retreats Page Content Data
const retreatsPageData = {
  title: "Retreats",
  subtitle: [
    "Experience transformative wellness in the world&apos;s most",
    "exclusive and serene locations",
  ],
  buttonText: "Contact us",
  retreats: [
    {
      id: 1,
      title: "Retreat 1",
      image: "/Images/Retreat1.png",
      location: "Arizona",
      description:
        "Drawing from ancient wisdomand modern techniques to support deep inner healing.",
    },
    {
      id: 2,
      title: "Retreat 2",
      image: "/Images/Retreat2.png",
      location: "Arizona",
      description:
        "Drawing from ancient wisdom and modern techniques to support deep inner healing.",
    },
    {
      id: 3,
      title: "Retreat 3",
      image: "/Images/Retreat3.png",
      location: "Arizona",
      description:
        "Drawing from ancient wisdom and modern techniques to support deep inner healing.",
    },
    {
      id: 4,
      title: "Retreat 4",
      image: "/Images/Retreat4.png",
      location: "Arizona",
      description:
        "Drawing from ancient w d  nd modern techniques to supportdeep inner healing.",
    },
    {
      id: 5,
      title: "Retreat 5",
      image: "/Images/Retreat5.png",
      location: "Arizona",
      description:
        "Drawing from ancient wisdom and modern techniques to suppor  deep inner healing.",
    },
    {
      id: 6,
      title: "Retreat 6",
      image: "/Images/Retreat6.png",
      location: "Arizona",
      description:
        "Drawing from ancient wisdom and modern techniques to support deep inner healing.",
    },
  ],
  footer: {
    phone: {
      value: "+966 53 867 4556",
      label: "contact us with phone",
    },
    email: {
      value: "rita1yoga@hotmail.com",
      label: "contact us with mail",
    },
    address: {
      heading: "United States",
      details: "205 Middle Road, 2nd Floor, New York",
    },
  },
};

export default function FourthPage() {
  const data = retreatsPageData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.retreats.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + data.retreats.length) % data.retreats.length
    );
  };

  return (
    <section
      className="relative min-h-screen w-full mt-28 overflow-x-hidden"
      style={{
        backgroundImage: "url('/Images/BGfor3-4Section.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10 mx-auto px-4 py-8 min-h-screen overflow-x-hidden">
        {/* Main Content Area */}
        <div
          className="relative mx-auto max-w-[1385px] w-full min-h-[1364px] rounded-[50px] opacity-100"
          style={{
            backgroundImage: "url('/Images/UpperBG.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header Card */}
          <div className="text-center pt-8">
            <div className="bg-white rounded-[40px] mx-4 p-6 shadow-lg">
              <h2 className="text-black card-title-isenheim mb-4 font-isenheim text-[35px] leading-[115%]">
                {data.title}
              </h2>
              <p className="text-[#595959] white-card-isenheim text-[17px]">
                {data.subtitle[0]}
              </p>
              <p className="text-[#595959] white-card-isenheim text-[17px]">
                {data.subtitle[1]}
              </p>
            </div>
          </div>

          {/* Retreat Cards Carousel */}
          <div className="mt-8 relative overflow-hidden -mx-4">
            <div className="relative overflow-x-hidden" style={{ width: "100vw", height: "400px", marginLeft: "calc(-50vw + 50%)" }}>
              {/* Previous Card (peek on left edge) */}
              <div
                className="absolute rounded-[25px] overflow-hidden shadow-lg"
                style={{ 
                  width: "180px", 
                  height: "350px",
                  left: "-140px",
                  top: "25px",
                  opacity: 0.7
                }}
              >
                <div
                  className="w-full h-2/3"
                  style={{
                    backgroundImage: `url(${data.retreats[(currentIndex - 1 + data.retreats.length) % data.retreats.length].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div
                  className="h-1/3 p-3"
                  style={{
                    backgroundImage: "url('/Images/default-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h3
                    className="text-black font-serif font-bold text-xs mb-1"
                    style={{ fontFamily: "Isenheim, serif" }}
                  >
                    {data.retreats[(currentIndex - 1 + data.retreats.length) % data.retreats.length].title}
                  </h3>
                  <p
                    className="text-black text-xs leading-relaxed"
                    style={{ fontFamily: "Helvetica, sans-serif" }}
                  >
                    {data.retreats[(currentIndex - 1 + data.retreats.length) % data.retreats.length].description}
                  </p>
                </div>
              </div>

              {/* Main Card */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 rounded-[25px] overflow-hidden shadow-lg"
                style={{ width: "300px", height: "400px" }}
              >
                {/* Main Image */}
                <div
                  className="w-full h-2/3"
                  style={{
                    backgroundImage: `url(${data.retreats[currentIndex].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {/* Text Overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3 p-4"
                  style={{
                    backgroundImage: "url('/Images/default-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h3
                    className="text-black font-serif font-bold text-lg mb-2"
                    style={{ fontFamily: "Isenheim, serif" }}
                  >
                    {data.retreats[currentIndex].title}
                  </h3>
                  <p
                    className="text-black text-sm leading-relaxed"
                    style={{ fontFamily: "Helvetica, sans-serif" }}
                  >
                    {data.retreats[currentIndex].description}
                  </p>
                </div>
              </div>

              {/* Next Card (peek on right edge) */}
              <div
                className="absolute rounded-[25px] overflow-hidden shadow-lg"
                style={{ 
                  width: "180px", 
                  height: "350px",
                  right: "-140px",
                  top: "25px",
                  opacity: 0.7
                }}
              >
                <div
                  className="w-full h-2/3"
                  style={{
                    backgroundImage: `url(${data.retreats[(currentIndex + 1) % data.retreats.length].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div
                  className="h-1/3 p-3"
                  style={{
                    backgroundImage: "url('/Images/default-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h3
                    className="text-black font-serif font-bold text-xs mb-1"
                    style={{ fontFamily: "Isenheim, serif" }}
                  >
                    {data.retreats[(currentIndex + 1) % data.retreats.length].title}
                  </h3>
                  <p
                    className="text-black text-xs leading-relaxed"
                    style={{ fontFamily: "Helvetica, sans-serif" }}
                  >
                    {data.retreats[(currentIndex + 1) % data.retreats.length].description}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows - Positioned outside the main card */}
              <button
                onClick={prevSlide}
                className="absolute left-1/2  -translate-x-1/2 top-1/2  -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ 
                  left: "calc(50% - 160px)",
                  backgroundImage: "url('/Images/default-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute left-1/2  -translate-x-1/2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ 
                  left: "calc(50% + 160px)",
                  backgroundImage: "url('/Images/default-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 12H5M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="text-center mt-8">
            <button
              className="text-white btn-isenheim transition-colors shadow-lg py-3 px-8 rounded-[10px] font-helvetica"
              style={{
                backgroundImage: "url('/Images/default-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {data.buttonText}
            </button>
          </div>

          {/* Footer Contact Section */}
          <section>
            <div className="relative flex-1 mt-82">
              {/* Left Stone Stack */}
              <div
                className="absolute left-4 z-50"
                style={{
                  width: "252.72311401367188px",
                  height: "251px",
                  top: "150px",
                  left: "-84px",
                  transform: "rotate(0deg)",
                  opacity: 1,
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
                className="absolute right-4 z-50"
                style={{
                  width: "252.72311401367188px",
                  height: "251px",
                  top: "150px",
                  right: "-84px",
                  transform: "rotate(0deg)",
                  opacity: 1,
                }}
              >
                <img
                  src="/Images/rockfooterrigth.png"
                  alt="Rock Footer Right"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Central Contact Card */}
              <div className="relative z-30 flex justify-center pt-16">
                <div className="bg-white rounded-[25px] shadow-lg p-6 w-[225px] max-w-sm">
                  <div className="text-center space-y-6">
                    {/* Phone */}
                    <div>
                      <p className="font-medium mb-1 text-gray-900 text-lg">
                        {data.footer.phone.value}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {data.footer.phone.label}
                      </p>
                    </div>

                    {/* Email */}
                    <div>
                      <p className="font-medium mb-1 text-gray-900 text-lg">
                        {data.footer.email.value}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {data.footer.email.label}
                      </p>
                    </div>

                    {/* Address */}
                    <div>
                      <p className="font-medium mb-1 text-gray-900 text-lg">
                        {data.footer.address.heading}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {data.footer.address.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative z-10 mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] py-12 md:py-24">
        <div
          className="relative mx-auto max-w-[1385px] w-full min-h-[1364px] rounded-[50px] opacity-100 -mt-10 md:-mt-20"
          style={{
            backgroundImage: "url('/Images/UpperBG.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center pt-2 md:pt-4">
            <div
              className="bg-white rounded-[40px] mx-auto flex flex-col justify-center items-center"
              style={{
                width: "787px",
                height: "163px",
              }}
            >
              <h2
                className="text-black font-normal mb-4"
                style={{
                  fontFamily: "Isenheim, Georgia, serif",
                  fontSize: "35px",
                  fontWeight: "400",
                  lineHeight: "115%",
                }}
              >
                {data.title}
              </h2>

              <p
                className="text-[#595959] max-w-3xl mx-auto text-center"
                style={{ fontSize: "17px" }}
              >
                {data.subtitle[0]}
              </p>
              <p
                className="text-[#595959] max-w-3xl mx-auto text-center"
                style={{ fontSize: "17px" }}
              >
                {data.subtitle[1]}
              </p>
            </div>
          </div>
          <div className="relative z-20 p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {data.retreats.map((retreat) => (
                <RetreatCard key={retreat.id} retreat={retreat} href="#" />
              ))}
            </div>
            <div className="text-center">
              <button
                className="text-white transition-colors shadow-lg mt-22"
                style={{
                  width: "272px",
                  height: "82px",
                  borderRadius: "30px",
                  backgroundImage: "url('/Images/default-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  fontFamily: "Isenheim, serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "25px",
                  lineHeight: "30px",
                  letterSpacing: "0%",
                }}
              >
                {data.buttonText}
              </button>
            </div>
          </div>
          <div
            style={{
              marginLeft: "calc(-1 * clamp(186px,4vw,32px))",
              width: "calc(100% + clamp(1226px,4vw,32px))",
            }}
          >
            <InsightsSection size="lg" />
          </div>
        </div>
        <div
          className="relative mx-auto"
          style={{ maxWidth: "1440px", height: "360px" }}
        >
          <div
            className="absolute"
            style={{
              width: "440px",
              height: "437px",
              top: "17px",
              left: "-130px",
              opacity: 1,
              backgroundImage: "url('/Images/rockFooter.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left bottom",
              backgroundSize: "contain",
              pointerEvents: "none",
            }}
          />

          <div
            className="absolute rounded-[30px] bg-white flex items-center"
            style={{
              width: "1011px",
              height: "138px",
              top: "110px",
              left: "395px",
              opacity: 1,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full grid grid-cols-3 gap-8 px-10">
              <div className="text-left">
                <div
                  className="text-black"
                  style={{
                    fontFamily: "Helvetica Light, Helvetica, Arial, sans-serif",
                    fontSize: "18px",
                    lineHeight: "140%",
                  }}
                >
                  {data.footer.phone.value}
                </div>
                <div
                  className="text-[#595959]"
                  style={{
                    fontFamily: "Helvetica Light, Helvetica, Arial, sans-serif",
                    fontSize: "16px",
                    lineHeight: "140%",
                  }}
                >
                  {data.footer.phone.label}
                </div>
              </div>
              <div className="text-left">
                <div
                  className="text-black"
                  style={{
                    fontFamily: "Helvetica Light, Helvetica, Arial, sans-serif",
                    fontSize: "18px",
                    lineHeight: "140%",
                  }}
                >
                  {data.footer.email.value}
                </div>
                <div
                  className="text-[#595959]"
                  style={{
                    fontFamily: "Helvetica Light, Helvetica, Arial, sans-serif",
                    fontSize: "16px",
                    lineHeight: "140%",
                  }}
                >
                  {data.footer.email.label}
                </div>
              </div>
              <div className="text-left">
                <div
                  className="text-black"
                  style={{
                    fontFamily: "Helvetica Light, Helvetica, Arial, sans-serif",
                    fontSize: "18px",
                    lineHeight: "140%",
                  }}
                >
                  {data.footer.address.heading}
                </div>
                <div
                  className="text-[#595959]"
                  style={{
                    fontFamily: "Helvetica Light, Helvetica, Arial, sans-serif",
                    fontSize: "16px",
                    lineHeight: "140%",
                  }}
                >
                  {data.footer.address.details}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
