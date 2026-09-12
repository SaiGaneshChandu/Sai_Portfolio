import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (event) => {
      const target = event.target;

      if (
        target.closest(
          "button, a, input, textarea, .project-card, .skill-card, .interactive"
        )
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          x: { duration: 0.05 },
          y: { duration: 0.05 },
          scale: { duration: 0.2 },
          opacity: { duration: 0.2 }
        }}
      />

      <motion.div
        className="cursor-ring"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovering ? 1.7 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          x: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 0.5
          },
          y: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 0.5
          },
          scale: {
            duration: 0.25,
            ease: "easeOut"
          },
          opacity: {
            duration: 0.2
          }
        }}
      />

      <motion.div
        className="cursor-glow"
        animate={{
          x: position.x,
          y: position.y,
          opacity: isVisible ? 0.7 : 0
        }}
        transition={{
          x: {
            type: "spring",
            stiffness: 120,
            damping: 20
          },
          y: {
            type: "spring",
            stiffness: 120,
            damping: 20
          },
          opacity: {
            duration: 0.3
          }
        }}
      />
    </>
  );
}