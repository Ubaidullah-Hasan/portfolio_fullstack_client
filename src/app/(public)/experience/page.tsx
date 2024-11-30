import SectionTitle from '@/src/components/SectionTitle';
import { TExperience } from '@/src/types';
import ExperienceCard from '@/src/components/cards/ExperienceCard';
import { getAllExperience } from '@/src/services/experience.services';

const ExperiencePage = async () => {
    const experiences: TExperience[] = await getAllExperience();

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
            <div className='grid grid-cols-3 gap-8 justify-center items-stretch'>
                {experiences?.slice(0,3)?.map((experience, i) => (
                    <ExperienceCard key={i} exprience={experience} />
                ))}
            </div>
        </section>
    );
};

export default ExperiencePage;