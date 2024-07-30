import React from "react";
import triangle_vid from "../assets/triangle_vid.mp4";

const Second_page = () => {
  return (
    <div className="bg-black h-screen  overflow-hidden relative flex-col items-start">
      <div>
        <h1 className="lg:text-7xl text-4xl font-bold m-10 lg:py-10 lg:px-36 text-purple-700">
          At trinity
        </h1>
      </div>
      <div className="flex py-10">
        <div className="p-6 h-56 lg:w-3/4 w-96">
          <p className="text-white lg:px-28 lg:py-15 lg:text-2xl text-xl  py-36 px-10 w-[500px]">
            We’re dedicated to we are at the forefront of technological
            innovation, dedicated to empowering businesses with advanced AI,
            machine learning, and web development solutions. Our goal is to help
            companies transform their operations, enhance customer experiences,
            and stay ahead in a competitive market.
          </p>
        </div>
        <div className="flex -mt-24">
          <video
            className="absolute lg:h-auto h-52 lg:-z-1 lg:-translate-x-20  lg:w-[800px] -translate-x-80"
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

