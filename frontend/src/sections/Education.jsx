import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Sparkles
} from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Swarnandhra College of Engineering and Technology",
    period: "2024 – 2026",
    score: "8.4 CGPA",
    icon: GraduationCap,
    current: true
  },
  {
    degree: "Bachelor of Science — MPCS",
    institution: "Sri Aditya Degree College",
    period: "2021 – 2024",
    score: "7.4 CGPA",
    icon: BookOpen
  },
  {
    degree: "Intermediate — MPC",
    institution: "Sri Sai Aditya Junior College",
    period: "2019 – 2021",
    score: "7.6",
    icon: Award
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "ZPHS Rallarevu",
    period: "2018 – 2019",
    score: "8.5",
    icon: BookOpen
  }
];

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            <GraduationCap size={15} />
            EDUCATION
          </span>

          <h2>
            My academic
            <span> journey.</span>
          </h2>

          <p>
            The academic foundation behind my software development
            and technology journey.
          </p>
        </motion.div>

        <div className="education-timeline">
          <div className="education-line" />

          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.degree}
                className={`education-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.2
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.12
                }}
              >
                <motion.div
                  className="education-dot"
                  whileHover={{
                    scale: 1.35
                  }}
                >
                  <span />
                </motion.div>

                <motion.div
                  className={`education-card interactive ${
                    item.current ? "current" : ""
                  }`}
                  whileHover={{
                    y: -10,
                    rotateX: 3,
                    rotateY: index % 2 === 0 ? 3 : -3
                  }}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  {item.current && (
                    <div className="education-current">
                      <Sparkles size={13} />
                      Currently Pursuing
                    </div>
                  )}

                  <div className="education-card-top">
                    <motion.div
                      className="education-icon"
                      whileHover={{
                        rotate: 10,
                        scale: 1.1
                      }}
                    >
                      <Icon size={25} />
                    </motion.div>

                    <div className="education-period">
                      <Calendar size={15} />
                      {item.period}
                    </div>
                  </div>

                  <h3>{item.degree}</h3>

                  <p className="education-institution">
                    {item.institution}
                  </p>

                  <div className="education-score">
                    <span>Academic Score</span>
                    <strong>{item.score}</strong>
                  </div>

                  <div className="education-card-shine" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="education-bottom"
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
        >
          <GraduationCap size={22} />

          <div>
            <strong>Always learning. Always building.</strong>
            <span>
              Continuously improving my technical and problem-solving skills.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}