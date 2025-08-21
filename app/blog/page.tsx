import RetreatCard from "../components/RetreatCard";
import RetreatCardLarge from "../components/RetreatCardLarge";

export default function BlogPage() {
	return (
		<section
			className="relative w-full"
			style={{
				backgroundImage: "url('/Images/BGfor3-4Section.jpg')",
				backgroundSize: '100% auto',
				backgroundPosition: 'center top',
				backgroundRepeat: 'repeat-y',
			}}
		>
			{/* Frame */}
			<div className="relative mx-auto" style={{ width: '1440px', minHeight: '2800px' }}>
				{/* UpperBG overlay (double height) */}
				<div
					className="absolute overflow-hidden"
					style={{
						width: '1385px',
						height: `${1047 * 2}px`,
						top: '162px',
						left: '28px',
						opacity: 1,
						borderTopLeftRadius: '50px',
						borderTopRightRadius: '50px',
						backgroundImage: "url('/Images/UpperBG.png')",
						backgroundRepeat: 'repeat-y',
						backgroundSize: '100% auto',
						backgroundPosition: 'center top',
					}}
				/>

				{/* Blog header card (upper section) */}
				<div
					className="absolute bg-white/95 text-black text-center shadow-sm"
					style={{ width: '787px', height: '189px', top: '224px', left: '314px', borderRadius: '40px', opacity: 1 }}
				>
					<div className="pt-6 px-8">
						<h1 className="isenheim-family text-black" style={{ fontSize: '32px', lineHeight: '1.1' }}>
							Blog
						</h1>
						<p className="mt-2 text-black/70 font-helvetica" style={{ fontSize: '13px' }}>
							Explore our articles on wellness, mindfulness, and holistic living.
						</p>
					</div>
				</div>

				{/* Cards positioned to spec */}
				{/* Row 1 */}
				<div className="absolute" style={{ top: '545px', left: '161px' }}>
					<div className="relative" style={{ width: '420px', height: '492px' }}>
						<RetreatCard
							retreat={{
								image: '/Images/Photo1.png',
								location: 'Oasis',
								title: 'The Power of Daily Practice',
								description: 'Discover how even 10 minutes a day can transform your energy.'
							}}
						/>
						<div className="absolute flex items-center justify-center" style={{ width: '67px', height: '67px', right: '22px', bottom: '75px', borderRadius: '20px', background: 'linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)', boxShadow: '0 8px 18px rgba(0,0,0,0.2)' }}>
							<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
						</div>
					</div>
				</div>
				<div className="absolute" style={{ top: '545px', left: '620px' }}>
					<div className="relative" style={{ width: '420px', height: '492px' }}>
						<RetreatCardLarge
							retreat={{
								image: '/Images/Photo2.png',
								location: 'Canyon',
								title: 'What to Expect on Your First Yoga Retreat',
								description: 'Get ready for your journey: meals, sessions, and mindful rest.'
							}}
						/>
						<div className="absolute flex items-center justify-center" style={{ width: '67px', height: '67px', right: '-230px', bottom: '24px', borderRadius: '20px', background: 'linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)', boxShadow: '0 8px 18px rgba(0,0,0,0.2)' }}>
							<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
						</div>
					</div>
				</div>

				{/* Row 2 */}
				<div className="absolute" style={{ top: '1060px', left: '161px' }}>
					<div className="relative" style={{ width: '420px', height: '492px' }}>
						<RetreatCardLarge
							retreat={{
								image: '/Images/Retreat3.png',
								location: 'Dunes',
								title: 'Mindful Living Off the Mat',
								description: 'Take the lessons of yoga into your everyday life for balance and clarity.'
							}}
						/>
						<div className="absolute flex items-center justify-center" style={{ width: '67px', height: '67px', right: '-230px', bottom: '24px', borderRadius: '20px', background: 'linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)', boxShadow: '0 8px 18px rgba(0,0,0,0.2)' }}>
							<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
						</div>
					</div>
				</div>
				<div className="absolute ml-72" style={{ top: '1060px', left: '620px' }}>
					<div className="relative" style={{ width: '420px', height: '492px' }}>
						<RetreatCard
							retreat={{
								image: '/Images/Retreat4.png',
								location: 'Garden',
								title: 'Yoga for Every Body',
								description: 'Beginner to advanced, find a class that works for your body and goals.'
							}}
						/>
						<div className="absolute flex items-center justify-center" style={{ width: '67px', height: '67px', right: '24px', bottom: '74px', borderRadius: '20px', background: 'linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)', boxShadow: '0 8px 18px rgba(0,0,0,0.2)' }}>
							<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
						</div>
					</div>
				</div>

				{/* Row 3 */}
				<div className="absolute" style={{ top: '1590px', left: '161px' }}>
					<div className="relative" style={{ width: '420px', height: '492px' }}>
						<RetreatCard
							retreat={{
								image: '/Images/Retreat5.png',
								location: 'Forest',
								title: 'Breathwork: The Heart of Yoga',
								description: 'Learn how conscious breathing can transform practice and reduce stress.'
							}}
						/>
						<div className="absolute flex items-center justify-center" style={{ width: '67px', height: '67px', right: '24px', bottom: '74px', borderRadius: '20px', background: 'linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)', boxShadow: '0 8px 18px rgba(0,0,0,0.2)' }}>
							<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
						</div>
					</div>
				</div>
				<div className="absolute" style={{ top: '1590px', left: '620px' }}>
					<div className="relative" style={{ width: '689px', height: '489px' }}>
						<RetreatCardLarge
							retreat={{
								image: '/Images/Retreat6.png',
								location: 'Sunset',
								title: 'Nourish Your Body: Retreat Recipes We Love',
								description: 'Wholesome, plant-based recipes to fuel your practice and life.'
							}}
						/>
						<div className="absolute flex items-center justify-center" style={{ width: '67px', height: '67px', right: '24px', bottom: '24px', borderRadius: '20px', background: 'linear-gradient(180deg, #F2D282 0%, #C79A2F 100%)', boxShadow: '0 8px 18px rgba(0,0,0,0.2)' }}>
							<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
						</div>
					</div>
				</div>
                 {/* Footer Section with rock image and info card */}
		  <div className="absolute mt-20" style={{ width: '1440px', height: '360px', top: '2060px', left: '0px', zIndex: 10 }}>
		   {/* Left Rock Image */}
		   <div
		     className="absolute"
		     style={{
		       width: '440px',
		       height: '437px',
		       top: '0px',
		       left: '-130px',
		       opacity: 1,
		       backgroundImage: "url('/Images/rockFooter.png')",
		       backgroundRepeat: 'no-repeat',
		       backgroundPosition: 'left bottom',
		       backgroundSize: 'contain',
		       pointerEvents: 'none'
		     }}
		   />

		   {/* Info Card */}
		   <div
		     className="absolute rounded-[30px] bg-white flex items-center mt-22"
		     style={{
		       width: '1011px',
		       height: '138px',
		       top: '110px',
		       left: '395px',
		       opacity: 1,
		       backgroundSize: 'cover',
		       backgroundPosition: 'center'
		     }}
		   >
		     <div className="w-full grid grid-cols-3 gap-8 px-10">
		       <div className="text-left">
		         <div className="text-black" style={{ fontFamily: 'Helvetica Light, Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '140%' }}>
		           +966 53 867 4556
		         </div>
		         <div className="text-[#595959]" style={{ fontFamily: 'Helvetica Light, Helvetica, Arial, sans-serif', fontSize: '16px', lineHeight: '140%' }}>
		           contact us with phone
		         </div>
		       </div>
		       <div className="text-left">
		         <div className="text-black" style={{ fontFamily: 'Helvetica Light, Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '140%' }}>
		           rita1yoga@hotmail.com
		         </div>
		         <div className="text-[#595959]" style={{ fontFamily: 'Helvetica Light, Helvetica, Arial, sans-serif', fontSize: '16px', lineHeight: '140%' }}>
		           contact us with mail
		         </div>
		       </div>
		       <div className="text-left">
		         <div className="text-black" style={{ fontFamily: 'Helvetica Light, Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '140%' }}>
		           United States
		         </div>
		         <div className="text-[#595959]" style={{ fontFamily: 'Helvetica Light, Helvetica, Arial, sans-serif', fontSize: '16px', lineHeight: '140%' }}>
		           205 Middle Road, 2nd Floor, New York
		         </div>
		       </div>
		     </div>
		   </div>
		 </div>
                
			</div>
		</section>
	);
}


