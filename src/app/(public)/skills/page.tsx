import SectionTitle from '@/src/components/SectionTitle';
import { ISkill } from '@/src/types';
import SkillCard from '@/src/components/cards/SkillCard';
import { getSkillsData } from '@/src/services/skills.services';


const skillData: ISkill[] = [
    {
        name: "JavaScript",
        percentage: 30,
        image: "https://149818895.v2.pressablecdn.com/wp-content/uploads/2019/06/Daffodil-International-University.jpg",
        description: "Programming Language",
        yearsOfExperience: 5,
    },
    {
        name: "React",
        percentage: 90,
        image: "https://149818895.v2.pressablecdn.com/wp-content/uploads/2019/06/Daffodil-International-University.jpg",
        description: "JavaScript Library",
        yearsOfExperience: 3,
    },
    {
        name: "Node.js",
        percentage: 65,
        image: "https://149818895.v2.pressablecdn.com/wp-content/uploads/2019/06/Daffodil-International-University.jpg",
        description: "JavaScript Runtime",
        yearsOfExperience: 4,
    },
    {
        name: "TypeScript",
        percentage: 75,
        image: "https://149818895.v2.pressablecdn.com/wp-content/uploads/2019/06/Daffodil-International-University.jpg",
        description: "Superset of JavaScript",
        yearsOfExperience: 2,
    },
    {
        name: "Python",
        percentage: 70,
        image: "https://149818895.v2.pressablecdn.com/wp-content/uploads/2019/06/Daffodil-International-University.jpg",
        description: "Programming Language",
        yearsOfExperience: 3,
    },
    {
        name: "SQL",
        percentage: 96,
        image: "https://149818895.v2.pressablecdn.com/wp-content/uploads/2019/06/Daffodil-International-University.jpg",
        description: "Query Language",
        yearsOfExperience: 4,
    },
];



const SkillsPage = async() => {
    const data = await getSkillsData();
    // console.log({skills: data}); // todo

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