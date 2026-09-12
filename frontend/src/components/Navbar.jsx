import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    setIsOpen(false);
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-inner">
        <motion.button
          className="brand"
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="brand-symbol">S</span>
          <span className="brand-name">Chandu Sri Naga Veera Venkata Sai Ganesh</span>
        </motion.button>

        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + index * 0.06,
                duration: 0.4
              }}
              whileHover={{
                y: -2,
                scale: 1.05
              }}
            >
              {item.name}
              <span className="nav-link-glow" />
            </motion.button>
          ))}
        </nav>

        <motion.button
          className="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
    </motion.header>
  );
}