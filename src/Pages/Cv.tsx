import { Download, Briefcase, GraduationCap, Award, Code } from "lucide-react";
import "./Cv.css";
import cvPdf from "../cv/S'bonelo-CV.pdf";

export default function Cv() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPdf;
    link.download = "Sbonelo_Mthembu_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const experience = [
    {
      title: "TTACTSO Project Coordinator",
      Organization: "TTACTSO",
      period: "2023 - 2024",
      description:
        "Coordinated technology and innovation projects, demonstrating leadership and organizational skills.",
      achievements: [
        "Successfully managed project timelines and deliverables",
        "Collaborated with team members and stakeholders",
        "Received acknowledgement certificate for outstanding contribution",
      ],
    },
  ];

  const education = [
    {
      degree:
        "Diploma in Information and Communication Technology – Business Analysis (NQF Level 6)",
      institution: "Durban University of Technology",
      period: "02/2022 – 06/2025",
      location: "Pietermaritzburg",
      description:
        "Focused on bridging business and technology through systems analysis, database management, and software development; preparation for roles as a Full Stack Developer and ICT professional.",
    },
    {
      degree: "Matric (Science Stream)",
      institution: "Mashalaza High School",
      period: "01/2020 – 11/2021",
      location: "Manguzi",
      description:
        "Completed matric with focus on Mathematics, Physical Science, Life Science, and Agricultural Science — developed analytical and problem-solving skills.",
    },
  ];

  const skills = {
    "Programming & Markup": [
      "C#",
      "JavaScript",
      "Python",
      "HTML",
      "CSS",
      "SQL",
    ],
    "Frameworks & Libraries": ["React", "Redux", "Node.js"],
    "Tools & Platforms": ["GitHub", "Excel", "Visual Studio Code"],
    "AI & Data": ["AI Models"],
    "Soft Skills": [
      "Problem Solving",
      "Presentation (PowerPoint)",
      "Project Coordination",
      "Communication",
    ],
    "Computer Literacy": ["General computer literacy"],
  };

  const certifications = [
    "Acknowledgement Certificate from TTACTSO as Project Coordinator",
    "Computer Literate",
    "Driver's License - Code C1 (Holder of a valid C1)",
  ];

  const personalInfo = {
    fullName: "S'bonelo Mthembu",
    role: "Software Developer",
    email: "cbonelo224@gmail.com",
    phone: "060 621 8075",
    website: "https://portfolio-s-s-mthembu.onrender.com",
    driversLicense: "C1",
    maritalStatus: "Single",
    citizenship: "South African",
    dateOfBirth: "24 October 2002",
    idNumber: "0210245572081",
    gender: "Male",
    disability: "No disability",
    github: "https://github.com/Sbonelo2?tab=repositories",
    linkedin: "https://www.linkedin.com/in/mthimban-silwane-53a173387/",
    location: "Pietermaritzburg",
    languages: "English, IsiZulu, Sithonga",
  };

  const profileText = `I’m an ICT graduate (NQF Level 6) and Full Stack Developer dedicated to continuous learning and innovation. With a passion for both design and development, I build responsive, data-driven web applications that solve real-world problems. My focus is on growth, creativity, and contributing meaningful value within the Information and Communication Technology space.`;

  const projects = [
    {
      title: "Weather Application",
      description:
        "Responsive web-based weather application providing real-time weather updates for any location. Integrates external APIs for accurate data, with dynamic visuals and responsive UI.",
    },
    {
      title: "Job Application Tracker",
      description:
        "Web app to organize and monitor job applications — add, update, track statuses, and view progress at a glance. Demonstrates front-end and back-end integration and database usage.",
    },
    {
      title: "Shopping List API",
      description:
        "RESTful API built with Node.js and TypeScript to manage shopping lists: CRUD operations, validation, and consistent JSON responses with type safety.",
    },
    {
      title: "Music Playlist API",
      description:
        "RESTful API in Node.js/TypeScript for managing playlists and songs, featuring validation, error handling, and scalable design.",
    },
    {
      title: "Redux Dictionary App",
      description:
        "React + Redux application integrating external dictionary APIs to show definitions, synonyms, and pronunciations with efficient state management and responsive UI.",
    },
    {
      title: "Simple Ollama AI",
      description:
        "AI-powered React application interacting with the Ollama API to provide intelligent responses to user queries, demonstrating async handling and interactive UI.",
    },
  ];

  const references = [
    {
      name: "L Makhaye, TTACTSO Representative Chairperson",
      phone: "076 065 8736",
    },
    { name: "Miss Gwala, Matric", phone: "079 270 3411" },
  ];

  return (
    <div className="cv-page">
      <div className="cv-container">
        <header className="cv-header fade-in">
          <div className="cv-header-content">
            <h1 className="cv-title">Curriculum Vitae</h1>
            <p className="cv-subtitle">{personalInfo.fullName}</p>
            <p className="cv-role">{personalInfo.role}</p>
            <div className="cv-contact-info">
              <p className="cv-info-item">📧 {personalInfo.email}</p>
              <p className="cv-info-item">� {personalInfo.phone}</p>
              <p className="cv-info-item">� {personalInfo.location}</p>
              <p className="cv-info-item">🗣️ {personalInfo.languages}</p>
            </div>
          </div>
          <button className="download-btn" onClick={handleDownloadCV}>
            <Download size={20} />
            Download PDF
          </button>
        </header>

        {/* Profile Section */}
        <section className="cv-section fade-in">
          <div className="profile-section">
            <h2 className="section-title">Profile</h2>
            <p className="profile-text">{profileText}</p>
            <div className="personal-grid">
              <div>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
              <div>
                <strong>Website:</strong>{" "}
                <a href={personalInfo.website} target="_blank" rel="noreferrer">
                  {personalInfo.website}
                </a>
              </div>
              <div>
                <strong>GitHub:</strong>{" "}
                <a href={personalInfo.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
              <div>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <strong>Location:</strong> {personalInfo.location}
              </div>
              <div>
                <strong>Citizenship:</strong> {personalInfo.citizenship}
              </div>
              <div>
                <strong>Date of Birth:</strong> {personalInfo.dateOfBirth}
              </div>
              <div>
                <strong>ID Number:</strong> {personalInfo.idNumber}
              </div>
              <div>
                <strong>Gender:</strong> {personalInfo.gender}
              </div>
              <div>
                <strong>Disability:</strong> {personalInfo.disability}
              </div>
              <div>
                <strong>Drivers License:</strong> {personalInfo.driversLicense}{" "}
                ({personalInfo.maritalStatus})
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="cv-section fade-in">
          <div className="section-header">
            <Briefcase className="section-icon" />
            <h2 className="section-title">Work Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <span className="company">{job.Organization}</span>
                    <span className="period">{job.period}</span>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <ul className="achievements-list">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="cv-section fade-in">
          <div className="section-header">
            <GraduationCap className="section-icon" />
            <h2 className="section-title">Education</h2>
          </div>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <h3 className="degree">{edu.degree}</h3>
                <div className="edu-meta">
                  <span className="institution">
                    {edu.institution} {edu.location ? `— ${edu.location}` : ""}
                  </span>
                  <span className="period">{edu.period}</span>
                </div>
                <p className="edu-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="cv-section fade-in">
          <div className="section-header">
            <Code className="section-icon" />
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3 className="category-title">{category}</h3>
                <div className="skill-tags">
                  {items.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="cv-section fade-in">
          <div className="section-header">
            <Code className="section-icon" />
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="cv-section fade-in">
          <div className="section-header">
            <Award className="section-icon" />
            <h2 className="section-title">Certifications</h2>
          </div>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="cert-marker"></div>
                <span className="cert-name">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* References Section */}
        <section className="cv-section fade-in">
          <div className="section-header">
            <Briefcase className="section-icon" />
            <h2 className="section-title">References</h2>
          </div>
          <div className="references-list">
            {references.map((ref, i) => (
              <div key={i} className="reference-item">
                <strong>{ref.name}</strong>
                <div>{ref.phone}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
