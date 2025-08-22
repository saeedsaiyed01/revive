import { ReactNode } from "react";

export type BlogDetail = {
	slug: string;
	title: string;
	subtitle?: string;
	content: ReactNode;
	image?: string;
};

// Blog Content Data
export const blogContentData = {
	blog1: {
		slug: "what-to-expect-first-yoga-retreat",
		title: "What to Expect on Your First Yoga Retreat",
		subtitle: "A beginner&apos;s guide to your first wellness journey",
		intro: "Going on your first yoga retreat? Here&apos;s a simple guide to what you can expect - so you feel confident, calm, and ready.",
		sections: [
			{
				title: "1. Warm Welcome",
				content: "You&apos;ll be gently introduced to the space, schedule, and fellow guests. The vibe is relaxed, kind, and inclusive."
			},
			{
				title: "2. Peaceful Setting", 
				content: "Most retreats take place in nature - mountains, forest, or beach - ideal for disconnecting and recharging."
			},
			{
				title: "3. Daily Routine",
				content: "Typically includes two yoga sessions per day, meditation, healthy meals, and some free time for rest or reflection."
			},
			{
				title: "4. Nourishing Food",
				content: "Expect fresh, mostly plant-based meals designed to support your energy and digestion."
			},
			{
				title: "5. Like-Minded Community",
				content: "Even solo travelers quickly feel at home. It&apos;s a space to connect, share, and grow."
			}
		]
	},
	blog2: {
		slug: "mindfulness-meditation-benefits",
		title: "The Transformative Benefits of Mindfulness Meditation",
		subtitle: "Discover how daily meditation can change your life",
		intro: "Mindfulness meditation isn&apos;t just a trend—it&apos;s a powerful tool for transforming your mental and physical well-being. Here&apos;s what science tells us about its benefits.",
		sections: [
			{
				title: "Mental Health Benefits",
				type: "list",
				items: [
					"Reduces stress and anxiety levels",
					"Improves focus and concentration", 
					"Enhances emotional regulation",
					"Promotes better sleep quality"
				]
			},
			{
				title: "Physical Health Benefits",
				type: "list",
				items: [
					"Lowers blood pressure",
					"Strengthens immune system",
					"Reduces chronic pain",
					"Improves cardiovascular health"
				]
			}
		],
		conclusion: "Start with just 5-10 minutes daily and gradually increase. The key is consistency, not duration."
	},
	blog3: {
		slug: "holistic-wellness-approach",
		title: "A Holistic Approach to Wellness",
		subtitle: "Balancing mind, body, and spirit for complete well-being",
		intro: "True wellness goes beyond physical health. It&apos;s about creating harmony between your mind, body, and spirit. Here&apos;s how to embrace a holistic approach.",
		sections: [
			{
				title: "Mind",
				content: "Cultivate mental clarity through meditation, journaling, and mindful practices. Your thoughts shape your reality."
			},
			{
				title: "Body",
				content: "Nourish your physical vessel with movement, wholesome nutrition, and adequate rest. Honor your body&apos;s needs."
			},
			{
				title: "Spirit",
				content: "Connect with your deeper purpose through nature, creativity, and meaningful relationships. Feed your soul."
			}
		],
		conclusion: "Remember: wellness is a journey, not a destination. Be patient and kind with yourself along the way."
	},
	blog4: {
		slug: "yoga-for-beginners",
		title: "Yoga for Beginners: Start Your Journey",
		subtitle: "Essential poses and tips for new practitioners",
		intro: "New to yoga? Don&apos;t worry! Everyone starts somewhere. Here are the fundamental poses and principles to begin your practice.",
		sections: [
			{
				title: "Essential Beginner Poses",
				type: "poses",
				items: [
					{
						name: "1. Mountain Pose (Tadasana)",
						description: "Foundation for all standing poses"
					},
					{
						name: "2. Child&apos;s Pose (Balasana)",
						description: "Gentle resting pose"
					},
					{
						name: "3. Downward Dog (Adho Mukha Svanasana)",
						description: "Strengthens and stretches"
					},
					{
						name: "4. Warrior I (Virabhadrasana I)",
						description: "Builds strength and balance"
					}
				]
			},
			{
				title: "Beginner Tips",
				type: "list",
				items: [
					"Listen to your body - don&apos;t push beyond your limits",
					"Focus on breath - it&apos;s the foundation of yoga",
					"Be consistent - even 10 minutes daily makes a difference",
					"Don&apos;t compare yourself to others"
				]
			}
		]
	},
	blog5: {
		slug: "nutrition-for-wellness",
		title: "Nutrition for Wellness: Fuel Your Body Right",
		subtitle: "How food choices impact your overall well-being",
		intro: "What you eat directly affects how you feel, think, and function. Discover the connection between nutrition and wellness.",
		sections: [
			{
				title: "Mind-Body Connection",
				content: "Your gut health influences your mood, energy levels, and even your immune system. Choose foods that nourish both body and mind."
			},
			{
				title: "Wellness-Focused Nutrition",
				type: "list",
				items: [
					"Prioritize whole, unprocessed foods",
					"Include plenty of colorful fruits and vegetables",
					"Choose healthy fats and lean proteins",
					"Stay hydrated with water and herbal teas",
					"Limit refined sugars and processed foods"
				]
			},
			{
				title: "Eating Mindfully",
				content: "Slow down, savor each bite, and listen to your body&apos;s hunger and fullness cues. Mindful eating enhances digestion and satisfaction."
			}
		]
	},
	blog6: {
		slug: "stress-management-techniques",
		title: "Effective Stress Management Techniques",
		subtitle: "Practical strategies for finding peace in a busy world",
		intro: "In today&apos;s fast-paced world, stress management is essential for maintaining our health and happiness. Here are proven techniques to help you find balance.",
		sections: [
			{
				title: "Breathing Techniques",
				type: "list",
				items: [
					"Deep belly breathing - 4-7-8 technique",
					"Box breathing for immediate calm",
					"Progressive muscle relaxation"
				]
			},
			{
				title: "Lifestyle Changes",
				type: "list",
				items: [
					"Regular exercise and movement",
					"Quality sleep and rest",
					"Time in nature",
					"Setting healthy boundaries"
				]
			}
		],
		conclusion: "Remember: stress is a natural response, but how we manage it makes all the difference."
	}
};

