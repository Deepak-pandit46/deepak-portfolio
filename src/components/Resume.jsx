import { DownloadIcon, FileTextIcon, ExternalLinkIcon, CheckCircleIcon, SparklesIcon } from './Icons';

export default function Resume() {
  return (
    <section id="resume" className="section-container">
      <div className="section-header text-center">
        <span className="section-tag">Curriculum Vitae</span>
        <h2 className="section-title">Resume & Qualifications</h2>
        <p className="section-subtitle">
          Explore a summary of my background or download the complete PDF copy for offline evaluation.
        </p>
      </div>

      <div className="resume-wrapper glass-panel">
        <div className="resume-grid">
          {/* Left Column: Quick Snapshot / Preview */}
          <div className="resume-preview-col">
            <div className="resume-doc-badge">
              <FileTextIcon size={18} className="text-cyan" />
              <span>Resume Summary • Deepak Kumar Pandit</span>
            </div>

            <h3 className="resume-preview-name">Deepak Kumar Pandit</h3>
            <p className="resume-preview-role text-cyan">Aspiring Full Stack Web Developer</p>
            <p className="resume-preview-tagline">
              BCA Student at RCC Institute of Information Technology (RCCIIT), MAKAUT (2023–2027). Eager to apply skills in building user-friendly and responsive web applications.
            </p>

            <div className="resume-snapshot-points">
              <div className="snapshot-item">
                <CheckCircleIcon size={16} className="text-cyan flex-shrink-0" />
                <span><strong>Core Stack:</strong> React.js, Node.js, Express.js, MongoDB, MySQL, JavaScript, Python</span>
              </div>
              <div className="snapshot-item">
                <CheckCircleIcon size={16} className="text-cyan flex-shrink-0" />
                <span><strong>Featured Project:</strong> TasteMate (AI-Powered Food & Hotel Booking Platform)</span>
              </div>
              <div className="snapshot-item">
                <CheckCircleIcon size={16} className="text-cyan flex-shrink-0" />
                <span><strong>Internship:</strong> Web Development Intern at NIIT | Kolkata</span>
              </div>
              <div className="snapshot-item">
                <CheckCircleIcon size={16} className="text-cyan flex-shrink-0" />
                <span><strong>Key Achievement:</strong> Selected in Smart India Hackathon (SIH)</span>
              </div>
            </div>

            <div className="resume-meta-tags">
              <span className="resume-meta-pill">Format: PDF</span>
              <span className="resume-meta-pill">CGPA: 7.30 / 10</span>
              <span className="resume-meta-pill">Kolkata, WB</span>
            </div>
          </div>

          {/* Right Column: Download Actions */}
          <div className="resume-actions-col">
            <div className="resume-cta-box">
              <div className="cta-icon-halo">
                <DownloadIcon size={32} className="text-cyan" />
              </div>
              <h4 className="cta-title">Download Resume</h4>
              <p className="cta-desc">
                Download a clean, ATS-friendly PDF copy of Deepak Kumar Pandit's resume for recruitment and technical review.
              </p>

              <div className="resume-button-group">
                <a
                  href="/resume.pdf"
                  download="Deepak_Kumar_Pandit_Resume.pdf"
                  className="btn btn-primary w-full"
                >
                  <DownloadIcon size={18} />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary w-full"
                >
                  <ExternalLinkIcon size={18} />
                  <span>View in Browser</span>
                </a>
              </div>

              <div className="resume-notice-card">
                <SparklesIcon size={14} className="text-cyan flex-shrink-0" />
                <span className="notice-text">
                  File: <code>public/resume.pdf</code> • Ready for immediate download.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
