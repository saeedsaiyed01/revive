
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
        <div className="lg:hidden relative z-10"
          style={{
            backgroundImage: "url('/Images/UpperBG.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="px-4 pt-20 pb-20">
            <div className="flex justify-center">
              <div
                className="inline-block px-6 py-2 rounded-full text-white about-card-desc font-medium text-base bg-[url('/Images/default-bg.png')] bg-cover bg-center"
              >
                Our Values
              </div>
            </div>

            {/* 1st: Rita: A Legacy of Expertise - White box */}
            <div className="mt-6 bg-white rounded-[20px] p-5 text-center">
              <h2 className="text-black text-xl card-title-isenheim leading-tight">
                Rita: A Legacy of
              </h2>
              <h2 className="text-black text-xl card-title-isenheim leading-tight">Expertise</h2>
            </div>

            {/* 2nd: Image with profile badge */}
            <div className="mt-6 relative rounded-[20px] overflow-hidden">
              <img src="/Images/GirlCardimg.png" alt="Rita" className="w-full h-auto rounded-[20px]" />
              <div
                className="absolute bottom-3 right-3 rounded-[15px] p-3 shadow-lg bg-white"
                style={{ width: '220px', height: '90px' }}
              >
                <div className="flex items-center gap-2 h-full">
                  <div className="w-10 h-10 overflow-hidden rounded-[10px]">
                    <img src="/Images/MiniCardImg.png" alt="Rita profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      <img src="/logos/Start.png" alt="star" />
                    </div>
                    <p className="font-semibold text-gray-600 text-xs">Rita - Founder</p>
                    <p className="text-gray-600 text-[10px] leading-tight">Wellness expert with over 15 years of experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd: Card with content */}
            <div
              className="mt-6 rounded-[20px] p-6"
              style={{
                backgroundImage: "url('/Images/CardBG.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h3 className="text-black card-title-isenheim mb-3 leading-tight" style={{ fontSize: '15px' }}>
                Unveiling Rita's Approach
              </h3>
              <div className="space-y-3 about-card-desc text-black leading-relaxed" style={{ fontSize: '15px' }}>
                <p>
                  We differentiate ourselves through a unique blend of diverse wellness practices, all led by our internationally certified wellness expert, Rita. Our retreats are tailored to meet the individual needs of our clients, offering flexible formats from short sessions to immersive multi-day programs.
                </p>
              </div>
              <div className="flex justify-end mt-4">
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
            <div className="relative z-20 p-6 md:p-12 h-full flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12">
              <div className="w-full lg:w-1/2 lg:pr-0">
                <div
                  className="h-full min-h-[791px] max-w-[620px] mx-auto rounded-[20px] md:rounded-[30px] p-6 md:p-8 flex flex-col justify-between"
                  style={{
                    backgroundImage: "url('/Images/CardBG.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div>
                    <div
                      className="inline-block px-3 md:px-4 py-2 text-white text-xs md:text-sm rounded-[6px] md:rounded-[18px] mb-4 md:mb-6"
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
                    <h2 className="font-isenheim text-black text-3xl md:text-5xl lg:text-6xl font-normal mb-3 md:mb-4 leading-tight text-left">
                      Rita: A Legacy of Expertise
                    </h2>

                    {/* Subtitle */}
                    <h3 className="subtitle-isenheim text-black mb-4 md:mb-6 leading-tight text-left" style={{ fontSize: 'clamp(18px, 4vw, 25px)' }}>
                      Unveiling Rita's Approach
                    </h3>
                    {/* Body Text - Exact content from image */}
                    <div className="space-y-4 text-black text-base md:text-lg leading-7 md:leading-8 text-left">
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
                <div className="mt-4 md:mt-6 flex justify-center lg:justify-left ml-84">
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

              <div className="w-full lg:w-1/2 lg:pl-0 relative">
                <div
                  className="rounded-[30px] overflow-hidden mx-auto"
                  style={{
                    width: 'clamp(520px, 40vw, 650px)',
                    height: 'clamp(700px, 52vw, 885px)'
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
                    className="absolute bottom-3 md:bottom-6 right-3 md:right-6  mr-12 rounded-[15px] md:rounded-[30px] p-3 md:p-4 shadow-lg bg-white "
                    style={{
                      width: 'clamp(200px, 50vw, 258px)',
                      height: 'clamp(80px, 20vh, 118px)'
                    }}
                  >
                    <div className="flex items-center gap-2 md:gap-3 h-full">
                      <div className="w-8 md:w-18 h-8 md:h-22 overflow-hidden">
                        <img src="/Images/MiniCardImg.png" alt="Rita profile" className="w-full h-full object-cover rounded-[10px]" />
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
