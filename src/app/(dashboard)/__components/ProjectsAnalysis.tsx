import React from 'react';
import { SiApostrophe } from "react-icons/si";
import { TbBulbFilled } from "react-icons/tb";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleDown } from "react-icons/fa6";





const ProjectsAnalysis = () => {

    return (
        <div className="w-full p-6 flex items-start justify-start gap-8 bg-white h-[200px] rounded-md" >
            <div
                className="relative w-20 h-20 flex items-center justify-center"
            >
                {/* ব্যাকগ্রাউন্ড অ্যানিমেশন */}
                <div
                    className="absolute inset-0 animate-spin bg-gradient-to-b from-[#0bbbfb] to-[#4147ee]/80 rounded-full"
                    style={{ animationDuration: "1s" }}
                />

                {/* স্থির আইকন */}
                <TbBulbFilled className="relative z-10" color="#ffd242" size={40} />
            </div>


            <div>
                <h4 className='uppercase font-bold mb-4'>Total Projects</h4>
                <h4 className='text-5xl font-medium bg-gradient-to-r from-[#0bbbfb] to-[#4147ee] bg-clip-text text-transparent mb-2'>24</h4>
                <p className='flex items-center justify-start gap-3 text-warning-500 font-medium'><FaCircleDown />Ongoing: {12}</p>
                <p className='flex items-center justify-start gap-3  text-green-600  font-medium'><FaCircleCheck /> Completed: {12}</p>
            </div>
        </div>
    );
};

export default ProjectsAnalysis;