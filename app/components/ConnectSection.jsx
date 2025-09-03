
export default function ConnectSection() {
  // Layout objects for pixel-perfect positioning
  const callUsLayout = {
    width: "508px",
    height: "163px",
    top: "200px",
    left: "200px",
    angle: "0deg",
    opacity: 1,
    borderRadius: "50px"
  };

  const whatsappLayout = {
    width: "508px",
    height: "225px",
    top: "400px",
    left: "200px",
    angle: "0deg",
    opacity: 1,
    borderRadius: "50px"
  };

  const formLayout = {
    width: "557px",
    height: "698px",
    top: "200px",
    left: "850px",
    angle: "0deg",
    opacity: 1,
    borderRadius: "50px"
  };

  const upperBGLayout = {
    width: "100%",
    height: "437px",
    top: "0px",
    left: "0px",
    angle: "0deg",
    opacity: 1
  };

  const footerCardLayout = {
    width: "1011px",
    height: "138px",
    top: "0px",
    left: "0px",
    angle: "0deg",
    opacity: 1,
    borderRadius: "30px"
  };

  const rockFooterLayout = {
    width: "440px",
    height: "437px",
    top: "100px",
    left: "0px",
    angle: "0deg",
    opacity: 1
  };

  return (
    <>
      <div className="relative w-full overflow-hidden" style={{ minHeight: '120vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/BGfor3-4Section.jpg')",
            width: '2000px',
            height: '150%'
          }}
        />

        {/* Mobile Layout */}
        <div className="lg:hidden relative z-10 w-full h-full px-4 py-8">
          {/* Connect with us Header Card */}
          <div className="bg-white rounded-[25px] shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-serif font-bold text-black mb-3" style={{ fontFamily: 'Isenheim, serif' }}>
              Connect With Us
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Helvetica, sans-serif' }}>
              Begin your transformative journey. Reach out to us for retreat inquiries, partnership opportunities, or personalized guidance.
            </p>
          </div>

          {/* Call us Card */}
          <div className="bg-white rounded-[25px] shadow-lg p-6 mb-6">
            <div className="flex items-center">
              <div className="rounded-full flex items-center justify-center mr-4" style={{ width: "60px", height: "50px" }}>
                <img src="/Images/Callicon1.png" alt="Phone Icon" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-black mb-1" style={{ fontFamily: 'Isenheim, serif' }}>
                  Call us
                </h3>
                <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                  Quick inquiries and support
                </p>
                <p className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                  +966-53-867-4556
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Support Card */}
          <div className="bg-white rounded-[25px] shadow-lg p-6 mb-6">
            <div className="flex items-start mb-4">
              <div className="rounded-full flex items-center justify-center mr-4 mt-2" style={{ width: "60px", height: "40px" }}>
                <img src="/Images/Messageicon.png" alt="Message Icon" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-black mb-1" style={{ fontFamily: 'Isenheim, serif' }}>
                  WhatsApp Support
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                  Chat with us anytime
                </p>
              </div>
            </div>
            <button
              className="w-full text-white py-3 px-4 rounded-[20px] font-medium shadow-lg transition-all text-sm"
              style={{
                backgroundImage: "url('/Images/default-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                fontFamily: 'Helvetica, sans-serif'
              }}
            >
              Chat with us on WhatsApp
            </button>
          </div>

          {/* Send us a message Card */}
          <div className="bg-white rounded-[25px] shadow-lg p-6 mb-6">
            <h3 className="text-xl font-serif font-bold text-black mb-4" style={{ fontFamily: 'Isenheim, serif' }}>
              Send us a message
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                  Your name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full px-4 py-3 bg-white border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                  Your email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full px-4 py-3 bg-white border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter subject..."
                  className="w-full px-4 py-3 bg-white border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                  Your message <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500 resize-none"
                />
              </div>

              <button
                className="w-full text-white py-3 px-6 rounded-[20px] font-medium shadow-lg transition-all text-sm"
                style={{
                  backgroundImage: "url('/Images/default-bg.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  fontFamily: 'Helvetica, sans-serif'
                }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative z-10 w-full h-full">
          <div className="text-center text-black pt-16 pb-8">
            <h2 className="text-4xl font-serif font-bold mb-4" style={{ fontFamily: 'Isenheim, serif' }}>
              Connect With Us
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Begin your transformative journey. Reach out to us for retreat inquiries, partnership opportunities, or personalized guidance.
            </p>
          </div>

          <div
            className="absolute bg-white shadow-lg"
            style={{
              width: callUsLayout.width,
              height: callUsLayout.height,
              top: callUsLayout.top,
              left: callUsLayout.left,
              transform: `rotate(${callUsLayout.angle})`,
              opacity: callUsLayout.opacity,
              borderRadius: callUsLayout.borderRadius
            }}
          >
            <div className="flex items-center p-6 h-full">
              <div
                className="rounded-full flex items-center justify-center mr-6"
                style={{
                  width: "84px",
                  height: "68.15118408203125px",
                  top: "7317px",
                  left: "202px",
                  angle: "0deg",
                  opacity: 1
                }}
              >
                <img src="/Images/Callicon1.png" alt="Phone Icon" className="w-full h-full" />
              </div>

              <div
                style={{
                  width: "222px",
                  height: "108px",
                  top: "7303px",
                  left: "337px",
                  angle: "0deg",
                  opacity: 1
                }}
              >
                <h3
                  className="mb-2 ml-10"
                  style={{
                    fontFamily: 'Isenheim, serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '25px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#1f2937'
                  }}
                >
                  Call Us
                </h3>
                <p
                  className="mb-1 ml-10"
                  style={{
                    fontFamily: 'Helvetica, sans-serif',
                    fontSize: '14px',
                    color: '#6b7280'
                  }}
                >
                  Quick inquiries and support
                </p>
                <p
                  className="ml-10"
                  style={{
                    fontFamily: 'Helvetica, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#6b7280'
                  }}
                >
                  +966-53-867-4556
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Support Card */}
          <div
            className="absolute bg-white shadow-lg"
            style={{
              width: whatsappLayout.width,
              height: whatsappLayout.height,
              top: whatsappLayout.top,
              left: whatsappLayout.left,
              transform: `rotate(${whatsappLayout.angle})`,
              opacity: whatsappLayout.opacity,
              borderRadius: whatsappLayout.borderRadius
            }}
          >
            <div className="flex items-start p-6 h-full">
              <div
                className="rounded-full flex items-center justify-center mr-6 mt-10"
                style={{
                  width: "88.13812255859375px",
                  height: "48px",
                  top: "7531px",
                  left: "202px",
                  angle: "0deg",
                  opacity: 1
                }}
              >
                <img src="/Images/Messageicon.png" alt="Message Icon" className="w-full h-full " />
              </div>

              <div className="flex-1">
                <h3
                  className="ml-10  mt-5"
                  style={{
                    fontFamily: 'Isenheim, serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '25px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#1f2937'
                  }}
                >
                  WhatsApp Support
                </h3>
                <p className="text-gray-600 text-sm mb-4 ml-10 mt-8" style={{ fontFamily: 'Helvetica, sans-serif' }}>Chat with us anytime</p>
              </div>
            </div>

            <div className="flex justify-center   mt-[-70px]">
              <button
                className="text-white  py-4 px-8 rounded-[30px] font-medium hover:shadow-lg transition-all text-lg"
                style={{
                  backgroundImage: "url('/Images/default-bg.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  fontFamily: 'Helvetica, sans-serif',
                  minWidth: '450px',
                  height: '60px'
                }}
              >
                Chat with us on WhatsApp
              </button>
            </div>
          </div>

          <div
            className="absolute bg-white shadow-lg"
            style={{
              width: formLayout.width,
              height: formLayout.height,
              top: formLayout.top,
              left: formLayout.left,
              transform: `rotate(${formLayout.angle})`,
              opacity: formLayout.opacity,
              borderRadius: formLayout.borderRadius
            }}
          >
            <div className="p-8 h-full">
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6" style={{ fontFamily: 'Isenheim, serif' }}>
                Send Us a Message
              </h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                    Your name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                    Your email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 bg-white border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                    Your message
                  </label>
                  <textarea
                    placeholder="Enter your message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500 resize-none"
                  />
                </div>

                {/* Send Message Button */}
                <div className="pt-4">
                  <button
                    className="w-full text-white py-3 px-6 rounded-[30px] font-medium hover:shadow-lg transition-all"
                    style={{
                      backgroundImage: "url('/Images/default-bg.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      fontFamily: 'Helvetica, sans-serif'
                    }}
                  >
                    Send Message →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="lg:hidden relative w-full overflow-visible z-20 mt-8">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/Images/UpperBG.png')",
              width: '100%',
              height: '400px'
            }}
          />

          {/* Left Stone Stack */}
          <div 
            className="absolute z-50"
            style={{
              width: "252.72311401367188px",
              height: "300px",
              top: "86px",
              left: "-94px",
              transform: "rotate(0deg)",
              opacity: 1
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
            className="absolute z-50"
            style={{
              width: "252.72311401367188px",
              height: "302px",
              top: "86px",
              right: "-134px",
              transform: "rotate(0deg)",
              opacity: 1
            }}
          >
            <img
              src="/Images/rockFooter.png"
              alt="Rock Footer Right"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Central Contact Card */}
          <div className="relative z-30 flex justify-center pt-16 pb-8">
            <div className="bg-white rounded-[25px] shadow-lg p-6 w-60 max-w-sm">
              <div className="text-center space-y-6 ">
                {/* Phone */}
                <div>
                  <p className="font-medium mb-1 text-gray-900 text-lg">+966 53 867 4556</p>
                  <p className="text-gray-600 text-sm">contact us with phone</p>
                </div>

                {/* Email */}
                <div>
                  <p className="font-medium mb-1 text-gray-900 text-lg">rita1yoga@hotmail.com</p>
                  <p className="text-gray-600 text-sm">contact us with mail</p>
                </div>

                {/* Address */}
                <div>
                  <p className="font-medium mb-1 text-gray-900 text-lg">United States</p>
                  <p className="text-gray-600 text-sm">205 Middle Road, 2nd Floor,</p>
                  <p className="text-gray-600 text-sm">New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden lg:block relative w-full overflow-visible z-20" style={{ marginTop: "800px", height: "258px" }}>
          {/* Background */}
          <img
            src="/Images/UpperBG.png"
            alt="Upper Background"
            className="   inset-0 w-full h-[338px] object-cover"
          />

          <div
            className="absolute bg-white shadow-lg z-30"
            style={{
              width: "1011px",
              height: "138px",
              top: "60px",
              left: "60%",
              transform: "translateX(-50%)",
              borderRadius: "30px"
            }}
          >
            <div className="flex items-center justify-between h-full px-8">
              {/* Phone */}
              <div className="text-center">
                <p className="font-medium mb-1 text-gray-900">+966 53 867 4556</p>
                <p className="text-gray-600">contact us with phone</p>
              </div>

              {/* Email */}
              <div className="text-center">
                <p className="font-medium mb-1 text-gray-900">rita1yoga@hotmail.com</p>
                <p className="text-gray-600">contact us with mail</p>
              </div>

              {/* Address */}
              <div className="text-center">
                <p className="font-medium mb-1 text-gray-900">United States</p>
                <p className="text-gray-600">205 Middle Road, 2nd Floor, New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
