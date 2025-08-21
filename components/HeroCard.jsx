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
    <section className="relative isolate min-h-[60svh] sm:min-h-[72svh] lg:min-h-[82svh]">
      {/* Background image */}
      <Image
        src={content.background}
        alt="Dunes at sunset background"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10"
      />

      <div className="mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)]">
        <div className="max-w-xl pt-[clamp(64px,14vw,160px)] pb-[clamp(32px,8vw,80px)]">
          <h1 className="font-isenheim text-white tracking-tight leading-[1] text-[clamp(1.75rem,2vw+1.5rem,3.125rem)]">
            {content.title}
          </h1>
          <p className="mt-6 text-white/90 font-helvetica text-[clamp(1.0625rem,0.4vw+0.95rem,1.0625rem)] leading-6">
            {content.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href={content.button.href}
              className="group inline-flex min-h-[44px] items-center gap-3 rounded-[16px] px-6 py-3 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,#f7d37a 0%, #c79a2f 55%, #8f6b1f 100%), var(--gold-texture)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className="font-helvetica text-[clamp(1.0625rem,0.4vw+0.95rem,1.0625rem)] leading-none">
                {content.button.text}
              </span>
              <Image src={content.button.icon} alt="" width={28} height={28} className="opacity-90" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


