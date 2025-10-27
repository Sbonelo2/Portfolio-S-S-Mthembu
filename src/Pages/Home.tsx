import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  ArrowDown,
  Layout,
  Database,
  // Git,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";
import image from "../img/WhatsApp Image 2025-09-25 at 11.27.53.jpeg";

export default function Home() {
  const skills = [
    {
      icon: <Code size={32} />,
      title: "Frontend Development",
      description:
        "Crafting modern web interfaces with React, Redux, and TypeScript. Expertise in responsive design, component architecture, and creating engaging user experiences.",
    },
    {
      icon: <Zap size={32} />,
      title: "Backend Development",
      description:
        "Building scalable server solutions with Node.js and Express. Implementing RESTful APIs, authentication systems, and efficient database operations.",
    },
    {
      icon: <Palette size={32} />,
      title: "Full Stack Integration",
      description:
        "End-to-end application development from database design to UI. Proficient in MERN stack, API integration, and deploying complete web solutions.",
    },
    {
      icon: <Code size={32} />,
      title: "Modern Technologies",
      description:
        "Leveraging cutting-edge tools like TypeScript, Redux, Git version control, and implementing CI/CD pipelines for automated deployment.",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-in">
          <img src={image} alt="Profile" className="profile-image" />

          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="gradient-text">S'bonelo Silwane Mthembu</span>
          </h1>
          <h2 className="hero-subtitle">
            ICT Graduate - Business Analysis & Full Stack Developer
          </h2>
          <p className="hero-description">
            I’m an ICT graduate (NQF Level 6) and Full Stack Developer dedicated
            to continuous learning and innovation. With a passion for both
            design and development, I build responsive, data-driven web
            applications that solve real-world problems. My focus is on growth,
            creativity, and contributing meaningful value within the Information
            and Communication Technology space.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">What I Do</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Let's Build Something Amazing Together</h2>
          <p className="cta-description">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <div className="cta-buttons">
            <Link to="/cv" className="btn btn-outline">
              <ArrowDown size={20} /> View CV
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
