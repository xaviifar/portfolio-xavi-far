import Image from "next/image";
import Header from "@/app/components/Header";
import SectionHeader from "@/app/components/SectionHeader";
import Footer from "@/app/components/Footer";

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  image: string;
  problem: string;
  architecture: string;
  built: string;
  technologies: { name: string; icon?: React.ReactNode }[];
  result: string;
}

const allProjects: ProjectDetail[] = [
  {
    id: "01",
    title: "AI Agent Platform",
    subtitle: "Autonomous multi-agent orchestration system",
    link: "https://github.com/xaviifar",
    image: "/portfolio.jpg",
    problem:
      "Legacy workflow systems failed to automate complex data extraction and multi-step reasoning in real time, causing manual backlogs.",
    architecture:
      "Event-driven microservices architecture communicating via Redis message brokers with a central LangChain LLM orchestrator and FastAPI runtime.",
    built:
      "Engineered deterministic routing loops, integrated Pinecone vector memory for dynamic context recall, and containerized deployment with Docker.",
    technologies: [
      {
        name: "Python",
        icon: (
          <svg viewBox="0 0 128 128" width="12" height="12">
            <path fill="#3776AB" d="M64 5.92c-29.34 0-28.32 12.72-28.32 12.72l.06 13.07h28.76v4.1H32.44S14.28 34.6 14.28 62.77c0 28.16 16.03 29.56 16.03 29.56l10.3.06v-14.7s-.2-16.12 16.3-16.12h17.93s15.34-.33 15.34-14.97V30.27s1.3-24.35-26.18-24.35zm-14.53 8.35a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8z" />
            <path fill="#FFD43B" d="M64 121.73c29.34 0 28.32-12.72 28.32-12.72l-.06-13.07H63.5v-4.1h32.06s18.16 1.22 18.16-26.96c0-28.16-16.03-29.56-16.03-29.56l-10.3-.06v14.7s.2 16.13-16.3 16.13H53.15s-15.35.33-15.35 14.96v16.32s-1.3 24.36 26.2 24.36zm14.53-8.36a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8z" />
          </svg>
        ),
      },
      {
        name: "LangChain",
        icon: (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1C1C1C" />
            <path d="M2 17L12 22L22 17" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: "FastAPI",
        icon: (
          <svg viewBox="0 0 128 128" width="12" height="12">
            <path fill="#009688" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z" />
            <path fill="#FFF" d="M64 16.8L37.1 61h22.6v50.2L86.9 67H64.3V16.8z" />
          </svg>
        ),
      },
      { name: "PostgreSQL" },
      { name: "Docker" },
    ],
    result:
      "Reduced processing time by 85% and successfully automated over 10,000 weekly recurring tasks with high validation accuracy.",
  },
  {
    id: "02",
    title: "RAG Analytics Engine",
    subtitle: "Enterprise semantic search & knowledge retrieval",
    link: "https://github.com/xaviifar",
    image: "/portfolio.jpg",
    problem:
      "Technical teams spent over 2 hours daily searching for specific architectural clauses and compliance standards across thousands of PDFs.",
    architecture:
      "Vector database cluster coupled with an asynchronous ingestion pipeline for document parsing, semantic chunking, and embedding generation.",
    built:
      "Designed sliding-window chunking algorithms, integrated hybrid BM25 + dense vector ranking, and built conversational query streams.",
    technologies: [
      {
        name: "Vector DB",
        icon: (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M4 4H20V8H4V4Z" fill="#F56565" />
            <path d="M4 10H20V14H4V10Z" fill="#4299E1" />
            <path d="M4 16H20V20H4V16Z" fill="#48BB78" />
          </svg>
        ),
      },
      {
        name: "Next.js",
        icon: (
          <svg viewBox="0 0 128 128" width="12" height="12" fill="none">
            <path fill="#000" d="M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64z" />
            <path fill="#fff" d="M102.663 94.757l-43.04-63.535h-9.52v64.673h8.318V45.249l37.079 56.402a63.593 63.593 0 0 0 7.163-6.894z" />
            <path fill="#fff" d="M96.096 42.668h-8.318V85.33h8.318V42.668z" />
          </svg>
        ),
      },
      {
        name: "OpenAI API",
        icon: (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              fill="#10A37F"
              d="M22.28 9.82a8.82 8.82 0 0 0-.58-3.9 8.76 8.76 0 0 0-3.32-4.04 8.79 8.79 0 0 0-4.64-1.2h-.14a8.77 8.77 0 0 0-6.9 2.9A8.8 8.8 0 0 0 1.72 9.81a8.75 8.75 0 0 0 .58 3.9 8.79 8.79 0 0 0 3.32 4.04 8.79 8.79 0 0 0 4.64 1.2h.14a8.77 8.77 0 0 0 6.9-2.9 8.76 8.76 0 0 0 4.98-6.23Z"
            />
            <path fill="#FFF" d="M13.25 10.66v2.68l-3.23 1.86v-3.73l3.23-1.87v-2.68L9 9.87v4.26l4.25-2.45v-1.02Z" />
          </svg>
        ),
      },
      { name: "AWS S3" },
      { name: "Tailwind CSS" },
    ],
    result:
      "Achieved 96% retrieval accuracy and cut document search time down to sub-second queries for active analyst teams.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-[#161616]">
      {/* Master Container ("Hoja de Papel" blueprint effect) */}
      <div className="mx-auto flex min-h-screen w-full max-w-[840px] flex-col border-[#161616]/10 px-6 sm:border-x sm:px-12 md:px-16">
        <Header />

        {/* Page Header */}
        <div className="pt-10 pb-4">
          <SectionHeader
            index="INDEX // 01"
            title="Projects & Architecture Archive"
            subtitle="A comprehensive record of backend architectures, AI agent systems, and data pipelines built for production environments."
          />
        </div>

        {/* Project Technical Blueprints */}
        <div className="flex flex-col gap-16 sm:gap-20 pb-16">
          {allProjects.map((project) => (
            <article key={project.id} className="group flex flex-col gap-6">
              {/* Project Title & Status */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[#161616]/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-[#161616]/40">
                    {project.id}
                  </span>
                  <h3 className="text-[20px] sm:text-[24px] font-medium tracking-tight text-[#161616]">
                    {project.title}
                  </h3>
                </div>
                <span className="text-[13px] text-[#161616]/60 font-mono">
                  {project.subtitle}
                </span>
              </div>

              {/* Panoramic Media Box */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-white/60 ring-1 ring-inset ring-[#161616]/10 sm:aspect-[21/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 840px) 100vw, 840px"
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              {/* Blueprint Metadata Table */}
              <div className="flex flex-col border-t border-[#161616]/10">
                <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] border-b border-[#161616]/10 py-3.5">
                  <span className="text-[10px] uppercase font-mono tracking-[0.1em] text-[#161616]/40 font-medium pt-0.5">
                    Problem
                  </span>
                  <span className="text-[13.5px] leading-[1.65] text-[#161616]/80 sm:text-[14px]">
                    {project.problem}
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] border-b border-[#161616]/10 py-3.5">
                  <span className="text-[10px] uppercase font-mono tracking-[0.1em] text-[#161616]/40 font-medium pt-0.5">
                    Architecture
                  </span>
                  <span className="text-[13.5px] leading-[1.65] text-[#161616]/80 sm:text-[14px]">
                    {project.architecture}
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] border-b border-[#161616]/10 py-3.5">
                  <span className="text-[10px] uppercase font-mono tracking-[0.1em] text-[#161616]/40 font-medium pt-0.5">
                    Engineering
                  </span>
                  <span className="text-[13.5px] leading-[1.65] text-[#161616]/80 sm:text-[14px]">
                    {project.built}
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] border-b border-[#161616]/10 py-3.5">
                  <span className="text-[10px] uppercase font-mono tracking-[0.1em] text-[#161616]/40 font-medium pt-0.5">
                    Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t.name}
                        className="inline-flex items-center gap-1.5 rounded-md bg-white/60 border border-[#161616]/10 px-2.5 py-1 text-[11px] font-medium text-[#161616]"
                      >
                        {t.icon && (
                          <span className="flex items-center justify-center shrink-0">
                            {t.icon}
                          </span>
                        )}
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] py-3.5">
                  <span className="text-[10px] uppercase font-mono tracking-[0.1em] text-[#161616]/40 font-medium pt-0.5">
                    Result
                  </span>
                  <span className="text-[13.5px] font-medium leading-[1.65] text-[#161616] sm:text-[14px]">
                    {project.result}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
}