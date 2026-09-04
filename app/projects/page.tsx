import Image from "next/image";
import Header from "@/app/components/Header";
import SectionHeader from "@/app/components/SectionHeader";
import Footer from "@/app/components/Footer";
import { IconType } from "react-icons";
import { VscAzure } from "react-icons/vsc";

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  image: string;
  bgImage?: string;
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
    image: "/img/orbhi.png",
    bgImage: "/back.jpg",
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
    bgImage: "/back.jpg",
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

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  logoSrc?: string;
  icon?: IconType;
  brandColor?: string;
  skills: string[];
}

const certifications: CertificationItem[] = [
  {
    id: "01",
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900 / AI-901)",
    issuer: "Microsoft",
    date: "Verified Certification",
    credentialId: "MICROSOFT-AI-901",
    icon: VscAzure,
    brandColor: "#0078D4",
    skills: ["Azure OpenAI", "Cognitive Services", "Machine Learning", "Computer Vision", "NLP"],
  },
  {
    id: "02",
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Verified Certification",
    credentialId: "MICROSOFT-AZ-900",
    icon: VscAzure,
    brandColor: "#0078D4",
    skills: ["Azure Cloud", "Cloud Architecture", "Security & Compliance", "Azure Services"],
  },
  {
    id: "03",
    title: "MSc Artificial Intelligence & Big Data",
    issuer: "Centre Estudis Monlau",
    date: "2025 — 2026",
    credentialId: "MONLAU-AI-2026-XF",
    logoSrc: "/img/monlau.jpg",
    skills: ["Deep Learning", "Spark", "Kafka", "Neural Architectures"],
  },
  {
    id: "04",
    title: "Cross-Platform Application Development (DAM)",
    issuer: "Centre Estudis Monlau",
    date: "2025 — 2026",
    credentialId: "MONLAU-DAM-2026-XF",
    logoSrc: "/img/monlau.jpg",
    skills: ["Full-Stack", "Databases", "Distributed Systems"],
  },
  {
    id: "05",
    title: "BSc in Computer Engineering",
    issuer: "Universitat de Lleida",
    date: "Academic Background",
    credentialId: "UDL-ENG-XF",
    logoSrc: "/img/udl.jpg",
    skills: ["Algorithms", "Data Structures", "OS Architecture"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-[#161616] bg-grid-structural">
      {/* Master Container ("Prathm Structural Grid") */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[840px] flex-col border-[#161616]/10 bg-[#f3f3f1] px-5 sm:border-x sm:px-10 md:px-14 shadow-[0_0_50px_rgba(0,0,0,0.02)]">
        <Header />

        {/* Section 01: Project Blueprints */}
        <section className="relative py-7 sm:py-9 border-b border-[#161616]/10">
          <SectionHeader
            index="01"
            kicker="Production Blueprints"
            title="Projects &amp; Architecture Archive"
            subtitle="A comprehensive record of backend architectures, AI agent systems, and data pipelines built for production environments."
          />

          <div className="flex flex-col gap-12 sm:gap-14">
            {allProjects.map((project) => (
              <article key={project.id} className="group flex flex-col gap-4">
                {/* Project Title & Status */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 border-b border-[#161616]/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[10.5px] text-[#161616]/40 font-medium">
                      {project.id}
                    </span>
                    <h3 className="text-[18px] sm:text-[20px] font-medium tracking-tight text-[#161616]">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-[12px] text-[#161616]/60 font-mono">
                    {project.subtitle}
                  </span>
                </div>

                {/* Media Container with Background Image & Foreground Screenshot Layer */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border border-[#161616]/10 bg-zinc-100 sm:aspect-[21/9] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  {/* Background Stage Image */}
                  <Image
                    src={project.bgImage || "/back.jpg"}
                    alt=""
                    fill
                    sizes="(max-width: 840px) 100vw, 840px"
                    className="object-cover opacity-25 blur-[1px]  transition-all duration-500 group-hover:scale-105 group-hover:opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />

                  {/* Foreground Project Capture */}
                  <div className="relative z-10 flex h-full w-full items-center justify-center p-4 sm:p-6">
                    <div className="relative h-full w-full overflow-hidden rounded-md border border-[#161616]/15 bg-white shadow-md transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 840px) 100vw, 840px"
                        className="object-cover object-top  transition-all duration-500 "
                      />
                    </div>
                  </div>
                </div>

                {/* Blueprint Metadata Table */}
                <div className="flex flex-col border-t border-[#161616]/10">
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[130px_1fr] border-b border-[#161616]/10 py-3">
                    <span className="text-[9.5px] uppercase font-mono tracking-[0.1em] text-[#161616]/40 font-medium pt-0.5">
                      Problem
                    </span>
                    <span className="text-[13px] leading-[1.6] text-[#161616]/80">
                      {project.problem}
                    </span>
                  </div>

                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[130px_1fr] border-b border-[#161616]/10 py-3">
                    <span className="text-[9.5px] uppercase font-mono tracking-[0.1em] text-[#161616]/40 font-medium pt-0.5">
                      Architecture
                    </span>
                    <span className="text-[13px] leading-[1.6] text-[#161616]/80">
                      {project.architecture}
                    </span>
                  </div>

                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[130px_1fr] border-b border-[#161616]/10 py-3">
                    <span className="text-[9.5px] uppercase font-mono tracking-[0.1em] text-[#161616]/40 font-medium pt-0.5">
                      Engineering
                    </span>
                    <span className="text-[13px] leading-[1.6] text-[#161616]/80">
                      {project.built}
                    </span>
                  </div>

                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[130px_1fr] border-b border-[#161616]/10 py-3">
                    <span className="text-[9.5px] uppercase font-mono tracking-[0.1em] text-[#161616]/40 font-medium pt-0.5">
                      Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t.name}
                          className="inline-flex items-center gap-1.5 rounded-md bg-white border border-[#161616]/10 px-2 py-0.8 text-[11px] font-medium text-[#161616]"
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

                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[130px_1fr] py-3">
                    <span className="text-[9.5px] uppercase font-mono tracking-[0.1em] text-[#161616]/40 font-medium pt-0.5">
                      Result
                    </span>
                    <span className="text-[13px] font-medium leading-[1.6] text-[#161616]">
                      {project.result}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 02: Certifications */}
        <section className="relative py-7 sm:py-9 border-b border-[#161616]/10">
          <SectionHeader
            index="02"
            kicker="Validated Knowledge"
            title="Certifications &amp; Credentials"
            subtitle="Verified academic credentials and formal engineering specializations."
          />

          <div className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group flex items-start gap-3.5 sm:gap-4 border-b border-[#161616]/10 pb-4 last:border-0"
              >
                <div className="relative mt-0.5 h-9 w-9 shrink-0 overflow-hidden rounded-md border border-[#161616]/10 bg-white p-1 flex items-center justify-center">
                  {cert.logoSrc ? (
                    <Image
                      src={cert.logoSrc}
                      alt={cert.issuer}
                      fill
                      className="object-contain p-0.5"
                    />
                  ) : cert.icon ? (
                    <cert.icon
                      size={18}
                      style={{ color: cert.brandColor || "#161616" }}
                    />
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="text-[14px] font-medium text-[#161616]">
                      {cert.title}
                    </h4>
                    <span className="font-mono text-[10.5px] text-[#161616]/40">
                      {cert.date}
                    </span>
                  </div>

                  <span className="text-[12.5px] text-[#161616]/60 font-medium">
                    {cert.issuer}
                  </span>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] text-[#161616]/50 bg-white px-2 py-0.5 rounded border border-[#161616]/10">
                      ID: {cert.credentialId}
                    </span>
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-white border border-[#161616]/10 px-2 py-0.5 text-[10.5px] font-medium text-[#161616]/75"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}