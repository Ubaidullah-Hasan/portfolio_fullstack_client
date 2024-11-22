import React from 'react';

import SectionTitle from '@/src/components/SectionTitle';

const BlogPage = () => {
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
            <div />
        </section>
    );
};

export default BlogPage;