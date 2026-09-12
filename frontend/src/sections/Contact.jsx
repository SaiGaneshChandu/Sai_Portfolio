import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Sparkles,
  MapPin,
  ArrowUpRight,
  Phone,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:saiganeshchandu012@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
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
            <Mail size={15} />
            CONTACT
          </span>

          <h2>
            Let's build something
            <span> amazing.</span>
          </h2>

          <p>
            Have an opportunity, project or idea? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info-card interactive"
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
              y: -10,
              rotateY: -3
            }}
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            <div className="contact-card-glow" />

            <div className="contact-avatar">
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="contact-avatar-ring"
              />

              <span>SG</span>
            </div>

            <h3>Get in touch</h3>

            <p>
              I'm open to discussing software development,
              AI/ML projects, internships and entry-level
              opportunities.
            </p>

            <div className="contact-details">
              <a
                href="mailto:saiganeshchandu012@gmail.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Mail size={19} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    saiganeshchandu012@gmail.com
                  </strong>
                </div>
              </a>

              <a
  href="tel:+919697912555"
  className="contact-detail"
>
  <div className="contact-detail-icon">
    <Phone size={19} />
  </div>

  <div>
    <span>Phone</span>
    <strong>Call Me</strong>
  </div>
</a>

              <a
                href="https://wa.me/919697912555"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <MessageCircle size={19} />
                </div>

                <div>
                  <span>WhatsApp</span>
                  <strong>Chat on WhatsApp</strong>
                </div>
              </a>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={19} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>Andhra Pradesh, India</strong>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/SaiGaneshChandu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={19} />
                <span>GitHub</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://www.linkedin.com/in/sri-naga-veera-venkata-sai-ganesh-chandu-b281a62b3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
                <span>LinkedIn</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form-card interactive"
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 70,
              rotateY: -8
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
              rotateY: 2
            }}
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            <div className="form-header">
              <div>
                <span className="form-number">01</span>
                <h3>Send a message</h3>
              </div>

              <Sparkles size={22} />
            </div>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your opportunity or project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="contact-submit"
              whileHover={{
                scale: 1.03,
                y: -4
              }}
              whileTap={{
                scale: 0.96
              }}
            >
              <span>Send Message</span>
              <Send size={18} />
            </motion.button>

            <p className="form-note">
              Your message will open in your default email
              application.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}