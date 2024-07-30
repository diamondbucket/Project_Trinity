// src/components/ProcessCard.js
import React from "react";
import Hexagon from "../assets/noun-hexagon-5881596.svg";
import Stroke from "../assets/curve_line.svg";

const ProcessCard = () => {
  return (
    <div
      className="bg-white p-10 lg:rounded-[6rem] rounded-[3rem] shadow-lg w-[800px] lg:h-[1000px] h-[120vh] relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    > <div className="w-[150%] lg:py-20 py-10">
        <h2 className="flex lg:text-4xl text-lg font-bold -translate-x-5 lg:translate-x-9 ">The world moves quickly; we keep up.</h2>
        <p className="flex lg:text-4xl text-lg font-bold -translate-x-5 lg:translate-x-16"> Clear the clutter with our process</p>
      </div>
      <div className=" bg-gray-600 w-1 relative lg:h-[500px] lg:translate-x-[62px] h-[70%]"></div>
      <div>
          <div className="mb-8">
            <div className="flex relative items-center mb-2">
              <img src={Hexagon} alt="image" className="lg:w-14 relative lg:translate-x-9 lg:-translate-y-[520px] w-10 -translate-x-[18px] -translate-y-[610px]"></img>
              <h3 className="lg:text-3xl lg:font-semibold  lg:px-[80px] lg:-translate-y-[527px] text-2xl ">Book a call</h3>
              <p className="text-white -translate-y-[525px] font-bold text-l -translate-x-[315px]">1</p>
            </div>
            <div>
              <p className="text-black  text-xl w-[720px] px-[140px] -translate-y-[530px] ">
              Choose a date and time to book a strategic meeting, where we will
              define the project objectives, timeline, and financial approach.
              </p>
            </div>  
          </div>
        <div className="mb-8">
          <div className="flex items-center mb-2">
          <img src={Hexagon} alt="image" className="w-14 translate-x-9 -translate-y-[480px] "></img>
            <h3 className="text-3xl font-semibold  px-[80px] -translate-y-[485px]">Receive a Proposal</h3>
            <p className="text-white  font-bold text-l -translate-y-[486px] -translate-x-[432px]">2</p>
          </div>
          <p className="text-black text-xl w-[680px] px-[140px] -translate-y-[485px] ">
            We'll deliver a tailored project layout to you, inclusive of
            objectives, a sequence schedule, and cost estimates within a period
            of 1-2 business days.
          </p>
        </div>
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <img src={Hexagon} alt="image" className="w-14 translate-x-9 -translate-y-[450px]"></img>
              <h3 className="text-3xl font-semibold -translate-y-[455px] px-[80px]">Kickoff the Project</h3>
          </div>
          <p className="text-black text-xl w-[695px] px-[140px] -translate-y-[455px]">
            Sign the contract, send the deposit, lean back, and let us do our
            thing. We'll invite you to a design review meeting in 5-7 business
            days.
          </p>
          <p className="text-white  font-bold text-l -translate-y-[595px] translate-x-[60px] ">3</p>
          <img src={Stroke} className="w-[500px] -translate-y-[1300px] translate-x-[520px]"/>
        </div>
      </div>  
    </div>
  );
};

export default ProcessCard;
