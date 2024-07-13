import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import "../Pages/Home/About/about.css";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  const handleLinkClick = (event, hash) => {
    event.preventDefault();
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, hash); // Update the URL hash without reloading the page
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "bg-black/50",
    "var(--black)",
    "var(--neutral-900)",
  ];

  return (
    <motion.div
      className="h-[30rem] overflow-y-auto flex flex-row justify-between items-start relative rounded-md sssxl:py-10 hidden-scrollbar dynamic-width gap-2 px-12"
      ref={ref}
    >
      <div className="div relative flex items-start w-full  md:w-1/2">
        <div className="hidden md:block w-full">
          <h1 className="text-3xl lg:text-5xl font-bold">About Me</h1>
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10 w-full">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg lg:text-2xl font-bold text-black"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm lg:text-base text-slate-800 w-full mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
        <div className="block md:hidden w-full flex flex-col items-start justify-start">
          <h1 className="text-2xl sssxl:text-5xl font-bold mb-[-50px] sssxl:mb-0">
            About Me
          </h1>
          {content.map((item, index) => (
            <div key={item.title + index} className="w-full">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xl sssxl:text-3xl font-bold text-black pt-16"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm sssxl:text-lg text-justify text-slate-800 w-full"
              >
                {item.description}
              </motion.p>

              <div className="w-full flex justify-end rounded-md relative overflow-hidden">
                <div
                  // style={{ background: backgroundGradient }}
                  className={cn(
                    "h-5/6 w-full rounded-md relative overflow-hidden",
                    contentClassName
                  )}
                >
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 flex justify-end  rounded-md relative md:sticky top-10 overflow-hidden hidden md:flex">
        <div
          // style={{ background: backgroundGradient }}
          className={cn(
            "hidden md:block h-5/6 w-2/3 rounded-md relative md:sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};
