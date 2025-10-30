import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import SkillsSection from "./Components/SkillsSection";
import MyGallery from "./Components/MyGallery";
import FullGallery from "./Components/FullGallery";
import Services from "./Components/Services";
import StatsSection from "./Components/StatsSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="bg-[#0f1420] text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <SkillsSection />
              <MyGallery />
              <Services />
              <StatsSection />
              <ContactSection />

            </>
          }
        />
        <Route path="/gallery" element={<FullGallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
