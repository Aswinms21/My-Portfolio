import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05);
  const { ref: competenciesRef, isVisible: competenciesVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading animate-fade-in-up">Skills & Technologies</h2>

        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-500 hover-lift scroll-hidden-scale ${cardsVisible ? 'scroll-visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-primary font-mono text-sm mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center gap-2 text-sm hover:text-foreground hover:translate-x-2 transition-all duration-300"
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
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
        <div 
          ref={competenciesRef as React.RefObject<HTMLDivElement>}
          className={`mt-12 scroll-hidden ${competenciesVisible ? 'scroll-visible' : ''}`}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">Core Competencies</h3>
          <div className={`flex flex-wrap gap-3 stagger-children ${competenciesVisible ? 'scroll-visible' : ''}`}>
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
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default"
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
