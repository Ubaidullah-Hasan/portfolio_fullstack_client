import Image from "next/image";

import lineimg from "@/src/assets/svg/line.svg";

type TProps = {
  title: string;
  slogan: string;
  className?: string;
};
const SectionTitle = ({ title, slogan, className }: TProps) => {
  return (
    <div className={`${className} `}>
      <div className="space-y-5">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p>{slogan}</p>
      </div>
      <Image
        alt=""
        height={20} // Set appropriate height
        src={lineimg}
        width={80} // Set appropriate width
      />
    </div>
  );
};

export default SectionTitle;
