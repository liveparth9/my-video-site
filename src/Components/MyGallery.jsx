import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MyGallery = () => {
  const navigate = useNavigate();

  const videos = [
    { id: 1, title: "Creative Short Film", embed: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 2, title: "Cinematic Story", embed: "https://www.youtube.com/embed/oHg5SJYRHA0" },
    { id: 3, title: "Visual Effects Showcase", embed: "https://www.youtube.com/embed/ysz5S6PUM-U" },
    { id: 4, title: "Gaming Montage", embed: "https://www.youtube.com/embed/ScMzIvxBSi4" },
    { id: 5, title: "Color Grading Reel", embed: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
    { id: 6, title: "Slow Motion Edit", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

  // Reusable animation variants
  const fadeUpSine = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay: i * 0.1,
        ease: [0.37, 0, 0.63, 1], // smooth sine-like easing
      },
    }),
  };

  return (
    <section
      className="relative text-white py-24 px-6 md:px-20 overflow-hidden"
      style={{
        background: "radial-gradient(circle at top right, #14182a 0%, #0c0f1c 70%)",
      }}
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.37, 0, 0.63, 1] }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold tracking-tight">
          My{" "}
          <motion.span
            initial={{ backgroundPositionX: "0%" }}
            whileInView={{ backgroundPositionX: "100%" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 bg-[length:200%_auto]"
          >
            Gallery
          </motion.span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 mt-3"
        >
          Explore my creative video projects
        </motion.p>
      </motion.div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            variants={fadeUpSine}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={i}
            className="bg-[#1b1e2f] rounded-2xl overflow-hidden shadow-lg 
                       hover:shadow-[0_0_25px_#a855f7]/40 
                       transition-all duration-500 hover:scale-[1.03]
                       hover:-translate-y-2"
            whileHover={{
              y: -8,
              transition: { duration: 0.4, ease: [0.37, 0, 0.63, 1] },
            }}
          >
            <motion.iframe
              width="100%"
              height="240"
              src={video.embed}
              title={video.title}
              className="rounded-t-2xl"
              allowFullScreen
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
              }}
            ></motion.iframe>
            <div className="p-4 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg font-semibold"
              >
                {video.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/gallery")}
          className="px-10 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full 
                     font-semibold shadow-[0_0_20px_#a855f7] hover:shadow-[0_0_35px_#a855f7] 
                     transition-all duration-500"
        >
          Show More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default MyGallery;
