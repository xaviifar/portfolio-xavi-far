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
  SiApachespark,
  SiApachekafka,
  SiDatabricks,
  SiPytorch,
  SiQdrant,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

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
      "Building AI-powered systems, backend services and data workflows for production environments.",
    achievements: [
      "Designed Python and FastAPI services around asynchronous processing and distributed workflows.",
      "Built RAG pipelines combining vector search and hybrid retrieval with Qdrant and BM25.",
      "Developed agentic LLM workflows for automated document and business processes.",
      "Delivered production interfaces with Next.js and Tailwind CSS.",
    ],
    previousRole: {
      role: "Python Developer",
      period: "Jan 2026 — Jun 2026",
      description:
        "Built ETL pipelines, database workflows and REST APIs with Python.",
    },
    technologies: [
      { name: "Python", brandColor: "#3776AB", icon: SiPython },
      { name: "FastAPI", brandColor: "#009688", icon: SiFastapi },
      { name: "PostgreSQL", brandColor: "#4169E1", icon: SiPostgresql },
      { name: "LangChain", brandColor: "#1C1C1C", icon: SiLangchain },
      { name: "Qdrant", brandColor: "#DC382D", icon: SiQdrant },
      { name: "Redis", brandColor: "#DC382D", icon: SiRedis },
      { name: "Docker", brandColor: "#2496ED", icon: SiDocker },
      { name: "Next.js", brandColor: "#000000", icon: SiNextdotjs },
      { name: "Tailwind", brandColor: "#06B6D4", icon: SiTailwindcss },
    ],
  },
  {
    company: "Fundació Pere Tarrés",
    role: "Systems Technician",
    period: "Dec 2023 — Jul 2024",
    location: "Barcelona, Spain",
    logoSrc: "/img/pt.webp",
    description:
      "Worked across infrastructure, automation and systems reliability.",
    achievements: [
      "Automated system health checks, backups and operational reporting with Python and Bash.",
      "Administered databases, access control and network infrastructure.",
      "Diagnosed production incidents and maintained reliable server environments.",
    ],
    technologies: [
      { name: "Python", brandColor: "#3776AB", icon: SiPython },
      { name: "Linux", brandColor: "#FCC624", icon: SiLinux },
      { name: "MySQL", brandColor: "#4479A1", icon: SiMysql },
      { name: "Docker", brandColor: "#2496ED", icon: SiDocker },
    ],
  },
];

const educationHistory = [
  {
    institution: "Centre Estudis Monlau",
    degree: "MSc in Artificial Intelligence & Big Data",
    period: "2025 — 2026",
    logoSrc: "/img/monlau.jpg",
    details:
      "Artificial intelligence, deep learning, vector search and distributed data processing.",
    skills: [
      { name: "PyTorch", brandColor: "#EE4C2C", icon: SiPytorch },
      { name: "Spark", brandColor: "#E25A1C", icon: SiApachespark },
      { name: "Kafka", brandColor: "#231F20", icon: SiApachekafka },
      { name: "Databricks", brandColor: "#FF3621", icon: SiDatabricks },
    ],
  },
  {
    institution: "Centre Estudis Monlau",
    degree: "Cross-platform Application Development (DAM)",
    period: "2025 — 2026",
    logoSrc: "/img/monlau.jpg",
    details:
      "Software engineering, databases, application architecture and cross-platform development.",
    skills: [
      { name: "PostgreSQL", brandColor: "#4169E1", icon: SiPostgresql },
      { name: "Docker", brandColor: "#2496ED", icon: SiDocker },
      { name: "Python", brandColor: "#3776AB", icon: SiPython },
    ],
  },
  {
    institution: "Universitat de Lleida",
    degree: "BSc in Computer Engineering",
    period: "Academic Background",
    logoSrc: "/img/udl.jpg",
    details:
      "Computer science foundations including algorithms, operating systems and data structures.",
    skills: [
      { name: "Algorithms", brandColor: "#161616", icon: SiPython },
      { name: "Linux", brandColor: "#FCC624", icon: SiLinux },
      { name: "SQL", brandColor: "#4169E1", icon: SiPostgresql },
    ],
  },
];

const certifications = [
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    code: "AI-900 / AI-901",
    description:
      "Fundamentals of Azure AI services, machine learning, computer vision and natural language processing.",
    icon: VscAzure,
    color: "#0078D4",
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    code: "AZ-900",
    description:
      "Foundations of Azure cloud services, architecture, security and core platform concepts.",
    icon: VscAzure,
    color: "#0078D4",
  },
];

