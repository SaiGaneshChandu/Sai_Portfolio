import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Heart
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="footer-inner">
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-logo">SG</div>

          <div>
            <h3>Sai Ganesh</h3>
            <p>Software Developer • AI/ML Enthusiast</p>
          </div>
        </motion.div>

        <motion.div
          className="footer-socials"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.a
            href="https://github.com/SaiGaneshChandu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{
              y: -6,
              rotate: -5,
              scale: 1.1
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sri-naga-veera-venkata-sai-ganesh-chandu-b281a62b3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{
              y: -6,
              rotate: 5,
              scale: 1.1
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={20} />
          </motion.a>

          <motion.a
            href="mailto:saiganeshchandu012@gmail.com"
            aria-label="Email Sai Ganesh"
            whileHover={{
              y: -6,
              rotate: -5,
              scale: 1.1
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>

        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{
            y: -5,
            scale: 1.08
          }}
          whileTap={{
            scale: 0.92
          }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sai Ganesh. All rights reserved.
        </p>

        <p className="footer-made">
          Built with <Heart size={14} /> using React & Three.js
        </p>
      </div>
    </footer>
  );
}