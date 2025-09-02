
const thirdPageData = {
  title: "Transform Your Wellness Journey",
  description: "Embark on a transformative experience that combines ancient wisdom with modern practices. Our comprehensive wellness programs are designed to nurture your mind, body, and spirit, helping you achieve lasting balance and inner peace.",
  icon: "/Images/default-bg.png" // You can replace this with the actual icon
};

export default function ThirdPage() {
  return (
    <>
      <section 
        className="relative min-h-screen w-full"
      >
        {/* Mobile Layout */}
        <div className="lg:hidden relative z-10 min-h-screen"
          style={{
            backgroundImage: "url('/Images/UpperBG.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
            <div className="ml-34">
            <div
              className="inline-block px-6 py-2 rounded-full text-white about-card-desc font-medium text-base bg-[url('/Images/default-bg.png')] bg-cover bg-center"
            >
              Our Values
            </div>
          </div>
          {/* 1st: Rita: A Legacy of Expertise - White box */}
          <div
            className="absolute"
            style={{
              width: '363px',
              height: '99px',
              top: '40px',
              left: '29px',
              borderRadius: '20px',
              opacity: 1,
              backgroundColor: 'white'
            }}
          >
            
            <div className="p-4 flex flex-col justify-between h-full ">
              <h2 className="text-black text-xl card-title-isenheim leading-tight ml-12">
                Rita: A Legacy of 
              </h2>
              <h2 className="text-black text-xl card-title-isenheim leading-tight ml-22">Expertise</h2>
              {/* <p className="text-black text-sm leading-tight">
                We differentiate ourselves through a unique blend of diverse wellness practices, all led by our internationally certified wellness expert, Rita. Our retreats are tailored to meet the individual needs of our clients, offering flexible formats from short sessions to immersive multi-day programs.
              </p> */}
            </div>
          </div>

          {/* 2nd: Image */}
          <div
            className="absolute"
            style={{
              width: '318px',
              height: '424px',
              top: '150px',
              left: '61px',
              borderRadius: '20px',
              opacity: 1,
              backgroundImage: "url('/Images/GirlCardimg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* 3rd: Card with content */}
          <div
            className="absolute"
            style={{
              width: '395px',
              height: '319px',
              top: '580px',
              left: '13px',
              borderRadius: '20px',
              opacity: 1,
              backgroundImage: "url('/Images/CardBG.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="p-6 h-full flex flex-col justify-between ">
              <div>
              
                {/* Main Title */}
                {/* <h2 className="text-black text-2xl font-normal  leading-tight mb-4">
                  Rita: A Legacy of Expertise
                </h2> */}

                {/* Subtitle */}
                <h3 className="text-black card-title-isenheim  mb-4 leading-tight" style={{ fontSize: '15px' }}>                  Unveiling Rita's Approach
                </h3>
                
                {/* Body Text - Font size 15px */}
                <div className="space-y-3 about-card-desc text-black leading-relaxed" style={{ fontSize: '15px' }}>
                  <p>
                    We differentiate ourselves through a unique blend of diverse wellness practices, all led by our internationally certified wellness expert, Rita. Our retreats are tailored to meet the individual needs of our clients, offering flexible formats from short sessions to immersive multi-day programs.
                  </p>
                 
                </div>
              </div>

              {/* Read More Button */}
              <div className="flex justify-end">
                <button
                  className="text-white font-normal transition-colors w-[120px] h-[40px] rounded-[20px] text-[14px]"
                  style={{
                    backgroundImage: "url('/Images/default-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative z-10 mx-auto max-w-screen-3xl px-[clamp(16px,4vw,32px)] py-12 md:py-24">
          <div
            className="relative mx-auto w-full max-w-[1620px] h-auto min-h-[600px] md:h-[998px] rounded-[25px] md:rounded-[50px] opacity-100 -mt-10 md:-mt-20"
            style={{
              backgroundImage: "url('/Images/UpperBG.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="relative z-20 p-6 md:p-12 h-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
              <div className="w-full lg:w-1/2 lg:pr-8">
                <div
                  className="h-full rounded-[20px] md:rounded-[30px] p-6 md:p-8 flex flex-col justify-between"
                  style={{
                    backgroundImage: "url('/Images/CardBG.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div>
                    <div
                      className="inline-block px-3 md:px-4 py-2 text-white text-xs md:text-sm rounded-[6px] md:rounded-[8px] mb-4 md:mb-6"
                      style={{
                        backgroundImage: "url('/Images/default-bg.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      Who we are?
                    </div>

                    {/* Main Title */}
                    <h2 className="font-isenheim text-black text-2xl md:text-4xl font-normal mb-3 md:mb-4 leading-tight text-left">
                      Rita: A Legacy of Expertise
                    </h2>

                    {/* Subtitle */}
                    <h3 className="subtitle-isenheim text-black mb-4 md:mb-6 leading-tight text-left" style={{ fontSize: 'clamp(18px, 4vw, 25px)' }}>
                      Unveiling Rita's Approach
                    </h3>
                    {/* Body Text - Exact content from image */}
                    <div className="space-y-3 md:space-y-4 text-black text-sm md:text-base leading-relaxed text-left">
                      <p>
                        We differentiate ourselves through a unique blend of diverse wellness practices, all led by our internationally certified wellness expert, Rita. Our retreats are tailored to meet the individual needs of our clients, offering flexible formats from short sessions to immersive multi-day programs.
                      </p>
                      <p>
                        Rita, the founder and wellness expert, brings over a decade of experience in the field of wellness to each retreat. Her expertise spans a variety of disciplines, including Yoga & Meditation, Sound Healing, Ayurveda Practices, Neuroscience Coaching, Hypnotherapy and Breath Work. Our retreats are not just a temporary escape; they are journeys of self-discovery and empowerment that create lasting positive change in your life and well-being.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Read More Button - Now below the card */}
                <div className="mt-4 md:mt-6 flex justify-center lg:justify-end">
                  <button
                    className="text-white font-normal transition-colors btn-isenheim w-[clamp(200px,60vw,272px)] h-[clamp(60px,15vw,82px)] rounded-[20px] text-[clamp(14px,3vw,28px)]"
                    style={{
                      backgroundImage: "url('/Images/default-bg.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'right',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>

              <div className="w-1/2 pl-8 relative">
                <div
                  className="rounded-[30px] overflow-hidden"
                  style={{
                    width: '550px',
                    height: '750px'
                  }}
                >
                  <div
                    className="w-full h-full rounded-[20px] md:rounded-[30px]"
                    style={{
                      backgroundImage: "url('/Images/GirlCardimg.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />

                  <div
                    className="absolute bottom-3 md:bottom-6 right-3 md:right-6  mr-42 rounded-[15px] md:rounded-[30px] p-3 md:p-4 shadow-lg bg-white"
                    style={{
                      width: 'clamp(200px, 50vw, 258px)',
                      height: 'clamp(80px, 20vh, 118px)'
                    }}
                  >
                    <div className="flex items-center gap-2 md:gap-3 h-full">
                      <div className="w-8 md:w-12 h-8 md:h-12 rounded-full overflow-hidden">
                        <div
                          className="w-full h-full rounded-full"
                          style={{
                            backgroundImage: "url('/Images/MiniCardImg.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Star Rating */}
                        <div className="flex items-center gap-1 mb-1 md:mb-2">
                          <img
                            src="/logos/Start.png"
                            alt="star"
                            className=""
                          />
                        </div>
                        <p className="font-semibold text-gray-600 text-xs md:text-sm ">Rita - Founder</p>
                        <p className="text-gray-600 text-xs">Wellness expert with over 15 years of experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
