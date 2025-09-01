import ConnectSection from "./components/ConnectSection";
import FifthPage from "./components/FifthPage";
import FourthPage from "./components/FourthPage";
import HeroCard from "./components/HeroCard";
import InsightsSection from "./components/InsightsSection";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

export default function Home() {
  return (
    <main className="min-h-dvh bg-black text-white">
      <HeroCard />
      <SecondPage />
      {/* Shared background wrapper for sections 3, 4 and 5 */}
      <section
        className="relative w-full"
        style={{
          backgroundImage: "url('/Images/BGfor3-4Section.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <ThirdPage />
        <FourthPage />
        <FifthPage />
      </section>
      <InsightsSection />
      <ConnectSection />
    </main>
  );
}