export const BLOG_1: BlogDetail = {
	slug: "what-to-expect-first-yoga-retreat",
	title: "What to Expect on Your First Yoga Retreat",
	subtitle: "A beginner&apos;s guide to your first wellness journey",
	content: (
		<div className="font-isenheim text-white p-16">
			<p className="mb-10 text-[20px] leading-[100%] font-normal">
				Going on your first yoga retreat? Here&apos;s a simple guide to what you can expect - so you feel confident, calm, and ready.
			</p>
			<div className="space-y-8">
				<div>
					<h3 className="btn-isenheim text-[24px] leading-[100%] font-normal mb-3">1. Warm Welcome</h3>
					<p className="btn-isenheim text-[18px] leading-[100%] font-normal">
						You&apos;ll be gently introduced to the space, schedule, and fellow guests. The vibe is relaxed, kind, and inclusive.
					</p>
				</div>
				<div>
					<h3 className="btn-isenheim text-[24px] leading-[100%] font-normal mb-3">2. Peaceful Setting</h3>
					<p className="btn-isenheim text-[18px] leading-[100%] font-normal">
						Most retreats take place in nature - mountains, forest, or beach - ideal for disconnecting and recharging.
					</p>
				</div>
				<div>
					<h3 className="btn-isenheim text-[24px] leading-[100%] font-normal mb-3">3. Daily Routine</h3>
					<p className="btn-isenheim text-[18px] leading-[100%] font-normal">
						Typically includes two yoga sessions per day, meditation, healthy meals, and some free time for rest or reflection.
					</p>
				</div>
				<div>
					<h3 className="btn-isenheim text-[24px] leading-[100%] font-normal mb-3">4. Nourishing Food</h3>
					<p className="btn-isenheim text-[18px] leading-[100%] font-normal">
						Expect fresh, mostly plant-based meals designed to support your energy and digestion.
					</p>
				</div>
				<div>
					<h3 className="btn-isenheim text-[24px] leading-[100%] font-normal mb-3">5. Like-Minded Community</h3>
					<p className="btn-isenheim text-[18px] leading-[100%] font-normal">
						Even solo travelers quickly feel at home. It&apos;s a space to connect, share, and grow.
					</p>
				</div>
			</div>
		</div>
	)
};

