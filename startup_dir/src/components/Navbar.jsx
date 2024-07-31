import React, { useState } from "react";
import { Si1Password } from "react-icons/si";
import { Link } from "react-scroll";
import DottedNavbar from "./dotted_navbar";
import JoinUsButton from "./JoinUsButton";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className=" z-50 py-3 overflow-hidden bg-black">
      <div className="py-3 pb-4 lg:px-10 px-7 -translate-x-2 lg:-translate-x-0 bg-black flex justify-between items-center ">
        <Link
          to="main"
          spy={true}
          smooth={true}
          offset={50}
          duration={700}
          onClick={closeMenu}
        >
          <div className="font-bold text-lg lg:text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 lg:text-gray-800 ">
            <span className="ml-2 text-white">✺ Trinity</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <DottedNavbar />
        </div>
        <div className="z-30">
          <JoinUsButton />
        </div>
        <div className="block md:hidden">
          <button onClick={handleClick} className="text-white">
            {click ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {click && (
        <div className="md:hidden flex flex-col items-center space-y-4">
          <DottedNavbar />
        </div>
      )}
    </div>
  );
};

export default Navbar;
