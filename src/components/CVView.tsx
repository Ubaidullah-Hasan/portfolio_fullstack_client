import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import React from 'react';
import { IoTelescopeOutline } from 'react-icons/io5';

const CVView = () => {
    return (
        <Button
            isExternal
            as={Link}
            className="text-sm border border-black rounded-xl bg-transparent font-semibold hover:bg-blue-800 text-black hover:text-white "
            endContent={
                <IoTelescopeOutline
                    className="duration-100 hover:text-white"
                    size={20}
                />
            }
            href={"https://drive.google.com/file/d/1fHcrjXzpu_7qEa08Dft8p3UqaPPIeMLf/view?usp=drive_link"} // todo
            variant="flat"
        >
            View CV
        </Button>
    );
};

export default CVView;