// Blog 2: Mindfulness Meditation Benefits
export const BLOG_2: BlogDetail = {
	slug: "mindfulness-meditation-benefits",
	title: "The Transformative Benefits of Mindfulness Meditation",
	subtitle: "Discover how daily meditation can change your life",
	content: (
		<div className="font-isenheim text-white p-16">
			<p className="mb-10 text-[20px] leading-[100%] font-normal">
				Mindfulness meditation isn&apos;t just a trend—it&apos;s a powerful tool for transforming your mental and physical well-being. Here&apos;s what science tells us about its benefits.
			</p>
			<div className="mb-10 space-y-8">
				<div>
					<h3 className="btn-isenheim text-[24px] leading-[100%] font-normal mb-3">Mental Health Benefits</h3>
					<ul className="list-disc pl-10 space-y-2">
						<li className="btn-isenheim text-[18px] leading-[100%] font-normal">Reduces stress and anxiety levels</li>
						<li className="btn-isenheim text-[18px] leading-[100%] font-normal">Improves focus and concentration</li>
						<li className="btn-isenheim text-[18px] leading-[100%] font-normal">Enhances emotional regulation</li>
						<li className="btn-isenheim text-[18px] leading-[100%] font-normal">Promotes better sleep quality</li>
					</ul>
				</div>
				
				<div>
					<h3 className="btn-isenheim text-[24px] leading-[100%] font-normal mb-3">Physical Health Benefits</h3>
					<ul className="list-disc pl-10 space-y-2">
						<li className="btn-isenheim text-[18px] leading-[100%] font-normal">Lowers blood pressure</li>
						<li className="btn-isenheim text-[18px] leading-[100%] font-normal">Strengthens immune system</li>
						<li className="btn-isenheim text-[18px] leading-[100%] font-normal">Reduces chronic pain</li>
						<li className="btn-isenheim text-[18px] leading-[100%] font-normal">Improves cardiovascular health</li>
					</ul>
				</div>
			</div>
			<p className="btn-isenheim text-[18px] leading-[100%] font-normal">
				Start with just 5-10 minutes daily and gradually increase. The key is consistency, not duration.
			</p>
		</div>
	)
};

// Blog 3: Holistic Wellness Approach
export const BLOG_3: BlogDetail = {
	slug: "holistic-wellness-approach",
	title: "A Holistic Approach to Wellness",
	subtitle: "Balancing mind, body, and spirit for complete well-being",
	content: (
		<div className="btn-isenheim text-white p-16">
			<p className="mb-10 text-[20px] leading-[100%] font-normal">
				True wellness goes beyond physical health. It&apos;s about creating harmony between your mind, body, and spirit. Here&apos;s how to embrace a holistic approach.
			</p>
			<div className="mb-10 space-y-8">
				<div>
					<h3 className="btn-isenheim text-[24px] leading-[100%] font-normal mb-3">Mind</h3>
					<p className="btn-isenheim text-[18px] leading-[100%] font-normal">
						Cultivate mental clarity through meditation, journaling, and mindful practices. Your thoughts shape your reality.
					</p>
				</div>
				
				<div>
					<h3 className="btn-isenheim text-[24px] leading-[100%] font-normal mb-3">Body</h3>
					<p className="btn-isenheim text-[18px] leading-[100%] font-normal">
						Nourish your physical vessel with movement, wholesome nutrition, and adequate rest. Honor your body&apos;s needs.
					</p>
				</div>
				
				<div>
					<h3 className="btn-isenheim text-[24px] leading-[100%] font-normal mb-3">Spirit</h3>
					<p className="btn-isenheim text-[18px] leading-[100%] font-normal">
						Connect with your deeper purpose through nature, creativity, and meaningful relationships. Feed your soul.
					</p>
				</div>
			</div>
			<p className="btn-isenheim text-[18px] leading-[100%] font-normal">
				Remember: wellness is a journey, not a destination. Be patient and kind with yourself along the way.
			</p>
		</div>
	)
};

