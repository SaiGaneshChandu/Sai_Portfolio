import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Sparkles } from "lucide-react";

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "DNA Classification using ML/DL",
    description:
      "A full-stack ML/DL application for DNA classification with both web and mobile interfaces. The web application uses Django, HTML, CSS and JavaScript, while the mobile application is developed using React Native and Expo.",
    image: "/images/dna-project.png",
    technologies: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Django",
      "React Native",
      "Expo",
      "EAS Build"
    ],
    featured: true
  },
  {
    title: "Plant Root Disease Prediction",
    description:
      "A web-based machine learning solution that processes plant root images and predicts disease categories using image processing and classification techniques.",
    image: "/images/plant-project.png",
    technologies: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },
  {
    title: "Python Snake Game",
    description:
      "A Python-based Snake Game developed with core programming concepts, including game movement, food generation, scoring and collision handling.",
    image: "/images/snake-game.png",
    technologies: [
      "Python",
      "OOP",
      "Game Logic",
      "Collision Detection"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <motion.div
          className="section-heading projects-heading"
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
            <FolderGit2 size={15} />
            MY PROJECTS
          </span>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p>
            Practical projects where I combine software development,
            ML & DL and modern application technologies.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              featured={project.featured}
            />
          ))}
        </div>

        <motion.div
          className="projects-bottom-card interactive"
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
          whileHover={{
            y: -6,
            rotateX: 2
          }}
        >
          <div className="projects-bottom-icon">
            <Sparkles size={22} />
          </div>

          <div>
            <h3>More projects are on the way.</h3>

            <p>
              I'm continuously learning and building new
              applications to improve my development skills.
            </p>
          </div>

          <motion.a
            href="https://github.com/SaiGaneshChandu"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button"
            whileHover={{
              scale: 1.05,
              x: 5
            }}
            whileTap={{
              scale: 0.95
            }}
          >
            View GitHub
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}