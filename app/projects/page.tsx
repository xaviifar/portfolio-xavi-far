import Image from "next/image";

// Header Navigation (Misma que en la Home)
const navItems = [
  { label: "Me", href: "/", shortcut: "M" },
  { label: "Experience", href: "/#experience", shortcut: "E" },
  { label: "Work", href: "/projects", shortcut: "W", active: true }, // Work está activo aquí
];

// Array de todos tus proyectos detallados
const allProjects = [
  {
    id: "01",
    title: "AI Agent Platform",
    subtitle: "Autonomous multi-agent system",
    link: "/projects/ai-agent", // O link a GitHub
    image: "/portfolio.jpg", // Cambiar por imagen real
    problem: "Legacy systems couldn't scale manual data extraction and decision-making processes in real-time.",
    architecture: "Event-driven microservices communicating via message brokers with a central LLM orchestrator.",
    built: "Engineered the core routing logic, integrated RAG pipelines for contextual memory, and deployed to AWS.",
    technologies: ["Python", "LangChain", "FastAPI", "PostgreSQL", "Docker"],
    result: "Reduced processing time by 85% and successfully automated 10,000+ weekly tasks."
  },
  {
    id: "02",
    title: "RAG Analytics Engine",
    subtitle: "Enterprise semantic search",
    link: "/projects/rag-engine",
    image: "/portfolio.jpg",
    problem: "Employees spent an average of 2 hours daily searching for specific compliance clauses across thousands of messy PDFs.",
    architecture: "Vector database cluster coupled with a Next.js frontend and an ingestion pipeline for asynchronous document processing.",
    built: "Designed the document chunking strategy, embedded the vectors using OpenAI models, and built the conversational UI.",
    technologies: ["Vector DB", "Next.js", "OpenAI API", "AWS S3", "Tailwind CSS"],
    result: "Achieved 96% retrieval accuracy and cut document search time down to seconds for a team of 50+ analysts."
  },
  // Puedes añadir más proyectos copiando este bloque...
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[#f3f3f1] text-[#161616] selection:bg-[#161616] selection:text-[#f3f3f1] font-sans">
      
      {/* Fondo de puntos (Dotted Grid) para mantener consistencia con la Home */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(#161616_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none"></div>

      {/* Header flotante (Glassmorphism) */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-5 pt-6 pointer-events-none">
        <header className="pointer-events-auto flex w-full max-w-[840px] items-center justify-between rounded-full border border-[#161616]/10 bg-[#f3f3f1]/70 px-6 py-3 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <a href="/" className="text-[14px] font-semibold tracking-[-0.04em] transition-opacity hover:opacity-70">
            Xavi Far.
          </a>
          <nav className="flex items-center gap-4 text-[13px] tracking-[-0.035em] sm:gap-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="group flex items-center gap-1.5">
                <span className={item.active ? "font-medium text-[#161616]" : "text-[#161616]/50 transition-colors duration-300 group-hover:text-[#161616]"}>
                  {item.label}
                </span>
                <span className="hidden rounded-md bg-[#161616]/5 px-1.5 py-0.5 text-[9px] font-bold tracking-widest text-[#161616]/40 sm:inline-block">
                  {item.shortcut}
                </span>
              </a>
            ))}
          </nav>
        </header>
      </div>

      {/* CONTENEDOR PRINCIPAL: Mismos bordes laterales de la Home */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[840px] flex-col border-[#161616]/10 px-5 sm:border-x sm:px-12 md:px-16 pt-32 pb-24">
        
        {/* Cabecera de la Página */}
        <div className="mb-16 sm:mb-24 flex flex-col pt-8">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-medium leading-[1.05] tracking-[-0.05em]">
            Archive.
          </h1>
          <p className="mt-4 max-w-[500px] text-[15px] leading-[1.6] tracking-[-0.01em] text-[#161616]/70">
            A comprehensive list of systems, APIs, and AI agents I've engineered. Focused on scalable architectures and real-world impact.
          </p>
        </div>

        {/* Lista de Proyectos Detallados */}
        <div className="flex flex-col gap-24 sm:gap-32">
          {allProjects.map((project) => (
            <article key={project.id} className="group flex flex-col gap-6">
              
              {/* Header del Proyecto */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <div className="mb-3 font-mono text-[11px] font-medium tracking-widest text-[#161616]/40">
                    {project.id}
                  </div>
                  <h3 className="text-[clamp(1.5rem,4vw,2.2rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[15px] tracking-[-0.02em] text-[#161616]/60">
                    {project.subtitle}
                  </p>
                </div>
                
                {/* CTA Desktop */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-2 text-[13px] font-medium tracking-[-0.02em] transition-colors hover:text-[#161616]/60 sm:flex"
                >
                  Explore project 
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* VISUAL GRANDE */}
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/9] w-full overflow-hidden rounded-md bg-[#161616]/5"
              >
                <Image
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 840px) 100vw, 840px"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-[#161616]/10"></div>
              </a>

              {/* METADATOS DEL PROYECTO (Tabla Editorial) */}
              <div className="mt-4 flex flex-col">
                
                {/* Fila: Problem */}
                <div className="grid grid-cols-[110px_1fr] border-t border-[#161616]/10 py-4 sm:grid-cols-[140px_1fr]">
                  <span className="mt-0.5 text-[10px] uppercase tracking-[0.08em] text-[#161616]/40">
                    Problem
                  </span>
                  <span className="text-[13.5px] leading-[1.65] tracking-[-0.01em] text-[#161616]/80 sm:text-[14.5px]">
                    {project.problem}
                  </span>
                </div>

                {/* Fila: Architecture */}
                <div className="grid grid-cols-[110px_1fr] border-t border-[#161616]/10 py-4 sm:grid-cols-[140px_1fr]">
                  <span className="mt-0.5 text-[10px] uppercase tracking-[0.08em] text-[#161616]/40">
                    Architecture
                  </span>
                  <span className="text-[13.5px] leading-[1.65] tracking-[-0.01em] text-[#161616]/80 sm:text-[14.5px]">
                    {project.architecture}
                  </span>
                </div>

                {/* Fila: What I built */}
                <div className="grid grid-cols-[110px_1fr] border-t border-[#161616]/10 py-4 sm:grid-cols-[140px_1fr]">
                  <span className="mt-0.5 text-[10px] uppercase tracking-[0.08em] text-[#161616]/40">
                    What I built
                  </span>
                  <span className="text-[13.5px] leading-[1.65] tracking-[-0.01em] text-[#161616]/80 sm:text-[14.5px]">
                    {project.built}
                  </span>
                </div>

                {/* Fila: Technologies */}
                <div className="grid grid-cols-[110px_1fr] border-t border-[#161616]/10 py-4 sm:grid-cols-[140px_1fr]">
                  <span className="mt-0.5 text-[10px] uppercase tracking-[0.08em] text-[#161616]/40">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-sm bg-[#161616]/5 px-2 py-1 text-[11px] font-medium tracking-tight text-[#161616]/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fila: Result */}
                <div className="grid grid-cols-[110px_1fr] border-y border-[#161616]/10 py-4 sm:grid-cols-[140px_1fr]">
                  <span className="mt-0.5 text-[10px] uppercase tracking-[0.08em] text-[#161616]/40">
                    Result
                  </span>
                  <span className="text-[13.5px] font-medium leading-[1.65] tracking-[-0.01em] text-[#161616] sm:text-[14.5px]">
                    {project.result}
                  </span>
                </div>

              </div>

              {/* CTA Mobile */}
              <div className="mt-2 sm:hidden">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#161616] px-4 py-3 text-[13px] font-medium text-[#f3f3f1] transition-colors hover:bg-transparent hover:text-[#161616] hover:ring-1 hover:ring-inset hover:ring-[#161616]"
                >
                  Explore project →
                </a>
              </div>

            </article>
          ))}
        </div>
        
        {/* Footer simple para cerrar la página */}
        <div className="mt-32 border-t border-[#161616]/10 pt-8 flex justify-between items-center text-[12px] text-[#161616]/40 font-medium">
          <span>© {new Date().getFullYear()} Xavi Far.</span>
          <a href="#" className="hover:text-[#161616] transition-colors">Back to top ↑</a>
        </div>

      </div>
    </main>
  );
}