// Blog 4: Yoga for Beginners
export const BLOG_4: BlogDetail = {
	slug: "yoga-for-beginners",
	title: "Yoga for Beginners: Start Your Journey",
	subtitle: "Essential poses and tips for new practitioners",
	content: (
		<div className="font-isenheim text-white p-16">
			<p className="mb-10 text-[20px] leading-[100%] font-normal">
				New to yoga? Don&apos;t worry! Everyone starts somewhere. Here are the fundamental poses and principles to begin your practice.
			</p>
			<div className="mb-10 space-y-8">
				<div>
					<h3 className="font-isenheim text-[24px] leading-[100%] font-normal mb-3">Essential Beginner Poses</h3>
					<div className="space-y-4">
						<div>
							<h4 className="btn-isenheim text-[20px] leading-[100%] font-normal mb-2">1. Mountain Pose (Tadasana)</h4>
							<p className="btn-isenheim text-[18px] leading-[100%] font-normal">Foundation for all standing poses</p>
						</div>
						<div>
							<h4 className="btn-isenheim text-[20px] leading-[100%] font-normal mb-2">2. Child&apos;s Pose (Balasana)</h4>
							<p className="btn-isenheim text-[18px] leading-[100%] font-normal">Gentle resting pose</p>
						</div>
						<div>
							<h4 className="btn-isenheim text-[20px] leading-[100%] font-normal mb-2">3. Downward Dog (Adho Mukha Svanasana)</h4>
							<p className="btn-isenheim text-[18px] leading-[100%] font-normal">Strengthens and stretches</p>
						</div>
						<div>
							<h4 className="btn-isenheim text-[20px] leading-[100%] font-normal mb-2">4. Warrior I (Virabhadrasana I)</h4>
							<p className="btn-isenheim text-[18px] leading-[100%] font-normal">Builds strength and balance</p>
						</div>
					</div>
				</div>
				
				<div>
					<h3 className="btn-isenheim text-[24px] leading-[100%] font-normal mb-3">Beginner Tips</h3>
					<ul className="list-disc pl-10 space-y-2">
						<li className="btn-isenheim text-[18px] leading-[100%] font-normal">Listen to your body - don&apos;t push beyond your limits</li>
						<li className="btn-isenheim text-[18px] leading-[100%] font-normal">Focus on breath - it&apos;s the foundation of yoga</li>
						<li className="btn-isenheim text-[18px] leading-[100%] font-normal">Be consistent - even 10 minutes daily makes a difference</li>
						<li className="btn-isenheim text-[18px] leading-[100%] font-normal">Don&apos;t compare yourself to others</li>
					</ul>
				</div>
			</div>
		</div>
	)
};

