import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiLangchain,
  SiDocker,
  SiNextdotjs,
  SiLinux,
  SiMysql,
  SiRedis,
  SiTailwindcss,
} from "react-icons/si";
import Header from "@/app/components/Header";
import SectionHeader from "@/app/components/SectionHeader";
import Toolkit from "@/app/components/Toolkit";
import Footer from "@/app/components/Footer";

interface TechBadge {
  name: string;
  brandColor: string;
  icon: IconType;
}

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  logoSrc: string;
  description: string;
  achievements: string[];
  previousRole?: {
    role: string;
    period: string;
    description: string;
  };
  technologies: TechBadge[];
}

const workHistory: WorkExperience[] = [
  {
    company: "ESDI Systems",
    role: "Full-stack & AI Developer",
    period: "Jan 2026 — Present",
    location: "Barcelona, Spain",
    logoSrc: "/img/esdi.webp",
    description:
      "Architecting distributed backend infrastructure, asynchronous data processing pipelines, and agentic LLM workflows for production clients.",
    achievements: [
      "Designed and deployed event-driven microservices with Python and FastAPI, reducing manual review latency by 80%.",
      "Integrated vector embedding search and custom RAG retrieval mechanisms to handle complex semantic document queries.",
      "Engineered clean, responsive frontend web applications with Next.js and Tailwind CSS under strict design specifications.",
    ],
    previousRole: {
      role: "Python Developer",
      period: "Jan 2026 — Jun 2026",
      description:
        "Developed ETL data ingestion routines, automated database migrations, and built RESTful endpoints with comprehensive unit test suites.",
    },
    technologies: [
      { name: "Python", brandColor: "#3776AB", icon: SiPython },
      { name: "FastAPI", brandColor: "#009688", icon: SiFastapi },
      { name: "PostgreSQL", brandColor: "#4169E1", icon: SiPostgresql },
      { name: "LangChain", brandColor: "#1C1C1C", icon: SiLangchain },
      { name: "Docker", brandColor: "#2496ED", icon: SiDocker },
      { name: "Next.js", brandColor: "#000000", icon: SiNextdotjs },
      { name: "Tailwind CSS", brandColor: "#06B6D4", icon: SiTailwindcss },
      { name: "Redis", brandColor: "#DC382D", icon: SiRedis },
    ],
  },
  {
    company: "Fundació Pere Tarrés",
    role: "Systems Technician",
    period: "Dec 2023 — Jul 2024",
    location: "Barcelona, Spain",
    logoSrc: "/img/pt.webp",
    description:
      "Maintained core server infrastructure, automated diagnostic routines, and ensured network reliability across multi-site branch nodes.",
    achievements: [
      "Automated system health checks, backup validation, and incident report generation using Python and Linux bash scripts.",
      "Administered access control protocols, database sync routines, and network hardware configuration.",
    ],
    technologies: [
      { name: "Linux / Bash", brandColor: "#FCC624", icon: SiLinux },
      { name: "Python", brandColor: "#3776AB", icon: SiPython },
      { name: "MySQL", brandColor: "#4479A1", icon: SiMysql },
      { name: "Docker", brandColor: "#2496ED", icon: SiDocker },
    ],
  },
];

const educationHistory = [
  {
    institution: "Centre Estudis Monlau",
    degree: "MSc in Artificial Intelligence & Big Data",
    period: "Sep 2025 — Jun 2026",
    logoSrc: "/img/monlau.jpg",
    details:
      "Advanced specialization in Deep Learning, Vector Search Architectures, Neural Networks, and Big Data Processing (Spark, Databricks, Kafka).",
  },
  {
    institution: "Centre Estudis Monlau",
    degree: "Cross-platform Application Development (DAM)",
    period: "Sep 2025 — Jun 2026",
    logoSrc: "/img/monlau.jpg",
    details:
      "Full-stack software engineering, relational database design, design patterns, and enterprise software architecture.",
  },
  {
    institution: "Universitat de Lleida",
    degree: "BSc in Computer Engineering",
    period: "Academic Background",
    logoSrc: "/img/udl.jpg",
    details:
      "Algorithms, data structures, computer architecture, discrete mathematics, and operating systems.",
  },
];

