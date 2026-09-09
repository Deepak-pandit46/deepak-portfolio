import { CodeIcon, BrainIcon, ServerIcon, CheckCircleIcon } from './Icons';

export default function About() {
  const softSkills = ['Communication', 'Teamwork', 'Motivated'];

  const coreFocus = [
    {
      icon: <CodeIcon size={22} className="text-cyan" />,
      title: 'Responsive Web Development',
      description: 'Building user-friendly, mobile-first web applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS.',
    },
    {
      icon: <ServerIcon size={22} className="text-cyan" />,
      title: 'Backend & APIs',
      description: 'Creating server-side logic and RESTful endpoints using Node.js, Express.js, with MongoDB and MySQL databases.',
    },
    {
      icon: <BrainIcon size={22} className="text-cyan" />,
      title: 'Problem Solving & AI Integration',
      description: 'Applying Data Structures & Algorithms, structured problem solving, and integrating AI agents into web workflows.',
    },
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-header text-center">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">Background & Career Objective</h2>
        <p className="section-subtitle">
          BCA student at RCC Institute of Information Technology (RCCIIT), MAKAUT, eager to contribute as an entry-level Web Developer.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text-card glass-panel">
          <h3 className="about-card-title">Professional Profile</h3>
          <p>
            BCA student with a strong interest in web development and problem-solving. Eager to apply technical skills in building user-friendly and responsive web applications while continuously learning and contributing to a growth-oriented organization.
          </p>

          <div className="about-objective-box">
            <h4 className="objective-heading text-cyan">Career Objective</h4>
            <p className="objective-text">
              "To secure an entry-level Web Developer position where I can apply my skills in HTML, CSS, JavaScript, React.js, Node.js, and MongoDB to build responsive and user-friendly web applications while continuously developing my technical expertise."
            </p>
          </div>

          <div className="about-soft-skills-block">
            <h4 className="soft-skills-title">Core Competencies & Soft Skills:</h4>
            <div className="soft-skills-pills">
              {softSkills.map((skill, index) => (
                <span key={index} className="soft-skill-pill">
                  <CheckCircleIcon size={14} className="text-cyan" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-highlights-col">
          {coreFocus.map((item, index) => (
            <div key={index} className="highlight-card glass-panel">
              <div className="highlight-icon-wrapper">
                {item.icon}
              </div>
              <div className="highlight-info">
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
