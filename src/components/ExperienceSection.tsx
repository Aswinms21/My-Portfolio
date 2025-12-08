import { Briefcase, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ExperienceSection = () => {
  const { ref: workRef, isVisible: workVisible } = useScrollAnimation(0.1);
  const { ref: eduRef, isVisible: eduVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading animate-fade-in-up">Experience & Education</h2>

        {/* Work Experience */}
        <div 
          ref={workRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 scroll-hidden ${workVisible ? 'scroll-visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-primary animate-pulse-glow" size={24} />
            <h3 className="text-xl font-semibold text-foreground">Work Experience</h3>
          </div>

          <div className="relative border-l-2 border-border pl-8 ml-3">
            <div className={`absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0 ${workVisible ? 'animate-pulse-glow' : ''}`}></div>
            
            <div 
              className={`pb-8 scroll-hidden-left ${workVisible ? 'scroll-visible' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold text-foreground">
                  Technical Support Engineer
                </h4>
                <span className="text-primary font-mono text-sm">May 2022 – Jun 2023</span>
              </div>
              <p className="text-primary mb-4">Tata Consultancy Services, Chennai</p>
              
              <ul className={`space-y-3 text-muted-foreground stagger-children ${workVisible ? 'scroll-visible' : ''}`}>
                <li className="flex gap-3 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-primary mt-1.5">▹</span>
                  <span>Analyzed business requirements and configured 55+ FTTP application deployments daily, improving delivery timelines by 20%</span>
                </li>
                <li className="flex gap-3 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-primary mt-1.5">▹</span>
                  <span>Collaborated with onshore and offshore teams to resolve technical blockers, ensuring 95% on-time solution implementation</span>
                </li>
                <li className="flex gap-3 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-primary mt-1.5">▹</span>
                  <span>Trained 8+ new team members and improved overall team productivity by 25% through process optimization</span>
                </li>
                <li className="flex gap-3 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-primary mt-1.5">▹</span>
                  <span>Took ownership of deployment workflows, identifying bottlenecks and implementing improvements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div 
          ref={eduRef as React.RefObject<HTMLDivElement>}
          className={`scroll-hidden ${eduVisible ? 'scroll-visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary animate-pulse-glow" size={24} />
            <h3 className="text-xl font-semibold text-foreground">Education</h3>
          </div>

          <div className="relative border-l-2 border-border pl-8 ml-3">
            <div className={`absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0 ${eduVisible ? 'animate-pulse-glow' : ''}`}></div>
            
            <div 
              className={`pb-8 scroll-hidden-left ${eduVisible ? 'scroll-visible' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold text-foreground">
                  Master of Computer Applications (MCA)
                </h4>
                <span className="text-primary font-mono text-sm">Aug 2023 – Jun 2025</span>
              </div>
              <p className="text-muted-foreground">College of Engineering, Chengannur</p>
            </div>

            <div className={`absolute w-4 h-4 bg-secondary border-2 border-primary rounded-full -left-[9px] top-[100px] ${eduVisible ? 'animate-pulse-glow' : ''}`}></div>
            
            <div 
              className={`scroll-hidden-left ${eduVisible ? 'scroll-visible' : ''}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold text-foreground">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <span className="text-primary font-mono text-sm">Jul 2019 – Apr 2022</span>
              </div>
              <p className="text-muted-foreground">Nirmala College of Arts and Science, Thrissur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
