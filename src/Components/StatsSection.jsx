import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, value: 50, suffix: "+", label: "Videos Edited" },
  { id: 2, value: 4, suffix: "+", label: "Happy Clients" },
  { id: 3, value: 1, suffix: "+", label: "Years Experience" },
  { id: 4, value: 100, suffix: "%", label: "Projects Completed" },
];

const StatsSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.17, 0.55, 0.55, 1] },
    },
  };

  return (
    <section
      ref={ref}
      id="stats"
      className="relative py-24 bg-[#0b0e17] text-white text-center overflow-hidden"
    >
      {/* Background glowing circles */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1, scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1, scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl font-extrabold mb-2"
      >
        By the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Numbers
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="text-gray-400 mb-16"
      >
        Proven track record of delivering exceptional results
      </motion.p>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            className="flex flex-col items-center space-y-4"
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.3 },
            }}
          >
            {/* Circle without shine */}
            <motion.div
              whileHover={{
                boxShadow: "0 0 35px rgba(168,85,247,0.6)",
              }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center justify-center w-32 h-32 rounded-full 
                         bg-gradient-to-b from-[#241b3b] to-[#1a1a2e] 
                         border border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.25)]"
            >
              {/* Rotating Glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-20 blur-xl"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <h3 className="text-4xl font-extrabold text-purple-400 z-10">
                <CountUp value={inView ? stat.value : 0} suffix={stat.suffix} />
              </h3>
            </motion.div>

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              className="text-gray-300 font-medium"
            >
              {stat.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

// Animated number counter
const CountUp = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(counter);
        start = value;
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default StatsSection;
