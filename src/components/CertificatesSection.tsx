import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import reactCertificate from '@/assets/certificates/react-certificate.jpg';
import gitCertificate from '@/assets/certificates/git-certificate.jpg';
import cloudCertificate from '@/assets/certificates/cloud-computing-certificate.jpg';

const certificates = [
  {
    id: 1,
    title: 'ReactJS for Beginners',
    issuer: 'Simplilearn SkillUp',
    date: 'October 2025',
    image: reactCertificate,
  },
  {
    id: 2,
    title: 'Git For Beginners',
    issuer: 'Udemy',
    date: 'February 2025',
    image: gitCertificate,
  },
  {
    id: 3,
    title: 'Cloud Computing',
    issuer: 'NPTEL - IIT Kharagpur',
    date: 'April 2024',
    image: cloudCertificate,
  },
];

const CertificatesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="certificates"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-primary">&lt;</span>
            Certificates
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Professional certifications and courses I've completed
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className={`group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
