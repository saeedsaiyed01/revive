export default function InsightsSection({ size = "md" }) {
  // Layout specifications - responsive values
  const isLarge = size === "lg";
  const sectionLayout = {
    width: "100%",
    maxWidth: isLarge ? "3300px" : "1740px",
    height: "auto",
    minHeight: isLarge ? "460px" : "378px",
    angle: "0deg",
    opacity: 1
  };

  const headerLayout = {
    width: "606px",
    height: "212px",
    top: "50px",
    left: "200px",
    angle: "0deg",
    opacity: 1,
    borderRadius: "50px"
  };

  const buttonLayout = {
    width: "326px",
    height: "82px",
    top: "120px",
    left: "900px",
    angle: "0deg",
    opacity: 1,
    borderRadius: "30px"
  };

  const smallButtonLayout = {
    width: "162px",
    height: "38px",
    top: "-20px",
    left: "220px",
    angle: "0deg",
    opacity: 1,
    borderRadius: "20px"
  };

  return (
    <section
      className="relative w-full overflow-hidden py-16"
      style={{
        width: sectionLayout.width,
        maxWidth: sectionLayout.maxWidth,
        height: sectionLayout.height,
        minHeight: sectionLayout.minHeight,
        transform: `rotate(${sectionLayout.angle})`,
        opacity: sectionLayout.opacity
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/Images/UpperBG.png')",
          width: '100%',
          height: '120%',
          backgroundSize: 'cover',
          backgroundPosition: '30% center'
        }}
      />


      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">

        <div className="flex items-center justify-between w-full max-w-4xl mb-6">

          <div
            className="absolute"
            style={{
              width: smallButtonLayout.width,
              height: smallButtonLayout.height,
              top: smallButtonLayout.top,
              left: smallButtonLayout.left,
              transform: `rotate(${smallButtonLayout.angle})`,
              opacity: smallButtonLayout.opacity,
              borderRadius: smallButtonLayout.borderRadius
            }}
          >
            <button
              className="w-full h-full rounded-full text-center transition-all shadow-lg"
              style={{
                backgroundImage: "url('/Images/default-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                fontFamily: 'Inter Tight, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '15px',
                lineHeight: '30px',
                letterSpacing: '0%'
              }}
            >
              Our Blog
            </button>
          </div>

          {/* Right Side - Main Button */}
          <div
            className="absolute"
            style={{
              width: buttonLayout.width,
              height: buttonLayout.height,
              top: buttonLayout.top,
              left: buttonLayout.left,
              transform: `rotate(${buttonLayout.angle})`,
              opacity: buttonLayout.opacity,
              borderRadius: buttonLayout.borderRadius
            }}
          >
            <button
              className="w-full h-full text-center transition-all shadow-lg rounded-3xl"
              style={{
                backgroundImage: "url('/Images/default-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                fontFamily: 'Isenheim, serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '25px',
                lineHeight: '30px',
                letterSpacing: '0%'
              }}
            >
              View all blog post →
            </button>
          </div>
        </div>

        {/* Center - Header Card */}
        <div
          className="absolute"
          style={{
            width: headerLayout.width,
            height: headerLayout.height,
            top: headerLayout.top,
            left: headerLayout.left,
            transform: `rotate(${headerLayout.angle})`,
            opacity: headerLayout.opacity,
            borderRadius: headerLayout.borderRadius
          }}
        >

          <div className="bg-white rounded-[50px] p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-serif font-bold text-black mb-4" style={{ fontFamily: 'Isenheim, serif' }}>
              Insights & Wisdom
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Helvetica, sans-serif' }}>
              Explore our collection of articles on wellness practices, mindfulness techniques, and transformative experiences to support your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
