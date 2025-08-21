import CustomerTestimonials from './CustomerTestimonials';

export default function FifthPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Main Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Images/BGfor3-4Section.jpg')",
          height: '100%',
          width: '100%'
        }}
      />
      
      {/* Left Rock Background Element */}
      <div 
        className="absolute"
        style={{
          width: '500px',
          height: '900px',
          backgroundImage: "url('/Images/rockleft1.png')",
          top: '100px',
          left: '-10px',
          zIndex: 5
        }}
      />
      
      {/* Right Rock Background Element */}
      <div 
        className="absolute"
        style={{
          width: '600px',
          height: '900px',
          top: '100px',
          right: '0px',
          opacity: 0.8,
          backgroundImage: "url('/Images/rockright.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] py-12 md:py-24">
        
        {/* Wellness Experiences Button */}
        <div className="flex justify-start mb-6" style={{ marginLeft: '95px' }}>
          <button 
            className="text-white px-6 py-3 rounded-full text-lg font-medium transition-all shadow-lg"
            style={{
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
        
        {/* Cards Container - Centered */}
        <div className="flex gap-8 justify-center items-start mb-8">
          {/* Left Card - Yoga Image */}
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
          
          {/* Right Card - Class Details */}
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
        
        {/* Contact Us Button - Below both cards */}
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
      
      {/* Customer Testimonials Section */}
      <CustomerTestimonials />
    </section>
  );
}
