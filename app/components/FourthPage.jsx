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
      description: "Drawing from ancient wisdomand modern techniques to support deep inner healing."
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
      description: "Drawing from ancient w d  nd modern techniques to supportdeep inner healing."
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
      style={{
        backgroundImage: "url('/Images/BGfor3-4Section.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
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
              className="inline-block px-4 py-2 text-black text-sm rounded-[8px] mb-4"
              style={{
                backgroundImage: "url('/Images/default-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              Wellness Experiences
            </div>

            <div className="bg-white rounded-[30px] mx-4 p-6 shadow-lg">
              <h2 className="text-black font-normal mb-3 font-isenheim text-2xl leading-tight text-left">
                Our Featured Retreats
              </h2>
              <p className="text-black text-sm leading-relaxed text-left">
                Discover transformative experiences in breathtaking locations designed to rejuvenate your mind, body, and spirit.
              </p>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="relative px-4 pb-8">
            <div className="relative rounded-[25px] overflow-hidden shadow-lg" style={{ height: '500px' }}>
              {/* Main Image */}
              <div
                className="w-full h-2/3"
                style={{
                  backgroundImage: `url(${retreats[currentIndex].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              
              {/* Navigation Arrows */}
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
                className="absolute bottom-0 left-0 right-0 h-1/3 p-4"
                style={{
                  backgroundImage: "url('/Images/default-bg.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <h3 className="text-black font-isenheim text-xl font-normal mb-2">
                  {retreats[currentIndex].title}
                </h3>
                <p className="text-black text-sm leading-relaxed">
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
          className="relative mx-auto w-[1385px] h-[1364px] rounded-[50px] opacity-100 -mt-10 md:-mt-20"
          style={{
            backgroundImage: "url('/Images/UpperBG.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="text-center pt-2 md:pt-4">
            <div 
              className="inline-block px-4 py-2 text-black text-sm rounded-[8px] mb-4"
              style={{
                backgroundImage: "url('/Images/default-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
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

              <p className="text-black max-w-3xl mx-auto text-center text-[17px]">
                Discover transformative experiences in breathtaking locations designed to rejuvenate your mind, body, and spirit.
              </p>
            </div>
          </div>

          <div className="relative z-20 p-6 md:p-12 h-full">
            {/* Retreat Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
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
