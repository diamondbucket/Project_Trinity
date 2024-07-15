import React from "react";

const Sixth_page = () => {
  return (
    <div id="Faq" className="relative h-screen w-screen bg-black ">
      <div className="flex flex-row items-center justify-center">
        <div className="px-20 py-32 ">
          <h1 className="text-purple-700 text-opacity-75 text-7xl font-bold">
            FAQ
          </h1>
          <ul className="py-16 max-h-80 flex flex-col justify-between space-y-10">
            <li className="text-white text-4xl font-bold ">
              What services does trinity offer?
            </li>
            <li className="text-white text-4xl font-bold">
              How do chatbots work
            </li>
            <li className="text-white text-4xl font-bold">
              How long does it take to develop a custom ml model
            </li>
            <li className="text-white text-4xl font-bold">What is Three.js?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sixth_page;
