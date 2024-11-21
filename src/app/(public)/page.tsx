import React from "react";

import { Navbar } from "@/src/components/navbar";

const Home = () => {
  return (
    <>
      <div className="bg-blue-50 ">
        <Navbar />
        <main className="flex flex-col relative min-h-screen" />
      </div>
    </>
  );
};

export default Home;
