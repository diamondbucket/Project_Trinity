import React ,{ useLayoutEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UpperhandSvg from "../assets/upperhand.svg";
import LowerhandSvg from "../assets/lowerhand.svg";
import TriangleSvg from "../assets/triangle.svg";

const Main = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("#image",{
      x:0.000001,
      y:1,
      duration:1,
      scrollTrigger:{
        trigger:"#image",
        start:"bottom 99%",
        end:"",
        scrub:true,
      },
    });
  },[]);
  useLayoutEffect(() => {
    gsap.to("#image_2",{
      x:1,
      duration:1,
      scrollTrigger:{
        trigger:"#image",
        start:"bottom 99%",
        end:"",
        scrub:true,
      },
    });
  },[]);

  const rotationAngle_upper = -35;
  const rotationAngle_lower = -20; // Adjust the rotation angle as needed
  const translateX_ = -85;
  const translateY_ = -190;
  const translateX = 60;
  const translateY = 100;

  const svgStyle = {
    width: "600px", // Adjust width as needed
    height: "600px", // Adjust height as needed
    transform: `rotate(${rotationAngle_upper}deg) translate(${translateX_}px, ${translateY_}px)`, // Rotate the SVG by the specified angle
  };

  const svgStyle_2 = {
    width: "600px", // Adjust width as needed
    height: "600px", // Adjust height as needed
    transform: `rotate(${rotationAngle_lower}deg) translate(${translateX}px, ${translateY}px)`, // Rotate the SVG by the specified angle
  };


  const svgStyle_3 ={
    width: "100px", // Adjust width as needed
    height: "100px", // Adjust height as needed
    transform: `rotate(${rotationAngle_lower}deg) translate(${translateX}px, ${translateY}px)`,
  }
  return (
    <div>
      <div id="Main" className="bg-black">
        <div className="text-white px-[33rem]">Step into the future</div>
        <h4 className="text-purple-600 font-bold flex-r text-4xl px-[30rem]">SHAPING AI HORIZONS</h4>
        <div className="overflow-hidden bg-black w-full h-screen flex items-center justify-center">
            <img id="image" src={UpperhandSvg} alt="Upperhand" style={svgStyle} />
            <img id="image_2" src={LowerhandSvg} alt="Lowerhand" style={svgStyle_2} />
        </div>
      </div>
    </div>
  );
};

export default Main;
