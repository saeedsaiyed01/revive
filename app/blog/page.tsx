import Link from "next/link";
import RetreatCard from "../components/RetreatCard";
import RetreatCardLarge from "../components/RetreatCardLarge";

export default function BlogPage() {
  return (
    <section
      className="relative w-full min-h-screen"
      style={{
        backgroundImage: "url('/Images/BGfor3-4Section.jpg')",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat-y",
      }}
    >
      {/* Mobile Layout */}
      <div
        className="block lg:hidden relative z-10 mx-auto px-4 py-8 min-h-screen"
        style={{ paddingTop: "200px" }}
      >
        {/* Blog Header Card - Updated */}
        <div
          className="bg-white rounded-[25px] shadow-xl p-6 mb-8 mx-auto max-w-sm relative z-20 border-2 border-gray-100"
          style={{
            backgroundColor: "white",
            color: "black",
            display: "block",
            visibility: "visible",
            opacity: "1",
          }}
        >
          <h1
            className="text-black text-3xl text-center mb-4 font-bold"
            style={{
              fontFamily: "Isenheim, serif",
              color: "black",
              display: "block",
            }}
          >
            Blog
          </h1>
          <p
            className="text-black text-center text-sm"
            style={{
              fontFamily: "Helvetica, sans-serif",
              color: "black",
              display: "block",
            }}
          >
            Explore our articles on wellness, mindfulness, and holistic living.
          </p>
        </div>

        <div className="space-y-6">
          <div
            className="rounded-[20px] shadow-lg overflow-hidden"
            style={{
              width: "354px",
              height: "250px",
              background: "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
            }}
          >
            <div className="flex h-full">
              <div
                className="w-2/5 h-full"
                style={{
                  backgroundImage: "url('/Images/yoga.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              <div className="w-3/5 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-black subtitle-isenheim text-sm mt-[-100px]leading-tight font-bold">
                    What to Expect on Your First Yoga Retreat
                  </h3>
                  <p
                    className="text-black font-helvetica text-sm leading-tight mb-2"
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.3",
                      fontWeight: "500",
                    }}
                  >
                    Nervous about your first retreat? Here&apos;s a guide to help you
                    prepare, relax, and enjoy every moment.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link href={"/blog/what-to-expect-first-yoga-retreat"}>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full shadow-lg bg-white">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C79A2F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: The Power of Daily Practice */}
          <div
            className="rounded-[20px] shadow-lg overflow-hidden"
            style={{
              width: "354px",
              height: "250px",
              background: "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
            }}
          >
            <div className="flex h-full">
              {/* Text Section - Left 3/5 */}
              <div className="w-3/5 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-black card-title-isenheim text-sm mb-2 leading-tight font-bold">
                    The Power of Daily Practice
                  </h3>
                  <p
                    className="text-black font-helvetica text-sm leading-tight mb-2"
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.3",
                      fontWeight: "500",
                    }}
                  >
                    Discover how even 10 minutes of yoga a day can transform
                    your body, mind, and spirit.
                  </p>
                </div>
                <div className="flex justify-start">
                  <Link href={"/blog/power-of-daily-practice"}>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full shadow-lg bg-white">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C79A2F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Image Section - Right 2/5 */}
              <div
                className="w-2/5 h-full"
                style={{
                  backgroundImage: "url('/Images/SecondPageBG.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>

          {/* Card 3: Mindful Living Off the Mat */}
          <div
            className="rounded-[20px] shadow-lg overflow-hidden"
            style={{
              width: "354px",
              height: "250px",
              background: "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
            }}
          >
            <div className="flex h-full">
              {/* Image Section - Left 2/5 */}
              <div
                className="w-2/5 h-full"
                style={{
                  backgroundImage: "url('/Images/Retreat4.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {/* Text Section - Right 3/5 */}
              <div className="w-3/5 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-black card-title-isenheim text-sm mb-2 leading-tight font-bold">
                    Mindful Living Off the Mat
                  </h3>
                  <p
                    className="text-black font-helvetica text-sm leading-tight mb-2"
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.3",
                      fontWeight: "500",
                    }}
                  >
                    Take the lessons of yoga into your everyday life with simple
                    practices for mindfulness and balance.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link href={"/blog/mindful-living-off-the-mat"}>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full shadow-lg bg-white">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C79A2F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Breathwork: The Heart of Yoga */}
          <div
            className="rounded-[20px] shadow-lg overflow-hidden"
            style={{
              width: "354px",
              height: "250px",
              background: "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
            }}
          >
            <div className="flex h-full">
              {/* Text Section - Left 3/5 */}
              <div className="w-3/5 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-black card-title-isenheim text-sm mb-2 leading-tight font-bold">
                    Breathwork: The Heart of Yoga
                  </h3>
                  <p
                    className="text-black font-helvetica text-sm leading-tight mb-2"
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.3",
                      fontWeight: "500",
                    }}
                  >
                    Learn how conscious breathing can reduce stress, boost
                    energy, and deepen your practice.
                  </p>
                </div>
                <div className="flex justify-start">
                  <Link href={"/blog/breathwork-heart-of-yoga"}>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full shadow-lg bg-white">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C79A2F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Image Section - Right 2/5 */}
              <div
                className="w-2/5 h-full"
                style={{
                  backgroundImage: "url('/Images/Retreat6.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>

          {/* Card 5: Mindfulness Meditation Benefits */}
          <div
            className="rounded-[20px] shadow-lg overflow-hidden"
            style={{
              width: "354px",
              height: "250px",
              background: "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
            }}
          >
            <div className="flex h-full">
              {/* Image Section - Left 2/5 */}
              <div
                className="w-2/5 h-full"
                style={{
                  backgroundImage: "url('/Images/Retreat1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {/* Text Section - Right 3/5 */}
              <div className="w-3/5 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-black card-title-isenheim text-sm mb-2 leading-tight font-bold">
                    Mindfulness Meditation Benefits
                  </h3>
                  <p
                    className="text-black font-helvetica text-sm leading-tight mb-2"
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.3",
                      fontWeight: "500",
                    }}
                  >
                    Discover how daily meditation can change your life and
                    improve your well-being.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link href={"/blog/mindfulness-meditation-benefits"}>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full shadow-lg bg-white">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C79A2F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: A Holistic Approach to Wellness */}
          <div
            className="rounded-[20px] shadow-lg overflow-hidden"
            style={{
              width: "354px",
              height: "250px",
              background: "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
            }}
          >
            <div className="flex h-full">
              {/* Text Section - Left 3/5 */}
              <div className="w-3/5 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-black card-title-isenheim text-sm mb-2 leading-tight font-bold">
                    A Holistic Approach to Wellness
                  </h3>
                  <p
                    className="text-black font-helvetica text-sm leading-tight mb-2"
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.3",
                      fontWeight: "500",
                    }}
                  >
                    Balancing mind, body, and spirit for complete well-being and
                    harmony.
                  </p>
                </div>
                <div className="flex justify-start">
                  <Link href={"/blog/holistic-wellness-approach"}>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full shadow-lg bg-white">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C79A2F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Image Section - Right 2/5 */}
              <div
                className="w-2/5 h-full"
                style={{
                  backgroundImage: "url('/Images/SecondPageBG.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>

          {/* Card 7: Yoga for Beginners: Start Your Journey */}
          <div
            className="rounded-[20px] shadow-lg overflow-hidden"
            style={{
              width: "354px",
              height: "250px",
              background: "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
            }}
          >
            <div className="flex h-full">
              {/* Image Section - Left 2/5 */}
              <div
                className="w-2/5 h-full"
                style={{
                  backgroundImage: "url('/Images/Retreat6.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {/* Text Section - Right 3/5 */}
              <div className="w-3/5 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-black card-title-isenheim text-sm mb-2 leading-tight font-bold">
                    Yoga for Beginners: Start Your Journey
                  </h3>
                  <p
                    className="text-black font-helvetica text-sm leading-tight mb-2"
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.3",
                      fontWeight: "500",
                    }}
                  >
                    Essential poses and tips for new practitioners to begin
                    their yoga journey.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link href={"/blog/yoga-for-beginners"}>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full shadow-lg bg-white">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C79A2F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 8: Nutrition for Wellness: Fuel Your Body Right */}
          <div
            className="rounded-[20px] shadow-lg overflow-hidden"
            style={{
              width: "354px",
              height: "250px",
              background: "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
            }}
          >
            <div className="flex h-full">
              {/* Text Section - Left 3/5 */}
              <div className="w-3/5 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-black card-title-isenheim text-sm mb-2 leading-tight font-bold">
                    Nutrition for Wellness: Fuel Your Body Right
                  </h3>
                  <p
                    className="text-black font-helvetica text-sm leading-tight mb-2"
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.3",
                      fontWeight: "500",
                    }}
                  >
                    How food choices impact your overall well-being and energy
                    levels.
                  </p>
                </div>
                <div className="flex justify-start">
                  <Link href={"/blog/nutrition-for-wellness"}>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full shadow-lg bg-white">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C79A2F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Image Section - Right 2/5 */}
              <div
                className="w-2/5 h-full"
                style={{
                  backgroundImage: "url('/Images/Retreat4.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>

          {/* Card 9: Effective Stress Management Techniques */}
          <div
            className="rounded-[20px] shadow-lg overflow-hidden"
            style={{
              width: "354px",
              height: "250px",
              background: "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
            }}
          >
            <div className="flex h-full">
              {/* Image Section - Left 2/5 */}
              <div
                className="w-2/5 h-full"
                style={{
                  backgroundImage: "url('/Images/HomeBG.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {/* Text Section - Right 3/5 */}
              <div className="w-3/5 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-black card-title-isenheim text-sm mb-2 leading-tight font-bold">
                    Effective Stress Management Techniques
                  </h3>
                  <p
                    className="text-black font-helvetica text-sm leading-tight mb-2"
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.3",
                      fontWeight: "500",
                    }}
                  >
                    Practical strategies for finding peace and balance in a busy
                    world.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link href={"/blog/stress-management-techniques"}>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full shadow-lg bg-white">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C79A2F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Frame */}
        <div className="relative mx-auto w-[1440px] min-h-[2800px]">
          {/* UpperBG overlay (double height) */}
          <div
            className="absolute overflow-hidden w-[1385px] h-[2094px] top-[162px] left-[28px] opacity-100 rounded-t-[50px]"
            style={{
              backgroundImage: "url('/Images/UpperBG.png')",
              backgroundSize: "100% auto",
              backgroundPosition: "center",
              backgroundRepeat: "repeat-y",
            }}
          />

          {/* Blog header card (upper section) */}
          <div className="absolute bg-white/95 text-black text-center shadow-sm w-[787px] h-[169px] top-[224px] left-[314px] rounded-[40px] opacity-100">
            <div className="pt-6 px-8">
              <h1 className="isenheim-family text-black text-[50px] leading-[1.1]">
                Blog
              </h1>

              <div className="flex flex-col gap-2">
                <p>Explore our articles on wellness, mindfulness, and</p>
                <p>holistic living</p>
              </div>
            </div>
          </div>

          {/* Cards positioned to spec */}
          {/* Row 1 */}
          <div className="absolute top-[545px] left-[161px]">
            <div className="relative w-[420px] h-[492px]">
              <RetreatCard
                retreat={{
                  image: "/Images/Retreat1.png",
                  location: "Oasis",
                  title: "Mindfulness Meditation Benefits",
                  description: "Discover how daily meditation can change.",
                }}
                href={"/blog/mindfulness-meditation-benefits"}
              />
              <Link
                href={"/blog/mindfulness-meditation-benefits"}
                aria-label="Open blog: Mindfulness Meditation Benefits"
              >
                <div
                  className="absolute flex items-center justify-center cursor-pointer w-[67px] h-[67px] right-[22px] bottom-[75px] rounded-[20px] shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
                  }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute top-[545px] left-[620px]">
            <div className="relative w-[420px] h-[492px]">
              <RetreatCardLarge
                retreat={{
                  image: "/Images/yoga.png",
                  location: "Canyon",
                  title: "What to Expect on Your First Yoga Retreat",
                  description:
                    "A beginner&apos;s guide to your first wellness journey.",
                }}
                href={"/blog/what-to-expect-first-yoga-retreat"}
              />
              <Link
                href={"/blog/what-to-expect-first-yoga-retreat"}
                aria-label="Open blog: What to Expect on Your First Yoga Retreat"
              >
                <div
                  className="absolute flex items-center justify-center cursor-pointer w-[67px] h-[67px] right-[-230px] bottom-[24px] rounded-[20px] shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
                  }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Row 2 */}
          <div className="absolute top-[1060px] left-[161px]">
            <div className="relative w-[420px] h-[492px]">
              <RetreatCardLarge
                retreat={{
                  image: "/Images/SecondPageBG.png",
                  location: "Dunes",
                  title: "A Holistic Approach to Wellness",
                  description:
                    "Balancing mind, body, and spirit for complete well-being.",
                }}
                href={"/blog/holistic-wellness-approach"}
              />
              <Link
                href={"/blog/holistic-wellness-approach"}
                aria-label="Open blog: A Holistic Approach to Wellness"
              >
                <div
                  className="absolute flex items-center justify-center cursor-pointer w-[67px] h-[67px] right-[-230px] bottom-[24px] rounded-[20px] shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
                  }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute ml-72 top-[1060px] left-[620px]">
            <div className="relative w-[420px] h-[492px]">
              <RetreatCard
                retreat={{
                  image: "/Images/Retreat6.png",
                  location: "Garden",
                  title: "Yoga for Beginners: Start Your Journey",
                  description:
                    "Essential poses and tips for new practitioners.",
                }}
                href={"/blog/yoga-for-beginners"}
              />
              <Link
                href={"/blog/yoga-for-beginners"}
                aria-label="Open blog: Yoga for Beginners"
              >
                <div
                  className="absolute flex items-center justify-center cursor-pointer w-[67px] h-[67px] right-[24px] bottom-[74px] rounded-[20px] shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
                  }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Row 3 */}
          <div className="absolute top-[1590px] left-[161px]">
            <div className="relative w-[420px] h-[492px]">
              <RetreatCard
                retreat={{
                  image: "/Images/Retreat4.png",
                  location: "Forest",
                  title: "Nutrition for Wellness: Fuel Your Body Right",
                  description:
                    "How food choices impact your overall well-being.",
                }}
                href={"/blog/nutrition-for-wellness"}
              />
              <Link
                href={"/blog/nutrition-for-wellness"}
                aria-label="Open blog: Nutrition for Wellness"
              >
                <div
                  className="absolute flex items-center justify-center cursor-pointer w-[67px] h-[67px] right-[24px] bottom-[74px] rounded-[20px] shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
                  }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute top-[1590px] left-[620px]">
            <div className="relative w-[689px] h-[489px]">
              <RetreatCardLarge
                retreat={{
                  image: "/Images/HomeBG.png",
                  location: "Sunset",
                  title: "Effective Stress Management Techniques",
                  description:
                    "Practical strategies for finding peace in a busy world.",
                }}
                href={"/blog/stress-management-techniques"}
              />
              <Link
                href={"/blog/stress-management-techniques"}
                aria-label="Open blog: Stress Management Techniques"
              >
                <div
                  className="absolute flex items-center justify-center cursor-pointer w-[67px] h-[67px] right-[24px] bottom-[24px] rounded-[20px] shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)",
                  }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          {/* Footer Section with rock image and info card */}
          <div className="absolute mt-78 w-[1440px] h-[360px] top-[2060px] left-0 z-10 ">
            {/* Left Rock Image */}
            <div
              className="absolute w-[440px] h-[437px] top-0 left-[-130px] opacity-100 bg-contain bg-no-repeat bg-left-bottom pointer-events-none"
              style={{
                backgroundImage: "url('/Images/rockFooter.png')",
              }}
            />

            {/* Info Card */}
            <div className="absolute rounded-[30px] bg-white flex items-center mt-22 w-[1011px] h-[138px] top-[110px] left-[395px] opacity-100 bg-cover bg-center">
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
      </div>
    </section>
  );
}
