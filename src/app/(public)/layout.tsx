import React from "react";

import { Navbar } from "@/src/components/navbar";
import { TChildren } from "@/src/types";
import Footer from "@/src/components/footer/Footer";

const PublicLayout = ({ children }: TChildren) => {
  return (
    <div className="bg-blue-50 ">
      <Navbar />
      <main className="flex flex-col items-center relative min-h-screen max-w-screen-xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
