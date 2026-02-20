import { Download, FileText, Award, Car, Code, Brain } from "lucide-react";
import "./Documents.css";

export default function Documents() {
  const certificates = [
    {
      id: 1,
      title: "Data Structures",
      description: "Certificate in Data Structures and Algorithms",
      file: "Data_Structuer.pdf",
      icon: <FileText size={24} />,
      category: "Technical"
    },
    {
      id: 2,
      title: "Driver's License C1",
      description: "Valid Code 10 (C1) Driver's License",
      file: "Drivers License C1.pdf",
      icon: <Car size={24} />,
      category: "Professional"
    },
    {
      id: 3,
      title: "Geekulcha Hackathon",
      description: "Certificate from Geekulcha Annual Hackathon 2025",
      file: "Geekulcha_Hackathon_Certificate.pdf",
      icon: <Award size={24} />,
      category: "Achievement"
    },
    {
      id: 4,
      title: "Understanding Artificial Intelligence",
      description: "DataCamp course completion certificate",
      file: "Understanding Artificial Intelligence.pdf",
      icon: <Brain size={24} />,
      category: "Technical"
    },
    {
      id: 5,
      title: "Web Design Certificate",
      description: "Responsive Web Design certification from freeCodeCamp",
      file: "Web_Design_Certificate.pdf",
      icon: <Code size={24} />,
      category: "Technical"
    }
  ];

  const handleDownload = (fileName: string) => {
    const link = document.createElement("a");
    link.href = `/Certificates/${fileName}`;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technical":
        return "technical";
      case "Professional":
        return "professional";
      case "Achievement":
        return "achievement";
      default:
        return "default";
    }
  };

  return (
    <div className="documents-page">
      <div className="documents-container">
        <header className="documents-header fade-in">
          <h1 className="documents-title">Documents & Certificates</h1>
          <p className="documents-subtitle">
            Professional certificates and achievements
          </p>
        </header>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`certificate-card fade-in ${getCategoryColor(cert.category)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="certificate-icon">
                {cert.icon}
              </div>
              
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-description">{cert.description}</p>
                
                <div className="certificate-meta">
                  <span className="certificate-category">{cert.category}</span>
                </div>
              </div>

              <button
                className="download-certificate-btn"
                onClick={() => handleDownload(cert.file)}
                aria-label={`Download ${cert.title}`}
              >
                <Download size={20} />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