function TechList({ technologies }: { technologies: TechBadge[] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {technologies.map((tech) => {
        const Icon = tech.icon;

        return (
          <span
            key={tech.name}
            className="inline-flex items-center gap-1.5 text-[10.5px] text-[#161616]/45"
          >
            <Icon
              className="h-3 w-3"
              style={{ color: tech.brandColor }}
              aria-hidden="true"
            />
            {tech.name}
          </span>
        );
      })}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-[#161616] bg-grid-structural">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[840px] flex-col border-[#161616]/10 bg-[#f3f3f1] px-5 sm:border-x sm:px-10 md:px-14">
        <Header />

        <div className="py-8 sm:py-10">
          {/* PAGE INTRO */}
          <header className="border-b border-[#161616]/10 pb-12">
            <Link
              href="/"
              className="group mb-9 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#161616]/35 transition-colors hover:text-[#161616]"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
                ←
              </span>
              Back
            </Link>

            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#161616]/35">
              Career
            </p>

            <h1 className="max-w-[680px] text-[clamp(2.1rem,5vw,3.25rem)] font-semibold leading-[1] tracking-[-0.045em]">
              Experience, education
              <br />
              and credentials.
            </h1>

            <p className="mt-5 max-w-[560px] text-[14px] leading-[1.7] text-[#161616]/55">
              A concise overview of the work and technical background behind
              the systems I build.
            </p>
          </header>

          {/* EXPERIENCE */}
          <section className="py-12 sm:py-16">
            <SectionHeader
              index="01"
              kicker="Work"
              title="Experience"
              subtitle="Professional work across AI, backend systems and infrastructure."
            />

            <div className="mt-10">
              {workHistory.map((job, index) => (
                <article
                  key={job.company}
                  className={index !== workHistory.length - 1 ? "border-b border-[#161616]/10" : ""}
                >
                  <div className="py-9">
                    <div className="flex gap-4">
                      {/* Logo */}
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border border-[#161616]/10 bg-white">
                        <Image
                          src={job.logoSrc}
                          alt={job.company}
                          fill
                          className="object-contain p-1"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        {/* Heading */}
                        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-[16px] font-semibold tracking-tight">
                              {job.role}
                            </h3>

                            <p className="mt-0.5 text-[12px] text-[#161616]/45">
                              {job.company} · {job.location}
                            </p>
                          </div>

                          <span className="font-mono text-[10px] text-[#161616]/35">
                            {job.period}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="mt-6 max-w-[620px] text-[13px] leading-[1.7] text-[#161616]/65">
                          {job.description}
                        </p>

                        {/* Achievements */}
                        <ul className="mt-5 space-y-2">
                          {job.achievements.map((achievement) => (
                            <li
                              key={achievement}
                              className="flex gap-3 text-[12.5px] leading-[1.65] text-[#161616]/60"
                            >
                              <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-[#161616]/25" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Previous role */}
                        {job.previousRole && (
                          <div className="mt-7 border-l border-[#161616]/15 pl-4">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                              <span className="text-[12px] font-medium">
                                {job.previousRole.role}
                              </span>

                              <span className="font-mono text-[9.5px] text-[#161616]/35">
                                {job.previousRole.period}
                              </span>
                            </div>

                            <p className="mt-1.5 text-[11.5px] leading-[1.6] text-[#161616]/50">
                              {job.previousRole.description}
                            </p>
                          </div>
                        )}

                        {/* Tech */}
                        <div className="mt-7">
                          <TechList technologies={job.technologies} />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="border-t border-[#161616]/10 py-12 sm:py-16">
            <SectionHeader
              index="02"
              kicker="Education"
              title="Academic background"
              subtitle="The formal education behind the technical work."
            />

            <div className="mt-10">
              {educationHistory.map((edu, index) => (
                <article
                  key={edu.degree}
                  className={index !== educationHistory.length - 1 ? "border-b border-[#161616]/10" : ""}
                >
                  <div className="py-7">
                    <div className="flex gap-4">
                      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-[#161616]/10 bg-white">
                        <Image
                          src={edu.logoSrc}
                          alt={edu.institution}
                          fill
                          className="object-contain p-1"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                          <h3 className="text-[14px] font-semibold">
                            {edu.degree}
                          </h3>

                          <span className="font-mono text-[9.5px] text-[#161616]/35">
                            {edu.period}
                          </span>
                        </div>

                        <p className="mt-0.5 text-[11.5px] text-[#161616]/45">
                          {edu.institution}
                        </p>

                        <p className="mt-3 max-w-[600px] text-[12px] leading-[1.65] text-[#161616]/55">
                          {edu.details}
                        </p>

                        <div className="mt-4">
                          <TechList technologies={edu.skills} />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section className="border-t border-[#161616]/10 py-12 sm:py-16">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[#161616]/35">
                  03
                </span>

                <span className="h-px w-8 bg-[#161616]/15" />

                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#161616]/40">
                  Certifications
                </span>
              </div>

              <h2 className="mt-2 text-[clamp(1.5rem,4vw,2rem)] font-semibold tracking-[-0.03em]">
                Microsoft certifications
              </h2>

              <p className="max-w-[520px] text-[13px] leading-[1.6] text-[#161616]/50">
                Industry-recognized credentials in Azure AI and cloud
                fundamentals.
              </p>
            </div>

            <div className="mt-9">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;

                return (
                  <article
                    key={cert.code}
                    className={`group relative py-7 ${
                      index !== certifications.length - 1
                        ? "border-b border-[#161616]/10"
                        : ""
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-[#161616]/10 bg-white">
                        <Icon
                          className="h-6 w-6"
                          style={{ color: cert.color }}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#161616]/35">
                              {cert.issuer}
                            </span>

                            <h3 className="mt-1 text-[16px] font-semibold tracking-tight">
                              {cert.title}
                            </h3>
                          </div>

                          <span className="w-fit rounded-full border border-[#161616]/10 bg-white px-2.5 py-1 font-mono text-[9px] text-[#161616]/50">
                            {cert.code}
                          </span>
                        </div>

                        <p className="mt-3 max-w-[590px] text-[12px] leading-[1.65] text-[#161616]/50">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* TOOLKIT */}
          <section className="border-t border-[#161616]/10 pt-12 sm:pt-16">
            <SectionHeader
              index="04"
              kicker="Toolkit"
              title="Technologies"
              subtitle="A selection of the tools and technologies I work with."
            />

            <div className="mt-8">
              <Toolkit />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}