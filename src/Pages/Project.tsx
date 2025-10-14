import { ExternalLink, Github } from 'lucide-react';
import './Project.css';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Vite showcasing my skills and projects.',
      technologies: ['React', 'TypeScript', 'CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2',
      live: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Database Management System',
      description: 'SQL-based database management project demonstrating data modeling, queries, and optimization techniques.',
      technologies: ['SQL', 'MySQL', 'Database Design'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2',
      live: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Business Analysis Project',
      description: 'ICT business analysis project focusing on requirements gathering, system design, and implementation planning.',
      technologies: ['Business Analysis', 'SDLC', 'Documentation'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2',
      live: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Web Development Projects',
      description: 'Collection of web development projects using HTML, CSS, JavaScript, and React frameworks.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2',
      live: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="projects-page">
      <div className="projects-container">
        <header className="projects-header fade-in">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            A collection of my recent work and side projects
          </p>
        </header>

        {/* Featured Projects */}
        <section className="featured-section">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card featured-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Github size={20} />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="other-section">
          <h2 className="section-heading">Other Projects</h2>
          <div className="projects-grid">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Github size={20} />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
