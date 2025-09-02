import { ReactNode } from "react";

// Blog Detail Layout Content Data
const blogDetailLayoutData = {
  header: {
    title: "Our Blog",
    subtitle: [
      "Explore our articles on wellness, mindfulness,",
      "and holistic living.",
    ],
  },
  background: {
    main: "/Images/BGfor3-4Section.jpg",
    upper: "/Images/UpperBG.png",
    content: "/Images/SecondPageBG.png",
  },
};

type BlogDetailLayoutProps = {
  title: string;
  contentBackgroundUrl?: string;
  children: ReactNode;
};

export default function BlogDetailLayout({
  title,
  contentBackgroundUrl,
  children,
}: BlogDetailLayoutProps) {
  const data = blogDetailLayoutData;
  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage: "url('/Images/BGfor3-4Section.jpg')",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat-y",
      }}
    >
      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10 mx-auto px-4 py-8">
        {/* Blog Header Card */}
        <div className="bg-white rounded-[25px] shadow-lg p-6 mt-22">
          <h1 className="text-black isenheim-family text-3xl text-center mb-4">
            Blog
          </h1>
          <p className="text-black font-helvetica text-center text-sm">
            Explore our articles on wellness, mindfulness, and holistic living.
          </p>
        </div>

        {/* Blog Post Content */}
        <div
          className="rounded-[25px] shadow-lg p-4"
          style={{
            backgroundImage: "url('/Images/SecondPageBG.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Blog Post Title */}
          <h2 className="text-white card-title-isenheim text-2xl text-center mb-8 pt-4">
            {title}
          </h2>

          {/* Blog Content */}
          <div className="text-white blog-content text-base leading-relaxed w-full px-2">
            {children}
          </div>
        </div>

        {/* Mobile Footer Section */}
        <section>
          <div className="relative flex-1 mt-12">
            {/* Left Stone Stack */}
            <div
              className="absolute left-4 z-50"
              style={{
                width: "252.72311401367188px",
                height: "251px",
                top: "120px",
                left: "-84px",
                transform: "rotate(0deg)",
                opacity: 1,
              }}
            >
              <img
                src="/Images/rockFooter.png"
                alt="Rock Footer Left"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right Stone Stack */}
            <div
              className="absolute right-4 z-50"
              style={{
                width: "252.72311401367188px",
                height: "251px",
                top: "120px",
                right: "-84px",
                transform: "rotate(0deg)",
                opacity: 1,
              }}
            >
              <img
                src="/Images/rockfooterrigth.png"
                alt="Rock Footer Right"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Central Contact Card */}
            <div className="relative z-30 flex justify-center pt-16">
              <div className="bg-white rounded-[25px] shadow-lg p-6 w-[215px] max-w-sm">
                <div className="text-center space-y-6">
                  {/* Phone */}
                  <div>
                    <p className="font-medium mb-1 text-gray-900 text-lg">
                      +966 53 867 4556
                    </p>
                    <p className="text-gray-600 text-sm">
                      contact us with phone
                    </p>
                  </div>

                  {/* Email */}
                  <div>
                    <p className="font-medium mb-1 text-gray-900 text-lg">
                      rita1yoga@hotmail.com
                    </p>
                    <p className="text-gray-600 text-sm">
                      contact us with mail
                    </p>
                  </div>

                  {/* Address */}
                  <div>
                    <p className="font-medium mb-1 text-gray-900 text-lg">
                      United States
                    </p>
                    <p className="text-gray-600 text-sm">
                      205 Middle Road, 2nd
                    </p>
                    <p className="text-gray-600 text-sm">Floor, New York</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="relative mx-auto w-[1440px] min-h-[2800px]">
          <div
            className="absolute overflow-hidden w-[1385px] h-[2094px] top-[162px] left-[28px] opacity-100 rounded-[50px]"
            style={{
              backgroundImage: "url('/Images/UpperBG.png')",
              backgroundSize: "100% auto",
              backgroundPosition: "center",
              backgroundRepeat: "repeat-y",
            }}
          />

          <div className="absolute bg-white/95 text-black text-center shadow-sm w-[787px] h-[169px] top-[224px] left-[314px] rounded-[40px] opacity-100">
            <div className="pt-6 px-8">
              <h2 className="isenheim-family text-black text-[50px] leading-[1.1]">
                {data.header.title}
              </h2>

              <div className="flex flex-col gap-2">
                <p className="mt-2 text-black/70 font-helvetica text-[13px]">
                  {data.header.subtitle[0]}
                </p>
                <p className="mt-2 text-black/70 font-helvetica text-[13px]">
                  {data.header.subtitle[1]}
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute overflow-hidden w-[961px] h-[1329px] top-[450px] left-[263px] rounded-[30px] opacity-100"
            style={{
              backgroundImage: contentBackgroundUrl
                ? `url(${contentBackgroundUrl})`
                : undefined,
              backgroundRepeat: contentBackgroundUrl ? "no-repeat" : undefined,
              backgroundSize: contentBackgroundUrl ? "cover" : undefined,
              backgroundPosition: contentBackgroundUrl ? "center" : undefined,
            }}
          >
            <div
              className="absolute inset-0 "
              style={{
                backgroundImage: "url('/Images/SecondPageBG.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="absolute left-0 right-0 text-center top-[40px]">
              <h1 className="isenheim-family text-white text-[30px] leading-[100%]">
                {title}
              </h1>
            </div>
            <div className="absolute inset-0 pt-[140px] px-[80px] pb-[40px] font-helvetica font-normal text-[30px] leading-[100%] text-white max-w-5xl mx-auto ">
              {children}
            </div>
          </div>

          {/* Desktop Footer Section */}
          <div className="absolute mx-auto top-[1864px] max-w-[1440px] h-[360px] left-0 right-0 mt-122">
            {/* Left Rock Image */}
            <div
              className="absolute w-[440px] h-[437px] top-[10px] left-[-130px] opacity-100 bg-contain bg-no-repeat bg-left-bottom pointer-events-none"
              style={{
                backgroundImage: "url('/Images/rockFooter.png')",
              }}
            />

            {/* Info Card */}
            <div className="absolute rounded-[30px] bg-white flex items-center w-[1011px] h-[138px] top-[10px] left-[395px] opacity-100 bg-cover bg-center">
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
