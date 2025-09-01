import Link from 'next/link';

export default function BlogCard({ retreat, href }) {
  return (
    <Link href={href || '#'} className="block focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-[30px]">
      <div
        className="rounded-[30px] overflow-hidden"
        style={{
          width: '420px',
          height: '489px'
        }}
      >
        <div className="relative" style={{ height: '63%' }}>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${retreat.image}')` }}
          />

          <div
            className="absolute bottom-3 left-3 px-3 py-1 rounded-[8px] text-white text-xs font-medium"
            style={{
              backgroundImage: "url('/Images/default-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {retreat.location}
          </div>
        </div>

        <div
          className="h-full p-6 flex flex-col justify-start bg-[url('/Images/CardBG.png')] bg-cover bg-center"
          style={{ height: '37%' }}
        >
          <h3 className="card-title-isenheim text-black text-xl font-normal mb-2">{retreat.title}</h3>
          <p
            className="text-[#1E1E1E] font-helvetica text-left line-clamp-3"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '320px',
              minHeight: '3em',
              maxHeight: '3em'
            }}
          >
            {retreat.description}
          </p>
        </div>
      </div>
    </Link>
  );
}


