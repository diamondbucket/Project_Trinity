// src/pages/Fourth_page.js
import React from "react";
import ProcessCard from "../components/ProcessCard";

const Fourth_page = () => {
  return (
    <div className="w-full min-h-screen bg-black  items-center hidden md:block lg:flex justify-center p-4 overflow-auto">
      <ProcessCard />
    </div>
  );
};

export default Fourth_page;
