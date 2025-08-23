import BlogDetailLayout from "@/app/components/BlogDetailLayout";
import { BLOGS } from "../blogs";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: PageProps) {
	const { slug } = await params;
	const blog = BLOGS[slug];
	if (!blog) {
		return null;
	}
	return (
        <div className="overflow-hidden">
        			<BlogDetailLayout title={blog.title}>
			{blog.content}
		</BlogDetailLayout>
        </div>
	);
}