// Blog 5: Nutrition for Wellness
export const BLOG_5: BlogDetail = {
	slug: "nutrition-for-wellness",
	title: "Nutrition for Wellness: Fuel Your Body Right",
	subtitle: "How food choices impact your overall well-being",
	content: (
		<div className="btn-isenheim text-white p-16">
			<p className="mb-10 text-[30px] leading-[100%] font-normal">
				What you eat directly affects how you feel, think, and function. Discover the connection between nutrition and wellness.
			</p>
			<div className="mb-10 space-y-8">
				<div>
					<h3 className="btn-isenheim text-[35px] leading-[100%] font-normal mb-5">Mind-Body Connection</h3>
					<p className="btn-isenheim text-[30px] leading-[100%] font-normal">
						Your gut health influences your mood, energy levels, and even your immune system. Choose foods that nourish both body and mind.
					</p>
				</div>
				
				<div>
					<h3 className="btn-isenheim text-[35px] leading-[100%] font-normal mb-5">Wellness-Focused Nutrition</h3>
					<ul className="list-disc pl-10 space-y-4">
						<li className="btn-isenheim text-[30px] leading-[100%] font-normal">Prioritize whole, unprocessed foods</li>
						<li className="btn-isenheim text-[30px] leading-[100%] font-normal">Include plenty of colorful fruits and vegetables</li>
						<li className="btn-isenheim text-[30px] leading-[100%] font-normal">Choose healthy fats and lean proteins</li>
						<li className="btn-isenheim text-[30px] leading-[100%] font-normal">Stay hydrated with water and herbal teas</li>
						<li className="btn-isenheim text-[30px] leading-[100%] font-normal">Limit refined sugars and processed foods</li>
					</ul>
				</div>
				
				<div>
					<h3 className="btn-isenheim text-[35px] leading-[100%] font-normal mb-5">Eating Mindfully</h3>
					<p className="btn-isenheim text-[30px] leading-[100%] font-normal">
						Slow down, savor each bite, and listen to your body&apos;s hunger and fullness cues. Mindful eating enhances digestion and satisfaction.
					</p>
				</div>
			</div>
		</div>
	)
}; 

// Blog 6: Stress Management Techniques
export const BLOG_6: BlogDetail = {
	slug: "stress-management-techniques",
	title: "Effective Stress Management Techniques",
	subtitle: "Practical strategies for finding peace in a busy world",
	content: (
		<div className="font-isenheim text-white p-16">
			<p className="mb-10 text-[30px] leading-[100%] font-normal">
				In today&apos;s fast-paced world, stress management is essential for maintaining our health and happiness. Here are proven techniques to help you find balance.
			</p>
			<div className="mb-10 space-y-8">
				<div>
					<h3 className="btn-isenheim text-[35px] leading-[100%] font-normal mb-5">Breathing Techniques</h3>
					<ul className="list-disc pl-10 space-y-4">
						<li className="btn-isenheim text-[30px] leading-[100%] font-normal">Deep belly breathing - 4-7-8 technique</li>
						<li className="btn-isenheim text-[30px] leading-[100%] font-normal">Box breathing for immediate calm</li>
						<li className="btn-isenheim text-[30px] leading-[100%] font-normal">Progressive muscle relaxation</li>
					</ul>
				</div>
				
				<div>
					<h3 className="btn-isenheim text-[35px] leading-[100%] font-normal mb-5">Lifestyle Changes</h3>
					<ul className="list-disc pl-10 space-y-4">
						<li className="btn-isenheim text-[30px] leading-[100%] font-normal">Regular exercise and movement</li>
						<li className="btn-isenheim text-[30px] leading-[100%] font-normal">Quality sleep and rest</li>
						<li className="btn-isenheim text-[30px] leading-[100%] font-normal">Time in nature</li>
						<li className="btn-isenheim text-[30px] leading-[100%] font-normal">Setting healthy boundaries</li>
					</ul>
				</div>
			</div>
			<p className="btn-isenheim text-[30px] leading-[100%] font-normal">
				Remember: stress is a natural response, but how we manage it makes all the difference.
			</p>
		</div>
	)
};



// Main BLOGS object that maps slugs to individual blog objects
export const BLOGS: Record<string, BlogDetail> = {
	"what-to-expect-first-yoga-retreat": BLOG_1,
	"mindfulness-meditation-benefits": BLOG_2,
	"holistic-wellness-approach": BLOG_3,
	"yoga-for-beginners": BLOG_4,
	"nutrition-for-wellness": BLOG_5,
	"stress-management-techniques": BLOG_6,
};


