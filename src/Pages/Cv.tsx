import { Download, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import './Cv.css';
import cvPdf from '../cv/PRIVATE AND CONFIDENTIAL PROFILE CV SBONELO (1).pdf';

export default function Cv() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Sbonelo_Mthembu_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const experience = [
    {
      title: 'TTACTSO Project Coordinator',
      Organization: 'TTACTSO',
      period: '2023 - 2024',
      description: 'Coordinated technology and innovation projects, demonstrating leadership and organizational skills.',
      achievements: [
        'Successfully managed project timelines and deliverables',
        'Collaborated with team members and stakeholders',
        'Received acknowledgement certificate for outstanding contribution',
      ],
    },
  ];

  const education = [
    {
      degree: 'Diploma in ICT in Business Analysis (DICTBA) - NQF Level 6',
      institution: 'Durban University of Technology',
      period: '2022 - 2025',
      description: 'Comprehensive program covering business analysis, software development, and ICT management.',
    },
    {
      degree: 'Matric',
      institution: 'Mashalaza High School',
      period: '2021',
      description: 'Completed secondary education with focus on mathematics and science.',
    },
  ];

  const skills = {
    'Programming Languages': ['SQL', 'C#', 'Python', 'JavaScript', 'HTML', 'CSS'],
    'Frameworks & Libraries': ['React', 'Redux'],
    'Tools & Technologies': ['Visual Studio Code', 'MySQL'],
    'Core Competencies': ['Database Management', 'SDLC', 'Networking', 'Business Analysis'],
    'Soft Skills': ['Strategic Planning', 'Analytical Thinking', 'Problem Solving', 'Communication'],
  };

  const certifications = [
    'Acknowledgement Certificate from TTACTSO as Project Coordinator',
    'Computer Literate',
    'Driver\'s License - Code C1',
  ];

  const personalInfo = {
    fullName: "S'bonelo Silwane Mthembu",
    email: 'cbonelo224@gmail.com',
    citizenship: 'South African',
    idNumber: '0210245572081',
    gender: 'Male',
    location: '68 Oribi, Pelham, Pietermaritzburg 3201',
    languages: 'English, IsiZulu',
    availability: 'Immediately',
  };

  return (
    <div className="cv-page">
      <div className="cv-container">
        <header className="cv-header fade-in">
          <div className="cv-header-content">
            <h1 className="cv-title">Curriculum Vitae</h1>
            <p className="cv-subtitle">{personalInfo.fullName}</p>
            <p className="cv-role">ICT Graduate - Business Analysis</p>
            <div className="cv-contact-info">
              <p className="cv-info-item">📧 {personalInfo.email}</p>
              <p className="cv-info-item">📍 {personalInfo.location}</p>
              <p className="cv-info-item">🗣️ {personalInfo.languages}</p>
              <p className="cv-info-item">⏰ Available: {personalInfo.availability}</p>
            </div>
          </div>
          <button className="download-btn" onClick={handleDownloadCV}>
            <Download size={20} />
            Download PDF
          </button>
        </header>

        {/* Objective Section */}
        <section className="cv-section fade-in">
          <div className="objective-section">
            <h2 className="objective-title">Objective</h2>
            <p className="objective-text">
              As a dedicated ICT graduate holding an NQF Level 6 qualification, I aim to advance my 
              professional growth by making meaningful and insightful contributions to the Information 
              and Communication Technology field.
            </p>
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
                  <span className="institution">{edu.institution}</span>
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
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
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
      </div>
    </div>
  );
}
