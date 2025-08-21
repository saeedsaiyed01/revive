export default function AboutPhotoCard({ image, title, description }) {
  return (
    <div
      className="rounded-[30px] overflow-hidden"
      style={{ width: '402px', height: '587px' }}
    >
      {/* Image Section */}
      <div className="relative" style={{ height: '72%' }}>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </div>

      {/* Text Section */}
      <div
        className="h-[28%] p-4 flex flex-col justify-center"
        style={{
          backgroundImage: "url(/Images/CardBG.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h3 className="card-title-isenheim text-black text-xl font-normal text-center mb-2">
          {title}
        </h3>
        <p className="text-black text-xs leading-relaxed text-center ">
          {description}
        </p>
      </div>
    </div>
  );
}


