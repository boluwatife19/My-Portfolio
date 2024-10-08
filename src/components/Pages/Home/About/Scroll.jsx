"use client";
import React from "react";
import { StickyScroll } from "../../../ui/stickyScroll";
import LinkPreview from "../../../ui/LinkPreview";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CardBody, CardContainer, CardItem } from "../../../ui/Threedui";

const content = [
  {
    title: "Introduction",
    description: (
      <p>
        Hello, I'm Paul, a Full Stack Developer currently pursuing my studies at{" "}
        <LinkPreview
          url="https://estamuni.net"
          className="font-bold underline decoration-sky-500"
        >
          Estam University
        </LinkPreview>{" "}
        in Benin Republic. With a strong passion for crafting dynamic and
        intuitive web designs, I bring a unique perspective to every project. My
        commitment to continuous learning and skill enhancement ensures that I
        stay at the forefront of the ever-evolving tech landscape.
      </p>
    ),
    content: (
      <CardContainer className="h-full w-full flex items-center justify-center text-white pt-8 bg-red">
        <CardBody className="dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-2/6 sm:w-[30rem] rounded-xl overflow-hidden">
          <CardItem translateZ="100" className="w-full h-full">
            <LazyLoadImage effect="blur"
              alt="thumbnail"
              src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VifGVufDB8fDB8fHww"
              className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
          </CardItem>
        </CardBody>
      </CardContainer>
    ),
  },
  {
    title: "Technical Expertise and Approach",
    description:
      "As a creative and detail-oriented developer, I specialize in delivering responsive and accessible web designs that prioritize user experience. My technical expertise spans a wide range of technologies, including HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, TypeScript, PHP, SQL, and Git. This comprehensive skill set enables me to seamlessly manage both frontend and backend development, ensuring a cohesive and efficient workflow from concept to deployment.",
    content: (
      <CardContainer className="h-full w-full flex items-center justify-center text-white pt-8">
        <CardBody className="dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-2/6 sm:w-[30rem] rounded-xl overflow-hidden">
          <CardItem translateZ="100" className="w-full h-full">
            <LazyLoadImage effect="blur" 
              className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"/>
          </CardItem>
        </CardBody>
      </CardContainer>
    ),
  },
  {
    title: "Collaboration and Innovation",
    description:
      "Let's collaborate to transform your digital ideas into reality. Together, we can create innovative solutions that not only meet your needs but also exceed your expectations.",
    content: (
      <CardContainer className="h-full w-full flex items-center justify-center text-white pt-8">
        <CardBody className="dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-2/6 sm:w-[30rem] rounded-xl overflow-hidden">
          <CardItem translateZ="100" className="w-full h-full">
            <LazyLoadImage
              alt="thumbnail"
              effect="blur"
              className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      <StickyScroll content={content} />
    </div>
  );
}
