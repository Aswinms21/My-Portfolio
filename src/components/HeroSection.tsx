import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-particle-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-4xl relative z-10">
        <p className="text-primary font-mono mb-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          Aswin M S.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          I build things for the web.
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          Results-driven Software Engineer specializing in full-stack development. 
          I design and build production-grade web applications with a focus on automation, 
          scalability, and user-centered design.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <span className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
            <MapPin size={16} className="text-primary" />
            Bengaluru, Karnataka
          </span>
          <span className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
            <Phone size={16} className="text-primary" />
            +91 8138095803
          </span>
        </div>

        <div className="flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <a
            href="mailto:achums2121@gmail.com"
            className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm bg-background/30"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/aswinms"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm bg-background/30"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/aswinms"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm bg-background/30"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>

        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 hover:scale-105 transition-all duration-300 magnetic-btn backdrop-blur-sm"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
