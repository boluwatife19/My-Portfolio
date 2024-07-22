import React, { useState, useEffect } from "react";
("use client");
import { PinContainer } from "../../../ui/Threedpin";

import envio from "../../../../assets/Images/websites/envio.png";
import estam from "../../../../assets/Images/websites/estam.png";
import seventhage from "../../../../assets/Images/websites/seventhage.png";
import makavid from "../../../../assets/Images/websites/makavid.png";
import userve from "../../../../assets/Images/websites/userve.png";
import loko from "../../../../assets/Images/websites/loko.png";
import { ButtonOne } from "../../../ui/button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Projects = [
  {
    id: 1,
    Name: "uServe Wireless Blog Page",
    TLang: ["TypeScript", "CSS", "PHP"],
    Role: "Project Creator",
    link: "https://uservewireless.net/blog/blog",
    imgs: userve,
  },
  {
    id: 2,
    Name: "Seventhage Energy & Technical",
    TLang: ["React"],
    Role: "Project Creator",
    link: "https://seventhageenergy.com/",
    imgs: seventhage,
  },
  {
    id: 3,
    Name: "Estam University",
    TLang: ["HandleBars", "JavaScript"],
    Role: "Frontend Developer",
    link: "https://estamuni.net",
    imgs: estam,
  },
  {
    id: 4,
    Name: "Envio Integrated Service",
    TLang: ["React"],
    Role: "Project Creator",
    link: "https://enviointegrated.com/",
    imgs: envio,
  },
  {
    id: 5,
    Name: "Makavid",
    TLang: ["HTML", "CSS", "JavaScript"],
    Role: "Project Creator",
    link: "https://makavidconsulting.com/",
    imgs: makavid,
  },
  {
    id: 6,
    Name: "Loko Food",
    TLang: ["React"],
    Role: "Project Creator",
    link: "https://lokofoods.netlify.app/",
    imgs: loko,
  }
];

export function AnimatedPinDemo() {
  const [showAll, setShowAll] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [is676pxScreen, setIs676pxScreen] = useState(false);

  useEffect(() => {
    const handleMediaQueryChange = () => {
      setIsLargeScreen(window.matchMedia("(max-width: 1024px)").matches);
      setIs676pxScreen(window.matchMedia("(max-width: 676px)").matches);
    };

    handleMediaQueryChange(); // Initial check

    window.addEventListener("resize", handleMediaQueryChange);

    return () => {
      window.removeEventListener("resize", handleMediaQueryChange);
    };
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedProjects = showAll
    ? Projects
    : Projects.slice(0, is676pxScreen ? 3 : isLargeScreen ? 4 : 3);
  return (
    <div className="w-full flex lg:flex-row items-center justify-center grid grid-cols-1 sssxxxl:grid-cols-2 lg:grid-cols-3 sssxl:gap-16 sssxxxl:gap-0 ssxxl:gap-16 lg:gap-2 ssxl:gap-16">
      {displayedProjects.map((project) => (
        <PinContainer key={project.id} title={project.Name} href={project.link}>
          <div className="flex basis-full flex-col p-0 ssxlp-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[14rem] sssxl:w-[24rem] sssxl:h-[20rem] sssxxxl:w-[16rem] sssxxxl:h-[14rem] ssxxl:w-[24rem] ssxxl:h-[20rem] lg:w-[16rem] lg:h-[14rem]  sxl:w-[24rem] sxl:h-[20rem]">
            <div className="flex flex-1 rounded-lg mt-0 ssxl:mt-2 overflow-hidden">
              <LazyLoadImage 
          effect="blur"
            src={project.imgs}
            alt={project.Name}
            className="w-full" />
            </div>
            <h3 className="ssxl:!pb-2 !m-0 font-bold text-base text-slate-100 ssxl:mt-4 pt-4">
              {project.Role}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal flex gap-2">
              {project.TLang.map((lang, index) => (
                <span key={index}>{lang}</span>
              ))}
            </div>
          </div>
        </PinContainer>
      ))}
        <button
          onClick={toggleShowAll}
          className="mt-4 w-32 text-white rounded"
        >
          
          
          <ButtonOne to="#">
          {showAll ? "Show Less" : "Show More"}
          </ButtonOne>
        </button>
    </div>
  );
}