import { Button } from '@nextui-org/button';
import { GrView } from "react-icons/gr";
import Link from 'next/link';

import SectionTitle from '@/src/components/SectionTitle';
import { getBlogData } from '@/src/services/blog.services';
import BlogCard from '@/src/components/cards/BlogCard';
import { IBlog } from '@/src/types';

const BlogPage = async () => {
    const blogs = await getBlogData();

    console.log(blogs)

    return (
        <section
            className="scroll-mt-[120px] bg-white p-8 rounded-2xl flex flex-col"
            id="blog"
        >
            <div className="mb-10">
                <SectionTitle
                    className="flex flex-col justify-center items-center text-center w-1/3 mx-auto"
                    slogan="Sharing Insights and Experiences"
                    title="Blog"
                />
            </div>

            <div className='grid grid-cols-3 gap-8 justify-center items-center'>
                {blogs?.slice(0, 3)?.map((blog: IBlog) => (
                    <BlogCard key={blog?._id} blog={blog} />
                ))}
            </div>

            <Button
                as={Link}
                className="mt-10 w-[200px] mx-auto text-sm border bg-blue-700 rounded-xl font-bold hover:bg-blue-800 text-white"
                endContent={
                    <GrView
                        className="duration-100 hover:text-white"
                        size={15}
                    />
                }
                href="/blogs"
                variant="flat"
            >
                View All
            </Button>

        </section>
    );
};

export default BlogPage;