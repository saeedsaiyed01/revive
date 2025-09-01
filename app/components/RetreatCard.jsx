import Link from 'next/link';

export default function RetreatCard({ retreat, href }) {
  return (
    <Link href={href || '#'} className="block focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-[30px]">
    <div 
      className="rounded-[30px] overflow-hidden"
      style={{
        width: '400px',
        height: '420px'
      }}
    >
  
      <div className="relative h-2/3">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${retreat.image}')`
          }}
        />

        <div className="absolute bottom-6 left-6 px-3 py-1 rounded-[8px] text-white text-xs font-medium bg-[url('/Images/default-bg.png')] bg-cover bg-center">
          {retreat.location}
        </div>
      </div>
      

      <div 
        className="h-1/3 p-6 flex flex-col justify-start bg-[url('/Images/CardBG.png')] bg-cover bg-center"
      >
        <h3 className="card-title-isenheim text-black text-xl font-normal mb-2">{retreat.title}</h3>
        <p className="text-[#1E1E1E] font-helvetica text-left line-clamp-3" style={{ 
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '260px',
          minHeight: '4em',
          maxHeight: '4em'
        }}>
          {retreat.description}
        </p>
      </div>
    </div>
    </Link>
  );
}
