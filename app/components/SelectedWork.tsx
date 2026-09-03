import Image from "next/image";

// Array con los 2 proyectos destacados y sus iconos en color (integrados sutilmente)
const selectedProjects = [
  {
    id: "01",
    title: "AI Agent Platform",
    description: "An autonomous multi-agent system built to scale manual data extraction and complex decision-making in real-time.",
    tech: [
      {
        name: "Python",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="10" height="10">
            <path fill="#3776AB" d="M64 5.92c-29.34 0-28.32 12.72-28.32 12.72l.06 13.07h28.76v4.1H32.44S14.28 34.6 14.28 62.77c0 28.16 16.03 29.56 16.03 29.56l10.3.06v-14.7s-.2-16.12 16.3-16.12h17.93s15.34-.33 15.34-14.97V30.27s1.3-24.35-26.18-24.35zm-14.53 8.35a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8z"></path>
            <path fill="#FFD43B" d="M64 121.73c29.34 0 28.32-12.72 28.32-12.72l-.06-13.07H63.5v-4.1h32.06s18.16 1.22 18.16-26.96c0-28.16-16.03-29.56-16.03-29.56l-10.3-.06v14.7s.2 16.13-16.3 16.13H53.15s-15.35.33-15.35 14.96v16.32s-1.3 24.36 26.2 24.36zm14.53-8.36a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8z"></path>
          </svg>
        )
      },
      {
        name: "LangChain",
        icon: (
           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1C1C1C"/>
             <path d="M2 17L12 22L22 17" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M2 12L12 17L22 12" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        )
      },
      {
        name: "FastAPI",
        icon: (
          <svg viewBox="0 0 128 128" width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <path fill="#009688" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z"></path>
            <path fill="#FFF" d="M64 16.8L37.1 61h22.6v50.2L86.9 67H64.3V16.8z"></path>
          </svg>
        )
      }
    ],
    image: "/portfolio.jpg", // Cambia esto por la imagen real de tu proyecto
    link: "/projects/ai-agent",
  },
  {
    id: "02",
    title: "RAG Analytics Engine",
    description: "Enterprise search engine allowing users to chat with thousands of internal PDFs with high semantic accuracy.",
    tech: [
      {
        name: "Vector DB",
        icon: (
           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M4 4H20V8H4V4Z" fill="#F56565"/>
             <path d="M4 10H20V14H4V10Z" fill="#4299E1"/>
             <path d="M4 16H20V20H4V16Z" fill="#48BB78"/>
           </svg>
        )
      },
      {
        name: "Next.js",
        icon: (
          <svg viewBox="0 0 128 128" width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000" d="M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64z"></path>
            <path fill="#fff" d="M102.663 94.757l-43.04-63.535h-9.52v64.673h8.318V45.249l37.079 56.402a63.593 63.593 0 0 0 7.163-6.894z"></path>
            <path fill="#fff" d="M96.096 42.668h-8.318V85.33h8.318V42.668z"></path>
          </svg>
        )
      },
      {
        name: "OpenAI",
        icon: (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#10A37F" d="M22.28 9.82a8.82 8.82 0 0 0-.58-3.9 8.76 8.76 0 0 0-3.32-4.04 8.79 8.79 0 0 0-4.64-1.2h-.14a8.77 8.77 0 0 0-6.9 2.9A8.8 8.8 0 0 0 1.72 9.81a8.75 8.75 0 0 0 .58 3.9 8.79 8.79 0 0 0 3.32 4.04 8.79 8.79 0 0 0 4.64 1.2h.14a8.77 8.77 0 0 0 6.9-2.9 8.76 8.76 0 0 0 4.98-6.23Z"></path>
            <path fill="#FFF" d="M13.25 10.66v2.68l-3.23 1.86v-3.73l3.23-1.87v-2.68L9 9.87v4.26l4.25-2.45v-1.02Z"></path>
          </svg>
        )
      }
    ],
    image: "/portfolio.jpg", // Cambia esto por la imagen real de tu proyecto
    link: "/projects/rag-engine",
  }
];

export default function SelectedWork() {
  return (
    <section id="work" className="bg-[#f3f3f1] text-[#161616] py-20">
      <div className="mx-auto w-full max-w-[760px] px-5 sm:px-8">
        
        {/* Cabecera de la sección */}
        <div className="mb-10 flex items-center gap-4 sm:mb-12">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#161616]/40">
            Selected Work
          </h2>
          <div className="h-[1px] flex-1 bg-[#161616]/10"></div>
        </div>

        {/* Lista de Proyectos (Estilo Editorial) */}
        <div className="flex flex-col gap-14 sm:gap-16">
          {selectedProjects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              className="group flex flex-col gap-4 sm:gap-5"
            >
              {/* Contenedor de la Imagen (Panorámico) */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#161616]/5 sm:aspect-[21/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 760px"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-[#161616]/10 transition-colors group-hover:ring-[#161616]/20"></div>
              </div>

              {/* Información del Proyecto */}
              <div className="flex flex-col gap-2">
                {/* Título y Flecha Diagonal */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-mono text-[11px] text-[#161616]/40">
                      {project.id}
                    </span>
                    <h3 className="text-[18px] font-medium tracking-tight sm:text-[20px]">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-[#161616]/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#161616]">
                    ↗
                  </span>
                </div>

                {/* Descripción, Tecnologías y CTA interno (Identados editorialmente) */}
                <div className="pl-7 sm:pl-9">
                  <p className="max-w-[500px] text-[14px] leading-[1.6] tracking-[-0.01em] text-[#161616]/70">
                    {project.description}
                  </p>
                  
                  {/* Etiquetas de Tecnología con Iconos a Color */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech.name} 
                        className="flex items-center gap-1.5 rounded-md bg-[#161616]/5 px-2 py-1 text-[10px] font-medium tracking-tight text-[#161616]/60 transition-colors group-hover:bg-[#161616]/10"
                      >
                        <span className="flex items-center justify-center opacity-80 transition-opacity group-hover:opacity-100">
                          {tech.icon}
                        </span>
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* NUEVO: Indicador textual de "Ver Proyecto" integrado sutilmente */}
                  <div className="mt-4 flex items-center gap-1.5 overflow-hidden">
                    <span className="text-[12px] font-medium tracking-tight text-[#161616]/50 transition-colors group-hover:text-[#161616]">
                      View case study
                    </span>
                    <span className="text-[#161616]/0 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 group-hover:text-[#161616]">
                      →
                    </span>
                  </div>

                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA: Ver todos los proyectos (El original estilo píldora/cristal) */}
        <div className="mt-16 flex justify-center sm:mt-20">
          <a
            href="/projects"
            className="group flex items-center gap-2 rounded-full border border-[#161616]/10 bg-white/50 px-5 py-2.5 text-[13px] font-medium tracking-tight text-[#161616] transition-all hover:bg-[#161616] hover:text-[#f3f3f1]"
          >
            <span>See all projects</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}