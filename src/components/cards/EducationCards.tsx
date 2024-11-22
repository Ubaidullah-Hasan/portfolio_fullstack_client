// EducationCards.tsx

import { IEducation } from '@/src/types';
import { Image } from '@nextui-org/image';
import React from 'react';

interface IEducationData {
    educationData: IEducation[];
}
const EducationCards = ({ educationData }: IEducationData) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationData.map((edu, index) => (
                <div key={index} className="bg-white shadow-sm hover:shadow-lg border rounded-lg overflow-hidden">
                    <Image src={edu.image} alt={edu.degree} width={400} height={200} className="rounded-t-lg rounded-b-none" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-3">{edu.degree}</h2>
                        <h3 className="text-md text-gray-600 font-medium">{edu.institution}</h3>
                        <p className="text-sm text-gray-500">
                            {edu.startDate} <span className='uppercase mx-1 font-bold text-black'> To </span> {edu.endDate}
                        </p>
                        <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>
                        <p className="text-sm text-gray-500">Major: {edu.major}</p>
                        <p className="text-sm text-gray-500">Minor: {edu.minor}</p>
                        <h4 className="font-semibold mt-2">Courses:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-500">
                            {edu.courses.map((course, idx) => (
                                <li key={idx}>{course}</li>
                            ))}
                        </ul>
                        <h4 className="font-semibold mt-2">Achievements:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-500">
                            {edu.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EducationCards;