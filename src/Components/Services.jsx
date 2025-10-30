import React from "react";
import { motion } from "framer-motion";
import { FaVideo, FaMagic, FaCogs, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Video Editing",
      icon: <FaVideo size={30} />,
      description:
        "Professional video editing with seamless transitions, color correction, and audio synchronization for compelling storytelling.",
      points: [
        "Multi-camera editing",
        "Color grading & correction",
        "Audio enhancement",
        "Motion graphics integration",
      ],
    },
    {
      id: 2,
      title: "Motion Graphics",
      icon: <FaMagic size={30} />,
      description:
        "Eye-catching animated graphics, titles, and visual effects that enhance your video content and engage viewers.",
      points: [
        "Custom animations",
        "Logo animations",
        "Text effects",
        "Visual storytelling",
      ],
    },
    {
      id: 3,
      title: "Post Production",
      icon: <FaCogs size={30} />,
      description:
        "Complete post-production services including sound design, visual effects, and final delivery optimization.",
      points: [
        "Sound design & mixing",
        "Visual effects",
        "Format optimization",
        "Quality assurance",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.45, 0, 0.55, 1],
      },
    }),
  };

  return (
    <section
      id="services"
      className="relative text-white py-24 px-6 md:px-20 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0f1420, #14182a)",
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Services
          </span>
        </h2>
        <p className="text-gray-400 mt-3">
          Professional video editing services tailored to bring your creative vision to life
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-16 h-1 bg-purple-500 mx-auto mt-4 rounded-full origin-left"
        />
      </motion.div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 0 35px rgba(168, 85, 247, 0.4)",
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="bg-gradient-to-b from-[#241b3b] to-[#1a1a2e] rounded-2xl p-6 
                       shadow-lg border border-[#2b1e50]/40 transform-gpu transition-all duration-500"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center w-14 h-14 bg-purple-600/20 rounded-xl mb-4 text-purple-400 mx-auto"
            >
              {service.icon}
            </motion.div>

            <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm text-center mb-5">{service.description}</p>

            <ul className="text-gray-300 space-y-2 text-sm">
              {service.points.map((point, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 + j * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <FaCheck className="text-purple-400" size={12} />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Get a Quote Button with Shine Effect */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center mt-16"
      >
        <Link to="/quote">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
                       rounded-full font-semibold shadow-[0_0_25px_#a855f7] hover:shadow-[0_0_35px_#a855f7]
                       flex items-center gap-2 transition-all duration-300"
          >
            <FaCheck /> Get A Quote
            {/* Shine effect overlay */}
            <span
              className="absolute top-0 left-[-100%] w-[80px] h-full 
                         bg-gradient-to-r from-transparent via-white/70 to-transparent 
                         transform skew-x-[-20deg] animate-none hover:animate-shine"
            ></span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Shine Animation Keyframes */}
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 120%; }
        }
        .animate-shine {
          animation: shine 1s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;
