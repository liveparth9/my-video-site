import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closePopup = () => setShowPopup(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Gallery", id: "gallery" },
    { name: "Services", id: "services" },
    { name: "Stats", id: "stats" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#0f1420]/95 backdrop-blur-sm text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scroll.scrollToTop({ duration: 600, smooth: true })}
          >
            <h1 className="text-xl font-bold relative select-none">
              Edit with <span className="text-purple-400">Fox</span>
              <span className="absolute left-0 -bottom-1 w-1/2 h-[2px] bg-purple-400 rounded-full"></span>
            </h1>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                {item.id === "home" ? (
                  <button
                    onClick={() => scroll.scrollToTop({ duration: 600, smooth: true })}
                    className="cursor-pointer text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    spy={true}
                    className="cursor-pointer text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-5 py-2 rounded-full transition duration-200"
            >
              Hire Me
            </button>
            <button
              onClick={() => window.open("https://www.youtube.com/embed/zEtnm5S-PNs", "_blank")}
              className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-5 py-2 rounded-full transition duration-200"
            >
              Watch Reel
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#141a29] px-8 py-4 flex flex-col space-y-4 text-center border-t border-gray-800">
            {navItems.map((item) =>
              item.id === "home" ? (
                <button
                  key={item.id}
                  onClick={() => {
                    scroll.scrollToTop({ duration: 600, smooth: true });
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            )}

            <button
              onClick={() => {
                setShowPopup(true);
                setMenuOpen(false);
              }}
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-5 py-2 rounded-full transition duration-200"
            >
              Hire Me
            </button>

            <button
              onClick={() =>
                window.open("https://www.youtube.com/embed/zEtnm5S-PNs", "_blank")
              }
              className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-5 py-2 rounded-full transition duration-200"
            >
              Watch Reel
            </button>
          </div>
        )}
      </nav>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-[#1a1a2e] text-center p-8 rounded-2xl shadow-xl border border-purple-500/30"
            >
              <h2 className="text-2xl font-bold mb-2 text-purple-400">Hire Me</h2>
              <p className="text-gray-300 mb-4">You can reach me at:</p>
              <p className="text-3xl font-semibold text-white">+91 8320391624</p>
              <button
                onClick={closePopup}
                className="mt-6 px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-full text-white font-medium transition duration-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
