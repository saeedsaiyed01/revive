// Component-local data
export const data = {
  title: "Transformative Wellness Experiences",
  description:
    "Where transformative wellness, ancient wisdom, and modern science converge to create meaningful transformation through our exclusive retreats and personalized experiences.",
  background: "/Images/HomeBG.png",
  button: { text: "Get started", href: "/get-started", icon: "/logos/Callicon.png" },
};

import Image from "next/image";
import Link from "next/link";

export default function HeroCard(props) {
  const content = { ...data, ...(props?.data || {}) };

  return (
    <section className="relative isolate min-h-screen">
      <Image
        src={content.background}
        alt="Desert dunes at sunset with meditating figure"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_35%] -z-10"
      />

      <div className="mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] ">
        <div className="max-w-lg pt-[clamp(140px,25vw,220px)] pb-[clamp(24px,6vw,64px)]">          <h1 className="font-isenheim text-white pr-[clamp(8px,4vw,48px)] mt-[clamp(24px,5vw,56px)]">
            <span className="hidden lg:block">Transformative<br/>Wellness<br/>Experiences</span>
            <span className="lg:hidden">{content.title}</span>
          </h1>
          <p className="mt-[clamp(12px,3vw,32px)] pr-[clamp(8px,4vw,48px)] text-[18px]">
            <span className="block">Where transformative wellness, ancient</span>
            <span className="block">wisdom, and modern science converge to</span>
            <span className="block">create meaningful transformation through our</span>
            <span className="block">exclusive retreats and personalize.</span>
            <span>experiences</span>
          </p>

     

          <div className="mt-8 flex items-center gap-10">
            <Link
              href={content.button.href}
              className="inline-flex items-center justify-center w-[240px] h-[72px] rounded-[20px] text-white transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 bg-[url('/Images/default-bg.png')] bg-cover bg-center bg-no-repeat"
            >
              <span className="btn-isenheim">{content.button.text}</span>

            </Link>
            <Link
              href="tel:+0000000000"
              aria-label="Call"
              className="inline-flex items-center justify-center w-[68px] h-[68px] rounded-full transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <Image src="/logos/CallButton.png" alt="Call" width={68} height={68} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


