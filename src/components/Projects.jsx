import tastemateImg from '../assets/tastemate.svg';
import { GithubIcon, ExternalLinkIcon, CheckCircleIcon, SparklesIcon } from './Icons';

export default function Projects() {
  const tastemateFeatures = [
    'Developed a platform connecting users with nearby restaurants and hotels for food ordering, seat reservations, and hotel room bookings.',
    'Integrated an AI agent to assist users with restaurant discovery, ordering, and bookings.',
    'Built advanced features with a responsive UI, backend APIs, and database integration.',
  ];

  const technologies = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'AI'];

  return (
    <section id="projects" className="section-container">
      <div className="section-header text-center">
        <span className="section-tag">Featured Work</span>
        <h2 className="section-title">Featured Project</h2>
        <p className="section-subtitle">
          In-depth look at my full-stack platform built with modern web technologies and AI integration.
        </p>
      </div>

      <div className="projects-wrapper">
        {/* Large Case-Study Style Card */}
        <article className="case-study-card glass-panel">
          {/* Top: Project Mockup Visual */}
          <div className="case-study-visual">
            <img
              src={tastemateImg}
              alt="TasteMate Platform UI Preview"
              className="case-study-image"
              loading="lazy"
            />
            <div className="case-study-overlay-badge">
              <SparklesIcon size={14} className="text-cyan" />
              <span>Full Stack & AI Case Study</span>
            </div>
          </div>

          {/* Bottom/Content: Details & Architecture */}
          <div className="case-study-body">
            <div className="case-study-header">
              <div>
                <span className="case-study-category text-cyan">Food & Hospitality Tech</span>
                <h3 className="case-study-title">
                  TasteMate — AI-Powered Food & Hotel Booking Platform
                </h3>
              </div>

              <div className="case-study-actions">
                <a
                  href="https://github.com/Deepak-pandit46"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm"
                  title="Source Code on GitHub (Deepak-pandit46)"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="#contact"
                  className="btn btn-primary btn-sm"
                  title="Live Demo: [Live Demo - URL to be provided]"
                >
                  <ExternalLinkIcon size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <p className="case-study-description">
              Developed a comprehensive platform connecting users with nearby restaurants and hotels for food ordering, seat reservations, and hotel room bookings, elevated by an intelligent AI assistant.
            </p>

            <div className="case-study-features">
              <h4 className="features-subheading">Key Features & Technical Implementation:</h4>
              <ul className="features-list">
                {tastemateFeatures.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <CheckCircleIcon size={16} className="text-cyan flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="case-study-footer">
              <div className="tech-badge-group">
                <span className="tech-badge-label">Technologies:</span>
                <div className="tech-badges">
                  {technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
