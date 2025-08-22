import RetreatCard from './RetreatCard';
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
    <section className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-[url('/Images/BGfor3-4Section.jpg')] bg-cover bg-center bg-no-repeat"
      />


      <div className="relative z-10 mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] py-12 md:py-24">


        <div
          className="relative mx-auto w-[1385px] h-[1364px] rounded-[50px] opacity-100 bg-[url('/Images/UpperBG.png')] bg-cover bg-center bg-no-repeat -mt-10 md:-mt-20"
        >

          <div className="text-center pt-2 md:pt-4">

            <div className="inline-block px-4 py-2 text-black text-sm rounded-[8px] mb-4 bg-[url('/Images/default-bg.png')] bg-cover bg-center">
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
