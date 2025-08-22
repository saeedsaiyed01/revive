import { ReactNode } from 'react';

// Blog Detail Layout Content Data
export const blogDetailLayoutData = {
  header: {
    title: "Our Blog",
    subtitle: [
      "Explore our articles on wellness, mindfulness,",
      "and holistic living."
    ]
  },
  background: {
    main: "/Images/BGfor3-4Section.jpg",
    upper: "/Images/UpperBG.png",
    content: "/Images/SecondPageBG.png"
  }
};

type BlogDetailLayoutProps = {
	title: string;
	subtitle?: string;
	contentBackgroundUrl?: string;
	children: ReactNode;
};

export default function BlogDetailLayout({ title, subtitle, contentBackgroundUrl, children }: BlogDetailLayoutProps) {
	const data = blogDetailLayoutData;
	return (
		<section
			className="relative w-full bg-[url('/Images/BGfor3-4Section.jpg')] bg-[length:100%_auto] bg-center bg-repeat-y"
		>
			<div className="relative mx-auto w-[1440px] min-h-[2800px]">
				<div
					className="absolute overflow-hidden w-[1385px] h-[2094px] top-[162px] left-[28px] opacity-100 rounded-t-[50px] bg-[url('/Images/UpperBG.png')] bg-repeat-y bg-[length:100%_auto] bg-center"
				/>

				<div
					className="absolute bg-white/95 text-black text-center shadow-sm w-[787px] h-[169px] top-[224px] left-[314px] rounded-[40px] opacity-100"
				>
					<div className="pt-6 px-8">
						<h2 className="isenheim-family text-black text-[50px] leading-[1.1]">
							{data.header.title}
						</h2>

						<div className='flex flex-col gap-2'>
						<p className="mt-2 text-black/70 font-helvetica text-[13px]">
							{data.header.subtitle[0]}
						</p>
						<p className='mt-2 text-black/70 font-helvetica text-[13px]'>
						{data.header.subtitle[1]}
						</p>
						</div>
						
					</div>
				</div>

				<div
					className="absolute overflow-hidden w-[961px] h-[1329px] top-[535px] left-[263px] rounded-[30px] opacity-100"
					style={{
						backgroundImage: contentBackgroundUrl ? `url(${contentBackgroundUrl})` : undefined,
						backgroundRepeat: contentBackgroundUrl ? 'no-repeat' : undefined,
						backgroundSize: contentBackgroundUrl ? 'cover' : undefined,
						backgroundPosition: contentBackgroundUrl ? 'center' : undefined
					}}
				>
					<div className="absolute inset-0 bg-[url('/Images/SecondPageBG.png')] bg-no-repeat bg-cover bg-center" />
					<div className="absolute left-0 right-0 text-center top-[40px]">
						<h1 className="isenheim-family text-white text-[30px] leading-[100%]">
							{title}
						</h1>
					</div>
					<div className="absolute inset-0 pt-[140px] px-[48px] pb-[40px] font-helvetica font-normal text-[30px] leading-[100%] text-white">
						{children}
					</div>
				</div>
			</div>
		</section>
	);
}


