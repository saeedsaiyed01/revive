import AboutPhotoCard from "../components/AboutPhotoCard";
import ValueCard from "../components/ValueCard";

// About Page Content Data
export const aboutPageData = {
  hero: {
    story: {
      badge: "Our Story",
      title: "About Revive",
      description1: "At Revive, we believe in the profound connection between mind, body, and spirit. Our journey began with a simple vision: to create transformative wellness experiences that blend ancient wisdom with modern science.",
      description2: "Founded by Rita, an internationally certified wellness expert with over 15 years of experience, Revive has grown into a sanctuary for those seeking genuine transformation and holistic wellbeing."
    },
    image: "/Images/GirlCardimg.png"
  },
  philosophy: {
    title: "Our Philosophy:",
    cards: [
      {
        title: "Holistic Approach",
        description: "We believe in treating the whole person—mind, body, and spirit—recognizing that each aspect contributes to overall wellbeing. Our programs are designed to create harmony across all dimensions of health."
      },
      {
        title: "Evidence-Based Practices",
        description: "While honoring traditional wisdom, we integrate modern scientific research into our methods. This balanced approach ensures our clients receive the most effective and comprehensive care possible."
      },
      {
        title: "Personalized Experience",
        description: "No two individuals are alike, and neither are their wellness journeys. We take time to understand each client's needs, crafting personalized programs that address specific goals and challenges."
      }
    ]
  },
  founder: {
    badge: "Our Leadership",
    title: "Meet Our Founder",
    name: "Rita",
    description1: "With over 15 years of experience in wellness, Rita brings a wealth of knowledge spanning Yoga, Meditation, Sound Healing, Ayurveda, Neuroscience Coaching, Hypnotherapy and Breath Work.",
    description2: "Her journey began in India, where she studied traditional practices before expanding her expertise through certifications from renowned institutions worldwide. Rita's approach uniquely blends ancient wisdom with modern science, creating transformative experiences that address the whole person."
  },
  photoCards: [
    {
      image: "/Images/aboutPhoto1.png",
      title: "Sound Bowl Meditation",
      description: "Ancient healing technique for deep relaxation"
    },
    {
      image: "/Images/aboutPhoto2.png",
      title: "Desert Yoga Practice",
      description: "Connecting with nature through mindful movement"
    },
    {
      image: "/Images/aboutPhoto3.png",
      title: "Spiritual Connection",
      description: "Embracing the healing energy of natural surroundings"
    }
  ],
  cta: {
    background: {
      image: "/Images/bgWCS.png",
      width: 1781,
      height: 1020,
      top: 0,
      left: -142
    },
    bannerCard: {
      image: "/Images/CardBG.png",
      width: 980,
      height: 300,
      top: 100,
      left: 230,
      borderRadius: 30,
      title: "Begin Your\nTransformative Journey",
      body: "Whether you're seeking stress reduction, spiritual growth, or a complete wellness reset, we invite you to experience the transformative power of our programs and retreats.",
      buttonText: "contact us today"
    },
    button: {
      width: 280,
      height: 64,
      top: 500,
      borderRadius: 20,
      background: "/Images/default-bg.png"
    },
    infoBox: {
      width: 1011,
      height: 138,
      top: 860,
      left: 415,
      borderRadius: 30
    },
    rock: {
      image: "/Images/rockFooter.png",
      width: 440,
      height: 437,
      top: 600,
      left: -157
    },
    contacts: {
      phoneLabel: "contact us with phone",
      phoneValue: "+966 53 867 4556",
      emailLabel: "contact us with mail",
      emailValue: "ritayoga@hotmail.com",
      addressHeading: "United States",
      addressLine1: "205 Middle Road, 2nd",
      addressLine2: "Floor, New York"
    }
  }
};

