import React, { useState } from "react";
("use client");
import { PinContainer } from "../../../ui/Threedpin";

import envio from "../../../../assets/Images/websites/envio.png";
import estam from "../../../../assets/Images/websites/estam.png";
import mavin from "../../../../assets/Images/websites/mavin.png";
import makavid from "../../../../assets/Images/websites/makavid.png";
import userve from "../../../../assets/Images/websites/userve.png";
import loko from "../../../../assets/Images/websites/loko.png";
import { ButtonOne } from "../../../ui/button";

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
    Name: "Envio Integrated Service",
    TLang: ["React"],
    Role: "Project Creator",
    link: "https://enviointegrated.com/",
    imgs: envio,
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
    Name: "Makavid",
    TLang: ["HTML", "CSS", "JavaScript"],
    Role: "Project Creator",
    link: "https://makavidconsulting.com/",
    imgs: makavid,
  },
  {
    id: 5,
    Name: "Loko Food",
    TLang: ["React"],
    Role: "Project Creator",
    link: "https://lokofoods.netlify.app/",
    imgs: loko,
  },
  {
    id: 6,
    Name: "Mavin Website",
    TLang: ["React"],
    Role: "Project Creator",
    link: "https://mavinsng.netlify.app/",
    imgs: mavin,
  },
];

export function AnimatedPinDemo() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedProjects = showAll ? Projects : Projects.slice(0, 3);

  return (
    <div className="w-full flex items-center justify-center grid grid-cols-3 gap-16">
      {displayedProjects.map((project) => (
        <PinContainer key={project.id} title={project.Name} href={project.link}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24rem] h-[20rem]">
            <div className="flex flex-1 rounded-lg mt-2 overflow-hidden">
              <img src={project.imgs} alt={project.Name} className="w-full" />
            </div>
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 mt-4 pt-2">
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
