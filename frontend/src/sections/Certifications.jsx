import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Languages,
  ExternalLink,
  Sparkles
} from "lucide-react";

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    description:
      "Foundational cybersecurity certification covering essential cybersecurity concepts and security awareness.",
    icon: ShieldCheck,
    category: "Cybersecurity"
  },
  {
    title: "English Language and Communication Skills",
    issuer: "MePro Pearson",
    description:
      "Certification focused on English language proficiency and professional communication skills.",
    icon: Languages,
    category: "Communication"
  }
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section certifications-section"
    >
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
            <Award size={15} />
            CERTIFICATIONS
          </span>

          <h2>
            Learning beyond
            <span> the classroom.</span>
          </h2>

          <p>
            Certifications that complement my technical and
            professional skills.
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((certification, index) => {
            const Icon = certification.icon;

            return (
              <motion.article
                key={certification.title}
                className="certification-card interactive"
                initial={{
                  opacity: 0,
                  y: 70,
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
                  duration: 0.75,
                  delay: index * 0.15
                }}
                whileHover={{
                  y: -12,
                  rotateX: 4,
                  rotateY: index === 0 ? -4 : 4,
                  scale: 1.02
                }}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="certification-glow" />

                <div className="certification-top">
                  <motion.div
                    className="certification-icon"
                    whileHover={{
                      rotate: 12,
                      scale: 1.12
                    }}
                  >
                    <Icon size={28} />
                  </motion.div>

                  <span className="certification-category">
                    {certification.category}
                  </span>
                </div>

                <div className="certification-content">
                  <h3>{certification.title}</h3>

                  <p className="certification-issuer">
                    {certification.issuer}
                  </p>

                  <p className="certification-description">
                    {certification.description}
                  </p>
                </div>

                <div className="certification-footer">
                  <div className="certification-badge">
                    <Award size={15} />
                    <span>Certified</span>
                  </div>

                  <motion.div
                    className="certification-arrow"
                    whileHover={{
                      x: 5,
                      y: -5
                    }}
                  >
                    <ExternalLink size={18} />
                  </motion.div>
                </div>

                <div className="certification-shine" />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="certifications-note"
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
            duration: 0.7,
            delay: 0.2
          }}
        >
          <Sparkles size={20} />

          <span>
            Continuously expanding my knowledge across software
            development, AI/ML and cybersecurity.
          </span>
        </motion.div>
      </div>
    </section>
  );
}