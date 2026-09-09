import { TrophyIcon, SparklesIcon, CheckCircleIcon } from './Icons';

export default function Achievements() {
  const certifications = [
    {
      title: 'Web Development',
      issuer: 'Udemy',
      year: '2024',
      badge: 'Certified',
    },
    {
      title: 'Python',
      issuer: 'FutureSkillPrime',
      year: '2025',
      badge: 'Certified',
    },
  ];

  const achievements = [
    {
      title: 'Smart India Hackathon (SIH)',
      status: 'Selected',
      description: 'Participated in SMART INDIA HACKATHON and got Selected.',
    },
    {
      title: 'College Hackathons & Coding Competitions',
      status: 'Participant',
      description: 'Participated in college hackathons and coding competitions.',
    },
    {
      title: 'Academic & Personal Projects',
      status: 'Developer',
      description: 'Developed multiple academic and personal web development projects.',
    },
    {
      title: 'Technical Events & Workshops',
      status: 'Participant',
      description: 'Participated in technical events and workshops.',
    },
  ];

  return (
    <section id="achievements" className="section-container">
      <div className="section-header text-center">
        <span className="section-tag">Credentials & Milestones</span>
        <h2 className="section-title">Achievements & Certifications</h2>
        <p className="section-subtitle">
          Verified accomplishments, hackathon selections, and technical training credentials.
        </p>
      </div>

      <div className="achievements-section-wrapper">
        {/* Certifications Row */}
        <div className="achievements-subblock">
          <h3 className="subblock-heading text-cyan">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card glass-panel">
                <div className="cert-icon-row">
                  <div className="achievement-icon-box">
                    <SparklesIcon size={20} className="text-cyan" />
                  </div>
                  <span className="achievement-date-badge">{cert.year}</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <div className="cert-issuer text-cyan">{cert.issuer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-subblock">
          <h3 className="subblock-heading text-cyan">Key Achievements & Activities</h3>
          <div className="achievements-grid">
            {achievements.map((item, idx) => (
              <div key={idx} className="achievement-card glass-panel">
                <div className="achievement-icon-row">
                  <div className="achievement-icon-box">
                    <TrophyIcon size={20} className="text-cyan" />
                  </div>
                  <span className="achievement-date-badge">{item.status}</span>
                </div>
                <h4 className="achievement-title">{item.title}</h4>
                <p className="achievement-summary">{item.description}</p>
                <div className="achievement-footer">
                  <span className="verified-bullet">
                    <CheckCircleIcon size={14} className="text-cyan" />
                    <span>Verified Participation</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
