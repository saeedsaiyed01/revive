import Link from 'next/link';

export default function RetreatCard({ retreat, href }) {
  return (
    <Link href={href || '#'} className="block focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-[30px]">
    <div 
      className="rounded-[30px] overflow-hidden w-[400px] h-[420px]"
    >
      {/* Image Section */}
      <div className="relative h-2/3">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${retreat.image}')`
          }}
        />
        {/* Location Tag */}
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-[8px] text-white text-xs font-medium bg-[url('/Images/default-bg.png')] bg-cover bg-center">
          {retreat.location}
        </div>
      </div>
      
      {/* Text Section */}
      <div 
        className="h-1/3 p-6 flex flex-col justify-center bg-[url('/Images/CardBG.png')] bg-cover bg-center"
      >
        <h3 className="card-title-isenheim text-black text-xl font-normal mb-3">{retreat.title}</h3>
        <p className="text-black text-sm leading-relaxed text-left">
          {retreat.description}
        </p>
      </div>
    </div>
    </Link>
  );
}
