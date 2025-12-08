import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl">
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
            className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/aswinms"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/aswinms"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>

        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 hover:scale-105 transition-all duration-300 magnetic-btn"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
