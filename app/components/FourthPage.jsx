"use client"

import { useState } from 'react';
import RetreatCard from './RetreatCard';

export default function FourthPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Retreat data objects
  const retreats = [
    {
      id: 1,
      title: "Retreat 1",
      image: "/Images/Retreat1.png",
      location: "Arizona",
      description: "Drawing from ancient modern techniques to support deep inner healing."
    },
    {
      id: 2,
      title: "Retreat 2",
      image: "/Images/Retreat2.png",
      location: "Arizona",
      description: "Drawing from ancient wisdom and modern techniques to support deep inner healing."
    },
    {
      id: 3,
      title: "Retreat 3",
      image: "/Images/Retreat3.png",
      location: "Arizona",
      description: "Drawing from ancient wisdom and modern techniques to support deep inner healing."
    },
    {
      id: 4,
      title: "Retreat 4",
      image: "/Images/Retreat4.png",
      location: "Arizona",
      description: "Drawing from ancient modern techniques to supportdeep inner healing."
    },
    {
      id: 5,
      title: "Retreat 5",
      image: "/Images/Retreat5.png",
      location: "Arizona",
      description: "Drawing from ancient wisdom and modern techniques to suppor  deep inner healing."
    },
    {
      id: 6,
      title: "Retreat 6",
      image: "/Images/Retreat6.png",
      location: "Arizona",
      description: "Drawing from ancient wisdom and modern techniques to support deep inner healing."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % retreats.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + retreats.length) % retreats.length);
  };

  return (
    <section
      className="relative min-h-screen w-full"
    >
      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10 mx-auto px-4 py-8">
        <div
          className="relative mx-auto w-full rounded-[30px] opacity-100"
          style={{
            backgroundImage: "url('/Images/UpperBG.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="text-center pt-6 pb-4">
            <div
              className="inline-flex items-center justify-center text-black text-sm mb-4"
              style={{
                width: '162px',
                height: '38px',
                borderRadius: '20px',
                opacity: 1,
                backgroundImage: "url('/Images/CardBG.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              Wellness Experiences
            </div>

            <div className="bg-white rounded-[30px] mx-3 p-7 shadow-lg">
              <div className="flex flex-row gap-4">
                <div className="flex-1">
                  <h2 className="text-black font-serif btn-isenheim leading-tight font-normal">
                    <div className="text-left whitespace-nowrap">Our Featured</div>
                    <div className="text-left">Retreats</div>
                  </h2>
                </div>
                <div className="flex-1">
                  <p className="text-[#595959] text-left font-helvetica">
                    Discover transformative experiences in breathtaking locations designed to rejuvenate your mind, body, and spirit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative px-0 pb-8 overflow-x-hidden">
            <div className="relative overflow-x-hidden" style={{ width: '100vw', height: '400px', marginLeft: 'calc(-50vw + 50%)' }}>
              {/* Previous Card peek */}
              <div
                className="absolute rounded-[25px] overflow-hidden shadow-lg"
                style={{ width: '180px', height: '350px', left: '-140px', top: '25px', opacity: 0.7 }}
              >
                <div
                  className="w-full h-2/3"
                  style={{
                    backgroundImage: `url(${retreats[(currentIndex - 1 + retreats.length) % retreats.length].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <div className="h-1/3 p-3" style={{ backgroundImage: "url('/Images/CardBG.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                  <h3 className="text-black font-serif font-bold text-xs mb-1" style={{ fontFamily: 'Isenheim, serif' }}>{retreats[(currentIndex - 1 + retreats.length) % retreats.length].title}</h3>
                  <p className="text-black text-xs leading-relaxed" style={{ fontFamily: 'Helvetica, sans-serif' }}>{retreats[(currentIndex - 1 + retreats.length) % retreats.length].description}</p>
                </div>
              </div>

              {/* Main Card */}
              <div className="absolute left-1/2 transform -translate-x-1/2 rounded-[25px] overflow-hidden shadow-lg" style={{ width: '300px', height: '400px' }}>
                <div
                  className="w-full h-2/3"
                  style={{
                    backgroundImage: `url(${retreats[currentIndex].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 p-4" style={{ backgroundImage: "url('/Images/CardBG.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                  <h3 className="text-black font-serif font-bold text-lg mb-2" style={{ fontFamily: 'Isenheim, serif' }}>{retreats[currentIndex].title}</h3>
                  <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'Helvetica, sans-serif' }}>{retreats[currentIndex].description}</p>
                </div>
              </div>

              {/* Next Card peek */}
              <div
                className="absolute rounded-[25px] overflow-hidden shadow-lg"
                style={{ width: '180px', height: '350px', right: '-140px', top: '25px', opacity: 0.7 }}
              >
                <div
                  className="w-full h-2/3"
                  style={{
                    backgroundImage: `url(${retreats[(currentIndex + 1) % retreats.length].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <div className="h-1/3 p-3" style={{ backgroundImage: "url('/Images/default-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                  <h3 className="text-black font-serif font-bold text-xs mb-1" style={{ fontFamily: 'Isenheim, serif' }}>{retreats[(currentIndex + 1) % retreats.length].title}</h3>
                  <p className="text-black text-xs leading-relaxed" style={{ fontFamily: 'Helvetica, sans-serif' }}>{retreats[(currentIndex + 1) % retreats.length].description}</p>
                </div>
              </div>

              {/* Nav Arrows outside */}
              <button onClick={prevSlide} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10" style={{ left: 'calc(50% - 160px)', backgroundImage: "url('/Images/default-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </button>
              <button onClick={nextSlide} className="absolute left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10" style={{ left: 'calc(50% + 160px)', backgroundImage: "url('/Images/default-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 12H5M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative z-10 mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] py-12 md:py-24">
        <div
            className="relative mx-auto w-[1620px] h-[1364px]  left-[-70px] rounded-[50px] opacity-100 -mt-10 md:-mt-20"
          style={{
            backgroundImage: "url('/Images/UpperBG.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="text-center pt-2 md:pt-4">
            <div
              className="inline-flex items-center justify-center text-white text-sm mb-4"
              style={{
                width: '162px',
                height: '38px',
                borderRadius: '20px',
                opacity: 1,
                backgroundImage: "url('/Images/default-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              Wellness Experiences
            </div>

            <div
              className="bg-white rounded-[40px] mx-auto flex flex-col justify-center items-center"
              style={{
                width: '787px',
                height: '163px'
              }}
            >
              <h2 className="text-black font-normal mb-4 font-isenheim text-[35px] leading-[115%]">
                Our Featured Retreats
              </h2>

              <p className="text-[#595959] max-w-3xl mx-auto text-center font-helvetica">
                Discover transformative experiences in breathtaking locations designed to rejuvenate your mind, body, and spirit.
              </p>
            </div>
          </div>

          <div className="relative z-20 p-6 md:p-12 h-full">
            {/* Retreat Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-[1296px] mx-auto">
              {retreats.map((retreat) => (
                <RetreatCard key={retreat.id} retreat={retreat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
