import React, { useState } from "react";
import { Link } from "react-scroll";

const dotted_navbar = () => {
  return (
    <ul className="relative py-4 px-10 rounded-full flex space-x-32 border-2 border-dotted overflow-hidden border-purple-600">
      <li className="relative group z-20 text-white cursor-pointer">
        <FlyoutLink>Product</FlyoutLink>
      </li>
      <li className="relative group z-20 text-white cursor-pointer">
        <FlyoutLink>Resources</FlyoutLink>
      </li>
      <li className="relative group z-20 text-white cursor-pointer">
        <FlyoutLink>Community</FlyoutLink>
      </li>
    </ul>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, SetOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => SetOpen(true)}
      onMouseLeave={() => SetOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-center rounded-full bg-purple-500 transition-transform duration-300 ease-out"
        />
      </a>
    </div>
  );
};

export default dotted_navbar;
