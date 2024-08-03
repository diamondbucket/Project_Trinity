import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UpperhandSvg from "../assets/upperhand_1.svg";
import LowerhandSvg from "../assets/lowerhand_1.svg";
import ShinyTriangleSvg from "../assets/shiny_triangle.svg";
import NoiseImage from "../assets/noise.png";
import Navbar from "../components/Navbar";
import JoinUsButton from "../components/JoinUsButton";

const Main = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("#image", {
      x: 0.000001,
      y: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: "#image",
        start: "bottom 99%",
        end: "",
        scrub: 0.5,
      },
    });
  }, []);
  useLayoutEffect(() => {
    gsap.to("#image_2", {
      x: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#image",
        start: "bottom 99%",
        end: "",
        scrub: 0.5,
      },
    });
  }, []);
  useLayoutEffect(() => {
    gsap.fromTo(
      "#triangle",
      { scale: 2 }, // Initial scale (big)
      {
        scale: 0.2, // Final scale (small)

        duration: 1, // Duration of the animation
        ease: "power1.inOut", // Easing function for smooth easing out
        scrollTrigger: {
          trigger: "#triangle",
          start: "top 0%", // Adjust as needed
          end: "bottom 0%", // Adjust as needed
          scrub: 0.5,
        },
      }
    );
  }, []);

  const rotationAngle_upper = -20;
  const rotationAngle_lower = -13; // Adjust the rotation angle as needed
  const translateX_ = -100;
  const translateY_ = -150;
  const translateX = 120;
  const translateY = 70;

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

  const noiseBackgroundStyle = {
    backgroundImage: `url(${NoiseImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    opacity: "0.08", // Adjust the opacity as needed
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: "2",
  };

  const triangleStyle = {
    position: "absolute", // Position it absolutely
    width: "400px", // Adjust width as needed
    height: "400px", // Adjust height as needed
    top: "50%", // Position it in the center vertically
    left: "50%", // Position it in the center horizontally
    transform: "translate(-45%, -35%)", // Center it perfectly
    zIndex: "1", // Make sure it is above the other SVGs
  };

  const textStyle = {
    textAlign: "center",
    zIndex: 5,
  };

  return (
    <div
      style={{
        position: "relative",

        minHeight: "screen",
      }}
    >
      {/* <div style={noiseBackgroundStyle}></div> */}
      <Navbar />
      <div id="Main" style={{ flex: "1" }}>
        <div className="overflow-hidden bg-black w-full h-100vh flex items-center justify-center">
          <div
            style={{
              position: "absolute",
              top: "18%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              zIndex: "5",
            }}
          >
            <p
              style={textStyle}
              className="text-2xl lg:text-5xl font-extrabold tracking-wide  text-white"
            >
              TRINITY
            </p>
          </div>

          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              zIndex: "5",
              opacity: "0.8",
            }}
          >
            <p
              style={{ ...textStyle }}
              className="text-xl lg:text-5xl text-2xl font-bold tracking-wide text-white w-80 lg:w-full"
            >
              SHAPING AI{" "}
              <span className="text-purple-700 text-2xl font-black">HORIZONS</span>
            </p>
          </div>

          <img
            id="image"
            src={UpperhandSvg}
            alt="Upperhand"
            style={svgStyle}
            className="z-15"
          />
          <img
            id="image_2"
            src={LowerhandSvg}
            alt="Lowerhand"
            style={svgStyle_2}
            className="z-15"
          />
          <img
            id="triangle"
            src={ShinyTriangleSvg}
            alt="Shiny Triangle"
            style={triangleStyle}
            className="z-20"
          />
        </div>
        <div className="bg-black justify-center lg:hidden md:block flex ">
        <JoinUsButton />
      </div>
      </div>
    </div>
  );
};

export default Main;
