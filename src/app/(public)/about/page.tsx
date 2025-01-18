import React from "react";
import { Link } from "@nextui-org/link";
import { FaDiscord, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import LeftSideImage from "../../../components/LeftSideImage";

import { siteConfig } from "@/src/config/site";
// import { BackgroundOfMyImg } from "@/src/components/icons";
import checkImg from "@/src/assets/gif/cb.gif"
import CVDownloadButton from "@/src/components/CVDownloadButton";
import CVView from "@/src/components/CVView";

const About = () => {
  return (
    <section className="grid grid-cols-3 gap-3 scroll-mt-[120px]" id="about">
      {/* left side */}
      <div className="bg-white p-8 rounded-2xl flex flex-col gap-y-3 text-center ">
        {/* self info */}
        <LeftSideImage />

        <h1 className="text-4xl font-bold ">Ubaidullah Hasan</h1>
        <p>Full-Stack MERN Developer for Scalable Web Apps.</p>

        {/* social link */}
        <div className="flex items-center justify-center gap-x-3">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.facebook}>
            <FaFacebookF
              className="text-black hover:text-blue-600 border p-2 rounded-md"
              size={40}
            />
          </Link>
          <Link isExternal aria-label="Twitter" href={siteConfig.links.linkedin}>
            <FaLinkedinIn
              className="text-black hover:text-blue-600 border p-2 rounded-md"
              size={40}
            />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <FaDiscord
              className="text-black hover:text-blue-600 border p-2 rounded-md"
              size={40}
            />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <FaGithub
              className="text-black hover:text-blue-600 border p-2 rounded-md"
              size={40}
            />
          </Link>
        </div>
      </div>

      {/* right side */}
      <div className="col-span-2 flex gap-3 flex-col">
        <div className="flex flex-col gap-y-5 bg-white p-8 rounded-2xl">
          <p>Hello There!</p>

          <h1 className="text-[44px] font-extrabold uppercase leading-[3.5rem]">
            I’m Full-Stack
            <span className="text-stock-dark"> MERN Developer</span>, dedicated
            to crafting scalable{" "}
            <span className="text-stock-dark"> web apps </span> that
            <span className="text-stock-dark"> meet user needs </span>
            and drive business success.
          </h1>

          <p className="flex items-center gap-3">
            <span className="w-3 h-3 bg-blue-800 rounded-full" /> Available for
            Working
          </p>

          <div className="flex gap-6 items-center">
            <CVDownloadButton />
            <CVView />
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl space-y-2">
          <p className="flex items-center gap-1">
            About Me
            <Image
              alt="Check gif image"
              height={10}
              src={checkImg}
              width={20}
            />
          </p>
          <Marquee>
            <h3 className="font-semibold text-xl">
              I am Ubaidullah Hasan, a passionate Full-Stack MERN Developer
              living in Bangladesh. Currently studying Computer Science at
              Daffodil International University, I focus on honing my skills and
              solving problems effectively. My goal is to delve into machine
              learning and robotics, aspiring to launch my own startup in the
              future. I love meeting new people and enjoy teamwork, believing
              that collaboration leads to greater success. In my free time, I
              play badminton and cricket, always striving to be a better person.
              With a strong commitment to my dreams, I am excited about the
              journey ahead!
            </h3>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default About;
