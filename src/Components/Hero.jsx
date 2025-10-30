import React from "react";
import { motion } from "framer-motion";
import foxImg from "../assets/fox.png"; // your image path

const HeroSection = () => {
  return (
    <section className="relative bg-[#0e1220] text-white min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-25"></div>

      <div className="relative z-10 container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-20 md:gap-28">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <div className="w-14 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mb-6"></div>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            An Expert Video Editor &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Content Creator
            </span>
          </h1>

          <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-lg">
            Transforming your raw footage into compelling visual stories that
            captivate audiences and deliver powerful messages through expert
            editing and creative storytelling.
          </p>

          <button className="mt-10 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-[0_0_25px_#a855f7] transition-all duration-300">
            Get Started
          </button>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Image */}
          <img
            src={foxImg}
            alt="Fox Avatar"
            className="w-72 h-72 md:w-80 md:h-80 rounded-3xl relative z-10 object-cover"
          />

          {/* Corner Lines and Balls */}
          <div className="absolute inset-0">
            {/* top-left */}
            <CornerLine position="top-left" />
            {/* top-right */}
            <CornerLine position="top-right" />
            {/* bottom-left */}
            <CornerLine position="bottom-left" />
            {/* bottom-right */}
            <CornerLine position="bottom-right" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* Component for corner line and glowing dot */
const CornerLine = ({ position }) => {
  const baseLine =
    "absolute w-14 h-14 border-purple-500 rounded-xl animate-pulse border-[2px]";

  const ball =
    "absolute w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7] animate-ping";

  switch (position) {
    case "top-left":
      return (
        <div className={`${baseLine} border-t-2 border-l-2 top-0 left-0`}>
          <span className={`${ball} -top-1 -left-1`}></span>
        </div>
      );
    case "top-right":
      return (
        <div className={`${baseLine} border-t-2 border-r-2 top-0 right-0`}>
          <span className={`${ball} -top-1 -right-1`}></span>
        </div>
      );
    case "bottom-left":
      return (
        <div className={`${baseLine} border-b-2 border-l-2 bottom-0 left-0`}>
          <span className={`${ball} -bottom-1 -left-1`}></span>
        </div>
      );
    case "bottom-right":
      return (
        <div className={`${baseLine} border-b-2 border-r-2 bottom-0 right-0`}>
          <span className={`${ball} -bottom-1 -right-1`}></span>
        </div>
      );
    default:
      return null;
  }
};

export default HeroSection;
