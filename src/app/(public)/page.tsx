import About from "./about/page";
import BlogPage from "./blog/page";
import Education from "./education/page";
import ExperiencePage from "./experience/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./skills/page";

const Home = () => {
  return (
    <>
      <div className="my-[20px] space-y-[100px]">
        <About />
        <Education />
        <SkillsPage />
        <ExperiencePage />
        <ProjectsPage />
        <BlogPage/>
      </div>
    </>
  );
};

export default Home;
