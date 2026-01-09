import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const handleGmailContact = () => {
    const subject = encodeURIComponent("Portfolio Contact - New Message");
    const body = encodeURIComponent("Hi Sbonelo,\n\nI came across your portfolio and would like to connect with you regarding...\n\nBest regards,\n[Your Name]");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=cbonelo224@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "cbonelo224@gmail.com",
      link: "mailto:cbonelo224@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "060 621 8075",
      link: "tel:+27606218075",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Pietermaritzburg, South Africa",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/Sbonelo2",
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mthimban-silwane-53a173387/",
    },
    {
      icon: <Facebook size={24} />,
      name: "Facebook",
      url: "https://facebook.com",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      name: "TikTok",
      url: "https://tiktok.com",
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-container">
        <header className="contact-header fade-in">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </header>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info fade-in">
            <h2 className="info-title">Contact Information</h2>
            <p className="info-description">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="info-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-details">
                    <h3 className="info-item-title">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="info-value">
                        {item.value}
                      </a>
                    ) : (
                      <p className="info-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h3 className="social-title">Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper fade-in">
            <div className="gmail-contact">
              <h2 className="form-title">Send Me a Message</h2>
              <p className="form-description">
                Prefer using Gmail? Click the button below to open your Gmail client with a pre-filled message.
              </p>
              <button onClick={handleGmailContact} className="gmail-btn">
                <Mail size={20} />
                Open in Gmail
              </button>
              <p className="alternative-contact">
                Or email me directly at: <a href="mailto:cbonelo224@gmail.com">cbonelo224@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
