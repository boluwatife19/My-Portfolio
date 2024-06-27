import React, { useState, useEffect } from "react";

const AnimatedNumber = ({ target }) => {
  const duration = 2000; // 2 seconds
  const [value, setValue] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 300);
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev + increment >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <span>{Math.round(value)}</span>;
};

export const Datas = () => {
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - 2021;
  
  return (
    <div className="w-full flex justify-between border-black border-4 mt-12">
      <div className="date p-8 w-full text-center text-3xl font-bold">
        <AnimatedNumber target={yearsActive} />+ <br /> Experience
      </div>
      <div className="clients p-8 w-full text-center border-black border-l-4 text-3xl font-bold">
        <AnimatedNumber target={15} />+ <br /> Happy Clients
      </div>
      <div className="projects p-8 w-full text-center border-black border-l-4 text-3xl font-bold">
        <AnimatedNumber target={30} />+ <br /> Projects
      </div>
    </div>
  );
};
