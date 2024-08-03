import React, { useState } from "react";
import { CardStack } from "../components/ui/card-stack";
import { cn } from "../utils/cn";

export function CardStackDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:h-[100vh] flex flex-col space-y-5 lg:flex-row items-center justify-center w-full p-4">
      <div className="relative text-white text-5xl lg:text-9xl translate-x-0 lg:translate-x-1/4 lg:-left-96 mb-8 lg:mb-0">
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-900 text-transparent inline-block bg-clip-text p-16 font-bold ">
            FAQ
          </div>
          <span
            style={{
              transform: open ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-purple-800 shadow-lg shadow-purple-600 transition-transform duration-300 ease-out"
          />
        </div>
      </div>
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-purple-100 text-purple-900 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "What specific services does your company provide?",
    designation: "Senior Software Engineer",
    content: (
      <p>
        We specialize in building{" "}
        <Highlight>intuitive websites with 3D elements</Highlight> and beautiful
        designs. Our <Highlight>rule-based chatbots</Highlight> efficiently
        handle customer queries, and our{" "}
        <Highlight>machine learning models</Highlight> boost productivity and
        maximize profits.
      </p>
    ),
  },
  {
    id: 1,
    name: "How can your websites enhance my brand's customer retention and conversion rates?",
    designation: "Senior Shitposter",
    content: (
      <p>
        3D and beautifully designed websites provide an{" "}
        <Highlight>engaging user experience</Highlight>, capturing attention and
        enhancing interaction. They create a{" "}
        <Highlight>memorable brand presence</Highlight>, distinguishing your
        firm from competitors. This leads to higher customer retention and
        increased conversion rates.
      </p>
    ),
  },
  {
    id: 2,
    name: "How do your chatbots enhance customer service and efficiency?",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        Rule-based chatbots provide{" "}
        <Highlight>instant responses to customer inquiries</Highlight>,
        improving response time and satisfaction. They handle repetitive
        questions efficiently, freeing up human agents for more complex tasks.
        This leads to cost savings and consistent customer service.
      </p>
    ),
  },
  {
    id: 3,
    name: "How do your machine learning models benefit sales analysis and financial performance?",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        Machine learning models <Highlight>analyze sales data</Highlight> to
        identify trends and patterns, providing actionable{" "}
        <Highlight>insights</Highlight>. They
        <Highlight>predict future sales and profitability</Highlight>, helping
        in strategic decision-making. This leads to optimized marketing efforts
        and improved financial performance.
      </p>
    ),
  },
];
