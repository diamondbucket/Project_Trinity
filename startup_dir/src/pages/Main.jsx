import React from "react";
import UpperhandSvg from "../assets/upperhand.svg";
import LowerhandSvg from "../assets/lowerhand.svg";

const Main = () => {
  const rotationAngle_upper = -35;
  const rotationAngle_lower = -20; // Adjust the rotation angle as needed
  const translateX_ = -85;
  const translateY_ = -190;
  const translateX = 50;
  const translateY = 90;

  const svgStyle = {
    width: "700px", // Adjust width as needed
    height: "700px", // Adjust height as needed
    transform: `rotate(${rotationAngle_upper}deg) translate(${translateX_}px, ${translateY_}px)`, // Rotate the SVG by the specified angle
  };

  const svgStyle_2 = {
    width: "700px", // Adjust width as needed
    height: "700px", // Adjust height as needed
    transform: `rotate(${rotationAngle_lower}deg) translate(${translateX}px, ${translateY}px)`, // Rotate the SVG by the specified angle
  };
  return (
    <div>
      <div id="Main">
        <div className="fixed bg-black w-full h-screen flex items-center justify-center">
          <div className="fixed w-full h-screen flex items-center justify-center bg-noise" />
          <img src={UpperhandSvg} alt="Upperhand" style={svgStyle} />
          <img src={LowerhandSvg} alt="Lowerhand" style={svgStyle_2} />
        </div>
      </div>
    </div>
  );
};

export default Main;
