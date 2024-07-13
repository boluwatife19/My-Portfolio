import React from "react";
import AuroraBackground from "../ui/Herobg";
import { motion } from "framer-motion";

export default function Success() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center justify-center w-[100%] h-screen"
        id="home"
      >
        <div className="bg-black rounded-xl w-[225px] sssxl:w-[400px] z-10 p-4 sssxl:p-12 flex flex-col gap-4">
          <h1 className="text-white text-sm sssxl:text-xl font-bold">Thank you!</h1>
          <p className="text-white text-xs sssxl:text-base">Your form submission has been received.</p>
          <a href="/" className="text-white text-xs sssxl:text-base underline text-sky-400">← Back to our site</a>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
