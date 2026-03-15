import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Folder, X, Code2, Wrench, BookOpen, CheckCircle, Lock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Language {
  name: string;
  reason: string;
}

interface Tool {
  name: string;
  reason: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  image?: string;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  githubPrivate?: boolean;
  summary: string;
  whatWasDone: string[];
  languages: Language[];
  tools: Tool[];
  learned: string[];
}

const projects: Project[] = [
  {
    title: 'Advanced Flood Prediction System',
    description:
      'End-to-end automated ML solution for flood risk predictions with 92% accuracy using SVM, Random Forest, LR, GBM, and KNN. Features SMTP-based automated alert system for stakeholder notifications.',
    image: '/flood-prediction-preview.png',
    githubUrl: 'https://github.com/Aswinms21/Flood-Prediction-using-different-ML-models.git',
    githubPrivate: true,
    tech: ['Python', 'Streamlit', 'scikit-learn', 'SMTP'],
    highlights: [
      '92% prediction accuracy',
      '40% reduced inference time',
      'Automated alert system',
    ],
    summary:
      'An end-to-end machine learning pipeline that predicts flood risk from hydrological and meteorological data, automatically alerting stakeholders via email when risk thresholds are exceeded.',
    whatWasDone: [
      'Trained and compared five ML models (SVM, Random Forest, Logistic Regression, GBM, KNN) on real-world flood datasets, selecting the best-performing ensemble',
      'Built a Streamlit dashboard for real-time input, model inference, and interactive risk visualisation',
      "Automated stakeholder alerts via SMTP using Python's smtplib, reducing manual monitoring overhead",
      'Optimised inference pipeline to cut prediction latency by 40%',
    ],
    languages: [
      { name: 'Python', reason: 'First-class ML/data-science ecosystem (NumPy, Pandas, scikit-learn) and rapid prototyping capability' },
    ],
    tools: [
      { name: 'scikit-learn', reason: 'Unified API for training, evaluating, and comparing multiple ML algorithms' },
      { name: 'Streamlit', reason: 'Fast way to turn a Python script into an interactive web dashboard without front-end overhead' },
      { name: 'Pandas / NumPy', reason: 'Data wrangling and numerical computation for feature engineering' },
      { name: 'SMTP (smtplib)', reason: 'Built-in Python library for sending automated alert emails to stakeholders' },
    ],
    learned: [
      'How to systematically benchmark multiple ML models and choose the right metric for imbalanced disaster datasets',
      'Building automated notification pipelines that trigger on model output thresholds',
      "Streamlit's reactive model for building data apps quickly",
    ],
  },
  {
    title: 'Modern Logistics Website',
    description:
      'Responsive frontend web application with intuitive navigation and modern interface design. Optimised performance via image compression, component-level code-splitting, and Next.js Image optimisation.',
    videoUrl: '/website preview.mp4',
    githubUrl: 'https://github.com/Aswinms21/Modern-Logistics-Website.git',
    githubPrivate: true,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      '40% boost in user engagement',
      '30% reduced load times',
      'Cross-device compatibility',
    ],
    summary:
      'A production-ready logistics company website built with Next.js and TypeScript. Focused heavily on high-performance frontend architecture, accessible UI, and full cross-device compatibility, resulting in measurably improved user engagement.',
    whatWasDone: [
      'Engineered a fully responsive multi-page website architecture using Next.js (App Router), TypeScript, and Tailwind CSS',
      'Leveraged Next.js Image component and dynamic imports to aggressively reduce initial bundle size and payload by ~30%',
      'Created accessible, keyboard-navigable UI components following WCAG guidelines for inclusive design',
      'Implemented fluid page transitions and interactive micro-animations to enhance the modern look and feel',
    ],
    languages: [
      { name: 'TypeScript', reason: 'Static typing catches bugs at compile time and improves long-term maintainability' },
      { name: 'JavaScript (JSX/TSX)', reason: "React's component model requires JSX for declarative UI definition" },
    ],
    tools: [
      { name: 'Next.js', reason: 'Provides SSR/SSG capabilities and built-in image optimisation for lightning-fast loads' },
      { name: 'Tailwind CSS', reason: 'Utility-first CSS for rapid, consistent styling without custom CSS bloat' },
      { name: 'Framer Motion', reason: 'Declarative animations for complex scroll and hover interactions' },
    ],
    learned: [
      'Performance profiling and Next.js optimization techniques (Lighthouse, bundle analysis)',
      'Composing accessible, reusable UI component libraries tailored for logistics branding',
      'Delivering measurable business outcomes (engagement & load time) through frontend technical decisions',
    ],
  },
  {
    title: 'TaskLink – Task Marketplace',
    description:
      'End-to-end SaaS platform automating task assignment, payment processing, and delivery workflows using OOP principles. Features an escrow-based wallet with Razorpay integration.',
    videoUrl: '/Tasklink preview.mp4',
    githubUrl: 'https://github.com/Aswinms21/TaskLink.git',
    githubPrivate: true,
    tech: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Razorpay'],
    highlights: [
      'Escrow-based payment system',
      'Real-time task discovery',
      'Role-based access control',
    ],
    summary:
      'A full-stack SaaS marketplace that connects task posters with doers, handling the entire lifecycle from discovery and assignment through secure escrow payment and delivery — built on object-oriented principles for maintainability.',
    whatWasDone: [
      'Architected the full product end-to-end: task assignment engine, payment processing flow, and delivery confirmation workflow using OOP design patterns',
      'Built a Node.js + Express backend with PostgreSQL for task lifecycle management, in-app messaging, and role-based access control with optimised SQL queries',
      'Implemented an escrow-based wallet system with Razorpay API, ensuring payments are held securely and released only on delivery confirmation via transactional SQL',
      'Created real-time task discovery with SQL-based filtering and full-text search so users find relevant tasks instantly',
      'Integrated in-app messaging between task posters and doers for seamless communication throughout the task lifecycle',
    ],
    languages: [
      { name: 'TypeScript / JavaScript', reason: 'Used across both React front-end and Node.js back-end for a unified language stack' },
      { name: 'SQL (PostgreSQL)', reason: 'Relational model with ACID transactions critical for escrow financial operations' },
    ],
    tools: [
      { name: 'React', reason: 'Component-driven UI for the marketplace front-end with dynamic state management' },
      { name: 'Node.js + Express', reason: 'Non-blocking I/O ideal for handling concurrent task requests and webhooks' },
      { name: 'Supabase', reason: 'Managed PostgreSQL with built-in auth and real-time subscriptions, reducing infra overhead' },
      { name: 'Razorpay API', reason: 'Reliable Indian payment gateway with webhook support for escrow release events' },
    ],
    learned: [
      'Designing secure financial workflows with transactional SQL to prevent double-spend and race condition bugs',
      'Applying OOP principles (encapsulation, single-responsibility) to large Node.js codebases',
      'Integrating third-party payment webhooks and handling edge cases like failed payments and refunds',
      'Balancing real-time UX requirements with database query performance through indexing and caching strategies',
    ],
  },
  {
    title: 'Digital Marketplace – Templately',
    description:
      'Full-stack multi-vendor marketplace enabling creators to sell digital assets, leveraging RDBMS architecture with complex SQL joins and stored procedures to handle relationships efficiently.',
    videoUrl: '/Templately preview.mp4',
    githubUrl: 'https://github.com/Aswinms21/Templately.git',
    githubPrivate: true,
    liveUrl: 'https://www.templately.shop/',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Supabase'],
    highlights: [
      'Multi-vendor architecture',
      'Role-based dashboard',
      'Optimised REST API',
    ],
    summary:
      'A multi-vendor digital asset marketplace where creators list and sell templates, UI kits, and other digital products — built with React and a normalised PostgreSQL schema for high-performance data access.',
    whatWasDone: [
      'Built a full-stack multi-vendor marketplace with React and a Node.js API layer, enabling creators to list, manage, and sell digital assets in a unified storefront',
      'Designed the RDBMS schema with complex SQL joins and stored procedures to handle vendor relationships, product listings, purchases, and royalties efficiently',
      'Implemented secure JWT-based authentication with role-based access control (RBAC), providing distinct dashboard experiences for buyers, sellers, and admins',
      'Engineered an optimised RESTful API using Express, processing concurrent product and order workflows with fast response times',
      'Integrated rich client-side state management to handle complex shopping cart interactions and real-time inventory checks seamlessly',
    ],
    languages: [
      { name: 'TypeScript', reason: 'Type safety across full-stack React/Node monorepo prevents runtime errors in complex data flows' },
      { name: 'SQL (PostgreSQL)', reason: 'Complex relational queries (joins, stored procedures) needed for multi-vendor financial data' },
    ],
    tools: [
      { name: 'React', reason: 'Component-driven UI ideal for building interactive buyer and seller dashboards' },
      { name: 'Node.js + Express', reason: 'Non-blocking architecture perfect for handling concurrent API requests across the marketplace' },
      { name: 'Supabase', reason: 'Managed Postgres with built-in Row Level Security for per-vendor data isolation' },
      { name: 'Tailwind CSS', reason: 'Utility-first styling for rapid, responsive UI development without context switching' },
    ],
    learned: [
      'Designing normalised RDBMS schemas for multi-tenant/multi-vendor scenarios with proper indexing strategies',
      'Structing scalable REST APIs to minimise over-fetching and under-fetching of product data',
      'Implementing robust client-side state management for complex cart and checkout workflows',
      'Securing role-based endpoints and ensuring strict data boundaries between different marketplace vendors',
    ],
  },
];

