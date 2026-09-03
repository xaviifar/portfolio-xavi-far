import Image from "next/image";

export default function SelectedWork() {
  return (
    <section id="projects" className="bg-[#f3f3f1] text-[#161616] py-20 sm:py-24">
      {/* Contenedor alineado con el Hero (max-w-[760px]) */}
      <div className="mx-auto w-full max-w-[760px] px-5 sm:px-8">
        
        {/* Cabecera de la sección */}
        <div className="mb-12 flex items-center gap-4 sm:mb-16">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#161616]/40">
            Selected Work
          </h2>
          <div className="h-[1px] flex-1 bg-[#161616]/10"></div>
        </div>

        {/* PROYECTO 01 */}
        <article className="group flex flex-col gap-6">
          
          {/* Header del Proyecto */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="mb-3 font-mono text-[11px] font-medium tracking-widest text-[#161616]/40">
                01
              </div>
              <h3 className="text-[clamp(1.5rem,4vw,2.2rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                AI Agent Platform
              </h3>
              <p className="mt-2 text-[15px] tracking-[-0.02em] text-[#161616]/60">
                Autonomous multi-agent system
              </p>
            </div>
            
            {/* CTA Desktop (Escondido en móvil, se muestra abajo) */}
            <a
              href="/project-link"
              className="hidden items-center gap-2 text-[13px] font-medium tracking-[-0.02em] transition-colors hover:text-[#161616]/60 sm:flex"
            >
              Explore project 
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* VISUAL GRANDE */}
          <a 
            href="/project-link" 
            className="relative block aspect-[16/9] w-full overflow-hidden rounded-md bg-[#161616]/5"
          >
            {/* Placeholder de imagen - Cambia el src por el pantallazo de tu proyecto */}
            <Image
              src="/project-1-placeholder.jpg" 
              alt="AI Agent Platform Dashboard"
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
            {/* Borde interior sutil para enmarcar la imagen */}
            <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-[#161616]/10"></div>
          </a>

          {/* METADATOS DEL PROYECTO (Estilo Tabla Editorial) */}
          <div className="mt-4 flex flex-col">
            
            {/* Fila: Problem */}
            <div className="grid grid-cols-[110px_1fr] border-t border-[#161616]/10 py-3 sm:grid-cols-[140px_1fr]">
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.08em] text-[#161616]/40">
                Problem
              </span>
              <span className="text-[13px] leading-[1.6] tracking-[-0.01em] text-[#161616]/80 sm:text-[14px]">
                Legacy systems couldn't scale manual data extraction and decision-making processes in real-time.
              </span>
            </div>

            {/* Fila: Architecture */}
            <div className="grid grid-cols-[110px_1fr] border-t border-[#161616]/10 py-3 sm:grid-cols-[140px_1fr]">
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.08em] text-[#161616]/40">
                Architecture
              </span>
              <span className="text-[13px] leading-[1.6] tracking-[-0.01em] text-[#161616]/80 sm:text-[14px]">
                Event-driven microservices communicating via message brokers with a central LLM orchestrator.
              </span>
            </div>

            {/* Fila: What I built */}
            <div className="grid grid-cols-[110px_1fr] border-t border-[#161616]/10 py-3 sm:grid-cols-[140px_1fr]">
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.08em] text-[#161616]/40">
                What I built
              </span>
              <span className="text-[13px] leading-[1.6] tracking-[-0.01em] text-[#161616]/80 sm:text-[14px]">
                Engineered the core routing logic, integrated RAG pipelines for contextual memory, and deployed to AWS.
              </span>
            </div>

            {/* Fila: Technologies */}
            <div className="grid grid-cols-[110px_1fr] border-t border-[#161616]/10 py-3 sm:grid-cols-[140px_1fr]">
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.08em] text-[#161616]/40">
                Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {["Python", "LangChain", "FastAPI", "PostgreSQL", "Docker"].map((tech) => (
                  <span key={tech} className="rounded-sm bg-[#161616]/5 px-1.5 py-0.5 text-[11px] font-medium tracking-tight text-[#161616]/70">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Fila: Result */}
            <div className="grid grid-cols-[110px_1fr] border-y border-[#161616]/10 py-3 sm:grid-cols-[140px_1fr]">
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.08em] text-[#161616]/40">
                Result
              </span>
              <span className="text-[13px] font-medium leading-[1.6] tracking-[-0.01em] text-[#161616] sm:text-[14px]">
                Reduced processing time by 85% and successfully automated 10,000+ weekly tasks.
              </span>
            </div>

          </div>

          {/* CTA Mobile (Solo se muestra en pantallas pequeñas) */}
          <div className="mt-2 sm:hidden">
            <a
              href="/project-link"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#161616] px-4 py-3 text-[13px] font-medium text-[#f3f3f1] transition-colors hover:bg-transparent hover:text-[#161616] hover:ring-1 hover:ring-inset hover:ring-[#161616]"
            >
              Explore project →
            </a>
          </div>

        </article>

      </div>
    </section>
  );
}