import { ExternalLink, Github } from 'lucide-react';
import './Project.css';

export default function Project() {
  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const projects = [
    
    {
      id: 3,
      title: 'Weather Application',
      description: 'Real-time weather application with location-based forecasts and weather data visualization.',
      technologies: ['React', 'API', 'Weather API', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/Weather-Focus',
      live: 'https://weather-focus.onrender.com',
      featured: true,
    },
    {
      id: 6,
      title: 'Job Application Tracker',
      description: 'React TypeScript application for tracking job applications with status management.',
      technologies: ['React', 'TypeScript', 'State Management'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/ReactTS-Job-Application-Tracker',
      live: 'https://sbonelo2-reactts-job-application-tracker.onrender.com',
      featured: true,
    },
    {
      id: 5,
      title: 'Redux Dictionary App',
      description: 'A simple and clean dictionary web application demonstrating Redux Toolkit principles. Search for words and view definitions.',
      technologies: ['React', 'Redux', 'Redux Toolkit', 'API'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/redux-dictionary-app',
      live: 'https://redux-dictionary-app-264q.onrender.com',
      featured: true,
    },
    {
      id: 13,
      title: 'Link Vault App',
      description: 'A secure link management application for organizing and accessing important URLs.',
      technologies: ['React', 'TypeScript', 'State Management'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/React-TS--Task-2',
      live: 'https://react-ts-task-2-2.onrender.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Simple Ollama AI React GUI',
      description: 'A clean and intuitive React-based GUI for interacting with Ollama AI models.',
      technologies: ['React', 'AI', 'GUI', 'Ollama'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/Simple-Ollama-AI-React-GUI',
      live: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Shopping List App',
      description: 'Interactive shopping list application with add, edit, and delete functionality.',
      technologies: ['React', 'TypeScript', 'Local Storage'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/Task-5--Shopping-List-App',
      live: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Redux Dictionary App',
      description: 'A simple and clean dictionary web application demonstrating Redux Toolkit principles. Search for words and view definitions.',
      technologies: ['React', 'Redux', 'Redux Toolkit', 'API'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/redux-dictionary-app',
      live: 'https://redux-dictionary-app-264q.onrender.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Job Application Tracker',
      description: 'React TypeScript application for tracking job applications with status management.',
      technologies: ['React', 'TypeScript', 'State Management'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/ReactTS-Job-Application-Tracker',
      live: 'https://sbonelo2-reactts-job-application-tracker.onrender.com',
      featured: false,
    },
    {
      id: 7,
      title: 'Task Manager',
      description: 'Task management application with CRUD operations and task organization features.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/Task-manager',
      live: '#',
      featured: false,
    },
    {
      id: 8,
      title: 'TypeScript Workshops',
      description: 'Collection of TypeScript learning projects including Vite workshop, vanilla TS, and TypeScript 101.',
      technologies: ['TypeScript', 'Vite', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/TypeScript-101',
      live: '#',
      featured: false,
    },
    {
      id: 9,
      title: 'Flexbox UI Challenges',
      description: 'UI challenges demonstrating CSS Flexbox layout techniques and responsive design.',
      technologies: ['HTML', 'CSS', 'Flexbox', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/flex-box-ui-challenge',
      live: '#',
      featured: false,
    },
    {
      id: 10,
      title: 'Forms & Filter Workshops',
      description: 'JavaScript workshops focusing on form handling, table filtering, and data manipulation.',
      technologies: ['JavaScript', 'HTML', 'Forms', 'Filters'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/forms-js-workshop',
      live: '#',
      featured: false,
    },
    {
      id: 11,
      title: 'OOP Movies Workshop',
      description: 'Object-oriented programming project demonstrating OOP principles with a movies application.',
      technologies: ['JavaScript', 'OOP', 'ES6'],
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/oop-movies-workshop',
      live: '#',
      featured: false,
    },
    {
      id: 12,
      title: 'JSON Server Workshop',
      description: 'Backend workshop using JSON Server for creating mock REST APIs.',
      technologies: ['JSON Server', 'REST API', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/JSON-server-workshop',
      live: '#',
      featured: false,
    },
    {
      id: 13,
      title: 'Link Vault App',
      description: 'A secure link management application for organizing and accessing important URLs.',
      technologies: ['React', 'TypeScript', 'State Management'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      github: 'https://github.com/Sbonelo2/React-TS--Task-2',
      live: 'https://react-ts-task-2-2.onrender.com',
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
                      <button 
                        onClick={(e) => handleLinkClick(project.github, e)}
                        className="project-link"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </button>
                      <button 
                        onClick={(e) => handleLinkClick(project.live, e)}
                        className="project-link"
                        aria-label="View live project"
                      >
                        <ExternalLink size={20} />
                      </button>
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
                      <button 
                        onClick={(e) => handleLinkClick(project.github, e)}
                        className="project-link"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </button>
                      <button 
                        onClick={(e) => handleLinkClick(project.live, e)}
                        className="project-link"
                        aria-label="View live project"
                      >
                        <ExternalLink size={20} />
                      </button>
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
