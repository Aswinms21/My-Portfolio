const AboutSection = () => {
  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'MongoDB',
    'PostgreSQL',
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              Hello! I'm Aswin, a software engineer based in Bengaluru with a passion for building 
              web applications that deliver exceptional user experiences. My journey in tech started 
              during my BCA at Nirmala College, and I've been hooked on coding ever since.
            </p>
            <p>
              I had the opportunity to work at{' '}
              <span className="text-primary">Tata Consultancy Services</span> as a Technical Support 
              Engineer, where I gained valuable experience in analyzing business requirements and 
              coordinating with cross-functional teams to deliver solutions.
            </p>
            <p>
              Currently pursuing my MCA at College of Engineering, Chengannur, I'm focused on 
              expanding my expertise in full-stack development, machine learning, and building 
              scalable applications.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-sm">
                  <span className="text-primary">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10 rounded-lg"></div>
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/50 font-mono">AM</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
