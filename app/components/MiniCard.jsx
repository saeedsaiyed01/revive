import Image from "next/image";

export default function MiniCard() {
  return (
    <div
      className="opacity-100 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url(/Images/MiniCardImg.png)",
        width: '60px',
        height: '82px',
        borderRadius: '10px'
      }}
    >

      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src="/Images/Start.png"
            alt="Star"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        ))}
      </div>


      <div className="text-center">
        <p className="text-black text-sm font-medium">Experience</p>
      </div>
    </div>
  );
}

