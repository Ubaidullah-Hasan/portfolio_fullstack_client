"use client"
import { Button } from "@nextui-org/button"; 
import React from 'react';
import { LiaDownloadSolid } from "react-icons/lia";
import { Link } from "@nextui-org/link";


const CVDownloadButton = () => {

    const onButtonClick = () => {
        const pdfUrl = "/resume.pdf";
        const link = document.createElement("a");

        link.href = pdfUrl;
        link.download = "ubaidullah_resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button
            as={Link}
            className=" text-sm border border-black rounded-xl bg-transparent font-semibold bg-blue-800 hover:bg-black duration-200 text-white hover:text-white"
            endContent={
                <LiaDownloadSolid
                    className="duration-100 text-white hover:text-white animate-bounce"
                    size={20}
                />
            }
            variant="flat"
            onClick={onButtonClick}
        >
            Download CV
        </Button>
    );
};

export default CVDownloadButton;