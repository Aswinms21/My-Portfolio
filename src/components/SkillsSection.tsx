const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'PHP', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Responsive Design', 'UI/UX'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL'],
  },
  {
    title: 'ML & Automation',
    skills: ['scikit-learn', 'pandas', 'NumPy', 'Model Evaluation'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'Agile', 'Figma', 'Streamlit'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Skills & Technologies</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-primary font-mono text-sm mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">Core Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Problem-Solving',
              'Analytical Thinking',
              'Business Requirements Analysis',
              'Performance Optimization',
              'Solution Implementation',
              'Team Collaboration',
            ].map((competency) => (
              <span
                key={competency}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
