import { react } from "react";
import { AnimatedPinDemo } from "./Card";
import { Datas } from "./Data";

export const Project = () => {
  return (
    <div className="pt-4 border-b-2 border-sky-400  pb-16" id="project">
      <h1 className="text-6xl font-bold pt-0 pb-4 gradient pt-16">PROJECTS</h1>
      <p className="text-xl pt-0 pb-16 w-1/2 text-slate-700">
        As a problem-solver and experienced coder, I've honed my skills in
        debugging and overcoming coding challenges. Check out my recent projects
        below.
      </p>
      <AnimatedPinDemo />
      {/* <Datas /> */}
    </div>
  );
};
