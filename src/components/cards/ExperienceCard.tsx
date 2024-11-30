import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";
import { IoOpenOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

import { TExperience } from "@/src/types";

const ExperienceCard = ({ exprience }: { exprience: TExperience }) => {
    return (
        <div
            className="flex flex-col border rounded-lg shadow-lg p-4 bg-white h-full"
        >
            {/* Title and Company */}
            <div>
                <h2 className="text-xl font-bold text-blue-700">
                    {exprience.title}
                </h2>
                <h3 className="text-gray-700">{exprience.company}</h3>
            </div>

            {/* Location */}
            <p className="mt-2 text-sm text-gray-500">
                📍 {exprience.location}
            </p>

            {/* Dates */}
            <p className="text-sm text-gray-500">
                {new Date(exprience.startDate).toLocaleDateString()} -{" "}
                {exprience.isCurrent
                    ? "Present"
                    : new Date(exprience.endDate || "").toLocaleDateString()}
            </p>

            {/* Description */}
            <p className="mt-4 text-gray-700">{exprience.description}</p>

            {/* Skills */}
            <div className="mt-4">
                <h4 className="font-semibold text-sm">Skills:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                    {exprience.skills.map((skill, i) => (
                        <span
                            key={i}
                            className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Projects Links */}
            <div className="mt-4">
                <h4 className="font-semibold text-sm">Projects:</h4>
                <div className="flex gap-3 mt-2">
                    {exprience.projectsLink.map((link, i) => (
                        <Button
                            key={i}
                            as={Link}
                            className="bg-black text-white uppercase"
                            endContent={
                                link.includes("https://github.com") ?
                                    <FaGithub size={16} />
                                    :
                                    <IoOpenOutline size={16} />
                            }
                            href={link}
                            radius="full"
                            size="sm"
                            target="_blank"
                        > View
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
