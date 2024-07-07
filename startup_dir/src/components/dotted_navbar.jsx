import React from "react";
import { Link } from "react-scroll";

const dotted_navbar = () => {
  return (
    <ul className="py-2 px-7 rounded-full flex space-x-32 border-2 border-dotted overflow-hidden border-purple-600 z-20">
      <li className="relative group">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-white cursor-pointer"
        >
          Product
        </Link>
        {/* <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:bg-current"></div> */}
      </li>
      <li className="relative group">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-white cursor-pointer"
        >
          Resources
        </Link>
        {/* <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>*/}
      </li>
      <li className="relative group">
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-white cursor-pointer"
        >
          Community
        </Link>
        {/*<div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:bg-current"></div> */}
      </li>
    </ul>
  );
};

export default dotted_navbar;
