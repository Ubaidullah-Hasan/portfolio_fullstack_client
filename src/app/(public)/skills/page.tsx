import SectionTitle from '@/src/components/SectionTitle';
import { ISkill } from '@/src/types';
import SkillCard from '@/src/components/cards/SkillCard';
import { getSkillsData } from '@/src/services/skills.services';



const SkillsPage = async() => {
    const skillData: ISkill[] = await getSkillsData();

    return (
        <section
            className="scroll-mt-[120px] bg-white p-8 rounded-2xl flex flex-col"
            id="skills"
        >
            <div className="mb-10">
                <SectionTitle
                    className="flex flex-col justify-center items-center text-center w-1/3 mx-auto"
                    slogan="Empowering Solutions Through Expertise"
                    title="Skills"
                />
            </div>

            <div className={`grid grid-cols-5 justify-center items-center gap-3`}>
                {skillData.map((skill, index) => (
                    <SkillCard key={index} skillData={skill} />
                ))}
            </div>
            

        </section>
    );
};

export default SkillsPage;