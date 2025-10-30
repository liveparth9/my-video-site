import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0b0e17] border-t border-gray-800 py-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold">
            Edit with Fox
          </span>
          . All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
