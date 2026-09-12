import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Calendar,
  Code2,
  Database,
  Sparkles
} from "lucide-react";

const experience = {
  role: "Python Full Stack Intern",
  company: "Global One Services",
  type: "Internship",
  description:
    "Hands-on training and development experience in Python Full Stack Development, with practical work across programming, databases and web technologies.",
  responsibilities: [
    "Worked with Python programming and Object-Oriented Programming concepts.",
    "Practiced SQL commands, joins and database operations.",
    "Developed web pages using HTML and CSS.",
    "Built a Python Snake Game with movement, food generation, scoring and collision logic.",
    "Performed testing and debugging of developed applications."
  ],
  technologies: [
    "Python",
    "OOP",
    "SQL",
    "HTML",
    "CSS"
  ]
};

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
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
            <BriefcaseBusiness size={15} />
            EXPERIENCE
          </span>

          <h2>
            Where I gained
            <span> practical experience.</span>
          </h2>

          <p>
            My hands-on experience in software development and
            application building.
          </p>
        </motion.div>

        <motion.div
          className="experience-card interactive"
          initial={{
            opacity: 0,
            y: 80,
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
            duration: 0.9,
            ease: "easeOut"
          }}
          whileHover={{
            y: -10,
            rotateX: 2,
            rotateY: -2
          }}
          style={{
            transformStyle: "preserve-3d"
          }}
        >
          <div className="experience-timeline">
            <motion.div
              className="experience-timeline-dot"
              animate={{
                scale: [1, 1.25, 1],
                boxShadow: [
                  "0 0 0 rgba(124,58,237,0)",
                  "0 0 30px rgba(124,58,237,0.6)",
                  "0 0 0 rgba(124,58,237,0)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity
              }}
            />

            <div className="experience-timeline-line" />
          </div>

          <div className="experience-content">
            <div className="experience-top">
              <div>
                <motion.div
                  className="experience-icon"
                  whileHover={{
                    rotate: 10,
                    scale: 1.1
                  }}
                >
                  <Code2 size={26} />
                </motion.div>

                <span className="experience-type">
                  {experience.type}
                </span>
              </div>

              <div className="experience-meta">
                <Calendar size={16} />
                <span>Professional Experience</span>
              </div>
            </div>

            <h3 className="experience-role">
              {experience.role}
            </h3>

            <h4 className="experience-company">
              {experience.company}
            </h4>

            <p className="experience-description">
              {experience.description}
            </p>

            <div className="experience-details">
              <div className="experience-responsibilities">
                <h4>
                  What I worked on
                </h4>

                <ul>
                  {experience.responsibilities.map(
                    (responsibility, index) => (
                      <motion.li
                        key={responsibility}
                        initial={{
                          opacity: 0,
                          x: -20
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0
                        }}
                        viewport={{
                          once: true
                        }}
                        transition={{
                          delay: 0.2 + index * 0.08
                        }}
                      >
                        <span className="bullet">
                          ✦
                        </span>

                        {responsibility}
                      </motion.li>
                    )
                  )}
                </ul>
              </div>

              <div className="experience-tech">
                <div className="experience-tech-heading">
                  <Database size={17} />
                  <span>Technologies</span>
                </div>

                <div className="experience-tech-list">
                  {experience.technologies.map(
                    (technology, index) => (
                      <motion.span
                        key={technology}
                        className="experience-tech-tag"
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
                          delay: 0.3 + index * 0.08
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.06
                        }}
                      >
                        {technology}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            </div>

            <motion.div
              className="experience-bottom"
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
                delay: 0.6
              }}
            >
              <Sparkles size={17} />

              <span>
                Learning through real-world development
                experience.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}