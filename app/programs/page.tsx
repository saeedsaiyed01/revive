"use client";

import { useState } from "react";
import InsightsSection from "../components/InsightsSection";
import RetreatCard from "../components/RetreatCard";

// Programs Page Content Data
const programsPageData = {
  title: "Our Programs",
  subtitle:
    "Discover our wide range of transformative wellness classes designed to nurture your mind, body, and spirit. Each class is led by expert instructors dedicated to guiding you on your wellness journey.",
  buttonText: "Contact us",
  programs: [
    {
      id: 1,
      title: "Yoga & Meditation",
      image: "/Images/Retreat1.png",
      location: "Arizona",
      description:
        "Drawing from ancient wisdom and modern techniques to support deep inner healing.",
    },
    {
      id: 2,
      title: "Sound Healing",
      image: "/Images/Retreat2.png",
      location: "Arizona",
      description:
        "Drawing from ancient wisdom and modern techniques to support deep inner healing.",
    },
    {
      id: 3,
      title: "Ayurveda Practices",
      image: "/Images/Retreat3.png",
      location: "Arizona",
      description:
        "Drawing from ancient wisdom and modern techniques to support deep inner healing.",
    },
    {
      id: 4,
      title: "Neuroscience Coaching",
      image: "/Images/Retreat4.png",
      location: "Arizona",
      description:
        "Drawing from ancient wisdom and modern techniques to support deep inner healing.",
    },
    {
      id: 5,
      title: "Hypnotherapy",
      image: "/Images/Retreat5.png",
      location: "Arizona",
      description:
        "Drawing from ancient wisdom and modern techniques to support deep inner healing.",
    },
    {
      id: 6,
      title: "Breath Work",
      image: "/Images/Retreat6.png",
      location: "Arizona",
      description:
        "Drawing from ancient wisdom and modern techniques to support deep inner healing.",
    },
  ],
};