// ─── Modal ─────────────────────────────────────────────────────────────────

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [showModalPrivatePopup, setShowModalPrivatePopup] = useState(false);

  const handleModalGithubClick = (e: React.MouseEvent) => {
    if (project.githubPrivate) {
      e.preventDefault();
      setShowModalPrivatePopup(true);
      setTimeout(() => setShowModalPrivatePopup(false), 2800);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      style={{ animation: 'fadeInOverlay 0.2s ease-out forwards' }}
    >
      <div
        className="relative bg-card border border-border rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        style={{ animation: 'scaleInModal 0.25s cubic-bezier(0.4,0,0.2,1) forwards' }}
      >
        {/* Header media strip */}
        <div className="relative h-40 sm:h-52 w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-primary/40">
              <Folder size={56} />
              <span className="font-mono text-sm">{project.title}</span>
            </div>
          )}
          {/* dark gradient at bottom for readability */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/80 to-transparent" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-card/80 border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:scale-110 transition-all duration-200 backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="px-6 sm:px-8 pb-8 pt-4 space-y-7">

          {/* Title + links */}
          <div>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">{project.title}</h2>
              <div className="flex items-center gap-3 relative">
                {project.githubUrl && (
                  <a
                    href={project.githubPrivate ? '#' : project.githubUrl}
                    target={project.githubPrivate ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="p-2 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
                    aria-label={project.githubPrivate ? 'Private Repository' : 'View on GitHub'}
                    onClick={handleModalGithubClick}
                  >
                    {project.githubPrivate ? <Lock size={18} /> : <Github size={18} />}
                  </a>
                )}
                {showModalPrivatePopup && (
                  <div className="absolute bottom-full left-0 mb-2 z-10 whitespace-nowrap bg-card border border-border rounded-lg px-3 py-2 text-xs text-muted-foreground shadow-lg" style={{ animation: 'fadeInUp 0.2s ease-out' }}>
                    <span className="flex items-center gap-1.5">
                      <Lock size={11} className="text-primary flex-shrink-0" />
                      Repository is private — cannot be viewed
                    </span>
                  </div>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink size={15} />
                    View Live
                  </a>
                )}
              </div>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded hover:bg-primary/20 transition-colors duration-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-foreground mb-2">
              <BookOpen size={16} className="text-primary" />
              Project Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.summary}</p>
          </div>

          {/* Key highlights */}
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-foreground mb-3">
              <CheckCircle size={16} className="text-primary" />
              What Was Done
            </h3>
            <ul className="space-y-2">
              {project.whatWasDone.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground hover:translate-x-1 transition-transform duration-200">
                  <span className="text-primary mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-foreground mb-3">
              <Code2 size={16} className="text-primary" />
              Programming Languages
            </h3>
            <div className="space-y-3">
              {project.languages.map((lang) => (
                <div key={lang.name} className="bg-background/50 border border-border/60 rounded-lg p-3 hover:border-primary/30 transition-colors duration-200">
                  <span className="font-mono text-sm font-semibold text-primary">{lang.name}</span>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{lang.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-foreground mb-3">
              <Wrench size={16} className="text-primary" />
              Tools &amp; Technologies
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.tools.map((tool) => (
                <div key={tool.name} className="bg-background/50 border border-border/60 rounded-lg p-3 hover:border-primary/30 transition-colors duration-200">
                  <span className="font-mono text-sm font-semibold text-primary">{tool.name}</span>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{tool.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learned */}
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-foreground mb-3">
              <BookOpen size={16} className="text-primary" />
              What I Learned
            </h3>
            <ul className="space-y-2">
              {project.learned.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground hover:translate-x-1 transition-transform duration-200">
                  <span className="text-primary mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

// ─── Card ──────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  onClick: () => void;
}

const ProjectCard = ({ project, index, isVisible, onClick }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPrivatePopup, setShowPrivatePopup] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.githubPrivate) {
      e.preventDefault();
      setShowPrivatePopup(true);
      setTimeout(() => setShowPrivatePopup(false), 2800);
    }
  };

  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) {
      videoRef.current.playbackRate = 2.0;
      videoRef.current.play().catch(() => {/* autoplay blocked – silent */ });
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div
      className={`group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500 hover-lift scroll-hidden-scale cursor-pointer ${isVisible ? 'scroll-visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
    >
      {/* Media preview */}
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-primary/15 via-primary/8 to-transparent">
        {project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Gradient placeholder */
          <div className="w-full h-full flex items-center justify-center">
            <Folder
              className="text-primary/30 group-hover:text-primary/50 group-hover:scale-110 transition-all duration-300"
              size={56}
            />
          </div>
        )}

        {/* Overlay with "Click to view details" hint on hover */}
        <div className={`absolute inset-0 bg-primary/10 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs font-semibold text-primary bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30">
            Click for details
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight pr-2">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0 relative">
            {project.githubUrl && (
              <a
                href={project.githubPrivate ? '#' : project.githubUrl}
                target={project.githubPrivate ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
                aria-label={project.githubPrivate ? 'Private Repository' : 'GitHub Repository'}
                onClick={handleGithubClick}
              >
                {project.githubPrivate ? <Lock size={16} /> : <Github size={18} />}
              </a>
            )}
            {showPrivatePopup && (
              <div className="absolute bottom-full right-0 mb-2 z-10 whitespace-nowrap bg-card border border-border rounded-lg px-3 py-2 text-xs text-muted-foreground shadow-lg" style={{ animation: 'fadeInUp 0.2s ease-out' }}>
                <span className="flex items-center gap-1.5">
                  <Lock size={11} className="text-primary flex-shrink-0" />
                  Repository is private — cannot be viewed
                </span>
              </div>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
                aria-label="Live Link"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="text-xs text-primary bg-primary/10 px-2 py-1 rounded hover:bg-primary/20 transition-colors duration-300"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground">
          {project.tech.map((t) => (
            <span key={t} className="hover:text-primary transition-colors duration-300">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Section ───────────────────────────────────────────────────────────────

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading animate-fade-in-up">Featured Projects</h2>

          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isVisible={isVisible}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      <style>{`
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleInModal {
          from { opacity: 0; transform: scale(0.94) translateY(12px); }
          to   { opacity: 1; transform: scale(1)  translateY(0); }
        }
      `}</style>
    </>
  );
};

export default ProjectsSection;
