import React from "react";
import { motion } from "framer-motion";
import foxImg from "../assets/fox.png"; // your image path

const About = () => {
  return (
    <section
      id="about"
      className="relative text-white py-40 px-6 md:px-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, #14182a 0%, #0c0f1c 70%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 relative z-10">
        {/* === Left Image Box === */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          className="relative flex-shrink-0 md:ml-[-40px]"
        >
          {/* Image */}
          <img
            src={foxImg}
            alt="Fox Avatar"
            className="w-[420px] h-[420px] rounded-[25px] object-cover relative z-10"
          />

          {/* Corner Borders + Glowing Dots */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top-right corner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#a855f7] rounded-tr-[25px]"
            >
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute w-4 h-4 bg-[#a855f7] rounded-full -top-2 -right-2 shadow-[0_0_15px_#a855f7]"
              ></motion.span>
            </motion.div>

            {/* Bottom-left corner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: false }}
              className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#a855f7] rounded-bl-[25px]"
            >
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                className="absolute w-4 h-4 bg-[#a855f7] rounded-full -bottom-2 -left-2 shadow-[0_0_15px_#a855f7]"
              ></motion.span>
            </motion.div>
          </div>

          {/* Animated Lines Behind Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute inset-0 flex justify-center items-center -z-10"
          >
            <svg width="500" height="500">
              <motion.line
                x1="0"
                y1="250"
                x2="500"
                y2="250"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray="10 10"
                animate={{ strokeDashoffset: [20, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <motion.line
                x1="250"
                y1="0"
                x2="250"
                y2="500"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray="10 10"
                animate={{ strokeDashoffset: [0, 20] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* === Right Text === */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          className="max-w-xl text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Me
            </span>
          </h2>

          <p className="text-gray-300 text-[17px] leading-relaxed mb-8">
            I’m a creative video editor and motion designer with a passion for
            storytelling through visuals. My focus is on turning raw ideas into
            cinematic experiences using smooth transitions, color grading, and
            sound design that truly connect with viewers.
          </p>


          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold shadow-[0_0_20px_#a855f7] hover:shadow-[0_0_30px_#a855f7] transition-all duration-300"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle Glow Behind */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;
