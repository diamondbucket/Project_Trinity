import React from "react";
import triangle_vid from "../assets/triangle_vid.mp4";

const Second_page = () => {
  return (
    <div className="bg-black h-screen overflow-hidden relative flex-col items-start">
      <div>
        <h1 className="text-7xl font-bold py-10 px-36 text-[#8a15b6]">
          At trinity
        </h1>
      </div>
      <div className="flex  py-10">
        <div className="p-6 h-56 w-[900px]">
          <p className="text-white px-28 text-2xl">
            We’re dedicated to we are at the forefront of technological
            innovation, dedicated to empowering businesses with advanced AI,
            machine learning, and web development solutions. Our goal is to help
            companies transform their operations, enhance customer experiences,
            and stay ahead in a competitive market.
          </p>
        </div>
        <div className="flex -mt-24">
          <video
            className="p-8 w-[700px] h-[350px]"
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
