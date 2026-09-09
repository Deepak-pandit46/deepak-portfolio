import { CodeIcon, ServerIcon, BrainIcon, ToolsIcon, CheckCircleIcon } from './Icons';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <CodeIcon size={22} className="text-cyan" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      category: 'Backend & Database',
      icon: <ServerIcon size={22} className="text-cyan" />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'],
    },
    {
      category: 'AI / Programming',
      icon: <BrainIcon size={22} className="text-cyan" />,
      skills: ['Python', 'AI Integration', 'Data Structures & Algorithms', 'Problem Solving'],
    },
    {
      category: 'Tools & Platforms',
      icon: <ToolsIcon size={22} className="text-cyan" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'Vercel'],
    },
    {
      category: 'Other Skills',
      icon: <CheckCircleIcon size={22} className="text-cyan" />,
      skills: ['Communication', 'Teamwork', 'Motivated'],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="section-header text-center">
        <span className="section-tag">Technical Competencies</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Organized breakdown of frontend, backend, programming languages, databases, and collaboration tools.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((group, idx) => (
          <div key={idx} className="skill-category-card glass-panel">
            <div className="category-header">
              <div className="category-icon-box">
                {group.icon}
              </div>
              <h3 className="category-title">{group.category}</h3>
            </div>
            <div className="category-badges">
              {group.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
