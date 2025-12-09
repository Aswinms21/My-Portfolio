import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setVisible(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        } ${visible ? 'animate-slide-down' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a 
              href="#" 
              className="text-xl font-bold text-primary font-mono hover:scale-105 transition-transform duration-300"
            >
              &lt;Aswin /&gt;
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium relative group"
                  style={{ 
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(-10px)',
                    transition: `all 0.3s ease-out ${index * 100}ms`
                  }}
                >
                  <span className="text-primary font-mono text-xs mr-1">0{index + 1}.</span>
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="/resume_aswin.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-primary text-primary rounded text-sm font-medium hover:bg-primary/10 transition-all duration-300 magnetic-btn"
                style={{ 
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(-10px)',
                  transition: `all 0.3s ease-out ${navLinks.length * 100}ms`
                }}
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2 hover:text-primary transition-colors duration-300 z-50 relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-background/95 backdrop-blur-lg transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-primary transition-all duration-300 text-2xl font-medium"
              style={{ 
                transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.4s ease-out ${isOpen ? index * 100 : 0}ms`
              }}
            >
              <span className="text-primary font-mono text-lg mr-3">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
          <a
            href="/resume_aswin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-3 border-2 border-primary text-primary rounded-lg text-lg font-medium hover:bg-primary/10 transition-all duration-300"
            style={{ 
              transitionDelay: isOpen ? `${navLinks.length * 100}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.4s ease-out ${isOpen ? navLinks.length * 100 : 0}ms`
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
