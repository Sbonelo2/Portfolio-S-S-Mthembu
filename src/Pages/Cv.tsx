import { Download } from "lucide-react";
import "./Cv.css";
import cvPdf from "../cv/S'BONELO'S_CV_01.pdf";

export default function Cv() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPdf;
    link.download = "Sbonelo_Mthembu_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const education = [
    {
      degree: "Diploma in ICT Business Analysis",
      institution: "Durban University of Technology",
      period: "01/2022 – 06/2025",
      location: "Pietermaritzburg",
      description: "Diploma in Information and Communication Technology – Business Analysis (NQF Level 6)Focused on bridging business and technology through systems analysis, database management, software development, and enhancing my effectiveness as a Full Stack Developer and ICT professional.",
    },
    {
      degree: "Matric",
      institution: "Mashalaza High School",
      period: "01/2017 – 12/2021",
      location: "Manguzi",
      description: "Science Stream: Completed matric with a focus on Mathematics, Physical Science, Life Science, and Agricultural Science. This academic foundation developed strong analytical, logical, and problem-solving skills, which contribute to my effectiveness as a Full Stack Developer and ICT professional.",
    },
  ];

  const skills = {
    "Programming & Markup": [
      "Python",
      "C#",
      "JavaScript",
      "HTML",
      "CSS",
      "TypeScript",
    ],
    "Frameworks & Libraries": ["React", "Node.js", "MongoDB", "PostgreSQL", "Supabase", "Firebase"],
    "Tools & Platforms": ["GitHub", "AI Models"],
    "Technical Skills": [
      "CRUD operations",
      "REST APIs",
      "UI/UX understanding",
      "Responsive design",
    ],
    "Soft Skills": [
      "Problem Solving",
      "Team collaboration",
      "Time management",
      "Communication skills",
      "Adaptability",
    ],
    "Computer Literacy": ["Computer Literacy"],
    "Presentation": ["Power point presentation"],
  };

  const certifications = [
    {
      title: "Driver's License",
      description: "Holder of a valid Code 10 (C1) driver's license, demonstrating responsibility, reliability, and the ability to operate mediumsized vehicles safely and efficiently.",
    },
    {
      title: "Artificial Intelligence",
      description: "Successfully completed a 2-hour DataCamp course on Understanding Artificial Intelligence, gaining foundational knowledge of AI concepts, including machine learning principles, neural networks, and real-world applications. Developed an understanding of how AI systems analyze data, make predictions, and support decision-making, with practical exposure to AI workflows and tools.",
    },
    {
      title: "JavaScript Algorithms And Data Structure",
      description: "Completed training in JavaScript Algorithms and Data Structures on freeCodeCamp with a strong foundation in algorithmic problemsolving, core data structures, and common algorithms such as searching, sorting, and recursion. Familiar with ES6+ JavaScript features and performance analysis using Big O notation, with hands-on experience solving and optimizing coding challenges.",
    },
    {
      title: "Geekulcha_Hackathon_Certificate",
      description: "Participated in the Geekulcha Annual Hackathon (26–28 September 2025) as part of the team Code Bros, developing the Youth Link solution. Gained handson experience in collaborative problem-solving, innovative solution design, and applying technology for sustainable development.",
    },
    {
      title: "Responsive Web design",
      description: "Completed the Responsive Web Design certification on freeCodeCamp, with hands-on experience building mobilefirst, responsive web pages using HTML5 and CSS3. Familiar with CSS Flexbox, Grid layouts, media queries, and basic accessibility best practices.",
    },
    {
      title: "Project Coordinator & events",
      description: "Experienced in planning and executing projects and events, coordinating teams, managing schedules and resources, and ensuring successful outcomes through effective communication and problemsolving.",
    },
  ];

  const personalInfo = {
    fullName: "S'bonelo Mthembu",
    role: "Software Developer",
    email: "cbonelo224@gmail.com",
    phone: "+27 60 621 8075",
    website: "https://portfolio-s-s-mthembu.onrender.com",
    driversLicense: "C1",
    // maritalStatus: "Single",
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

  const profileText = `I'm an ICT graduate (NQF Level 6) and Full Stack Developer dedicated to continuous learning and innovation. With a passion for both design and development, I build responsive, data-driven web applications that solve real-world problems. I focus on growth, creativity, and contributing meaningful value within the Information and Communication Technology space. Additionally, I am the CEO and founder of two businesses, demonstrating leadership, entrepreneurship, and the ability to drive projects from concept to execution.`;

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
      name: "L MAKHAYE, TTACTSO Representative Chairperson",
      phone: "076 065 8736",
    },
    { 
      name: "Miss GWALA, Teacher, Matric", 
      phone: "079 270 3411" 
    },
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
              <p className="cv-info-item">📞 {personalInfo.phone}</p>
              <p className="cv-info-item">📍 {personalInfo.location}</p>
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
                {/* ({personalInfo.maritalStatus}) */}
              </div>
            </div>
          </div>
        </section>

        
        {/* Education Section */}
        <section className="cv-section fade-in">
          <h2 className="section-title">Education</h2>
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
          <h2 className="section-title">Technical Skills</h2>
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
          <h2 className="section-title">Projects</h2>
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
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="cert-marker"></div>
                <div>
                  <strong className="cert-name">{cert.title}</strong>
                  <p className="cert-description">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* References Section */}
        <section className="cv-section fade-in">
          <h2 className="section-title">References</h2>
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
