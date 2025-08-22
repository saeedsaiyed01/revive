import InsightsSection from "../components/InsightsSection";
import RetreatCard from "../components/RetreatCard";

// Programs Page Content Data
export const programsPageData = {
  title: "Our Programs",
  subtitle: "Discover our wide range of transformative wellness classes designed to nurture your mind, body, and spirit. Each class is led by expert instructors dedicated to guiding you on your wellness journey.",
  buttonText: "Contact us",
  programs: [
    {
      id: 1,
      title: "Yoga & Meditation",
      image: "/Images/Retreat1.png",
      location: "Arizona",
      description: "Drawing from ancient wisdom and modern techniques to support deep inner healing."
    },
    {
      id: 2,
      title: "Sound Healing", 
      image: "/Images/Retreat2.png",
      location: "Arizona",
      description: "Drawing from ancient wisdom and modern techniques to support deep inner healing."
    },
    {
      id: 3,
      title: "Ayurveda Practices",
      image: "/Images/Retreat3.png", 
      location: "Arizona",
      description: "Drawing from ancient wisdom and modern techniques to support deep inner healing."
    },
    {
      id: 4,
      title: "Neuroscience Coaching",
      image: "/Images/Retreat4.png",
      location: "Arizona", 
      description: "Drawing from ancient wisdom and modern techniques to support deep inner healing."
    },
    {
      id: 5,
      title: "Hypnotherapy",
      image: "/Images/Retreat5.png",
      location: "Arizona",
      description: "Drawing from ancient wisdom and modern techniques to support deep inner healing."
    },
    {
      id: 6,
      title: "Breath Work",
      image: "/Images/Retreat6.png",
      location: "Arizona",
      description: "Drawing from ancient wisdom and modern techniques to support deep inner healing."
    }
  ]
};

export default function ProgramsPage() {
  const data = programsPageData;

  return (
    <section className="relative min-h-screen w-full mt-28">
      <div 
        className="absolute inset-0 bg-[url('/Images/BGfor3-4Section.jpg')] bg-cover bg-center bg-no-repeat"
      />
      
      <div className="relative z-10 mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] py-12 md:py-24">
        
        <div 
          className="relative mx-auto max-w-[1385px] w-full min-h-[1364px] rounded-[50px] opacity-100 bg-[url('/Images/UpperBG.png')] bg-cover bg-center bg-no-repeat -mt-10 md:-mt-20"
        >
          <div className="text-center pt-2 md:pt-4">
            
            <div 
              className="bg-white rounded-[40px] absolute flex flex-col justify-center items-center w-[787px] h-[230px] top-[224px] left-[326px] opacity-100"
            >
              <h2 className="text-black font-normal mb-4 font-isenheim text-[35px] leading-[115%]">
               {data.title}
              </h2>
              
              <p className="text-[#595959] max-w-3xl mx-auto text-center text-[17px]">
              {data.subtitle}
                </p>

            </div>
          </div>
          <div className="relative z-20 p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {data.programs.map((program) => (
                <RetreatCard key={program.id} retreat={program} href="#" />
              ))}
            </div>
        <div className="text-center">
          <button 
            className="text-white transition-colors shadow-lg mt-22 w-[272px] h-[82px] rounded-[30px] bg-[url('/Images/default-bg.png')] bg-cover bg-center bg-no-repeat btn-isenheim text-[25px] leading-[30px]"
          >
            {data.buttonText}
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
           <div className="relative mx-auto max-w-[1440px] h-[360px]">
            {/* Left Rock Image */}
            <div
              className="absolute w-[440px] h-[437px] top-0 left-[-130px] opacity-100 bg-contain bg-no-repeat bg-left-bottom pointer-events-none"
              style={{
                backgroundImage: "url('/Images/rockFooter.png')"
              }}
            />

            {/* Info Card */}
            <div
              className="absolute rounded-[30px] bg-white flex items-center w-[1011px] h-[138px] top-[110px] left-[395px] opacity-100 bg-cover bg-center"
            >
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
