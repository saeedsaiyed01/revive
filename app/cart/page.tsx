"use client"

// Cart Page Content Data
const cartPageData = {
  title: "Your items:",
  items: [
    {
      name: "Retreat 1",
      description: "Drawing from ancient wisdom and modern techniques to support deep inner healing.",
      price: "300$"
    },
    {
      name: "Retreat 2", 
      description: "Drawing from ancient wisdom and modern techniques to support deep inner healing.",
      price: "300$"
    }
  ],
  total: "600$",
  form: {
    title: "Fill contact information",
    fields: [
      { label: "Your name", placeholder: "Enter your name", required: true },
      { label: "Your email", placeholder: "Enter your email", required: true },
      { label: "Address", placeholder: "Enter address", required: true },
      { label: "Post code", placeholder: "Enter post code", required: true }
    ],
    paymentMethods: [
      { name: "Card", defaultChecked: false },
      { name: "Apple Pay", defaultChecked: true },
      { name: "PayPal", defaultChecked: false }
    ],
    paymentTitle: "Choose payment method",
    buttonText: "Purchase"
  }
};

export default function CartPage() {
  const data = cartPageData;
	return (
		<section  
			className="relative w-full min-h-screen"
			style={{
				backgroundImage: "url('/Images/BGfor3-4Section.jpg')",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'repeat-y',
				paddingTop: '112px'
			}}
		>
			{/* Mobile Layout */}
			<div className="lg:hidden relative z-10 mx-auto px-4 py-8">
				{/* Your Items Card */}
				<div className="bg-white rounded-[25px] shadow-lg p-6 mb-6">
					<h2 className="text-black btn-isenheim text-2xl mb-6">{data.title}</h2>
					
					{data.items.map((item, index) => (
						<div key={index} className={`flex items-start gap-4 ${index > 0 ? 'mt-6' : ''}`}>
							<div className="h-16 w-16 rounded-[12px] bg-[#D9D9D9] flex-shrink-0" />
							<div className="flex-1">
								<div className="text-black btn-isenheim text-lg">{item.name}</div>
								<p className="mt-1 text-sm text-black/70 font-helvetica">
									{item.description}
								</p>
							</div>
							<div className="text-black font-helvetica text-base font-medium">{item.price}</div>
						</div>
					))}

					<div className="mt-6">
						<div className="h-[1px] w-full bg-[#E7C48B]" />
						<div className="mt-4 flex items-baseline justify-between">
							<span className="text-black btn-isenheim text-xl">Total:</span>
							<span className="text-black font-helvetica text-lg font-medium">{data.total}</span>
						</div>
					</div>
				</div>

				{/* Contact Information Card */}
				<div className="bg-white rounded-[25px] shadow-lg p-6">
					<h2 className="text-black btn-isenheim text-xl mb-6">{data.form.title}</h2>
					
					{data.form.fields.map((field, index) => (
						<div key={index} className="mb-4">
							<label className="block text-sm font-helvetica text-black mb-2">
								{field.label} {field.required && <span className="text-[#C08B36]">*</span>}
							</label>
							<input 
								className="w-full h-12 rounded-[10px] border border-[#E2B163] px-4 text-sm font-helvetica outline-none" 
								placeholder={field.placeholder} 
							/>
						</div>
					))}

					<div className="mt-6">
						<div className="text-sm font-helvetica text-black mb-3">{data.form.paymentTitle}</div>
						<div className="flex items-center gap-6 text-sm font-helvetica">
							{data.form.paymentMethods.map((method, index) => (
								<label key={index} className="inline-flex items-center gap-2">
									<input 
										type="radio" 
										name="payment" 
										defaultChecked={method.defaultChecked}
										className="h-4 w-4 accent-[#E2B163]" 
									/>
									<span className="text-black">{method.name}</span>
								</label>
							))}
						</div>
					</div>
				</div>

				{/* Purchase Button */}
				<div className="text-center mt-6">
					<button
						className="text-white btn-isenheim py-4 px-8 rounded-[20px] text-lg font-medium shadow-lg"
						style={{
							background: 'linear-gradient(180deg, #C89A44 0%, #9E6F28 100%)'
						}}
					>
						{data.form.buttonText}
					</button>
				</div>
			</div>

			{/* Desktop Layout */}
			<div className="hidden lg:block relative z-10 mx-auto max-w-screen-2xl px-[clamp(16px,4vw,32px)] py-12">
				<div
					className="relative mx-auto bg-no-repeat rounded-[50px]"
					style={{
						width: '1385px',
						height: '1200px',
						opacity: 1,
						backgroundImage: "url('/Images/UpperBG.png')",
						backgroundRepeat: 'repeat-y',
						backgroundSize: '100% auto',
						backgroundPosition: 'center top',
					}}
				>
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
							<h2 className=" text-[50px]  btn-isenheim  leading-[1] text-black">{data.title}</h2>
							{data.items.map((item, index) => (
								<div key={index} className={`flex items-start gap-6 relative ${index === 0 ? 'mt-8' : 'mt-10'}`}>
									<div className="h-[120px] w-[120px] rounded-[16px] bg-[#D9D9D9]" />
									<div className="flex-1">
										<div className="text-black  btn-isenheim  text-[48px] leading-[1]">{item.name}</div>
										<p className="mt-2 text-[14px] leading-snug text-black/70 font-helvetica max-w-[360px]">
											{item.description}
										</p>
									</div>
									<div className="absolute right-0 top-2 text-black font-helvetica text-[18px]">{item.price}</div>
								</div>
							))}

							<div className="mt-16">
								<div className="h-[2px] w-full bg-[#E7C48B]" />
								<div className="mt-6 flex items-baseline justify-between">
									<span className="text-black  btn-isenheim text-[64px] leading-[1]">Total:</span>
									<span className="text-black font-helvetica text-[18px]">{data.total}</span>
								</div>
							</div>
						</div>
					</div>

					<div
						className="absolute bg-white rounded-[40px]"
						style={{ width: '518px', height: '895px', top: '100px', left: '825px', opacity: 1 }}
					/>

					<h2
						className="absolute text-black btn-isenheim y mt-[-100px]"
						style={{ width: '287px', height: '31px', top: '296px', left: '942px', fontWeight: 400, fontSize: '25px', lineHeight: '100%' }}
					>
						{data.form.title}
					</h2>

					<div
						className="absolute bg-transparent text-black mt-[-100px]"
						style={{ width: '449px', height: '498px', top: '392px', left: '852px', opacity: 1 }}
					>
						{data.form.fields.map((field, index) => (
							<div key={index}>
								<label className={`block text-[12px] font-helvetica ${index > 0 ? 'mt-4' : ''}`}>
									{field.label} {field.required && <span className="text-[#C08B36]">*</span>}
								</label>
								<input 
									className="mt-2 w-full h-[44px] rounded-[10px] border border-[#E2B163] px-4 text-[13px] font-helvetica outline-none" 
									placeholder={field.placeholder} 
								/>
							</div>
						))}

						<div className="mt-6">
							<div className="text-[12px] font-helvetica">{data.form.paymentTitle}</div>
							<div className="mt-3 flex items-center gap-6 text-[12px] font-helvetica">
								{data.form.paymentMethods.map((method, index) => (
									<label key={index} className="inline-flex items-center gap-2">
										<input 
											type="radio" 
											name="payment" 
											defaultChecked={method.defaultChecked}
											className="h-3 w-3 accent-[#E2B163]" 
										/>
										<span>{method.name}</span>
									</label>
								))}
							</div>
						</div>
					</div>

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
						{data.form.buttonText}
					</button>
				</div>
			</div>
			
			{/* Bottom spacing to prevent black gap */}
			<div className="h-20"></div>
		</section>
	);
}


