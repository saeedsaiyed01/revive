import Link from 'next/link';

export default function RetreatCardLarge({ retreat, href }) {
	return (
		<Link href={href || '#'} className="block focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-[30px]">
			<div
				className="rounded-[30px] overflow-hidden"
				style={{
					width: '689px',
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
							backgroundImage: "url(/Images/default-bg.png)",
							backgroundSize: 'cover',
							backgroundPosition: 'center'
						}}
					>
						{retreat.location}
					</div>
				</div>

				<div
					className="h-full p-6 flex flex-col justify-center"
					style={{
						height: '37%',
						backgroundImage: 'url(/Images/CardBG.png)',
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				>
					<h3 className="card-title-isenheim text-black text-xl font-normal mb-3">{retreat.title}</h3>
					<p className="text-black text-sm leading-relaxed text-left">{retreat.description}</p>
				</div>
			</div>
		</Link>
	);
}


