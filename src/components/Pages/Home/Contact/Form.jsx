import React from "react";

export function ContactForm() {
  return (
    <div
      id="promi"
      className="text-center flex flex-col justify-center items-center p-20 border-t-2 border-b-2 border-gray-800 w-full"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Have a Project in mind?</h1>
        <h1 className="text-4xl font-bold">
          Let's work <span className="gradient">together</span>
        </h1>
      </div>
      <div className="form mt-16">
        <form
          name="contact"
          method="POST"
          netlify="true"
          className="text-center flex flex-col justify-center items-center"
        >
          <div className="mate flex items-center justify-center">
            <div className="name px-10 flex flex-col items-start">
              <label htmlFor="name" className="text-slate-800 pb-2 text-sm">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                required
                className="border-0 bg-transparent border-b-2 border-gray-800 pb-2 pt-2 text-black text-lg w-72 outline-none"
              />
            </div>
            <div className="name px-10 flex flex-col items-start">
              <label htmlFor="mail" className="text-slate-800 pb-2 text-sm">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                id="mail"
                name="email"
                required
                className="border-0 bg-transparent border-b-2 border-gray-800 pb-2 pt-2 text-black text-lg w-72 outline-none"
              />
            </div>
          </div>
          <div className="ej flex flex-col items-start mt-12">
            <label htmlFor="message" className="text-slate-800 pb-2 text-sm">
              Your Message
            </label>
            <textarea
              name="message"
              id="hh"
              placeholder="Hi, I need a developer to create an exclusive website for our Company X, how soon can we get to discuss this?"
              rows="12"
              required
              className="max-w-2xl min-w-2xl border-0 border-b-2 border-gray-800 pb-2 pt-4 bg-transparent text-black text-lg outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={() => {}}
            className="mt-10 w-36 h-10 rounded-lg border-none bg-primary bg-cover bg-no-repeat bg-center text-black font-semibold text-lg"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
