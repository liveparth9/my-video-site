import React from "react";
import { motion } from "framer-motion";
import foxImg from "../assets/fox.png"; // your image path

const HeroSection = () => {
  return (
    <section className="relative bg-[#0e1220] text-white min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-25"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 md:gap-20 lg:gap-28 py-20 md:py-0">
        
        {/* === Left Section (Text) === */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center md:text-left"
        >
          {/* Line */}
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mb-6 mx-auto md:mx-0"></div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight break-words">
            An Expert Video Editor &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Content Creator
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed max-w-md mx-auto md:mx-0">
            Transforming your raw footage into compelling visual stories that
            captivate audiences and deliver powerful messages through expert
            editing and creative storytelling.
          </p>

          {/* Button */}
          <button className="mt-10 px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-[0_0_25px_#a855f7] transition-all duration-300 text-sm sm:text-base">
            Get Started
          </button>
        </motion.div>

        {/* === Right Section (Image) === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          <img
            src={foxImg}
            alt="Fox Avatar"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl relative z-10 object-cover"
          />

          {/* Glowing Corner Lines */}
          <div className="absolute inset-0">
            <CornerLine position="top-left" />
            <CornerLine position="top-right" />
            <CornerLine position="bottom-left" />
            <CornerLine position="bottom-right" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* === Corner Line Component === */
const CornerLine = ({ position }) => {
  const baseLine =
    "absolute w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 border-purple-500 rounded-xl animate-pulse border-[2px]";
  const ball =
    "absolute w-2.5 sm:w-3 h-2.5 sm:h-3 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7] animate-ping";

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
