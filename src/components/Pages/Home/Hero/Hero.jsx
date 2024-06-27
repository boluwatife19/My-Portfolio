import React from "react";
import { FlipWordsDemo } from "../Component/Intro_anim";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ButtonTwo } from "../../../ui/button";
import { Link } from "react-router-dom";
// import {k} from "../../../../assets/SVG/tsx.svg"
import "./hero.css"

function Hero() {
  return (
    <div className="z-10 flex justify-between items-center w-full pt-40 gap-2 ">
      <div className="w-6/12 flex flex-col justify-start items-start gap-6">
        <FlipWordsDemo />
        <p className="text-lg text-black">👋 Hi there! I'm Paul, a full stack developer specializing in JavaScript and PHP.
          I'm passionate about crafting clean, efficient code and creating seamless user experiences. Let's build something awesome together! 🚀{'\u2728'}
        </p>
        <div className="flex items-center gap-10">
          <Link to={"https://www.youtube.com/@DEVTIFE"} className="text-3xl">
            <FaYoutube style={{ color: 'red' }} />
          </Link>
          <Link to={"https://www.instagram.com/devtife/"} className="text-xl instagram-icon">
            <FaInstagram style={{ color: 'white' }} />
          </Link>
          <Link to={"https://github.com/boluwatife19"} className="text-3xl">
            <FaGithub style={{ color: 'black' }} />
          </Link>
          <Link to={"https://x.com/dev_tife"} className="text-2xl">
            <FaXTwitter style={{ color: 'black' }} />
          </Link>
          <ButtonTwo to="#contact">
            Get Started
          </ButtonTwo>
          <img src="../../../../assets/SVG/react.svg" alt="" />
        </div>
      </div>
      <div className="w-6/12 flex items-center justify-end">
        <div className="two">
          <div className="one overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542702937-506268e68902?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
      </div>
    </div>)
}

export default Hero;