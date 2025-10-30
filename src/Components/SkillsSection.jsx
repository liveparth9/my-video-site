import React from "react";
import { motion } from "framer-motion";
import { Code, Scissors, Palette, Video } from "lucide-react";

const skills = [
  { name: "Premiere Pro", level: 70, icon: <Video size={20} />, color: "#6366f1" },
  { name: "After Effects", level: 60, icon: <Scissors size={20} />, color: "#8b5cf6" },
  { name: "Color Grading", level: 45, icon: <Palette size={20} />, color: "#ec4899" },
  { name: "Final Cut Pro", level: 55, icon: <Code size={20} />, color: "#3b82f6" },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-28 flex flex-col items-center justify-center text-white overflow-hidden bg-[#0f111c]"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
          My <span className="text-purple-300">Skills</span>
        </h2>

        {/* Experience Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="inline-flex items-center justify-center gap-2 bg-[#1b1e2f] border border-purple-400/40 text-purple-300 px-5 py-2 rounded-full shadow-md text-sm font-semibold mb-3"
        >
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></span>
          <span>Experience: 1+ Year</span>
        </motion.div>

        <p className="text-gray-300 text-lg">
          Expertise in industry-leading tools and techniques
        </p>
        <div className="h-[3px] w-16 bg-purple-400 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Skill Boxes */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] md:w-[70%]">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.9, type: "spring" }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative bg-[#1b1e2f] backdrop-blur-md rounded-2xl p-6 shadow-lg overflow-hidden"
          >
            {/* Corner Dots */}
            <span className="absolute top-1 left-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></span>
            <span className="absolute bottom-1 left-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></span>
            <span className="absolute bottom-1 right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></span>

            {/* Icon and Text */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-md bg-[#2a2d42]"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <p className="text-purple-300 font-semibold">{skill.level}%</p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#2a2d42] rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-500"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Connecting Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute inset-0 flex justify-center items-center"
      >
        <svg width="900" height="400" className="opacity-10 hidden md:block">
          <motion.line
            x1="100"
            y1="100"
            x2="800"
            y2="100"
            stroke="#a855f7"
            strokeWidth="2"
            strokeDasharray="10 10"
            animate={{ strokeDashoffset: [20, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />
          <motion.line
            x1="100"
            y1="280"
            x2="800"
            y2="280"
            stroke="#a855f7"
            strokeWidth="2"
            strokeDasharray="10 10"
            animate={{ strokeDashoffset: [0, 20] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
