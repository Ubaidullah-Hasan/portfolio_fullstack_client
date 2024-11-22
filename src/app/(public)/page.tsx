import About from "./about/page";
import Education from "./education/page";
import SkillsPage from "./skills/page";

const Home = () => {
  return (
    <>
      <div className="my-[20px] space-y-[100px]">
        <About />
        <Education />
        <SkillsPage />
      </div>
    </>
  );
};

export default Home;
