import EducationCards from "@/src/components/cards/EducationCards";
import SectionTitle from "@/src/components/SectionTitle";
import { getEducationData } from "@/src/services/education.services";

const Education = async () => {
  const educationData = await getEducationData();

  return (
    <section
      className="scroll-mt-[120px] bg-white p-8 rounded-2xl flex flex-col"
      id="education"
    >
      <div className="mb-10">
        <SectionTitle
          className="flex flex-col justify-center items-center text-center w-1/3 mx-auto"
          slogan=" Building Knowledge for a Brighter Future"
          title="Education"
        />
      </div>
      <div>
        <EducationCards educationData={educationData} />
      </div>
    </section>
  );
};


export default Education;
