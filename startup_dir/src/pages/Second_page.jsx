import React from "react";
import triangle_vid from "../assets/triangle_vid.mp4";

const Second_page = () => {
  return (
    <div className="bg-black h-screen overflow-hidden relative flex-col items-start">
      <div>
        <h1 className="text-7xl font-bold m-10 py-10 px-36 text-purple-700">
          At trinity
        </h1>
      </div>
      <div className="flex py-10">
        <div className="p-6 h-56 w-[900px]">
          <p className="text-white px-28 py-15 text-2xl">
            We’re dedicated to we are at the forefront of technological
            innovation, dedicated to empowering businesses with advanced AI,
            machine learning, and web development solutions. Our goal is to help
            companies transform their operations, enhance customer experiences,
            and stay ahead in a competitive market.
          </p>
        </div>
        <div className="flex -mt-24">
          <video
            className="absolute -z-1 -translate-x-20 -translate-y-52 w-[800px] h-[800px]"
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
