import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);

  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={sectionRef as React.RefObject<HTMLHeadingElement>}
          className={`section-heading scroll-hidden ${
            isVisible ? "scroll-visible" : ""
          }`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div
            className={`md:col-span-2 space-y-4 text-muted-foreground scroll-hidden-left ${
              isVisible ? "scroll-visible" : ""
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <p>
              Hello! I'm Aswin, a aspiring software engineer based in Bengaluru
              with a passion for building web applications that deliver
              exceptional user experiences. My journey in tech started during my
              BCA at Nirmala College, and I've been hooked on coding ever since.
            </p>
            <p>
              I had the opportunity to work at{" "}
              <span className="text-primary">Tata Consultancy Services</span> as
              a Technical Support Engineer, where I gained valuable experience
              in analyzing business requirements and coordinating with
              cross-functional teams to deliver solutions.
            </p>
            <p>
              I pursued my MCA at the College of Engineering, Chengannur, I'm
              focused on expanding my expertise in full-stack development,
              machine learning, and building scalable applications.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>

            <ul
              className={`grid grid-cols-2 gap-2 mt-4 stagger-children ${
                isVisible ? "scroll-visible" : ""
              }`}
            >
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-300"
                >
                  <span className="text-primary">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className={`relative group scroll-hidden-right ${
              imageVisible ? "scroll-visible" : ""
            } flex justify-center md:block`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="relative">
              <div className="relative w-[180px] md:w-full aspect-square rounded-lg overflow-hidden hover-lift">
                <div className="absolute inset-0 group-hover:bg-transparent transition-all duration-500 z-10 rounded-lg"></div>
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center">
                  <img
                    src="/aswin pro.jpg"
                    alt="Profile"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute top-3 left-3 md:top-4 md:left-4 w-[180px] md:w-full aspect-square border-2 border-primary rounded-lg -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
