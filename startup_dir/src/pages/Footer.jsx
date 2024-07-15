import React from "react";

const Footer = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen h-[600px] bg-gradient-to-b from-black to-purple-600 text-white p-8 flex flex-col justify-end">
      <div className="container flex justify-between items-center -translate-y-36">
        <div className="flex items-center space-x-4">
          <div className="text-4xl font-bold">✺ TRINITY</div>
        </div>
        <div className="flex space-x-8">
          <a
            href="#Main"
            onClick={(e) => handleScroll(e, "#Main")}
            className="hover:underline"
          >
            Home
          </a>
          <a
            href="#Features"
            onClick={(e) => handleScroll(e, "#Features")}
            className="hover:underline"
          >
            Features
          </a>
          <a
            href="#Pricing"
            onClick={(e) => handleScroll(e, "#Pricing")}
            className="hover:underline"
          >
            Pricing
          </a>
          <a
            href="#Faq"
            onClick={(e) => handleScroll(e, "#Faq")}
            className="hover:underline"
          >
            Faqs
          </a>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-4 -translate-y-20"></div>

      <div className="container mx-auto mt-4 flex justify-center items-center">
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:info@example.com"
            className="text-xl hover:text-gray-400"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
