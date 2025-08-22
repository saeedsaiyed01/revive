import ValueCard from "./ValueCard";

const valueCards = [
  {
    icon: "/logos/MindfulPractices.png",
    title: "Mindful Practices",
    description: "Cultivate inner peace and clarity through guided meditation and mindfulness exercises."
  },
  {
    icon: "/logos/Rejuvenation.png",
    title: "Rejuvenation",
    description: "Restore your body and mind with revitalizing treatments and serene environments."
  },
  {
    icon: "/logos/SpiritualGrowth.png",
    title: "Spiritual Growth",
    description: "Deepen your connection to self and the universe through ancient wisdom and practices."
  },
  {
    icon: "/logos/Healing.png",
    title: "Healing",
    description: "Experience profound recovery and balance with our holistic healing modalities."
  },
  {
    icon: "/logos/HolisticWellness.png",
    title: "Holistic Wellness",
    description: "Achieve complete well-being by integrating physical, mental, and spiritual health."
  },
  {
    icon: "/logos/Empowerment.png",
    title: "Empowerment",
    description: "Unlock your full potential and build resilience with empowering workshops and coaching."
  }
];

export default function SecondPage() {
  return (
    <section 
      className="relative min-h-screen w-full bg-[url('/Images/SecondPageBG.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] py-24">
        {/* Section Title */}
        <div className="text-center mb-20">
          {/* Our Values Button */}
          <div className="mb-8">
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
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
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
