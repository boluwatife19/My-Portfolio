import React from "react";
import { StickyScrollRevealDemo } from "./Scroll";

function About() {
  return (
    <div
      className="w-full pb-12 sssxl:pb-16 border-b-2 border-sky-400 pt-12 sssxl:pt-16"
      id="about"
      data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-once="false"
      data-aos-delay="100"
    >
      <StickyScrollRevealDemo />
    </div>
  );
}

export default About;
