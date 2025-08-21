import AboutPhotoCard from "../components/AboutPhotoCard";
import ValueCard from "../components/ValueCard";

const philosophyCards = [
  {
    title: "Holistic Approach",
    description:
      "We believe in treating the whole person—mind, body, and spirit—recognizing that each aspect contributes to overall wellbeing. Our programs are designed to create harmony across all dimensions of health.",
  },
  {
    title: "Evidence-Based Practices",
    description:
      "While honoring traditional wisdom, we integrate modern scientific research into our methods. This balanced approach ensures our clients receive the most effective and comprehensive care possible.",
  },
  {
    title: "Personalized Experience",
    description:
      "No two individuals are alike, and neither are their wellness journeys. We take time to understand each client’s needs, crafting personalized programs that address specific goals and challenges.",
  },
];

// Configurable data for the final CTA section
const ctaSectionData = {
  background: {
    image: "/Images/bgWCS.png",
    width: 1781,
    height: 1020,
    top: 0,
    left: -142,
  },
  bannerCard: {
    image: "/Images/CardBG.png",
    // These values can be tweaked easily to match the mock 1:1
    width: 980,
    height: 300,
    top: 100,
    left: 230,
    borderRadius: 30,
    title: "Begin Your\nTransformative Journey",
    body:
      "Whether you're seeking stress reduction, spiritual growth, or a complete wellness reset, we invite you to experience the transformative power of our programs and retreats.",
    buttonText: "contact us today",
  },
  button: {
    width: 280,
    height: 64,
    top: 500, // placed below the gold banner card
    borderRadius: 20,
    background: "/Images/default-bg.png",
  },
  infoBox: {
    width: 1011,
    height: 138,
    top: 860, // relative to this section
    left: 415, // centered in 1440px container
    borderRadius: 30,
  },
  rock: {
    image: "/Images/rockFooter.png",
    width: 440,
    height: 437,
    top: 600,
    left: -157,
  },
  contacts: {
    phoneLabel: "contact us with phone",
    phoneValue: "+966 53 867 4556",
    emailLabel: "contact us with mail",
    emailValue: "ritayoga@hotmail.com",
    addressHeading: "United States",
    addressLine1: "205 Middle Road, 2nd",
    addressLine2: "Floor, New York",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-dvh text-white">
      {/* About Hero */}
      <section className="relative min-h-[1400px] w-full">
        {/* Full-width base background without overflow */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Images/BGfor3-4Section.jpg')" }}
        />

        {/* Centered composition wrapper matching overlay size */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ width: "1385px", height: "1047px", top: "162px" }}
        >
          {/* UpperBG overlay per spec */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-[50px]"
            style={{
              backgroundImage: "url('/Images/UpperBG.png')",
              opacity: 1,
            }}
          />

          {/* Left gold card */}
          <div
            className="absolute rounded-[30px] text-black p-8"
            style={{
              width: "506px",
              height: "484px",
              top: "226px",
              left: "158px",
              backgroundImage: "url('/Images/default-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/90 text-[#c79a2f] mb-4">
              Our Story
            </div>
            <h1 className="font-isenheim text-black mb-4">About Revive</h1>
            <p className="text-black/80 leading-relaxed">
              At Revive, we believe in the profound connection between mind,
              body, and spirit. Our journey began with a simple vision: to
              create transformative wellness experiences that blend ancient
              wisdom with modern science.
            </p> 
            <p className="mt-10">
              Founded by Rita, an internationally certified wellness expert with
              over 15 years of experience, Revive has grown into a sanctuary for
              those seeking genuine transformation and holistic wellbeing.
            </p>
          </div>

          {/* Right image */}
          <div
            className="absolute rounded-[30px] overflow-hidden"
            style={{
              width: "663.75px",
              height: "885px",
              top: "50px",
              left: "707px",
            }}
          >
            <img
              src="/Images/GirlCardimg.png"
              alt="About visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Philosophy section (reuse ValueCard without icons) */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/SecondPageBG.png')", height: '769px' }}
      >
        <div className="relative z-10 mx-auto px-[clamp(16px,4vw,32px)]" style={{ width: '1440px' }}>
          {/* Title */}
          <div className="text-center pt-16">
            <h2 className="font-isenheim text-white text-5xl font-normal">Our Philosophy:</h2>
          </div>

          {/* Cards: 3 across, centered */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {philosophyCards.map((c, idx) => (
              <ValueCard
                key={idx}
                title={c.title}
                description={c.description}
                showIcon={false}
                titleClassName="text-black about-card-title"
                descriptionClassName="text-black about-card-desc"
                className="backdrop-blur-[1px]"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Background for the next section */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/BGfor3-4Section.jpg')" }}
      >
        <div
          className="relative z-10 mx-auto"
          style={{ width: '1440px', minHeight: '1250px' }}
        >
          {/* Upper background overlay on top of section bg */}
          <div
            className="absolute bg-cover bg-center bg-no-repeat"
            style={{
              width: '646px',
              height: '698px',
              top: '370px', // relative within this section (derived from provided layout)
              left: '-130px',
              backgroundImage: "url('/Images/BackgrounStone.png')",
            }}
          />

          {/* Left round logo/image */}
          <div
            className="absolute overflow-hidden rounded-full mt-10"
            style={{
              width: '432px',
              height: '432px',
              top: '17px',
              left: '191px',
            }}
          >
            <img
              src="/Images/roundLogo.png"
              alt="Founder visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right gold card */}
          <div  
            className="absolute rounded-[30px] text-black p-8 bg-cover bg-center bg-no-repeat mt-10"
            style={{
              width: '640px',
              height: '484px',
              top: '0px',
              left: '720px',
              backgroundImage: "url('/Images/CardBG.png')",
            }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/90 text-[#c79a2f] mb-4">
              Our Leadership
            </div>
            <h2 className="font-isenheim text-black text-5xl mb-2">Meet Our Founder</h2>
            <h3 className="text-xl font-semibold mb-3">Rita</h3>
            <p className="text-black/80 leading-relaxed">
              With over 15 years of experience in wellness, Rita brings a wealth of knowledge
              spanning Yoga, Meditation, Sound Healing, Ayurveda, Neuroscience Coaching,
              Hypnotherapy and Breath Work.
            </p>
            <p className="text-black/80 leading-relaxed mt-3">
              Her journey began in India, where she studied traditional practices before expanding
              her expertise through certifications from renowned institutions worldwide.
              Rita’s approach uniquely blends ancient wisdom with modern science, creating
              transformative experiences that address the whole person.
            </p>
          </div>

          {/* Three photo cards below */}
          <div className="absolute z-20" style={{ top: '596px', left: '63px' }}>
            <AboutPhotoCard
              image="/Images/aboutPhoto1.png"
              title="Sound Bowl Meditation"
              description="Ancient healing technique for deep relaxation"
            />
          </div>
          <div className="absolute z-20" style={{ top: '596px', left: '523px' }}>
            <AboutPhotoCard
              image="/Images/aboutPhoto2.png"
              title="Desert Yoga Practice"
              description="Connecting with nature through mindful movement"
            />
          </div>
          <div className="absolute z-20" style={{ top: '596px', left: '983px' }}>
            <AboutPhotoCard
              image="/Images/aboutPhoto3.png"
              title="Spiritual Connection"
              description="Embracing the healing energy of natural surroundings"
            />
          </div>
        </div>
      </section>

      {/* Final CTA section */}
       <section className="relative w-full overflow-hidden">
         <div className="relative mx-auto" style={{ width: '1440px', height: `${ctaSectionData.background.height}px` }}>
           {/* Background dunes */}
           <div
             className="absolute bg-cover bg-center"
             style={{
               width: `${ctaSectionData.background.width}px`,
               height: `${ctaSectionData.background.height}px`,
               top: `${ctaSectionData.background.top}px`,
               left: `${ctaSectionData.background.left}px`,
               backgroundImage: `url('${ctaSectionData.background.image}')`,
             }}
           />
 
           {/* Gold banner card */}
           <div
             className="absolute bg-cover bg-center text-black text-center rounded-[30px]"
             style={{
               width: `${ctaSectionData.bannerCard.width}px`,
               height: `${ctaSectionData.bannerCard.height}px`,
               top: `${ctaSectionData.bannerCard.top}px`,
               left: `${ctaSectionData.bannerCard.left}px`,
               backgroundImage: `url('${ctaSectionData.bannerCard.image}')`,
               borderRadius: `${ctaSectionData.bannerCard.borderRadius}px`,
               paddingTop: '40px',
             }}
           >
            <h2 className="font-isenheim whitespace-pre-line" style={{ fontSize: '56px', lineHeight: '1.15' }}>{ctaSectionData.bannerCard.title}</h2>
            <p className="mx-auto" style={{ marginTop: '16px', maxWidth: '740px', fontSize: '15px', lineHeight: '1.4' }}>
              {ctaSectionData.bannerCard.body}
            </p>
           </div>
 
          {/* CTA Button below the banner */}
          <button
            className="absolute text-white btn-isenheim"
            style={{
              width: `${ctaSectionData.button.width}px`,
              height: `${ctaSectionData.button.height}px`,
              top: `${ctaSectionData.button.top}px`,
              left: `${ctaSectionData.bannerCard.left + (ctaSectionData.bannerCard.width - ctaSectionData.button.width) / 2}px`,
              borderRadius: `${ctaSectionData.button.borderRadius}px`,
              backgroundImage: `url('${ctaSectionData.button.background}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {ctaSectionData.bannerCard.buttonText}
          </button>

          {/* Rock stack image */}
          <img
            src={ctaSectionData.rock.image}
            alt="Rock stack"
            className="absolute"
            style={{
              width: `${ctaSectionData.rock.width}px`,
              height: `${ctaSectionData.rock.height}px`,
              top: `${ctaSectionData.rock.top}px`,
              left: `${ctaSectionData.rock.left}px`,
            }}
          />
 
           {/* White info box */}
           <div
             className="absolute bg-white text-black grid grid-cols-3 items-center px-10"
             style={{
               width: `${ctaSectionData.infoBox.width}px`,
               height: `${ctaSectionData.infoBox.height}px`,
               top: `${ctaSectionData.infoBox.top}px`,
               left: `${ctaSectionData.infoBox.left}px`,
               borderRadius: `${ctaSectionData.infoBox.borderRadius}px`,
               boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
             }}
           >
             <div>
               <div className="text-sm text-black/60">{ctaSectionData.contacts.phoneLabel}</div>
               <div className="text-lg font-medium">{ctaSectionData.contacts.phoneValue}</div>
             </div>
             <div className="text-center">
               <div className="text-sm text-black/60">{ctaSectionData.contacts.emailLabel}</div>
               <div className="text-lg font-medium">{ctaSectionData.contacts.emailValue}</div>
             </div>
             <div className="text-right">
               <div className="text-lg font-medium">{ctaSectionData.contacts.addressHeading}</div>
               <div className="text-sm">{ctaSectionData.contacts.addressLine1}</div>
               <div className="text-sm">{ctaSectionData.contacts.addressLine2}</div>
             </div>
           </div>
         </div>
       </section>
    </main>
  );
}
