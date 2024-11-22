import About from "./_components/About";
import Education from "./education/page";

const Home = () => {
  return (
    <>
      <div className="my-[20px] space-y-[100px]">
        <About />
        <Education />
      </div>
    </>
  );
};

export default Home;
