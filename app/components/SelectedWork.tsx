import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

interface TechItem {
  name: string;
  icon?: React.ReactNode;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tech: TechItem[];
}

const selectedProjects: Project[] = [
  {
    id: "01",
    title: "AI Agent Platform",
    description:
      "Autonomous multi-agent system built for parallel document extraction, schema validation, and real-time decision routing.",
    image: "/portfolio.jpg",
    liveUrl: "/projects",
    githubUrl: "https://github.com/xaviifar",
    tech: [
      {
        name: "Python",
        icon: (
          <svg viewBox="0 0 128 128" className="h-3 w-3 shrink-0">
            <path
              fill="#3776AB"
              d="M64 5.92c-29.34 0-28.32 12.72-28.32 12.72l.06 13.07h28.76v4.1H32.44S14.28 34.6 14.28 62.77c0 28.16 16.03 29.56 16.03 29.56l10.3.06v-14.7s-.2-16.12 16.3-16.12h17.93s15.34-.33 15.34-14.97V30.27s1.3-24.35-26.18-24.35zm-14.53 8.35a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8z"
            />
            <path
              fill="#FFD43B"
              d="M64 121.73c29.34 0 28.32-12.72 28.32-12.72l-.06-13.07H63.5v-4.1h32.06s18.16 1.22 18.16-26.96c0-28.16-16.03-29.56-16.03-29.56l-10.3-.06v14.7s.2 16.13-16.3 16.13H53.15s-15.35.33-15.35 14.96v16.32s-1.3 24.36 26.2 24.36zm14.53-8.36a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8z"
            />
          </svg>
        ),
      },
      {
        name: "LangChain",
        icon: (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1C1C1C" />
            <path d="M2 17L12 22L22 17" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: "FastAPI",
        icon: (
          <svg viewBox="0 0 128 128" className="h-3 w-3 shrink-0">
            <path fill="#009688" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z" />
            <path fill="#FFF" d="M64 16.8L37.1 61h22.6v50.2L86.9 67H64.3V16.8z" />
          </svg>
        ),
      },
      {
        name: "Redis",
        icon: (
          <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="#DC382D">
            <path d="M22.5 15.5l-9.5 5.5-9.5-5.5v-7l9.5-5.5 9.5 5.5v7z" />
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        icon: (
          <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="#4169E1">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "02",
    title: "RAG BOE Subvenciones",
    description:
      "High-accuracy semantic search engine indexing official public state gazettes with hybrid BM25 + dense vector ranking.",
    image: "/portfolio.jpg",
    liveUrl: "/projects",
    githubUrl: "https://github.com/xaviifar",
    tech: [
      {
        name: "Qdrant",
        icon: (
          <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="#DC382D">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
          </svg>
        ),
      },
      {
        name: "Airflow",
        icon: (
          <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="#017CEE">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V13h2.5l-3.5-5-3.5 5H11v3.93a8 8 0 1 1 2 0z" />
          </svg>
        ),
      },
      {
        name: "Python",
        icon: (
          <svg viewBox="0 0 128 128" className="h-3 w-3 shrink-0">
            <path fill="#3776AB" d="M64 5.92c-29.34 0-28.32 12.72-28.32 12.72l.06 13.07h28.76v4.1H32.44S14.28 34.6 14.28 62.77c0 28.16 16.03 29.56 16.03 29.56l10.3.06v-14.7s-.2-16.12 16.3-16.12h17.93s15.34-.33 15.34-14.97V30.27s1.3-24.35-26.18-24.35zm-14.53 8.35a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8z" />
            <path fill="#FFD43B" d="M64 121.73c29.34 0 28.32-12.72 28.32-12.72l-.06-13.07H63.5v-4.1h32.06s18.16 1.22 18.16-26.96c0-28.16-16.03-29.56-16.03-29.56l-10.3-.06v14.7s.2 16.13-16.3 16.13H53.15s-15.35.33-15.35 14.96v16.32s-1.3 24.36 26.2 24.36zm14.53-8.36a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8z" />
          </svg>
        ),
      },
      {
        name: "Next.js",
        icon: (
          <svg viewBox="0 0 128 128" className="h-3 w-3 shrink-0" fill="none">
            <path fill="#000" d="M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64z" />
            <path fill="#fff" d="M102.663 94.757l-43.04-63.535h-9.52v64.673h8.318V45.249l37.079 56.402a63.593 63.593 0 0 0 7.163-6.894z" />
            <path fill="#fff" d="M96.096 42.668h-8.318V85.33h8.318V42.668z" />
          </svg>
        ),
      },
    ],
  },
];

export default function SelectedWork() {
  return (
    <section aria-labelledby="projects" className="relative py-7 sm:py-9 border-b border-[#161616]/10">
      {/* Structural Corner Wireframe Markers */}
      <span className="absolute -left-[5px] -top-[5px] font-mono text-[10px] text-[#161616]/30 select-none pointer-events-none hidden sm:inline-block">
        +
      </span>
      <span className="absolute -right-[5px] -top-[5px] font-mono text-[10px] text-[#161616]/30 select-none pointer-events-none hidden sm:inline-block">
        +
      </span>
      <span className="absolute -left-[5px] -bottom-[5px] font-mono text-[10px] text-[#161616]/30 select-none pointer-events-none hidden sm:inline-block">
        +
      </span>
      <span className="absolute -right-[5px] -bottom-[5px] font-mono text-[10px] text-[#161616]/30 select-none pointer-events-none hidden sm:inline-block">
        +
      </span>

      <SectionHeader
        index="03"
        kicker="Featured Work"
        title="Selected Projects"
        subtitle="Engineered systems, RAG retrieval pipelines, and distributed architectures built for production."
      />

      {/* Prathm-Style 2-Column Compact Grid */}
      <div className="relative mt-4">
        {/* Center hairline dividing line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 hidden w-px bg-[#161616]/10 sm:block"
        />

        <div className="relative grid grid-cols-1 sm:grid-cols-2">
          {selectedProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`relative flex flex-col p-2.5 sm:p-4 ${
                idx === 0 ? "sm:pr-5" : "sm:pl-5"
              }`}
            >
              <div className="group/card relative flex flex-1 flex-col gap-2.5">
                {/* Compact Media Container */}
                <Link
                  href={project.liveUrl || "/projects"}
                  className="group/media block overflow-hidden rounded-md border border-[#161616]/10 bg-white/70 outline-none transition-all hover:border-[#161616]/30"
                >
                  <div className="relative h-36 w-full overflow-hidden sm:h-40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="object-cover object-top grayscale transition-transform duration-500 ease-out group-hover/media:scale-[1.03] group-hover/media:grayscale-0"
                    />
                  </div>
                </Link>

                {/* Title and Action Buttons Row */}
                <div className="flex items-center justify-between gap-2 pt-0.5">
                  <h3 className="min-w-0 truncate text-[14px] sm:text-[15px] font-semibold leading-snug tracking-tight text-[#161616]">
                    <Link
                      href={project.liveUrl || "/projects"}
                      className="transition-colors hover:text-[#4f46e5]"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  {/* Micro Actions (Live & Code) */}
                  <div className="flex shrink-0 items-center gap-1.5">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        className="inline-flex items-center gap-1 rounded-md border border-[#161616]/10 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-[#161616] transition-colors hover:border-[#161616]/30 hover:bg-white"
                      >
                        <span>Live</span>
                        <span className="text-[10px] text-[#161616]/40">↗</span>
                      </Link>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-[#161616]/10 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-[#161616] transition-colors hover:border-[#161616]/30 hover:bg-white"
                      >
                        <svg viewBox="0 0 496 512" fill="currentColor" className="size-2.5 shrink-0">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="line-clamp-2 text-[12.5px] leading-snug text-[#161616]/70">
                  {project.description}
                </p>

                {/* Micro Tech Badges */}
                <ul className="flex flex-wrap gap-1.5 pt-0.5">
                  {project.tech.map((t) => (
                    <li key={t.name} className="flex">
                      <span className="inline-flex items-center gap-1 rounded-md border border-[#161616]/10 bg-white/70 px-1.5 py-0.5 text-[10.5px] font-medium text-[#161616] transition-colors hover:border-[#161616]/30">
                        {t.icon}
                        <span>{t.name}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See All Projects CTA */}
      <div className="relative flex w-full items-center justify-center pt-5 sm:pt-6">
        <Link
          href="/projects"
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-[#161616] px-3.5 text-[12px] font-medium text-[#f3f3f1] shadow-2xs transition-all hover:bg-[#161616]/90"
        >
          <span>See all projects</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </Link>
      </div>
    </section>
  );
}