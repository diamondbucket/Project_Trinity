import React ,{ useLayoutEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UpperhandSvg from "../assets/upperhand.svg";
import LowerhandSvg from "../assets/lowerhand.svg";

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
        markers:{
          startColor:"white",
          endColor:"white",
        },
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
        markers:{
          startColor:"white",
          endColor:"white",
        },
      },
    });
  },[]);

  const rotationAngle_upper = -35;
  const rotationAngle_lower = -20; // Adjust the rotation angle as needed
  const translateX_ = -85;
  const translateY_ = -190;
  const translateX = 60;
  const translateY = 90;

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
  return (
    <div>
      <div id="Main">
        <div className="overflow-hidden bg-black w-full h-screen flex items-center justify-center">
            <img id="image" src={UpperhandSvg} alt="Upperhand" style={svgStyle} />
            <img id="image_2" src={LowerhandSvg} alt="Lowerhand" style={svgStyle_2} />
        </div>
      </div>
    </div>
  );
};

export default Main;
