import { ExternalLink, Github, Folder } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'Advanced Flood Prediction System',
    description:
      'End-to-end automated ML solution for flood risk predictions with 92% accuracy using SVM, Random Forest, LR, GBM, and KNN. Features SMTP-based automated alert system for stakeholder notifications.',
    tech: ['Python', 'Streamlit', 'scikit-learn', 'SMTP'],
    highlights: [
      '92% prediction accuracy',
      '40% reduced inference time',
      'Automated alert system',
    ],
  },
  {
    title: 'Modern Logistics Website',
    description:
      'Responsive web application with intuitive navigation and modern interface design. Optimized performance via image compression, code-splitting, and lazy loading.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      '40% boost in user engagement',
      '30% reduced load times',
      'Cross-device compatibility',
    ],
  },
  {
    title: 'Virtual Learning Platform',
    description:
      'Full-stack application with live classes, assignments, scheduling, real-time chat, and file submissions. RESTful APIs with Express.js and MongoDB for scalable data management.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React'],
    highlights: [
      'Real-time chat functionality',
      'Secure authentication',
      'Scalable architecture',
    ],
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading animate-fade-in-up">Featured Projects</h2>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-500 hover-lift scroll-hidden-scale ${isVisible ? 'scroll-visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="text-primary group-hover:scale-110 transition-transform duration-300" size={40} />
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
                    aria-label="External Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.highlights.map((highlight, i) => (
                  <span
                    key={highlight}
                    className="text-xs text-primary bg-primary/10 px-2 py-1 rounded hover:bg-primary/20 transition-colors duration-300"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 text-sm font-mono text-muted-foreground">
                {project.tech.map((t) => (
                  <span key={t} className="hover:text-primary transition-colors duration-300">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
