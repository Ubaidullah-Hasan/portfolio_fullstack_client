import { IBlog } from "@/src/types";
import { Image } from "@nextui-org/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: IBlog }) => {
    return (
        <Link
            href={`/blogs/${encodeURIComponent(blog._id)}`}
            className="hover:scale-105 duration-200"
        >
            <div className="w-full max-w-sm shadow-lg border rounded-lg overflow-hidden">
                {/* Banner Image */}
                <div className="w-full h-48">
                    <Image
                        src={blog.images[0]}
                        alt={blog.title}
                        width="500px"
                        className="object-cover h-48 rounded-none"
                    />
                </div>

                <div className="p-4 font-medium text-lg hyphens-auto">
                    {blog.title}
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
