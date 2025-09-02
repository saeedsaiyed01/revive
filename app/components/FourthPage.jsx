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
                backgroundImage: "url('/Images/default-bg.png')",
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
          <div className="relative px-4 pb-8">
            <div
              className="relative rounded-[25px] overflow-hidden shadow-lg"
              style={{
                height: '500px',
                backgroundImage: "url('/Images/CardBG.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
        
              <div
                className="w-full h-2/3"
                style={{
                  backgroundImage: `url(${retreats[currentIndex].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#F2D282] flex items-center justify-center shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#F2D282] flex items-center justify-center shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Text Overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3 p-4 flex flex-col justify-center items-center"
                style={{
                  backgroundImage: "url('/Images/CardBG.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'left-63',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <h3 className="text-black card-title-isenheim text-xl font-normal mb-2">
                  {retreats[currentIndex].title}
                </h3>
                <p className="text-black card-description text-sm leading-relaxed ml-8  ">
                  {retreats[currentIndex].description}
                </p>
              </div>
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
