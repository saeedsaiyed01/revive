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
      <ThirdPage />
      <FourthPage />
                   <FifthPage />
             <InsightsSection />
             <ConnectSection />
           </main>
  );
}
