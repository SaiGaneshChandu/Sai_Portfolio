import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  github,
  live,
  featured = false
}) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setMousePosition({
      x,
      y
    });
  };

  return (
    <motion.article
      className={`project-card ${featured ? "featured" : ""}`}
      onMouseMove={handleMouseMove}
      initial={{
        opacity: 0,
        y: 70
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.2
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut"
      }}
      whileHover={{
        y: -12,
        rotateX: 2,
        rotateY: -2
      }}
    >
      <div
        className="project-card-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />

      <div className="project-image-wrapper">
        <motion.img
          src={image}
          alt={title}
          className="project-image"
          whileHover={{
            scale: 1.08
          }}
          transition={{
            duration: 0.5
          }}
        />

        <div className="project-image-overlay" />

        <div className="project-links">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-button"
              aria-label={`${title} GitHub`}
              whileHover={{
                scale: 1.12,
                rotate: -5
              }}
              whileTap={{
                scale: 0.92
              }}
            >
              <Github size={20} />
            </motion.a>
          )}

          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-button"
              aria-label={`${title} live project`}
              whileHover={{
                scale: 1.12,
                rotate: 5
              }}
              whileTap={{
                scale: 0.92
              }}
            >
              <ArrowUpRight size={21} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="project-content">
        <div className="project-number">
          PROJECT
        </div>

        <h3 className="project-title">
          {title}
        </h3>

        <p className="project-description">
          {description}
        </p>

        <div className="project-technologies">
          {technologies.map((technology) => (
            <motion.span
              key={technology}
              className="technology-tag"
              whileHover={{
                y: -3,
                scale: 1.05
              }}
            >
              {technology}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}