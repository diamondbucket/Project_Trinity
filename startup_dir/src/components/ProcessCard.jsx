// src/components/ProcessCard.js
import React from "react";

const ProcessCard = () => {
  return (
    <div
      className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-3xl mx-auto relative overflow-hidden"
      style={{ minHeight: "150vh" }}
    > 
      <h2 className="text-2xl font-bold mb-4">
        The world moves quickly; we keep up. Clear the clutter with our process
      </h2>
      <div className="relative pl-8">
        <div className="absolute left-0 h-full border-l-4 border-gray-300"></div>

        {/* Squiggle Line SVG */}
        <svg
          className="absolute right-0 top-1/4 w-24 h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          stroke="black"
          strokeWidth="2"
        >
          <path d="M0 100 Q 50 0 100 100" />
        </svg>

        <div className="mb-8">
          <div className="flex items-center mb-2">
            <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
              1
            </div>
            <h3 className="text-xl font-semibold">Book a call</h3>
          </div>
          <p className="text-gray-700">
            Choose a date and time to book a strategic meeting, where we will
            define the project objectives, timeline, and financial approach.
          </p>
        </div>
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
              2
            </div>
            <h3 className="text-xl font-semibold">Receive a Proposal</h3>
          </div>
          <p className="text-gray-700">
            We'll deliver a tailored project layout to you, inclusive of
            objectives, a sequence schedule, and cost estimates within a period
            of 1-2 business days.
          </p>
        </div>
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
              3
            </div>
            <h3 className="text-xl font-semibold">Kickoff the Project</h3>
          </div>
          <p className="text-gray-700">
            Sign the contract, send the deposit, lean back, and let us do our
            thing. We'll invite you to a design review meeting in 5-7 business
            days.
          </p>
        </div>
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
              4
            </div>
            <h3 className="text-xl font-semibold">Project Execution</h3>
          </div>
          <p className="text-gray-700">
            We'll start working on the project as per the agreed timeline and
            milestones. Regular updates will be provided to ensure transparency
            and alignment.
          </p>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
              5
            </div>
            <h3 className="text-xl font-semibold">Final Delivery</h3>
          </div>
          <p className="text-gray-700">
            After completing the project, we'll deliver the final product,
            gather feedback, and ensure everything meets your expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
