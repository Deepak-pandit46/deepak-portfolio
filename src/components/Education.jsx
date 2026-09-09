import { GraduationCapIcon } from './Icons';

export default function Education() {
  const educationItems = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'RCC Institute of Information Technology (RCCIIT), MAKAUT',
      location: 'Kolkata, West Bengal',
      timeline: '2023 – 2027',
      grade: 'CGPA: 7.30 / 10',
      description: 'Undergraduate studies in computer applications, web technologies, programming, and data structures.',
    },
    {
      degree: 'Higher Secondary (Class 12)',
      institution: 'West Bengal Council of Higher Secondary Education',
      location: 'West Bengal, India',
      timeline: '2023',
      grade: '63%',
      description: 'Higher secondary school examination with focused curriculum.',
    },
    {
      degree: 'Secondary (Class 10)',
      institution: 'West Bengal Board of Secondary Education',
      location: 'West Bengal, India',
      timeline: '2021',
      grade: '76%',
      description: 'Secondary education with comprehensive foundational subjects.',
    },
  ];

  return (
    <section id="education" className="section-container">
      <div className="section-header text-center">
        <span className="section-tag">Academic Background</span>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic foundation in computer applications and secondary schooling.
        </p>
      </div>

      <div className="education-grid">
        <div className="education-cards-list">
          {educationItems.map((edu, idx) => (
            <div key={idx} className="education-card glass-panel">
              <div className="education-card-header">
                <div className="education-icon-box">
                  <GraduationCapIcon size={24} className="text-cyan" />
                </div>
                <div className="education-primary-info">
                  <div className="education-meta-row">
                    <span className="education-period">{edu.timeline}</span>
                    <span className="education-grade-pill">{edu.grade}</span>
                  </div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <h4 className="education-institution text-cyan">{edu.institution}</h4>
                  <span className="education-location-sub">{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
