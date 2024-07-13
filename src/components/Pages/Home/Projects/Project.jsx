import { react } from "react";
import { AnimatedPinDemo } from "./Card";

export const Project = () => {
  return (
    <div id="project" className="pt-4 px-12 border-b-2 border-sky-400  pb-16 overflow-hidden" id="project">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold pt-0 pb-4 gradient pt-16">PROJECTS</h1>
      <p className="text-base lg:text-xl pt-0 pb-16 w-ful md:w-1/2 text-slate-700">
        As a problem-solver and experienced coder, I've honed my skills in
        debugging and overcoming coding challenges. Check out my recent projects
        below.
      </p>
      <AnimatedPinDemo />
    </div>
  );
};