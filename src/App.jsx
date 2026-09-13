import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";
import Expertise from "./Pages/Expertise";
import Tools from "./Pages/Tools";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import CaseStudies from "./Pages/CaseStudies";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
