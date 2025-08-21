import InsightsSection from "../components/InsightsSection";
import RetreatCard from "../components/RetreatCard";
export default function FourthPage() {
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

  return (
    <section className="relative min-h-screen w-full mt-28">
      {/* Main Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Images/BGfor3-4Section.jpg')"
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] py-12 md:py-24">
        
        {/* Upper Background Overlay */}
        <div 
          className="relative mx-auto max-w-[1385px] w-full min-h-[1364px] rounded-[50px] opacity-100 bg-cover bg-center bg-no-repeat -mt-10 md:-mt-20"
          style={{
            backgroundImage: "url('/Images/UpperBG.png')"
          }}
        >
          {/* Section Title - Now positioned inside UpperBG.png */}
          <div className="text-center pt-2 md:pt-4">
            
            
            {/* White Box Container */}
            <div 
              className="bg-white rounded-[40px] mx-auto flex flex-col justify-center items-center"
              style={{
                width: '787px',
                height: '163px'
              }}
            >
              <h2 className="text-black font-normal mb-4" style={{ 
                fontFamily: 'Isenheim, Georgia, serif',
                fontSize: '35px',
                fontWeight: '400',
                lineHeight: '115%'
              }}>
               Retreats
              </h2>
              
              <p className="text-[#595959] max-w-3xl mx-auto text-center" style={{ fontSize: '17px' }}>
              Experience transformative wellness in the world's most 
                </p>
                <p className="text-[#595959] max-w-3xl mx-auto text-center" style={{ fontSize: '17px'}}>
                exclusive and serene locations

                </p>

            </div>
          </div>
          {/* Content Container within the overlay */}
          <div className="relative z-20 p-6 md:p-12">
            {/* Retreat Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {retreats.map((retreat) => (
                <RetreatCard key={retreat.id} retreat={retreat} />
              ))}
            </div>
               {/* Contact Us Button - Below both cards */}
        <div className="text-center">
          <button 
            className="text-white transition-colors shadow-lg mt-22"
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
          <div
            style={{
              marginLeft: 'calc(-1 * clamp(186px,4vw,32px))',
              width: 'calc(100% + clamp(1226px,4vw,32px))'
            }}
          >
            <InsightsSection size="lg"/>
          </div>
        </div>
           {/* Footer Section with rock image and info card */}
           <div className="relative mx-auto" style={{ maxWidth: '1440px', height: '360px' }}>
            {/* Left Rock Image */}
            <div
              className="absolute"
              style={{
                width: '440px',
                height: '437px',
                top: '0px',
                left: '-130px',
                opacity: 1,
                backgroundImage: "url('/Images/rockFooter.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left bottom',
                backgroundSize: 'contain',
                pointerEvents: 'none'
              }}
            />

            {/* Info Card */}
            <div
              className="absolute rounded-[30px] bg-white flex items-center"
              style={{
                width: '1011px',
                height: '138px',
                top: '110px',
                left: '395px',
                opacity: 1,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="w-full grid grid-cols-3 gap-8 px-10">
                <div className="text-left">
                  <div className="text-black" style={{ fontFamily: 'Helvetica Light, Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '140%' }}>
                    +966 53 867 4556
                  </div>
                  <div className="text-[#595959]" style={{ fontFamily: 'Helvetica Light, Helvetica, Arial, sans-serif', fontSize: '16px', lineHeight: '140%' }}>
                    contact us with phone
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-black" style={{ fontFamily: 'Helvetica Light, Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '140%' }}>
                    rita1yoga@hotmail.com
                  </div>
                  <div className="text-[#595959]" style={{ fontFamily: 'Helvetica Light, Helvetica, Arial, sans-serif', fontSize: '16px', lineHeight: '140%' }}>
                    contact us with mail
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-black" style={{ fontFamily: 'Helvetica Light, Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '140%' }}>
                    United States
                  </div>
                  <div className="text-[#595959]" style={{ fontFamily: 'Helvetica Light, Helvetica, Arial, sans-serif', fontSize: '16px', lineHeight: '140%' }}>
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
