import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Phone, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const ContactSection = () => {
  const [budget, setBudget] = useState(400);
  const [message, setMessage] = useState("");
  const [selectedType, setSelectedType] = useState("Gaming Video");
  const [isSent, setIsSent] = useState(false);
  const projectTypes = ["Gaming Video", "Short Form", "Long Form", "3D Reel"];

  // 💌 Handle Email Sending
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSent(false); // reset

    emailjs
      .sendForm(
        "service_xxxx",   // 🔹 Replace with your EmailJS service ID
        "template_mc2t86v",  // 🔹 Replace with your EmailJS template ID
        e.target,
        "EbEPOP32FcXNZtQxX"    // 🔹 Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("✅ Message sent:", result.text);
          setIsSent(true);
          e.target.reset();
          setMessage("");
          setBudget(400);
          setSelectedType("Gaming Video");
        },
        (error) => {
          console.error("❌ Error:", error.text);
          alert("Something went wrong. Please try again!");
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0b0e17] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE */}
        <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <motion.h2 variants={fadeUp(0.1)} className="text-4xl font-extrabold mb-4">
            Let’s Create Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Amazing
            </span>
          </motion.h2>

          <motion.p variants={fadeUp(0.2)} className="text-gray-400 mb-8 leading-relaxed">
            Ready to bring your vision to life? Get in touch and let’s discuss your next video project.
          </motion.p>

          <div className="space-y-6">
            {/* Email */}
            <motion.div variants={fadeUp(0.3)} className="flex items-center gap-4">
              <div className="bg-purple-600/20 p-3 rounded-full">
                <Mail className="text-purple-400" size={20} />
              </div>
              <span className="text-gray-300">editwithfox@gmail.com</span>
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeUp(0.4)} className="flex items-center gap-4">
              <div className="bg-purple-600/20 p-3 rounded-full">
                <Phone className="text-purple-400" size={20} />
              </div>
              <span className="text-gray-300">+91 8320391624</span>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={fadeUp(0.5)} className="flex gap-4 pt-4">
              {[
                { icon: Instagram, link: "#" },
                { icon: Youtube, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Linkedin, link: "#" },
              ].map(({ icon: Icon, link }, i) => (
                <motion.a
                  href={link}
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-gray-800/60 rounded-full hover:bg-purple-500/30 transition"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.form
          variants={fadeUp(0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={sendEmail}
        >
          {/* Hidden time input */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          {/* Name */}
          <motion.input
            variants={fadeUp(0.1)}
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-[#161a27] border border-gray-700 rounded-lg px-4 py-3 
                       focus:outline-none focus:border-purple-500 text-gray-200"
            required
          />

          {/* Email */}
          <motion.input
            variants={fadeUp(0.2)}
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-[#161a27] border border-gray-700 rounded-lg px-4 py-3 
                       focus:outline-none focus:border-purple-500 text-gray-200"
            required
          />

          {/* Project Type */}
          <motion.div variants={fadeUp(0.3)}>
            <label className="block text-sm text-gray-400 mb-3">Project Type</label>
            <div className="flex flex-wrap gap-3">
              {projectTypes.map((type, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedType(type)}
                  className={`px-5 py-2 text-center rounded-full border cursor-pointer transition-all duration-300 ${
                    selectedType === type
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent"
                      : "border-gray-600 text-gray-400 hover:border-purple-400 hover:text-purple-300"
                  }`}
                >
                  {type}
                </motion.div>
              ))}
              {/* Hidden field for emailJS */}
              <input type="hidden" name="projectType" value={selectedType} />
            </div>
          </motion.div>

          {/* Budget */}
          <motion.div variants={fadeUp(0.35)}>
            <label className="block text-sm text-gray-400 mb-2">Budget Range</label>
            <input
              type="range"
              min="400"
              max="10000"
              step="100"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-purple-500"
              name="budget"
            />
            <div className="flex justify-between text-gray-500 text-sm mt-1">
              <span>₹400</span>
              <span>₹10,000</span>
            </div>
            <div className="text-center mt-2">
              <span className="bg-purple-600/20 px-3 py-1 rounded-full text-purple-400 font-semibold">
                ₹{budget}
              </span>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeUp(0.4)}>
            <textarea
              placeholder="Your Message"
              name="message"
              maxLength={500}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#161a27] border border-gray-700 rounded-lg px-4 py-3 
                         h-32 resize-none focus:outline-none focus:border-purple-500 text-gray-200"
            />
            <div className="text-right text-xs text-gray-500">{message.length}/500</div>
          </motion.div>

          {/* Submit */}
          <motion.button
            variants={fadeUp(0.5)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                       font-semibold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Send Message
          </motion.button>

          {/* ✅ Success message */}
          {isSent && (
            <p className="text-center text-green-400 mt-3 font-medium">
              ✅ Message sent successfully!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
