import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import building_web from "../assets/building_web.svg";
import cat from "../assets/cat.svg";

const MeetTheTeam = ({ top = 10, left = 10 }) => {
  const position_style = {
    top: `${top}px`,
    left: `${left}px`,
  };
  return (
    <div className="absolute w-full h-full ">
      <h1
        className={`absolute -m-1 text-9xl font-bold bg-gradient-to-r from-zinc-100  to-white inline-block font-[POPPINS] text-transparent bg-clip-text`}
        style={position_style}
      >
        Meet the team
      </h1>
    </div>
  );
};

const Fifth_page = () => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  const Design = {
    zIndex: "1", // Lower than the noise background's z-index of 2
  };
  return (
    <div className="flex items-center justify-center w-full h-full absolute bg-black overflow-hidden">
      <img
        src={building_web}
        id="#image5"
        alt="svg of builders"
        className="absolute z-20 h-96 w-96 translate-x-78 -translate-y-52"
      />
      <img
        src={cat}
        d="#image6"
        alt="svg of builders"
        className="absolute z-30 h-40 w-40 translate-x-96 "
      />

      <div
        className=" bg-black h-80 w-80  translate-x-78 -translate-y-52 -z-20"
        style={Design}
      />
      <h1 className="absolute text-white font-bold text-4xl translate-x-96 translate-y-11 z-40">
        Be sleow
      </h1>
      <MeetTheTeam top={0} />
      <MeetTheTeam top={100} left={10} />
      <MeetTheTeam top={200} left={10} />
      <MeetTheTeam top={300} left={10} />
      <MeetTheTeam top={400} left={10} />
      <MeetTheTeam top={500} left={10} />
      <MeetTheTeam top={600} left={10} />

      <div className="absolute -z-21 py-6 px-9 rounded-full bg-black bg-opacity-20 left-50 shadow-glow">
        <div className="relative z-20 flex flex-rows">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  );
};

export default Fifth_page;
