import React from "react";
import { GlobeDemo } from "./World";
import { ButtonThree } from "../../../ui/button";

export function ContactForm() {
  return (
    <div
      id="contact"
      className="text-center flex flex-col justify-center items-center w-full  pb-16"
    >
      <div className="text-center flex flex-col justify-center items-center pt-16">
        <h1 className="text-4xl font-bold">Have a Project in mind?</h1>
        <h1 className="text-4xl font-bold">
          Let's work <span className="gradient">together</span>
        </h1>
      </div>
      <div className="form mt-16 flex justify-between items-center w-full bg-footer bg-cover rounded-3xl p-16">
        <div className="w-1/2 bg-galaxy ">
        <form
          name="contact"
          method="POST"
          netlify="true"
          className="text-center flex flex-col justify-start items-start w-full p-8 gap-12"
        >
          <div className="flex flex-col items-start gap-12 w-full">
            <div className="flex flex-col items-start w-full">
              <label htmlFor="name" className="text-slate-500 text-sm">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                required
                className="border-0 bg-transparent border-b-2 border-gray-500 text-black text-lg w-full outline-none pt-2 w-full text-white"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label htmlFor="mail" className="text-slate-500  text-sm">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                id="mail"
                name="email"
                required
                className="border-0 bg-transparent border-b-2 border-gray-500 text-black text-lg w-72 outline-none pt-2 w-full text-white"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-items-start items-start">
            <label htmlFor="message" className="text-slate-500 text-sm">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Hi, I need a developer to create an exclusive website for our Company X, how soon can we get to discuss this?"
              rows="12"
              required
              className="w-full border-b-2 border-gray-500 outline-0 bg-transparent text-black h-24 pt-2 text-white resize-none text-lg"
            ></textarea>
          </div>
          <ButtonThree>
            Send
          </ButtonThree>
        </form>
        </div>
        <GlobeDemo />
      </div>
    </div>
  );
}
