import { Image } from "@nextui-org/image";
import Link from "next/link";

import { IBlog } from "@/src/types";

const BlogCard = ({ blog }: { blog: IBlog }) => {
    return (
        <Link
            className="hover:scale-105 duration-200"
            href={`/blogs/${encodeURIComponent(blog._id)}`}
        >
            <div className="w-full max-w-sm shadow-lg border rounded-lg overflow-hidden">
                {/* Banner Image */}
                <div className="w-full h-48">
                    <Image
                        alt={blog.title}
                        className="object-cover h-48 rounded-none"
                        src={blog.images[0]}
                        width="500px"
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
