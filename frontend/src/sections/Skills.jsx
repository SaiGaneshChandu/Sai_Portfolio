import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Database,
  ShieldCheck,
  Smartphone,
  Server
} from "lucide-react";

import SkillCard from "../components/SkillCard";

const skillCategories = [
  {
    title: "Programming",
    description:
      "Strong foundation in programming and object-oriented development.",
    icon: Code2,
    skills: ["C", "Java", "Python"]
  },
  {
    title: "AI & Machine Learning",
    description:
      "Experience and interest in building intelligent ML and DL solutions.",
    icon: BrainCircuit,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      
    ]
  },
  {
    title: "Web Development",
    description:
      "Building responsive and interactive applications for the web.",
    icon: Server,
    skills: [
      "Django",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },
  {
    title: "Database",
    description:
      "Working with relational and NoSQL databases for application development.",
    icon: Database,
    skills: [
      "MySQL",
      "MongoDB",
      "DBMS",
      
    ]
  },
  {
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications with modern React Native tooling.",
    icon: Smartphone,
    skills: [
      "React Native",
      "Expo",
      "EAS Build"
    ]
  },
  {
    title: "Cyber Security",
    description:
      "Foundational knowledge and strong interest in cybersecurity and network security.",
    icon: ShieldCheck,
    skills: [
      "Cyber Security",
      "Network Security"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.25
          }}
          transition={{
            duration: 0.7
          }}
        >
          <span className="section-label">
            <Code2 size={15} />
            MY SKILLS
          </span>

          <h2>
            Technologies I
            <span> work with.</span>
          </h2>

          <p>
            A combination of programming, development, AI/ML,
            databases and security skills.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                className="skill-wrapper"
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
                  amount: 0.15
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08
                }}
              >
                <SkillCard
                  title={category.title}
                  description={category.description}
                  skills={category.skills}
                  icon={
                    category.title === "Programming"
                      ? "code"
                      : category.title === "AI & Machine Learning"
                        ? "ai"
                        : category.title === "Web Development"
                          ? "backend"
                          : category.title === "Database"
                            ? "database"
                            : category.title === "Mobile Development"
                              ? "mobile"
                              : "security"
                  }
                />

                <motion.div
                  className="skill-floating-icon"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  <Icon size={14} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="skills-marquee"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1
          }}
        >
          <div className="skills-marquee-track">
            {[
              "Python",
              "C",
              "Java",
              "React Native",
              "Django",
              "Flask",
              "Machine Learning",
              "Deep Learning",
              "MySQL",
              "MongoDB",
              "Cyber Security",
              "Network Security",
              "HTML",
              "CSS",
              "Java Script"
            ].map((skill, index) => (
              <span key={`${skill}-${index}`}>
                {skill}
                <b>✦</b>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}