import Image from "next/image";

export default function ThirdPageCard({ title, description, icon }) {
  return (
    <div 
      className="w-[579px] h-[791px] rounded-[30px] opacity-100 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start pt-12 px-8"
      style={{
        backgroundImage: "url(/Images/CardBG.png)"
      }}
    >
      {/* Icon */}
      <div className="mb-8">
        <Image 
          src={icon} 
          alt={title}
          width={80}
          height={80}
          className="w-20 h-20"
        />
      </div>
      
      {/* Title */}
      <h3 className="card-title-isenheim text-black text-center mb-6 max-w-[500px]">
        {title}
      </h3>
      
      {/* Description */}
      <p className="card-description text-black text-center max-w-[500px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
