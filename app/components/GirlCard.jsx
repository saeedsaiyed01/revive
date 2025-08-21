
export default function GirlCard() {
  return (
    <div 
      className="w-[663.75px] h-[885px] rounded-[30px] opacity-100 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: "url(/Images/GirlCardimg.png)"
      }}
    >
      {/* Content overlay if needed */}
      <div className="absolute inset-0 flex items-end justify-center pb-8">
        {/* Any additional content can go here */}
      </div>
    </div>
  );
}

