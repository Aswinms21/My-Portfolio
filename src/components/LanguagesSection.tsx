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
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="languages"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-primary">&lt;</span>
            Languages
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Languages I speak and communicate in
          </p>

          <div className="max-w-2xl mx-auto space-y-6">
            {languages.map((lang, index) => (
              <div
                key={lang.name}
                className={`bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {lang.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                </div>
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out ${
                      isVisible ? '' : 'w-0'
                    }`}
                    style={{ width: isVisible ? `${lang.proficiency}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
