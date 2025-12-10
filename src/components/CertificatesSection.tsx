import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
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
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading animate-fade-in-up">Certificates</h2>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className={`group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift scroll-hidden-scale cursor-pointer ${
                isVisible ? 'scroll-visible' : ''
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-2 bg-background/95 backdrop-blur-sm">
          <VisuallyHidden>
            <DialogTitle>{selectedCert?.title} Certificate</DialogTitle>
          </VisuallyHidden>
          {selectedCert && (
            <div className="relative">
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} Certificate`}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-3 text-center">
                <h3 className="text-lg font-semibold text-foreground">{selectedCert.title}</h3>
                <p className="text-sm text-primary">{selectedCert.issuer}</p>
                <p className="text-xs text-muted-foreground">{selectedCert.date}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
