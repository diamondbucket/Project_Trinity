import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import cat from "../assets/cat.svg";

const MeetTheTeam = ({ top = 10, left = 10 }) => {
  const position_style = {
    top: `${top}px`,
    left: `${left}px`,
  };
  return (
    <h1
      className={`absolute -m-10 pt-32 text-6xl pl-12 lg:-m-1 lg:pt-0 lg:pl-0 lg:text-9xl font-bold  inline-block font-[POPPINS] text-purple-300 `}
      style={position_style}
    >
      Meet the team
    </h1>
  );
};

const Fifth_page = () => {
  const people = [
    {
      id: 1,
      name: "Gokul",
      designation: "frontend Developer",
      image:
        "https://i.pinimg.com/564x/49/06/ba/4906bac618ea907df2f096ada2042986.jpg",
    },
    {
      id: 2,
      name: "Pranav",
      designation: "frontend Developer",
      image:
        "https://i.pinimg.com/564x/9e/d2/69/9ed269f44442723ad25ea9c7cae2c02a.jpg",
    },
    {
      id: 3,
      name: "Thirumoolar",
      designation: "Designer and Backend Developer",
      image:
        "https://i.pinimg.com/564x/e0/87/7c/e0877c5fbec4d096a4334a09bbe25ef5.jpg",
    },
    {
      id: 4,
      name: "Harikrishnan",
      designation: "React Native Developer",
      image:
        "https://i.pinimg.com/564x/81/9a/e2/819ae27dd47cd86e5486ce43439ae408.jpg",
    },
    {
      id: 5,
      name: "Kaviya",
      designation: "Data Analyst",
      image:
        "https://i.pinimg.com/736x/43/8b/74/438b747628f8f2a0ddfce090595c9806.jpg",
    },
    {
      id: 6,
      name: "Athulya",
      designation: "Designer",
      image:
        "https://i.pinimg.com/564x/75/64/2d/75642d5dfc2e02a9178fd14b0a9e883b.jpg",
    },
    {
      id: 7,
      name: "Kirubhakaran",
      designation: "Marketing Head",
      image:
        "https://i.pinimg.com/564x/bf/c7/b2/bfc7b27876d4e3c13d408a5cc444e6f1.jpg",
    },
  ];

  return (
    <div
      id="about"
      className="relative flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-t from-black via-purple-950 to-black overflow-hidden"
    >
      <img
        src={cat}
        alt="svg of builders"
        className="absolute z-30 h-40 w-40 translate-x-96"
      />
      <h1 className="absolute text-white font-bold text-4xl translate-x-96 translate-y-11 z-40">
        Be slow
      </h1>
      <MeetTheTeam top={0} />
      <MeetTheTeam top={100} left={10} />
      <MeetTheTeam top={200} left={10} />
      <MeetTheTeam top={300} left={10} />
      <MeetTheTeam top={400} left={10} />
      <MeetTheTeam top={500} left={10} />
      <MeetTheTeam top={600} left={10} />
      <div className="absolute -z-21 py-10 px-20  rounded-full bg-black bg-opacity-85  left-50 shadow-glow">
        <div className="relative z-20 flex flex-rows">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  );
};

export default Fifth_page;
