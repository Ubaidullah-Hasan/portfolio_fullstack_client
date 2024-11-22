import { IProject } from '@/src/types';
import { Link } from '@nextui-org/link';
import Image from 'next/image';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";



const ProjectCard = ({ project, i }: { project: IProject, i: number }) => {
    return (
        <div className={`rounded shadow transition-transform transform hover:scale-[1.01] px-5 py-6 border border-gray-100/50 grid content-between ${i === 1 ? "scale-[1.03]" : "scale-100"}`}>

            <Image alt={project.title} className="rounded-t-lg rounded-b-none" height={200} src={project?.images[0]} width={400} />

            <div className="py-4">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-700 text-base">{project.description}</p>
            </div>
            <div>
                <p className="text-gray-600"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                <p className="text-gray-600"><strong>Start Date:</strong> {project.startDate.toLocaleDateString()}</p>
                <p className="text-gray-600"><strong>Status:</strong> {project.isOngoing ? 'Ongoing' : `Completed on ${project.endDate?.toLocaleDateString()}`}</p>
            </div>
            <div className="mt-4">
                <Link isExternal
                    href={project.link}
                    target="_blank"
                    className="flex justify-self-start items-center justify-center gap-2 bg-black rounded-full text-white font-medium py-2 px-4 cursor-pointer">
                    View Project
                    <GoArrowUpRight size={20} />
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;