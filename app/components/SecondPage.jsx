import ValueCard from "./ValueCard";

const valueCards = [
  {
    icon: "/logos/MindfulPractices.png",
    title: "Mindful Practices",
    description: "Experience the art of mindfulness through guided techniques designed to calm your mind and enhance inner peace."
  },
  {
    icon: "/logos/Rejuvenation.png",
    title: "Rejuvenation",
    description: "Creating transformative experiences that restore balance and vitality for a more fulfilling life."
  },
  {
    icon: "/logos/SpiritualGrowth.png",
    title: "Spiritual Growth",
    description: "Experience the art of mindfulness through guided techniques designed to calm your mind and enhance inner peace."
  },
  {
    icon: "/logos/Healing.png",
    title: "Healing",
    description: "Drawing from ancient wisdom and modern techniques to support deep inner healing."
  },
  {
    icon: "/logos/HolisticWellness.png",
    title: "Holistic Wellness",
    description: "Achieve harmony of body, mind, and spirit with a holistic approach to health and well-being toward wellness."
  },
  {
    icon: "/logos/Empowerment.png",
    title: "Empowerment",
    description: "Inspiring individuals to embark on their wellness journey and create lasting positive change."
  }
];

export default function SecondPage() {
  return (
    <section
      className="relative min-h-screen w-full bg-[url('/Images/SecondPageBG.png')] bg-cover bg-center bg-no-repeat"
    >

      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10 px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <div
              className="inline-block px-6 py-2 rounded-full text-white font-medium text-base bg-[url('/Images/default-bg.png')] bg-cover bg-center"
            >
              Our Values
            </div>
          </div>
          <h2 className="card-title-isenheim text-white text-xl font-normal mb-8">
            Start your journey today
          </h2>
        </div>

        {/* Value Cards */}
        <div className="space-y-8">
          {valueCards.map((card, index) => (
            <div
              key={index}
              className="mx-auto rounded-[20px] overflow-hidden"
              style={{
                width: '349px',
                backgroundImage: 'url(/Images/CardBG.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="flex items-start gap-4 p-5">
                <img src={card.icon} alt={card.title} width={40} height={40} className="w-10 h-10 shrink-0" />
                <div>
                  <h3 className="card-title-isenheim text-[#1E1E1E] text-base mb-1 font-normal">{card.title}</h3>
                  <p className="text-[#1E1E1E] text-sm leading-snug">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative z-10 mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] py-24">
        <div className="text-center mb-16">
          <div className="mb-6">
            <div
              className="inline-block px-8 py-3 rounded-full text-white font-medium text-lg bg-[url('/Images/default-bg.png')] bg-cover bg-center"
            >
              Our Values
            </div>
          </div>

          {/* Main Title */}
          <h2 className="font-isenheim text-white text-5xl font-normal mb-4">
            Start your journey today
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 justify-items-center max-w-7xl mx-auto mb-2">
          {valueCards.map((card, index) => (
            <ValueCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
