import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import SkillsSection from "./Components/SkillsSection";
import MyGallery from "./Components/MyGallery";
import Services from "./Components/Services";
import StatsSection from "./Components/StatsSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import FullGallery from "./Components/FullGallery";

function App() {
  return (
    <div className="bg-[#0f1420] text-white min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="skills">
                <SkillsSection />
              </section>
              <section id="gallery">
                <MyGallery />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="stats">
                <StatsSection />
              </section>
              <section id="contact">
                <ContactSection />
              </section>
              <Footer />
            </>
          }
        />

        {/* FULL GALLERY PAGE */}
        <Route path="/gallery" element={<FullGallery />} />
      </Routes>
    </div>
  );
}

export default App;
