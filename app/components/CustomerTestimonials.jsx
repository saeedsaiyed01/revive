export default function CustomerTestimonials() {
  // Content objects for better organization
  const testimonialData = {
    title: "What customer says?",
    subtitle: "Hear from those who have experienced the transformative power of our retreats and practices",
    customer: {
      name: "Sara Johnson",
      title: "yoga expert",
      rating: 5,
      quote: "The retreat was transformative in every sense. Rita's expertise in combining ancient practices with modern science created an experience that was both deeply spiritual and practically beneficial. I left with tools I use daily."
    }
  };

  const photoLayout = {
    photo1: {
      src: "/Images/Photo1.png",
      alt: "Customer Photo 1",
      width: "400px",
      height: "430px",
      top: "40px",
      left: "100px",
      rotation: "0deg",
      zIndex: 3,
      overlay: {
        name: "Sara Jhonson",
        title: "Yoga expert",
        rating: 5
      }
    },
    photo2: {
      src: "/Images/Photo2.png",
      alt: "Customer Photo 2",
      width: "400px",
      height: "430px",
      top: "70px",
      left: "40px",
      rotation: "-15deg",
      zIndex: 2
    },
    photo3: {
      src: "/Images/Photo3.png",
      alt: "Customer Photo 3",
      width: "400px",
      height: "430px",
      top: "50px",
      left: "150px",
      rotation: "12deg",
      zIndex: 1
    }
  };

  const cardLayout = {
    width: "543px",
    height: "315px",
    top: "100px",
    marginLeft: "auto",
    marginRight: "50px"
  };

  return (
    <section className="relative w-full min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Images/bgWCS.png')",
          width: '100%',
          height: '120vh',
          maxWidth: '1738.5533447265625px',
          maxHeight: '1173px'
        }}
      />
      
 
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6" style={{ fontFamily: 'Isenheim, serif' }}>
            {testimonialData.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Helvetica, sans-serif' }}>
            {testimonialData.subtitle}
          </p>
        </div>
        
   
        <div className="relative flex justify-between items-start max-w-7xl mx-auto">
      
          <div className="relative" style={{ width: '695.7830810546875px', height: '687.8585205078125px' }}>
            {/* Photo 1 - Main/Frontmost */}
            <div 
              className="absolute"
              style={{
                width: photoLayout.photo1.width,
                height: photoLayout.photo1.height,
                top: photoLayout.photo1.top,
                left: photoLayout.photo1.left,
                transform: `rotate(${photoLayout.photo1.rotation})`,
                borderRadius: '30px',
                border: '5px solid #f59e0b',
                opacity: 1,
                zIndex: photoLayout.photo1.zIndex
              }}
            >
              <img 
                src={photoLayout.photo1.src} 
                alt={photoLayout.photo1.alt}
                className="w-full h-full object-cover rounded-[30px]"
              />
     
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-yellow-400 text-lg">
                    {'⭐'.repeat(photoLayout.photo1.overlay.rating)}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-800">{photoLayout.photo1.overlay.name}</p>
                <p className="text-xs text-gray-600">{photoLayout.photo1.overlay.title}</p>
              </div>
            </div>
            
 
            <div 
              className="absolute"
              style={{
                width: photoLayout.photo3.width,
                height: photoLayout.photo3.height,
                top: photoLayout.photo3.top,
                left: photoLayout.photo3.left,
                transform: `rotate(${photoLayout.photo3.rotation})`,
                borderRadius: '30px',
                border: '5px solid #f59e0b',
                opacity: 1,
                zIndex: photoLayout.photo3.zIndex
              }}
            >
              <img 
                src={photoLayout.photo3.src} 
                alt={photoLayout.photo3.alt}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
   
            <div 
              className="absolute"
              style={{
                width: photoLayout.photo2.width,
                height: photoLayout.photo2.height,
                top: photoLayout.photo2.top,
                left: photoLayout.photo2.left,
                transform: `rotate(${photoLayout.photo2.rotation})`,
                borderRadius: '30px',
                border: '5px solid #f59e0b',
                opacity: 1,
                zIndex: photoLayout.photo2.zIndex
              }}
            >
              <img 
                src={photoLayout.photo2.src} 
                alt={photoLayout.photo2.alt}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
          </div>
          
       
          <div 
            className="relative"
            style={{
              width: cardLayout.width,
              height: cardLayout.height,
              top: cardLayout.top,
              marginLeft: cardLayout.marginLeft,
              marginRight: cardLayout.marginRight,
              borderRadius: '30px',
              opacity: 1,
              zIndex: 4
            }}
          >
            <div 
              className="w-full h-full rounded-[30px] p-8 flex flex-col justify-center"
              style={{
                backgroundImage: "url('/Images/CardBG.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h3 className="text-2xl font-serif font-bold text-black mb-4" style={{ fontFamily: 'Isenheim, serif' }}>
                {testimonialData.customer.name}, {testimonialData.customer.title}
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                "{testimonialData.customer.quote}"
              </p>
            </div>
            

            <div className="flex justify-end gap-4 mt-6">
              <button 
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                style={{
                  backgroundImage: "url('/Images/default-bg.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <span className="text-white text-xl">←</span>
              </button>
              <button 
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                style={{
                  backgroundImage: "url('/Images/default-bg.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <span className="text-white text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
