import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Globe } from 'lucide-react';

const languages = [
  {
    name: 'Malayalam',
    level: 'Native',
    proficiency: 100,
  },
  {
    name: 'English',
    level: 'Professional',
    proficiency: 85,
  },
  {
    name: 'Tamil',
    level: 'Conversational',
    proficiency: 60,
  },
];

const LanguagesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="languages" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading animate-fade-in-up">Languages</h2>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid sm:grid-cols-3 gap-6"
        >
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              className={`bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-500 hover-lift scroll-hidden-scale ${
                isVisible ? 'scroll-visible' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {lang.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? `${lang.proficiency}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
