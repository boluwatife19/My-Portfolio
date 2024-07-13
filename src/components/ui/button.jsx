import React from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export function ButtonOne({ children }) {
  return (
    <a className="relative px-5 py-2 font-medium text-white group">
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-slate-500 group-hover:bg-slate-700 group-hover:skew-x-12"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-black group-hover:bg-slate-900 group-hover:-skew-x-12"></span>
      <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-slate-600 -rotate-12"></span>
      <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-slate-400 -rotate-12"></span>
      <span className="relative">{children}</span>
    </a>
  );
}

export function ButtonTwo({ to, children }) {
    const location = useLocation();
  
    const handleLinkClick = (hash) => {
      event.preventDefault();
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, null, hash); // Update the URL hash without reloading the page
      }
    };
  
  return (
        <Link
          to={contact}
          onClick={() => handleLinkClick(contact)}
          className="rounded-md px-3.5 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-sky-500 text-indigo-600 text-white w-28 sssxl:w-32 md:w-24 lg:w-32"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gradient-to-r from-blue-600 to-sky-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-sky-500 transition duration-300 group-hover:text-white ease flex items-center justify-center ease w-full">
            {children}
          </span>
        </Link>
  );
}

let contact =  "#contact";

export function ButtonThree({children }) {
  return (
        <Link
          className="relative px-5 py-2 font-medium text-black group"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-slate-500 group-hover:bg-slate-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-white group-hover:bg-slate-300 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-slate-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-slate-400 -rotate-12"></span>
          <span className="relative">{children}</span>
        </Link>
  );
}
