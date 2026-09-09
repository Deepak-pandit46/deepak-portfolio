import profileImg from '../assets/profile.jpg';
import { GithubIcon, LinkedinIcon, ArrowUpRightIcon, SparklesIcon, MailIcon, DownloadIcon } from './Icons';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        {/* Left Column: Bio & Calls to Action */}
        <div className="hero-content hero-fade-in-up">
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span>BCA Student | Expected 2027</span>
          </div>

          <h1 className="hero-title">
            Deepak Pandit
          </h1>

          <h2 className="hero-subtitle">
            Aspiring Full Stack Web Developer
          </h2>

          <p className="hero-description">
            BCA student at RCC Institute of Information Technology (RCCIIT), MAKAUT with a strong interest in web development and problem-solving. Eager to apply technical skills in building user-friendly and responsive web applications while continuously learning and contributing to a growth-oriented organization.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary hero-btn-main">
              <span>View Projects</span>
              <ArrowUpRightIcon size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn-sub">
              <span>Contact Me</span>
            </a>
            <a href="#resume" className="btn btn-outline hero-btn-sub">
              <DownloadIcon size={16} />
              <span>Resume</span>
            </a>
          </div>

          <div className="hero-footer-meta">
            <div className="hero-social-links">
              <a
                href="https://github.com/Deepak-pandit46"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile (Deepak-pandit46)"
                title="GitHub: https://github.com/Deepak-pandit46"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-pandit-ba6577294/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile (Deepak Pandit)"
                title="LinkedIn: https://www.linkedin.com/in/deepak-pandit-ba6577294/"
              >
                <LinkedinIcon size={19} />
              </a>
              <a
                href="mailto:deepakpandit.birpara2308@gmail.com"
                className="social-icon-btn"
                aria-label="Send Email to deepakpandit.birpara2308@gmail.com"
                title="Email: deepakpandit.birpara2308@gmail.com"
              >
                <MailIcon size={19} />
              </a>
            </div>
            <div className="hero-meta-divider"></div>
            <div className="hero-location-badge">
              <span>Kolkata, West Bengal, India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Visual Avatar */}
        <div className="hero-visual hero-fade-in">
          <div className="avatar-wrapper">
            <div className="avatar-glow"></div>
            <div className="avatar-ring">
              <div className="avatar-inner">
                <img
                  src={profileImg}
                  alt="Deepak Pandit"
                  className="avatar-image"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.classList.add('avatar-fallback-mode');
                    }
                  }}
                />
                <div className="avatar-fallback-graphic">
                  <span className="avatar-initials">DP</span>
                </div>
              </div>
            </div>

            {/* Subtle Floating Tech Badges */}
            <div className="floating-badge badge-top-right">
              <SparklesIcon size={15} className="text-cyan" />
              <span>React & Node.js</span>
            </div>
            <div className="floating-badge badge-bottom-left">
              <span className="badge-code-icon">&lt;/&gt;</span>
              <span>RCCIIT, MAKAUT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
