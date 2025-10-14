import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'cbonelo224@gmail.com',
      link: 'mailto:cbonelo224@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '060 621 8075',
      link: 'tel:+27606218075',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Pietermaritzburg, South Africa',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <Github size={24} />, name: 'GitHub', url: 'https://github.com/Sbonelo2' },
    { icon: <Linkedin size={24} />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/mthimban-silwane-53a173387/' },
    { icon: <Twitter size={24} />, name: 'Twitter', url: 'https://twitter.com' },
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
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="info-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-details">
                    <h3 className="info-item-title">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="info-value">{item.value}</a>
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
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Your message..."
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="success-message">
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
