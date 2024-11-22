import React from 'react';

import SectionTitle from '@/src/components/SectionTitle';

const ProjectsPage = () => {
    return (
        <section
            className="scroll-mt-[120px] bg-white p-8 rounded-2xl flex flex-col"
            id="projects"
        >
            <div className="mb-10">
                <SectionTitle
                    className="flex flex-col justify-center items-center text-center w-1/3 mx-auto"
                    slogan="Crafting Ideas into Reality"
                    title="Projects"
                />
            </div>
            <div />
        </section>
    );
};

export default ProjectsPage;