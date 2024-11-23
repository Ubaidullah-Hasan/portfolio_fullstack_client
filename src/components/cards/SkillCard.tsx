
import { Avatar } from '@nextui-org/avatar';

import { ISkill } from '@/src/types';


// Function to determine the gradient background based on percentage
const getGradientBackground = (percentage: number): string => {
    if (percentage < 40) return 'bg-gradient-to-b from-[#74b99fed] to-[#207153]'; // Beginner
    if (percentage < 70) return 'bg-gradient-to-t from-[#c35905] to-[#ffd44e]'; // Intermediate
    if (percentage < 90) return 'bg-gradient-to-b from-[#007BFF] to-[#0056B3]'; // Advanced

    return 'bg-gradient-to-t from-[#0e2544] to-[#3A4B61]'; // Expert or Master
};

const SkillCard = ({ skillData }: { skillData: ISkill }) => {
    const gradientClass = getGradientBackground(skillData.percentage);

    return (
        <div className={`rounded-lg shadow-lg ${gradientClass} p-6 `}>
            <div className="flex flex-col items-center gap-4">
                <Avatar className="w-20 h-20 text-large" src={skillData.image} />

                <div className='flex flex-col justify-center items-center'>
                    <h4 className="text-white font-bold mb-2">{skillData.name}</h4>
                    <p className="text-sm text-white font-medium">{skillData.description}</p>
                    <p className="text-sm text-white">Years of Experience: {skillData.yearsOfExperience}</p>
                    <p className="text-sm text-white">Proficiency: {skillData.percentage}%</p>
                </div>

            </div>
        </div>
    );
};

export default SkillCard;