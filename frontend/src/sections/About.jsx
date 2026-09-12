import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Smartphone,
  ShieldCheck,
  GraduationCap,
  Sparkles
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    text: "Building modern and scalable web applications using Python, Django, Flask and React."
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    text: "Interested in developing intelligent solutions using Machine Learning and Deep Learning."
  },
  {
    icon: Smartphone,
    title: "Web & Mobile",
    text: "Creating responsive web interfaces and mobile applications using React Native and Expo."
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    text: "Strong interest in network security and cybersecurity concepts."
  }
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            <Sparkles size={15} />
            ABOUT ME
          </span>

          <h2>
            Turning ideas into
            <span> digital experiences.</span>
          </h2>

          <p>
            A little more about who I am and what I love building.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-main-card interactive"
            initial={{
              opacity: 0,
              x: -70,
              rotateY: 8
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.8
            }}
            whileHover={{
              y: -8,
              rotateY: -3,
              rotateX: 2
            }}
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            <div className="about-card-number">
              01
            </div>

            <div className="about-avatar">
              <div className="about-avatar-ring" />

              <img
                src="/images/profile.png"
                alt="Sai Ganesh"
              />

              <div className="about-avatar-badge">
                <Code2 size={18} />
              </div>
            </div>

            <div className="about-text">
              <h3>Hi, I'm Sai Ganesh 👋</h3>

              <p>
                I am an MCA student and aspiring Software Developer
                with a strong interest in AI, Machine Learning and
                modern application development.
              </p>

              <p>
                I enjoy transforming ideas into practical
                applications and exploring technologies that help
                create useful, interactive and intelligent digital
                experiences.
              </p>

              <div className="about-education">
                <GraduationCap size={20} />

                <div>
                  <strong>Master of Computer Applications</strong>
                  <span>
                    Swarnandhra College of Engineering and Technology
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  className="about-highlight-card interactive"
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
                    amount: 0.15
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1
                  }}
                  whileHover={{
                    y: -8,
                    rotateX: 3,
                    rotateY: -3,
                    scale: 1.02
                  }}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  <div className="highlight-icon">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>

                  <span className="highlight-number">
                    0{index + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="about-stats"
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
        >
          <div className="stat-card">
            <strong>8.4</strong>
            <span>MCA CGPA</span>
          </div>

          <div className="stat-card">
            <strong>2+</strong>
            <span>Major Projects</span>
          </div>

          <div className="stat-card">
            <strong>4+</strong>
            <span>Development Areas</span>
          </div>

          <div className="stat-card">
            <strong>∞</strong>
            <span>Learning Mindset</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}