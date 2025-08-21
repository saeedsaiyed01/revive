export default function CartPage() {
	return (
		<section className="relative w-full min-h-[1400px] mt-28">
			{/* Main Background */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url('/Images/BGfor3-4Section.jpg')" }}
			/>

			{/* Overlay container (UpperBG.png) */}
			<div
				className="absolute z-10 bg-no-repeat rounded-[50px]"
				style={{
					width: '1385px',
					height: '1047px',
					top: '162px',
					left: '50%',
					transform: 'translateX(-50%)',
					opacity: 1,
					backgroundImage: "url('/Images/UpperBG.png')",
					backgroundRepeat: 'repeat-y',
					backgroundSize: '100% auto',
					backgroundPosition: 'center top',
				}}
			>
				{/* Left Card */}
				<div
					className="absolute bg-white rounded-[40px]"
					style={{
						width: '787px',
						height: '895px',
						top: '100px',
						left: '14px',
						opacity: 1,
					}}
				>
					<div className="h-full w-full px-10 pt-10">
						<h2 className=" text-[50px]  btn-isenheim  leading-[1] text-black">Your items:</h2>
						{/* Item 1 */}
						<div className="mt-8 flex items-start gap-6 relative">
							<div className="h-[120px] w-[120px] rounded-[16px] bg-[#D9D9D9]" />
							<div className="flex-1">
								<div className="text-black  btn-isenheim  text-[48px] leading-[1]">Retreat 1</div>
								<p className="mt-2 text-[14px] leading-snug text-black/70 font-helvetica max-w-[360px]">
									Drawing from ancient wisdom and modern techniques to support deep inner healing.
								</p>
							</div>
							<div className="absolute right-0 top-2 text-black font-helvetica text-[18px]">300$</div>
						</div>

						{/* Item 2 */}
						<div className="mt-10 flex items-start gap-6 relative">
							<div className="h-[120px] w-[120px] rounded-[16px] bg-[#D9D9D9]" />
							<div className="flex-1">
								<div className="text-black  btn-isenheim  text-[48px] leading-[1]">Retreat 2</div>
								<p className="mt-2 text-[14px] leading-snug text-black/70 font-helvetica max-w-[360px]">
									Drawing from ancient wisdom and modern techniques to support deep inner healing.
								</p>
							</div>
							<div className="absolute right-0 top-2 text-black font-helvetica text-[18px]">300$</div>
						</div>

						{/* Total */}
						<div className="mt-16">
							<div className="h-[2px] w-full bg-[#E7C48B]" />
							<div className="mt-6 flex items-baseline justify-between">
								<span className="text-black  btn-isenheim text-[64px] leading-[1]">Total:</span>
								<span className="text-black font-helvetica text-[18px]">600$</span>
							</div>
						</div>
					</div>
				</div>

				{/* Right Card background */}
				<div
					className="absolute bg-white rounded-[40px]"
					style={{ width: '518px', height: '895px', top: '100px', left: '825px', opacity: 1 }}
				/>

				{/* Title */}
				<h2
					className="absolute text-black btn-isenheim y mt-[-100px]"
					style={{ width: '287px', height: '31px', top: '296px', left: '942px', fontWeight: 400, fontSize: '25px', lineHeight: '100%' }}
				>
					Fill contact information
				</h2>

				{/* Form box */}
				<div
					className="absolute bg-transparent text-black mt-[-100px]"
					style={{ width: '449px', height: '498px', top: '392px', left: '852px', opacity: 1 }}
				>
					<label className="block text-[12px] font-helvetica">Your name <span className="text-[#C08B36]">*</span></label>
					<input className="mt-2 w-full h-[44px] rounded-[10px] border border-[#E2B163] px-4 text-[13px] font-helvetica outline-none" placeholder="Enter your name" />

					<label className="mt-4 block text-[12px] font-helvetica">Your email <span className="text-[#C08B36]">*</span></label>
					<input className="mt-2 w-full h-[44px] rounded-[10px] border border-[#E2B163] px-4 text-[13px] font-helvetica outline-none" placeholder="Enter your email" />

					<label className="mt-4 block text-[12px] font-helvetica">Address <span className="text-[#C08B36]">*</span></label>
					<input className="mt-2 w-full h-[44px] rounded-[10px] border border-[#E2B163] px-4 text-[13px] font-helvetica outline-none" placeholder="Enter address" />

					<label className="mt-4 block text-[12px] font-helvetica">Post code <span className="text-[#C08B36]">*</span></label>
					<input className="mt-2 w-full h-[44px] rounded-[10px] border border-[#E2B163] px-4 text-[13px] font-helvetica outline-none" placeholder="Enter post code" />

					<div className="mt-6">
						<div className="text-[12px] font-helvetica">Choose a payment method</div>
						<div className="mt-3 flex items-center gap-6 text-[12px] font-helvetica">
							<label className="inline-flex items-center gap-2">
								<input type="radio" name="payment" defaultChecked className="h-3 w-3 accent-[#E2B163]" />
								<span>Card</span>
							</label>
							<label className="inline-flex items-center gap-2">
								<input type="radio" name="payment" className="h-3 w-3 accent-[#E2B163]" />
								<span>Apple Pay</span>
							</label>
							<label className="inline-flex items-center gap-2">
								<input type="radio" name="payment" className="h-3 w-3 accent-[#E2B163]" />
								<span>PayPal</span>
							</label>
						</div>
					</div>
				</div>

				{/* Purchase button */}
				<button
					className="absolute text-white btn-isenheim  mt-[-100px]"
					style={{
						width: '272px',
						height: '82px',
						top: '955px',
						left: '950px',
						borderRadius: '30px',
						fontWeight: 400,
						fontSize: '25px',
						lineHeight: '30px',
						background: 'linear-gradient(180deg, #C89A44 0%, #9E6F28 100%)',
						boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
					}}
				>
					Purchase
				</button>
			</div>
		</section>
	);
}


