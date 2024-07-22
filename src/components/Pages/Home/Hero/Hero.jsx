import React from "react";
import { FlipWordsDemo } from "../Component/Intro_anim";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ButtonTwo } from "../../../ui/button";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Paul from "../../../../assets/Images/Paul/Paul.jpg"
import "./hero.css"

function Hero() {
  return (
    <div className="z-10 flex flex-col justify-between items-center md:flex-row xl:w-full pt-40 gap-16 md:gap-4 xl-gap-0 px-12">
      <div 
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          data-aos-once="false"
          data-aos-delay="100" className="sssxl:w-full md:w-1/2 lg:w-3/5 xl:w-1/2 flex flex-col justify-start items-start gap-6">
        <FlipWordsDemo />
        <p className="text-sm sssxl:text-lg md:text-sm lg:text-lg text-black">👋 Hi there! I'm Paul, a full stack developer specializing in JavaScript and PHP.
          I'm passionate about crafting clean, efficient code and creating seamless user experiences. Let's build something awesome together! 🚀✨
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-6 ">
          <div className="flex items-center gap-6">
          <Link to={"https://www.youtube.com/@DEVTIFE"} className="text-xl sssxl:text-3xl md:text-xl lg:text-3xl">
            <FaYoutube style={{ color: 'red' }} />
          </Link>
          <Link to={"https://www.instagram.com/devtife/"} className="text-sm sssxl:text-xl md:text-sm lg:text-xl instagram-icon p-0.5 sssxl:p-1 md:p-0.5 lg:p-1">
            <FaInstagram style={{ color: 'white' }} />
          </Link>
          <Link to={"https://github.com/boluwatife19"} className="text-xl sssxl:text-3xl md:text-xl lg:text-3xl">
            <FaGithub style={{ color: 'black' }} />
          </Link>
          <Link to={"https://x.com/dev_tife"} className="text-base sssxl:text-2xl md:text-base lg:text-2xl">
            <FaXTwitter style={{ color: 'black' }} />
          </Link>
          </div>
          <ButtonTwo to="#contact">
            <p className="text-xs sssxl:text-lg md:text-xs lg:text-lg">Get Started</p>
          </ButtonTwo>
        </div>
      </div>
      <div
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          data-aos-once="false"
          data-aos-delay="100"  className="sssxl:w-full md:w-1/2 lg:w-0 xl:w-1/2 flex items-center justify-center md:justify-end">
        <div className="two w-44 h-44 ssssxl:w-56 ssssxl:h-56 sssxl:w-72  sssxl:h-72 sm:w-96 sm:h-96 md:w-60  md:h-60 lg:w-72 lg:h-72 xl:w-96 xl:h-96">
          <div className="one w-44 h-44 ssssxl:w-56 ssssxl:h-56 overflow-hidden sssxl:w-72  sssxl:h-72 sm:w-96 sm:h-96 md:w-60  md:h-60 lg:w-72 lg:h-72 xl:w-96 xl:h-96">
          <LazyLoadImage 
          effect="blur"
            src={Paul} />
          </div>
        </div>
      </div>
    </div>)
}

export default Hero;