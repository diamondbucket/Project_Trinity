// src/components/ProcessCard.js
import React from "react";
import Hexagon from "../assets/noun-hexagon-5881596.svg";
import Stroke from "../assets/curve_line.svg";

const ProcessCard = () => {
  return (
    <div
      className="bg-white p-10 rounded-[100px] shadow-lg w-[800px] h-[1000px] relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    > <div className="w-[900px] py-20">
        <h2 className="text-4xl font-bold translate-x-9 ">The world moves quickly; we keep up.</h2>
        <p className="text-4xl font-bold translate-x-16"> Clear the clutter with our process</p>
      </div>
      <div className=" bg-gray-600 w-1 h-[500px] translate-x-[62px] translate-y-"></div>
      <div>
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <img src={Hexagon} alt="image" className="w-14 translate-x-9 -translate-y-[520px]"></img>
              <h3 className="text-3xl font-semibold  px-[80px] -translate-y-[527px] ">Book a call</h3>
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
