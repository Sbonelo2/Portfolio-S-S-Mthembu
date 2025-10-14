import { ArrowRight, Code, Palette, Zap, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const skills = [
    { icon: <Code size={32} />, title: 'Business Analysis', description: 'Analyzing business requirements and delivering ICT solutions' },
    { icon: <Palette size={32} />, title: 'Database Management', description: 'SQL and MySQL database design and optimization' },
    { icon: <Zap size={32} />, title: 'Strategic Planning', description: 'Planning and executing technology projects effectively' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">S'bonelo Silwane Mthembu</span>
          </h1>
          <h2 className="hero-subtitle">ICT Graduate - Business Analysis Specialist</h2>
          <p className="hero-description">
            As a dedicated ICT graduate with an NQF Level 6 qualification, I bring strategic planning, 
            analytical thinking, and problem-solving skills to deliver meaningful contributions to the 
            Information and Communication Technology field.
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
        <div className="hero-visual">
          <div className="floating-card"></div>
          <div className="floating-card delay-1"></div>
          <div className="floating-card delay-2"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">What I Do</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="cta-buttons">
            <Link to="/cv" className="btn btn-outline">
              <Download size={20} /> Download CV
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
