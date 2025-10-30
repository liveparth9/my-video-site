import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
const allVideos = [
  { id: 1, title: "Creative Short Film", embed: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { id: 2, title: "Cinematic Story", embed: "https://www.youtube.com/embed/oHg5SJYRHA0" },
  { id: 3, title: "Visual Effects Showcase", embed: "https://www.youtube.com/embed/ysz5S6PUM-U" },
  { id: 4, title: "Gaming Montage", embed: "https://www.youtube.com/embed/ScMzIvxBSi4" },
  { id: 5, title: "Color Grading Reel", embed: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
  { id: 6, title: "Slow Motion Edit", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 7, title: "Action Trailer", embed: "https://www.youtube.com/embed/M7lc1UVf-VE" },
  { id: 8, title: "Drone Cinematics", embed: "https://www.youtube.com/embed/e-ORhEE9VVg" },
  { id: 9, title: "Music Video Cut", embed: "https://www.youtube.com/embed/2Vv-BfVoq4g" },
];

const FullGallery = () => {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "radial-gradient(circle at top right, #14182a 0%, #0c0f1c 70%)",
      }}
    >
      <Navbar />

      {/* Page Title */}
      <section className="pt-28 px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.37, 0, 0.63, 1] }}
          className="text-5xl font-extrabold text-center mb-16"
        >
          All{" "}
          <motion.span
            initial={{ backgroundPositionX: "0%" }}
            animate={{ backgroundPositionX: "200%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-[length:200%_auto]"
          >
            Projects
          </motion.span>
        </motion.h1>

        {/* Animated Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {allVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: [0.37, 0, 0.63, 1],
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-[#1b1e2f] rounded-2xl overflow-hidden shadow-lg 
                         hover:shadow-[0_0_25px_#a855f7]/40 
                         transition-all duration-500 hover:scale-[1.03]
                         relative"
              whileHover={{
                y: -8,
                transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
              }}
            >
              {/* Subtle Floating (sine-like breathing effect) */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + (i % 2),
                  ease: "easeInOut",
                }}
              >
                <iframe
                  width="100%"
                  height="240"
                  src={video.embed}
                  title={video.title}
                  className="rounded-t-2xl"
                  allowFullScreen
                ></iframe>
              </motion.div>

              {/* Title */}
              <div className="p-4 text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold"
                >
                  {video.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>
    </div>
  );
};

export default FullGallery;
