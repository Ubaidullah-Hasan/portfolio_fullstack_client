import React from 'react';
import { FaCircleCheck, FaCircleDown, FaPenFancy } from 'react-icons/fa6';
import { TbBulbFilled } from 'react-icons/tb';
import { SiApostrophe } from "react-icons/si";
import { IoMdEye } from 'react-icons/io';


const BlogAnalysis = () => {
    return (
        <div className="w-full p-6 flex items-start justify-start gap-8 bg-white/80 h-[200px] rounded-md">
            <div
                className="relative w-20 h-20 flex items-center justify-center"
            >
                {/* ব্যাকগ্রাউন্ড অ্যানিমেশন */}
                <div
                    className="absolute inset-0 animate-spin bg-[#4147ee]/20 rounded-full"
                    style={{ animationDuration: "1s" }}
                />

                {/* স্থির আইকন */}
                <SiApostrophe className="relative z-10" color="#4147ee" size={40} />
            </div>


            <div>
                {/* <h4 className='uppercase font-bold mb-4'>Blogs</h4> */}
                <h4 className='text-5xl font-medium mb-2'>24</h4>
                <p className='text-[#4147ee] mb-2 capitalize'>
                    Try to published more blogs.
                </p>
                <div className='flex gap-5'>
                    <p className='flex items-center justify-start gap-2 text-lg text-stone-700'>
                        <IoMdEye className='text-gray-500' size={25} />
                        {12} {/* todo */}
                    </p>
                    <p className='flex items-center justify-start gap-2 text-lg text-stone-700'>
                        <FaPenFancy className='text-blue-500' size={20} />
                        {12} {/* todo */}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogAnalysis;