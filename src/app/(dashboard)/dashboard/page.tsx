import SkillsChart from "@/src/app/(dashboard)/__components/SkillsChart";
import { getSkillsAnalysis } from "@/src/services/skills.services";
import ProjectsAnalysis from "../__components/ProjectsAnalysis";


const DashboardPage = async () => {
  const skillsAnalysisData = await getSkillsAnalysis();

  return (
    <div
      className={`h-screen`}
      style={{
        backgroundImage: `url('/dash_star_bg.jpg')`,
      }}
    >
      <div className="h-full flex justify-between items-start gap-4 bg-cover bg-center backdrop-blur-lg bg-[#b1defb81] p-4">
        <div className="rounded-md   bg-gradient-to-b from-[#0bbbfb] to-[#4147ee]  w-[22%] h-full shadow-xl p-3 text-white">
          sidebar
        </div>
        <div className="flex-1 flex flex-col gap-6 h-full">
          <div className="rounded-md h-20 flex items-center justify-between text-white">
            <div>
              <h1 className="text-4xl font-bold">Welcome Admin!</h1>
              <p>Your gateway to managing everything with ease and efficiency.</p>
            </div>
            <div >
              nav
            </div>
          </div>
          <div className=" flex flex-col gap-5 rounded-md h-full">
            <div className="flex gap-5 ">
              <ProjectsAnalysis />

              <div className="w-full bg-white/50 h-[300px] rounded-md" />
              <div className="w-full bg-white h-[300px] rounded-md" />
            </div>

            {/* skills graph */}
            <div className="w-full bg-white h-full rounded-md">
              <SkillsChart data={skillsAnalysisData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DashboardPage;
