import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Sparkles
} from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Sparkles size={16} />
            <span>Available for opportunities</span>
          </motion.div>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Sai
            <span> Ganesh</span>
          </motion.h1>

          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Software Developer
            <span> • </span>
            AI/ML Enthusiast
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            MCA student passionate about building modern web and
            mobile applications, intelligent ML/DL solutions, and
            interactive digital experiences.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            <motion.button
              className="primary-button"
              onClick={scrollToProjects}
              whileHover={{
                scale: 1.05,
                y: -4
              }}
              whileTap={{
                scale: 0.96
              }}
            >
              Explore My Work
              <ArrowDown size={18} />
            </motion.button>

            <motion.a
              href="/Sai_Ganesh_Resume.pdf"
              download="Sai_Ganesh_Resume.pdf"
              className="secondary-button"
              whileHover={{
                scale: 1.05,
                y: -4
              }}
              whileTap={{
                scale: 0.96
              }}
            >
              Download Resume
              <Download size={18} />
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <a
              href="https://github.com/SaiGaneshChandu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sai Ganesh GitHub"
            >
              <Github size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/sri-naga-veera-venkata-sai-ganesh-chandu-b281a62b3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sai Ganesh LinkedIn"
            >
              <Linkedin size={21} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.7,
            rotateY: 30
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0
          }}
          transition={{
            delay: 0.5,
            duration: 1.2,
            ease: "easeOut"
          }}
        >
          <div className="hero-3d-frame">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-orbit orbit-three" />

            <motion.div
              className="hero-profile-card"
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 4, 0],
                rotateX: [0, -3, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="hero-profile-glow" />

              <img
                src="/images/profile.png"
                alt="Sai Ganesh"
                className="hero-profile-image"
              />

              <div className="hero-profile-overlay">
                <span></span>
              </div>
            </motion.div>

            <motion.div
              className="floating-tech tech-one"
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              React
            </motion.div>

            <motion.div
              className="floating-tech tech-two"
              animate={{
                y: [0, 18, 0],
                rotateZ: [0, -8, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Python
            </motion.div>

            <motion.div
              className="floating-tech tech-three"
              animate={{
                y: [0, -15, 0],
                rotateZ: [0, 7, 0]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ML
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}