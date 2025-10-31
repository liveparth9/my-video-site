import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Link } from "react-router-dom"; // ✅ Add for Home redirect

const allVideos = [
  { id: 1, title: "AdityaXsoon", embed: "https://www.youtube.com/embed/2wkLrhc6XnE" },
  { id: 2, title: "Forhead reel", embed: "https://www.youtube.com/embed/K_sgxh5xgDk" },
  { id: 3, title: "3D REEL", embed: "https://www.youtube.com/embed/zEtnm5S-PNs" },
  { id: 4, title: "Trading", embed: "https://www.youtube.com/embed/V56wc9k-bwI" },
  { id: 5, title: "Trading 2", embed: "https://www.youtube.com/embed/_HOfxzDoAX0" },
  { id: 6, title: "English reel", embed: "https://www.youtube.com/embed/ZEPcTwAEolI" },
  { id: 7, title: "Zomato", embed: "https://youtube.com/embed/-4ts2Iw22jQ" },
  { id: 8, title: "Storytelling", embed: "https://www.youtube.com/embed/mnDZjAh71d0" },
  { id: 9, title: "Podcast Reel", embed: "https://youtube.com/embed/ghTeiCk8bXs" },
  { id: 10, title: "Thumbnail showcase", embed: "https://www.youtube.com/embed/cialL3AhrEE" },
  { id: 11, title: "Gaming Video", embed: "https://www.youtube.com/embed/AjQvaJV8HUQ" },
  { id: 12, title: "Podcast", embed: "https://www.youtube.com/embed/vstLbV4T3-4" },
  { id: 13, title: "Podcast 2", embed: "https://www.youtube.com/embed/8QbCZO089zU" },
  { id: 14, title: "Typography", embed: "https://www.youtube.com/embed/GlcNCW9BapA" },
];

const FullGallery = () => {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at top right, #14182a 0%, #0c0f1c 70%)",
      }}
    >
      <Navbar />

      {/* === Back to Home Button (Visible on Mobile) === */}
      <div className="absolute top-24 left-5 z-40 md:hidden">
        <Link
          to="/"
          className="bg-purple-600/80 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-all duration-300"
        >
          ← Home
        </Link>
      </div>

      {/* === Page Title === */}
      <section className="pt-28 px-4 sm:px-6 md:px-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-16"
        >
          All{" "}
          <motion.span
            animate={{ backgroundPositionX: ["0%", "200%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-[length:200%_auto]"
          >
            Projects
          </motion.span>
        </motion.h1>

        {/* === Responsive Video Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {allVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: i * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.05,
                y: -6,
                transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
              }}
              className="bg-[#1b1e2f] rounded-2xl overflow-hidden shadow-lg 
                         hover:shadow-[0_0_25px_#a855f7]/40 transition-all duration-500
                         relative"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5 + (i % 3),
                  ease: "easeInOut",
                }}
              >
                <iframe
                  width="100%"
                  height="220"
                  src={video.embed}
                  title={video.title}
                  className="rounded-t-2xl sm:h-[240px] md:h-[260px]"
                  allowFullScreen
                ></iframe>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="p-4 text-center"
              >
                <h3 className="text-base sm:text-lg font-semibold tracking-wide text-gray-200 hover:text-purple-400 transition-colors duration-300">
                  {video.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* === Background Glow === */}
        <div className="absolute top-1/2 left-1/2 w-[600px] sm:w-[800px] md:w-[900px] h-[600px] sm:h-[800px] md:h-[900px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 rounded-full blur-[180px] pointer-events-none"></div>
      </section>
    </div>
  );
};

export default FullGallery;
