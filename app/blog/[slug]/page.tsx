import BlogDetailLayout from "@/app/components/BlogDetailLayout";
import { BLOGS } from "../blogs";

type PageProps = {
	params: { slug: string };
};

export default function BlogDetailPage({ params }: PageProps) {
	const blog = BLOGS[params.slug];
	if (!blog) {
		return null;
	}
	return (
        <div className="overflow-hidden">
        	<BlogDetailLayout title={blog.title} subtitle={blog.subtitle}>
			{blog.content}
		</BlogDetailLayout>
         {/* Footer Section with rock image and info card */}
         <div className="relative mx-auto mt-[-400px] max-w-[1440px] h-[360px]">
            {/* Left Rock Image */}
            <div
              className="absolute w-[440px] h-[437px] top-[10px] left-[-130px] opacity-100 bg-contain bg-no-repeat bg-left-bottom pointer-events-none"
              style={{
                backgroundImage: "url('/Images/rockFooter.png')"
              }}
            />

            {/* Info Card */}
            <div
              className="absolute rounded-[30px] bg-white flex items-center w-[1011px] h-[138px] top-[10px] left-[395px] opacity-100 bg-cover bg-center"
            >
              <div className="w-full grid grid-cols-3 gap-8 px-10">
                <div className="text-left">
                  <div className="text-black font-helvetica text-[18px] leading-[140%]">
                    +966 53 867 4556
                  </div>
                  <div className="text-[#595959] font-helvetica text-[16px] leading-[140%]">
                    contact us with phone
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-black font-helvetica text-[18px] leading-[140%]">
                    rita1yoga@hotmail.com
                  </div>
                  <div className="text-[#595959] font-helvetica text-[16px] leading-[140%]">
                    contact us with mail
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-black font-helvetica text-[18px] leading-[140%]">
                    United States
                  </div>
                  <div className="text-[#595959] font-helvetica text-[16px] leading-[140%]">
                    205 Middle Road, 2nd Floor, New York
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
	);
}


