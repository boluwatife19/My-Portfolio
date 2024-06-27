import React from "react";
import Meteors from "./Card";

const services = [
  {
    title: "Custom Web Application Development",
    description:
      "Create tailored web solutions using HTML, CSS, JavaScript, React, TypeScript, PHP, and SQL. From e-commerce platforms to data-driven apps, I deliver scalable and innovative solutions that drive business growth.",
  },
  {
    title: "UI/UX Design and Optimization",
    description:
      "Enhance user satisfaction with intuitive interfaces crafted with Tailwind CSS and Bootstrap. I focus on usability and aesthetics to ensure seamless navigation and engagement across devices.",
  },
  {
    title: "Website Maintenance and Support",
    description:
      "Keep your digital presence secure and optimized with proactive monitoring, updates, and troubleshooting. I provide ongoing support to maximize performance and user experience.",
  },
];

function MeteorsDemo() {
  return (
    <div className="w-full flex justify-between items-center bg-black p-16 rounded-2xl">
      {services.map(service => (
        
      <div className="w-full relative max-w-xs">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          {service.title}
        </h1>

        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
        {service.description}
        </p>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
      ))}
    </div>
  );
}

export default MeteorsDemo;
