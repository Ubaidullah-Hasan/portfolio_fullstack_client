import React from 'react';

import SectionTitle from '@/src/components/SectionTitle';

const ExperiencePage = () => {
    return (
        <section
            className="scroll-mt-[120px] bg-white p-8 rounded-2xl flex flex-col"
            id="experience"
        >
            <div className="mb-10">
                <SectionTitle
                    className="flex flex-col justify-center items-center text-center w-1/3 mx-auto"
                    slogan="Transforming Challenges Into Achievements"
                    title="Experience"
                />
            </div>
            <div />
        </section>
    );
};

export default ExperiencePage;