const certifications = [
  {
    id: "01",
    title: "MSc in Artificial Intelligence & Big Data",
    issuer: "Centre Estudis Monlau",
    date: "2025 — 2026",
    credentialId: "MONLAU-AI-2026-XF",
    logoSrc: "/img/monlau.jpg",
    skills: ["Deep Learning", "Spark", "Kafka", "Neural Architectures"],
  },
  {
    id: "02",
    title: "Cross-Platform Application Development (DAM)",
    issuer: "Centre Estudis Monlau",
    date: "2025 — 2026",
    credentialId: "MONLAU-DAM-2026-XF",
    logoSrc: "/img/monlau.jpg",
    skills: ["Full-Stack", "Databases", "Distributed Systems"],
  },
  {
    id: "03",
    title: "BSc in Computer Engineering",
    issuer: "Universitat de Lleida",
    date: "Academic Background",
    credentialId: "UDL-ENG-XF",
    logoSrc: "/img/udl.jpg",
    skills: ["Algorithms", "Data Structures", "OS Architecture"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-[#161616] bg-grid-structural">
      {/* Master Container ("Prathm Structural Grid") */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[840px] flex-col border-[#161616]/10 bg-[#f3f3f1] px-5 sm:border-x sm:px-10 md:px-14 shadow-[0_0_50px_rgba(0,0,0,0.02)]">
        <Header />

        <div className="py-6 sm:py-8">
          {/* Back breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#161616]/50 transition-colors hover:text-[#161616] mb-6"
          >
            <span>←</span>
            <span>Return to Overview</span>
          </Link>

          {/* Intro Section */}
          <div className="flex flex-col gap-2 pb-6 border-b border-[#161616]/10">
            <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-[1.1] tracking-[-0.04em] text-[#161616]">
              Experience &amp; Track Record
            </h1>
            <p className="text-[14px] leading-[1.6] text-[#161616]/70 max-w-[620px]">
              Detailed timeline of engineering roles, technical responsibilities, key milestones, and verified credentials.
            </p>
          </div>

          {/* Section 01: Work History */}
          <section className="py-7 sm:py-9 border-b border-[#161616]/10">
            <SectionHeader
              index="01"
              kicker="Work History"
              title="Professional Experience"
              subtitle="Production roles focused on AI architecture, data infrastructure, and system scalability."
            />

            <div className="flex flex-col gap-10">
              {workHistory.map((job) => (
                <article
                  key={job.company}
                  className="group flex flex-col gap-4 border-b border-[#161616]/10 pb-8 last:border-0"
                >
                  {/* Job Header */}
                  <div className="flex items-start gap-3.5">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border border-[#161616]/10 bg-white p-1">
                      <Image
                        src={job.logoSrc}
                        alt={job.company}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-[16px] font-medium text-[#161616]">
                          {job.role}
                        </h3>
                        <span className="font-mono text-[10.5px] text-[#161616]/40 mt-0.5 sm:mt-0">
                          {job.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[12.5px] text-[#161616]/60">
                        <span className="font-medium text-[#161616]/80">{job.company}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary & Achievements */}
                  <div className="pl-0 sm:pl-13.5 flex flex-col gap-2.5">
                    <p className="text-[13.5px] leading-[1.6] text-[#161616]/80">
                      {job.description}
                    </p>

                    <ul className="flex flex-col gap-1.5 pl-4 pt-1">
                      {job.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="relative text-[13px] leading-[1.55] text-[#161616]/70"
                        >
                          <span className="absolute -left-4 top-[8px] h-1 w-1 rounded-full bg-[#161616]/30" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Previous Role under same organization */}
                    {job.previousRole && (
                      <div className="mt-2 border-l-2 border-[#161616]/10 pl-3.5 flex flex-col gap-1">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                          <h4 className="text-[13.5px] font-medium text-[#161616]">
                            {job.previousRole.role}
                          </h4>
                          <span className="font-mono text-[10.5px] text-[#161616]/40">
                            {job.previousRole.period}
                          </span>
                        </div>
                        <p className="text-[12.5px] leading-[1.55] text-[#161616]/65">
                          {job.previousRole.description}
                        </p>
                      </div>
                    )}

                    {/* Tech Badges with Brand-Colored Icons */}
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {job.technologies.map((t) => {
                        const Icon = t.icon;
                        return (
                          <span
                            key={t.name}
                            className="inline-flex items-center gap-1.5 rounded-md bg-white border border-[#161616]/10 px-2 py-0.8 text-[11px] font-medium text-[#161616] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:border-[#161616]/30"
                          >
                            <Icon
                              className="h-3.5 w-3.5 shrink-0"
                              style={{ color: t.brandColor }}
                              aria-hidden="true"
                            />
                            <span>{t.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 02: Education */}
          <section className="py-7 sm:py-9 border-b border-[#161616]/10">
            <SectionHeader
              index="02"
              kicker="Formal Education"
              title="Education &amp; Specializations"
              subtitle="Formal academic degrees in computer engineering and artificial intelligence."
            />

            <div className="flex flex-col gap-6">
              {educationHistory.map((edu) => (
                <div
                  key={edu.degree}
                  className="group flex items-start gap-3.5 border-b border-[#161616]/10 pb-5 last:border-0"
                >
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-[#161616]/10 bg-white p-1">
                    <Image
                      src={edu.logoSrc}
                      alt={edu.institution}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-[15px] font-medium text-[#161616]">
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-[10.5px] text-[#161616]/40 mt-0.5 sm:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-[12.5px] text-[#161616]/60 font-medium">{edu.institution}</p>
                    <p className="mt-1 text-[13px] leading-[1.55] text-[#161616]/70">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 03: Certifications & Credentials */}
          <section className="py-7 sm:py-9 border-b border-[#161616]/10">
            <SectionHeader
              index="03"
              kicker="Validated Credentials"
              title="Certifications &amp; Key Achievements"
              subtitle="Verified academic credentials and formal engineering specializations."
            />

            <div className="flex flex-col gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="group flex items-start gap-3.5 sm:gap-4 border-b border-[#161616]/10 pb-4 last:border-0"
                >
                  <div className="relative mt-0.5 h-9 w-9 shrink-0 overflow-hidden rounded-md border border-[#161616]/10 bg-white p-1">
                    <Image
                      src={cert.logoSrc}
                      alt={cert.issuer}
                      fill
                      className="object-contain p-0.5"
                    />
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

          {/* Section 04: Skills Matrix (Toolkit) */}
          <Toolkit />
        </div>

        <Footer />
      </div>
    </main>
  );
}