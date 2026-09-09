import { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, GithubIcon, LinkedinIcon, SendIcon, CheckCircleIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-container contact-section">
      <div className="section-header text-center">
        <span className="section-tag">Get in Touch</span>
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Have an entry-level opening, internship, or project discussion? Let's connect.
        </p>
      </div>

      <div className="contact-card-wrapper glass-panel">
        <div className="contact-grid">
          {/* Left Column */}
          <div className="contact-left-col">
            <h3 className="contact-headline">
              Let's Build Something <span className="text-gradient">Together</span>
            </h3>
            <p className="contact-subtext">
              I am actively seeking an entry-level Web Developer position to build user-friendly, responsive applications with HTML, CSS, JavaScript, React.js, Node.js, and MongoDB.
            </p>

            <div className="contact-details-list">
              {/* Email */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <MailIcon size={20} className="text-cyan" />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">Email</span>
                  <a href="mailto:deepakpandit.birpara2308@gmail.com" className="detail-value text-cyan">
                    deepakpandit.birpara2308@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <PhoneIcon size={20} className="text-cyan" />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">Phone</span>
                  <a href="tel:+917672951035" className="detail-value text-cyan">
                    +91 7672951035
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <MapPinIcon size={20} className="text-cyan" />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">
                    Kolkata, West Bengal, India
                  </span>
                </div>
              </div>

              {/* GitHub */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <GithubIcon size={20} className="text-cyan" />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">GitHub</span>
                  <a
                    href="https://github.com/Deepak-pandit46"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-value text-cyan"
                  >
                    https://github.com/Deepak-pandit46
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <LinkedinIcon size={20} className="text-cyan" />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/deepak-pandit-ba6577294/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-value text-cyan"
                  >
                    https://www.linkedin.com/in/deepak-pandit-ba6577294/
                  </a>
                </div>
              </div>
            </div>

            <div className="availability-notice">
              <span className="status-dot"></span>
              <span>BCA Student | Expected 2027 • Open to Entry-Level Web Developer Roles</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-right-col">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  className="form-input"
                  placeholder="e.g. Hiring Manager / Team Lead"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className="form-input"
                  placeholder="e.g. recruiter@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  rows={5}
                  placeholder="Hi Deepak, we'd like to talk to you about an entry-level Web Developer role..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn btn-primary w-full ${submitted ? 'btn-submitted' : ''}`}
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <CheckCircleIcon size={18} />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <SendIcon size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitted && (
                <p className="form-success-text text-cyan text-center">
                  Thank you for reaching out! I will respond promptly at deepakpandit.birpara2308@gmail.com.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
