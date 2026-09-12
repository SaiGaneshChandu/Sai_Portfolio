import { useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ThreeBackground from "./components/ThreeBackground";
import FloatingObjects from "./components/FloatingObjects";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

import Scene from "./three/Scene";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="app">
      {/* Custom mouse interaction */}
      <CustomCursor />

      {/* Global 3D background */}
      <ThreeBackground />

      {/* Additional 3D objects */}
      <div className="floating-objects-layer">
        <Scene />
      </div>

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero */}
        <section className="page-section">
          <Hero />
        </section>

        {/* About */}
        <motion.section
          className="page-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>

        {/* Skills */}
        <motion.section
          className="page-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Skills />
        </motion.section>

        {/* Projects */}
        <motion.section
          className="page-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Projects />
        </motion.section>

        {/* Experience */}
        <motion.section
          className="page-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Experience />
        </motion.section>

        {/* Education */}
        <motion.section
          className="page-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Education />
        </motion.section>

        {/* Certifications */}
        <motion.section
          className="page-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Certifications />
        </motion.section>

        {/* Contact */}
        <motion.section
          className="page-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}