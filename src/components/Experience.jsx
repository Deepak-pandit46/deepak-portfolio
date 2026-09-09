import { BriefcaseIcon } from './Icons';

export default function Experience() {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'NIIT',
      location: 'Kolkata, West Bengal',
      period: '04/2026 – 06/2026',
      description: [
        'Worked on front-end development tasks and responsive web projects.',
        'Developed and maintained web pages using HTML, CSS, and JavaScript.',
        'Used Git and GitHub for version control.',
        'Collaborated with team members to implement website features and fix bugs.',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <div className="section-header text-center">
        <span className="section-tag">Practical Experience</span>
        <h2 className="section-title">Internship Experience</h2>
        <p className="section-subtitle">
          Hands-on technical experience gained through industry internship.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-track"></div>

        <div className="timeline-items">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-node">
                <div className="timeline-node-inner">
                  <BriefcaseIcon size={14} className="text-cyan" />
                </div>
              </div>

              <div className="timeline-card glass-panel">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company-row">
                      <span className="timeline-company text-cyan">{exp.company}</span>
                      <span className="timeline-dot">•</span>
                      <span className="timeline-location">{exp.location}</span>
                    </div>
                  </div>
                  <span className="timeline-period-badge">{exp.period}</span>
                </div>

                <ul className="timeline-bullets">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="timeline-bullet-item">
                      <span className="bullet-point"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-tech-tags">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
