"use client"

import { useState } from 'react';
import CustomerTestimonials from './CustomerTestimonials';

export default function FifthPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const classes = [
    {
      id: 1,
      title: "Sunrise Yoga",
      image: "/Images/yoga.png",
      description: "Begin your day with clarity and calm. This guided outdoor yoga session helps you connect with nature, improve flexibility, and find inner peace through mindful movement and breathwork.",
      time: "Daily at 6:30 AM",
      place: "Cliffside Yoga Deck, overlooking the Savannah",
      equipment: "Yoga mat (provided) - bring a water bottle and towel"
    },
    {
      id: 2,
      title: "Meditation Circle",
      image: "/Images/yoga.png",
      description: "Join our guided meditation sessions to find inner peace and mental clarity in a serene environment.",
      time: "Daily at 7:00 AM",
      place: "Zen Garden, near the waterfall",
      equipment: "Cushion provided - wear comfortable clothing"
    },
    {
      id: 3,
      title: "Mindful Movement",
      image: "/Images/yoga.png",
      description: "Experience the perfect blend of yoga and meditation for complete mind-body wellness.",
      time: "Daily at 8:00 AM",
      place: "Sunrise Pavilion, mountain view",
      equipment: "Yoga mat and props provided"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % classes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + classes.length) % classes.length);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden -mt-16 md:-mt-24">
      

      {/* Background Stone Image - Increased Height */}
      <div
        className="absolute"
        style={{
          width: '500px',
          height: '1090px',
          top: '40px',
          left: '-10px',
          backgroundImage: "url('/Images/backgrounstone.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 3
        }}
      />

      {/* Your existing rockright image */}
      <div
        className="absolute"
        style={{
          width: '1120px',
          height: '1090px',
          top: '40px',
          right: '-110px',
          opacity: 0.8,
          backgroundImage: "url('/Images/rockright.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 3
        }}
      />

      {/* Left Image - Retreat4.png */}
      <div
        className="absolute"
        style={{
          width: '475px',
          height: '475px',
          top: '390px',
          left: '-410px',
          borderRadius: '50px',
          opacity: 0.7,
          backgroundImage: "url('/Images/Retreat4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 3
        }}
      />

      {/* Right Image - Retreat3.png */}
      <div
        className="absolute"
        style={{
          width: '475px',
          height: '475px',
          top: '390px',
          left: '1574px',
          borderRadius: '50px',
          opacity: 1,
          backgroundImage: "url('/Images/Retreat3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 3
        }}
      />

      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10 mx-auto px-4 pt-2 pb-8">
        <div className="flex justify-start mb-4">
          <button
            className="text-white px-6 py-3 rounded-full  white-card-isenheim text-sm ml-5 font-medium transition-all shadow-lg"
            style={{
              backgroundImage: "url('/Images/default-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            Our Classes
          </button>
        </div>

        {/* Header Card */}
        <div className="relative mb-8">

          <div className="bg-white rounded-[30px] mx-3 p-7 shadow-lg">
            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <h2 className="text-black font-serif btn-isenheim leading-tight font-normal">
                  <div className="text-left whitespace-nowrap">Our Featured</div>
                  <div className="text-left">Retreats</div>
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-sm leading-relaxed text-left white-card-isenheim ">
                  Discover transformative experiences in breathtaking locations designed to rejuvenate your mind, body, and spirit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative mb-8">
          <div className="relative rounded-[25px] overflow-hidden shadow-lg" style={{ height: '600px' }}>
            {/* Main Image */}
            <div
              className="w-full h-2/3"
              style={{
                backgroundImage: `url(${classes[currentIndex].image})`,
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
                backgroundImage: "url('/Images/CardBG.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h3 className="text-black font-serif font-bold text-xl mb-2" style={{ fontFamily: 'Isenheim, serif' }}>
                {classes[currentIndex].title}
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-3" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                {classes[currentIndex].description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-amber-600 text-sm">🕐</span>
                  <span className="text-gray-800 text-xs" style={{ fontFamily: 'Helvetica, sans-serif' }}>Time: {classes[currentIndex].time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-600 text-sm">📍</span>
                  <span className="text-gray-800 text-xs" style={{ fontFamily: 'Helvetica, sans-serif' }}>Place: {classes[currentIndex].place}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-600 text-sm">🧘‍♀️</span>
                  <span className="text-gray-800 text-xs" style={{ fontFamily: 'Helvetica, sans-serif' }}>Equipment: {classes[currentIndex].equipment}</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative z-10 mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] pt-6 md:pt-10 pb-12 md:pb-20">
        <div className="flex justify-start mb-6" style={{ marginLeft: '95px' }}>
          <button
            className="text-white text-sm font-medium transition-all shadow-lg"
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
          </button>
        </div>

        {/* Header Card */}
        <div
          className="relative mb-12"
          style={{
            width: '825px',
            height: '182px',
            borderRadius: '50px',
            opacity: 1,
            marginLeft: '95px'
          }}
        >
          <div className="bg-white rounded-[50px] p-8 h-full flex flex-col justify-center">
            <h2 className=" left-[95px ] text-4xl font-serif font-bold text-black mb-4" style={{ fontFamily: 'Isenheim, serif' }}>Featured Classes</h2>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Helvetica, sans-serif' }}>
              Discover our most popular wellness classes led by expert instructors. Transform your mind, body, and spirit with these life-changing sessions.
            </p>
          </div>
        </div>

        <div className="flex gap-8 justify-center items-start mb-8">
          <div
            className="relative"
            style={{
              width: '602px',
              height: '602px',
              borderRadius: '50px',
              opacity: 1
            }}
          >
            <img
              src="/Images/yoga.png"
              alt="Outdoor Yoga Class"
              className="w-full h-full object-cover rounded-[50px]"
            />
          </div>

          <div
            className="relative"
            style={{
              width: '602px',
              height: '602px',
              borderRadius: '50px',
              opacity: 1
            }}
          >
            <div
              className="w-full h-full rounded-[50px] p-8 flex flex-col justify-between"
              style={{
                backgroundImage: "url('/Images/CardBG.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-serif font-bold text-black" style={{ fontFamily: 'Isenheim, serif' }}>Class 1</h3>
                  <button
                    className="text-white font-medium transition-colors rounded-full"
                    style={{
                      width: '220px',
                      height: '67px',
                      fontFamily: 'Isenheim, serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '25px',
                      lineHeight: '30px',
                      letterSpacing: '0%',
                      backgroundImage: "url('/Images/default-bg.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    See more →
                  </button>
                </div>

                <h4 className="text-2xl font-serif font-semibold text-black mb-4" style={{ fontFamily: 'Isenheim, serif' }}>Sunrise Yoga</h4>

                <p className="text-gray-800 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                  Begin your day with clarity and calm. This guided outdoor yoga session helps you connect with nature, improve flexibility, and find inner peace through mindful movement and breathwork.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-amber-600 text-xl">🕐</span>
                    <span className="text-gray-800 text-lg" style={{ fontFamily: 'Helvetica, sans-serif' }}>Time: Daily at 6:30 AM</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-amber-600 text-xl">📍</span>
                    <span className="text-gray-800 text-lg" style={{ fontFamily: 'Helvetica, sans-serif' }}>Place: Cliffside Yoga Deck, overlooking the Savannah</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-amber-600 text-xl">🧘‍♀️</span>
                    <span className="text-gray-800 text-lg" style={{ fontFamily: 'Helvetica, sans-serif' }}>Equipment: Yoga mat (provided) - bring a water bottle and towel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            className="text-white transition-colors shadow-lg"
            style={{
              width: '272px',
              height: '82px',
              borderRadius: '30px',
              backgroundImage: "url('/Images/default-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              fontFamily: 'Isenheim, serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '25px',
              lineHeight: '30px',
              letterSpacing: '0%'
            }}
          >
            Contact us
          </button>
        </div>
      </div>

      <CustomerTestimonials />
    </section>
  );
}
