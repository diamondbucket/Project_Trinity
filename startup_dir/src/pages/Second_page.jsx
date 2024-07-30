import React from "react";
import triangle_vid from "../assets/triangle_vid.mp4";

const Second_page = () => {
  return (
    <div className="bg-black h-screen  overflow-hidden relative flex-col items-start">
      <div>
        <h1 className="lg:text-7xl text-6xl w-max lg:w-max font-bold m-14 lg:py-10 lg:px-36 text-purple-700 -translate-y-4 ">
          At trinity
        </h1>
      </div>
      <div className="flex">
        <div className="p-6">
          <p className="text-white lg:px-16 lg:py-15 lg:text-2xl text-lg lg:py-0 py-48 translate-x-4 lg:w-[1000px] ">
            We’re dedicated to we are at the forefront of technological
            innovation, dedicated to empowering businesses with advanced AI,
            machine learning, and web development solutions. Our goal is to help
            companies transform their operations, enhance customer experiences,
            and stay ahead in a competitive market.
          </p>
        </div>
        <div className="flex -mt-24">
          <video
            className="absolute lg:h-2/3 h-48 lg:-z-1 lg:-translate-y-24 translate-y-20 lg:-translate-x-32 lg:w-[800px] -translate-x-80"
            autoPlay
            loop
            muted
          >
            <source src={triangle_vid} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Second_page;

