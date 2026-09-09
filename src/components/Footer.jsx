import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="nav-brand">
              <span className="brand-bracket">&lt;</span>
              <span className="brand-text">DKP</span>
              <span className="brand-slash">/</span>
              <span className="brand-bracket">&gt;</span>
            </a>
            <p className="footer-tagline">
              Deepak Kumar Pandit • Aspiring Full Stack Web Developer
            </p>
          </div>

          <div className="footer-nav">
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="#achievements" className="footer-link">Achievements</a>
            <a href="#resume" className="footer-link">Resume</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <div className="footer-actions">
            <div className="footer-socials">
              <a
                href="#contact"
                className="social-icon-btn"
                aria-label="GitHub [Your GitHub - URL to be provided]"
                title="GitHub: [Your GitHub - URL to be provided]"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="#contact"
                className="social-icon-btn"
                aria-label="LinkedIn [Your LinkedIn - URL to be provided]"
                title="LinkedIn: [Your LinkedIn - URL to be provided]"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:deepakpandit.birpara2308@gmail.com"
                className="social-icon-btn"
                aria-label="Email deepakpandit.birpara2308@gmail.com"
                title="Email: deepakpandit.birpara2308@gmail.com"
              >
                <MailIcon size={18} />
              </a>
            </div>

            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUpIcon size={16} />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Deepak Kumar Pandit. Built with React & Vite. All rights reserved.
          </p>
          <p className="footer-status">
            Kolkata, West Bengal, India • BCA Student at RCCIIT, MAKAUT (Expected 2027)
          </p>
        </div>
      </div>
    </footer>
  );
}