export default function ProgramsPage() {
  const data = programsPageData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.programs.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + data.programs.length) % data.programs.length
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
        <div
          className="relative mx-auto max-w-[1385px] w-full min-h-[1380px] rounded-[50px] opacity-100 overflow-hidden"
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
              <h2 className="text-black card-title-isenheim  mb-4 font-isenheim text-[35px] leading-[115%]">
                {data.title}
              </h2>
              <p className="text-[#595959] white-card-isenheim text-[17px]">
                {data.subtitle}
              </p>
            </div>
          </div>

          {/* Program Cards Carousel */}
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
                    backgroundImage: `url(${data.programs[(currentIndex - 1 + data.programs.length) % data.programs.length].image})`,
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
                    {data.programs[(currentIndex - 1 + data.programs.length) % data.programs.length].title}
                  </h3>
                  <p
                    className="text-black text-xs leading-relaxed"
                    style={{ fontFamily: "Helvetica, sans-serif" }}
                  >
                    {data.programs[(currentIndex - 1 + data.programs.length) % data.programs.length].description}
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
                    backgroundImage: `url(${data.programs[currentIndex].image})`,
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
                    {data.programs[currentIndex].title}
                  </h3>
                  <p
                    className="text-black text-sm leading-relaxed"
                    style={{ fontFamily: "Helvetica, sans-serif" }}
                  >
                    {data.programs[currentIndex].description}
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
                    backgroundImage: `url(${data.programs[(currentIndex + 1) % data.programs.length].image})`,
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
                    {data.programs[(currentIndex + 1) % data.programs.length].title}
                  </h3>
                  <p
                    className="text-black text-xs leading-relaxed"
                    style={{ fontFamily: "Helvetica, sans-serif" }}
                  >
                    {data.programs[(currentIndex + 1) % data.programs.length].description}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows - Positioned outside the main card */}
              <button
                onClick={prevSlide}
                className="absolute left-1/2 transform -translate-x-1/2 top-1/2  -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
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

          {/* Central Contact Card */}
          <div className="relative z-30 flex justify-center pt-102">
            <div className="bg-white rounded-[25px] shadow-lg p-6 w-[215px] max-w-sm">
              <div className="text-center space-y-6">
                {/* Phone */}
                <div>
                  <p className="font-medium mb-1 text-gray-900 text-lg">
                    +966 53 867 4556
                  </p>
                  <p className="text-gray-600 text-sm">
                    contact us with phone
                  </p>
                </div>

                {/* Email */}
                <div>
                  <p className="font-medium mb-1 text-gray-900 text-lg">
                    rita1yoga@hotmail.com
                  </p>
                  <p className="text-gray-600 text-sm">
                    contact us with mail
                  </p>
                </div>

                {/* Address */}
                <div>
                  <p className="font-medium mb-1 text-gray-900 text-lg">
                    United States
                  </p>
                  <p className="text-gray-600 text-sm">
                    205 Middle Road, 2nd
                  </p>
                  <p className="text-gray-600 text-sm">Floor, New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stone Images - Positioned outside main container */}
      <div className="lg:hidden relative">
        {/* Left Stone Stack */}
        <div
          className="absolute z-50"
          style={{
            width: "252.72311401367188px",
            height: "251px",
            top: "calc(-260px)",
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
          className="absolute z-50"
          style={{
            width: "252.72311401367188px",
            height: "251px",
            top: "calc(-30vh)",
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
            <div className="bg-white rounded-[40px] absolute flex flex-col justify-center items-center w-[787px] h-[230px] top-[100px] left-[326px] opacity-100">
              <h2 className="text-black font-normal mb-4 font-isenheim text-[35px] leading-[115%]">
                {data.title}
              </h2>
              <p className="text-[#595959] max-w-3xl mx-auto text-center text-[17px]">
                {data.subtitle}
              </p>
            </div>
          </div>
          <div
            className="relative z-20 p-6 md:p-12"
            style={{ marginTop: "350px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {data.programs.map((program) => (
                <RetreatCard key={program.id} retreat={program} href="#" />
              ))}
            </div>
            <div className="text-center mt-12">
              <button
                className="text-white transition-colors shadow-lg w-[272px] h-[82px] rounded-[30px] btn-isenheim text-[25px] leading-[30px]"
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
          </div>
          <div
            style={{
              marginLeft: "calc(-1 * clamp(186px,4vw,32px))",
              width: "calc(100% + clamp(1226px,4vw,32px))",
              marginTop: "80px",
            }}
          >
            <InsightsSection size="lg" />
          </div>
        </div>
        {/* Footer Section with rock image and info card */}
        <div
          className="relative mx-auto max-w-[1440px] h-[360px]"
          style={{ marginTop: "30px" }}
        >
          {/* Left Rock Image */}
          <div
            className="absolute w-[440px] h-[455px] top-0 left-[-130px] opacity-100 bg-contain bg-no-repeat bg-left-bottom pointer-events-none"
            style={{
              backgroundImage: "url('/Images/rockFooter.png')",
            }}
          />

          {/* Info Card */}
          <div className="absolute rounded-[30px] bg-white flex items-center w-[1011px] h-[138px] top-[110px] left-[395px] opacity-100">
            <div className="w-full grid grid-cols-3 gap-8 px-10">
              <div className="text-left">
                <div className="text-black font-helvetica text-[18px] leading-[140%]">
                  +966 53 867 4556
                </div>
                <div className="text-[#595959] font-helvetica text-[16px] leading-[140%]">
                  contact us with phone
                </div>
              </div>
              <div className="text-left">
                <div className="text-black font-helvetica text-[18px] leading-[140%]">
                  rita1yoga@hotmail.com
                </div>
                <div className="text-[#595959] font-helvetica text-[16px] leading-[140%]">
                  contact us with mail
                </div>
              </div>
              <div className="text-left">
                <div className="text-black font-helvetica text-[18px] leading-[140%]">
                  United States
                </div>
                <div className="text-[#595959] font-helvetica text-[16px] leading-[140%]">
                  205 Middle Road, 2nd Floor, New York
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
