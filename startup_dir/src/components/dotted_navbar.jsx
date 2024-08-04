import React, { useState } from "react";
import { Link } from "react-scroll";

const DottedNavbar = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="relative py-4 px-10 rounded-full flex space-x-32 border-2 border-dotted overflow-hidden border-purple-600">
      <FlyoutLink href="#Features" handleScroll={handleScroll}>
        Product
      </FlyoutLink>
      <FlyoutLink href="#FAQ" handleScroll={handleScroll}>
        FAQ
      </FlyoutLink>
      <FlyoutLink href="#about" handleScroll={handleScroll}>
        About Us
      </FlyoutLink>
    </ul>
  );
};

const FlyoutLink = ({ children, href, handleScroll }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a
        href={href}
        onClick={(e) => handleScroll(e, href)}
        className="relative text-white cursor-pointer"
      >
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

export default DottedNavbar;