export default function AboutPage() {
  const data = aboutPageData;
  return (
    <main className="min-h-dvh text-white">
      <section className="relative min-h-[1400px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Images/BGfor3-4Section.jpg')" }}
        />

        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ width: "1385px", height: "1047px", top: "162px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-[50px]"
            style={{
              backgroundImage: "url('/Images/UpperBG.png')",
              opacity: 1,
            }}
          />

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
              {data.hero.story.badge}
            </div>
            <h1 className="font-isenheim text-black mb-4">{data.hero.story.title}</h1>
            <p className="text-black/80 leading-relaxed">
              {data.hero.story.description1}
            </p> 
            <p className="mt-10">
              {data.hero.story.description2}
            </p>
          </div>

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
              src={data.hero.image}
              alt="About visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/SecondPageBG.png')", height: '769px' }}
      >
        <div className="relative z-10 mx-auto px-[clamp(16px,4vw,32px)]" style={{ width: '1440px' }}>
          <div className="text-center pt-16">
            <h2 className="font-isenheim text-white text-5xl font-normal">{data.philosophy.title}</h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {data.philosophy.cards.map((c, idx) => (
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
      
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/BGfor3-4Section.jpg')" }}
      >
        <div
          className="relative z-10 mx-auto"
          style={{ width: '1440px', minHeight: '1250px' }}
        >
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
              image={data.photoCards[0].image}
              title={data.photoCards[0].title}
              description={data.photoCards[0].description}
            />
          </div>
          <div className="absolute z-20" style={{ top: '596px', left: '523px' }}>
            <AboutPhotoCard
              image={data.photoCards[1].image}
              title={data.photoCards[1].title}
              description={data.photoCards[1].description}
            />
          </div>
          <div className="absolute z-20" style={{ top: '596px', left: '983px' }}>
            <AboutPhotoCard
              image={data.photoCards[2].image}
              title={data.photoCards[2].title}
              description={data.photoCards[2].description}
            />
          </div>
        </div>
      </section>

      {/* Final CTA section */}
       <section className="relative w-full overflow-hidden">
         <div className="relative mx-auto" style={{ width: '1440px', height: `${data.cta.background.height}px` }}>
           {/* Background dunes */}
           <div
             className="absolute bg-cover bg-center"
             style={{
               width: `${data.cta.background.width}px`,
               height: `${data.cta.background.height}px`,
               top: `${data.cta.background.top}px`,
               left: `${data.cta.background.left}px`,
               backgroundImage: `url('${data.cta.background.image}')`,
             }}
           />
 
           {/* Gold banner card */}
           <div
             className="absolute bg-cover bg-center text-black text-center rounded-[30px]"
             style={{
               width: `${data.cta.bannerCard.width}px`,
               height: `${data.cta.bannerCard.height}px`,
               top: `${data.cta.bannerCard.top}px`,
               left: `${data.cta.bannerCard.left}px`,
               backgroundImage: `url('${data.cta.bannerCard.image}')`,
               borderRadius: `${data.cta.bannerCard.borderRadius}px`,
               paddingTop: '40px',
             }}
           >
            <h2 className="font-isenheim whitespace-pre-line" style={{ fontSize: '56px', lineHeight: '1.15' }}>{data.cta.bannerCard.title}</h2>
            <p className="mx-auto" style={{ marginTop: '16px', maxWidth: '740px', fontSize: '15px', lineHeight: '1.4' }}>
              {data.cta.bannerCard.body}
            </p>
           </div>
 
          {/* CTA Button below the banner */}
          <button
            className="absolute text-white btn-isenheim"
            style={{
              width: `${data.cta.button.width}px`,
              height: `${data.cta.button.height}px`,
              top: `${data.cta.button.top}px`,
              left: `${data.cta.bannerCard.left + (data.cta.bannerCard.width - data.cta.button.width) / 2}px`,
              borderRadius: `${data.cta.button.borderRadius}px`,
              backgroundImage: `url('${data.cta.button.background}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {data.cta.bannerCard.buttonText}
          </button>

          {/* Rock stack image */}
          <img
            src={data.cta.rock.image}
            alt="Rock stack"
            className="absolute"
            style={{
              width: `${data.cta.rock.width}px`,
              height: `${data.cta.rock.height}px`,
              top: `${data.cta.rock.top}px`,
              left: `${data.cta.rock.left}px`,
            }}
          />
 
           {/* White info box */}
           <div
             className="absolute bg-white text-black grid grid-cols-3 items-center px-10"
             style={{
               width: `${data.cta.infoBox.width}px`,
               height: `${data.cta.infoBox.height}px`,
               top: `${data.cta.infoBox.top}px`,
               left: `${data.cta.infoBox.left}px`,
               borderRadius: `${data.cta.infoBox.borderRadius}px`,
               boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
             }}
           >
             <div>
               <div className="text-sm text-black/60">{data.cta.contacts.phoneLabel}</div>
               <div className="text-lg font-medium">{data.cta.contacts.phoneValue}</div>
             </div>
             <div className="text-center">
               <div className="text-sm text-black/60">{data.cta.contacts.emailLabel}</div>
               <div className="text-lg font-medium">{data.cta.contacts.emailValue}</div>
             </div>
             <div className="text-right">
               <div className="text-lg font-medium">{data.cta.contacts.addressHeading}</div>
               <div className="text-sm">{data.cta.contacts.addressLine1}</div>
               <div className="text-sm">{data.cta.contacts.addressLine2}</div>
             </div>
           </div>
         </div>
       </section>
    </main>
  );
}
