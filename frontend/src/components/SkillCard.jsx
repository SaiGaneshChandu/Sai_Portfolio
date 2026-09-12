import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Database,
  ShieldCheck,
  Smartphone,
  Globe,
  Server,
  Terminal
} from "lucide-react";

const iconMap = {
  code: Code2,
  ai: BrainCircuit,
  database: Database,
  security: ShieldCheck,
  mobile: Smartphone,
  web: Globe,
  backend: Server,
  terminal: Terminal
};

export default function SkillCard({
  title,
  description,
  skills = [],
  icon = "code"
}) {
  const Icon = iconMap[icon] || Code2;

  return (
    <motion.div
      className="skill-card interactive"
      initial={{
        opacity: 0,
        y: 60,
        rotateX: 8
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0
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
        rotateX: 5,
        rotateY: -5,
        scale: 1.02
      }}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        className="skill-icon"
        whileHover={{
          rotate: 360,
          scale: 1.15
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut"
        }}
      >
        <Icon size={28} strokeWidth={1.8} />
      </motion.div>

      <div className="skill-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="skill-list">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="skill-tag"
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.06
              }}
              whileHover={{
                y: -3,
                scale: 1.06
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="skill-card-shine" />
    </motion.div>
  );
}