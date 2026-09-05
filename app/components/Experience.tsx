"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiLangchain,
  SiQdrant,
  SiDocker,
  SiLinux,
  SiMysql,
} from "react-icons/si";

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  date: string;
  shortDescription: string;
  details: string[];
  logoSrc: string;
  tech: { name: string; icon: IconType; brandColor: string }[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Full-stack & AI Developer",
    company: "ESDI Systems",
    location: "Barcelona, Spain",
    date: "Jan 2026 — Present",
    shortDescription:
      "Architecting scalable backend infrastructure, agentic systems, and cloud data workflows.",
    details: [
      "Engineered automated data processing microservices with Python and FastAPI, reducing manual review latency by 80%.",
      "Integrated vector embeddings and custom retrieval pipelines (Qdrant) to support real-time contextual queries.",
      "Engineered multi-agent LLM execution loops with state persistence and deterministic tool routing.",
    ],
    logoSrc: "/img/esdi.webp",
    tech: [
      { name: "Python", icon: SiPython, brandColor: "#3776AB" },
      { name: "FastAPI", icon: SiFastapi, brandColor: "#009688" },
      { name: "PostgreSQL", icon: SiPostgresql, brandColor: "#4169E1" },
      { name: "LangChain", icon: SiLangchain, brandColor: "#1C1C1C" },
      { name: "Qdrant", icon: SiQdrant, brandColor: "#DC244C" },
      { name: "Docker", icon: SiDocker, brandColor: "#2496ED" },
    ],
  },
  {
    id: 2,
    role: "Systems Technician",
    company: "Fundació Pere Tarrés",
    location: "Barcelona, Spain",
    date: "Dec 2023 — Jul 2024",
    shortDescription:
      "Administered system infrastructure, network stability, and routine automation scripts.",
    details: [
      "Maintained core server uptime, system backups, and database synchronization across multi-branch nodes.",
      "Automated recurrent diagnostic procedures using bash and Python scripts to streamline technical triage.",
    ],
    logoSrc: "/img/pt.webp",
    tech: [
      { name: "Python", icon: SiPython, brandColor: "#3776AB" },
      { name: "Linux", icon: SiLinux, brandColor: "#FCC624" },
      { name: "MySQL", icon: SiMysql, brandColor: "#4479A1" },
      { name: "Docker", icon: SiDocker, brandColor: "#2496ED" },
    ],
  },
];

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group flex items-start gap-3.5 sm:gap-4 border-b border-[#161616]/10 pb-6 last:border-0 last:pb-0">
      {/* Real Company Logo Container */}
      <div className="relative mt-0.5 h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-md border border-[#161616]/10 bg-white p-1 shadow-2xs">
        <Image
          src={exp.logoSrc}
          alt={exp.company}
          fill
          className="object-contain p-0.5"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Role, Company, and Mono Date */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-[15px] sm:text-[16px] font-medium tracking-tight text-[#161616]">
            <Link
              href="/experience"
              className="transition-colors hover:text-[#4f46e5]"
            >
              {exp.role}
            </Link>
          </h3>
          <span className="font-mono text-[11px] text-[#161616]/45 mt-0.5 sm:mt-0">
            {exp.date}
          </span>
        </div>

        <h4 className="text-[12.5px] font-medium tracking-tight text-[#161616]/60 mt-0.5">
          {exp.company} · {exp.location}
        </h4>

        {/* Short Summary */}
        <p className="mt-2 text-[13px] sm:text-[13.5px] leading-[1.6] tracking-[-0.01em] text-[#161616]/75">
          {exp.shortDescription}
        </p>

        {/* Progressive Disclosure Accordion */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isExpanded ? "grid-rows-[1fr] opacity-100 mt-2.5" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="flex flex-col gap-1.5 pl-4 pt-1">
              {exp.details.map((detail: string, i: number) => (
                <li
                  key={i}
                  className="relative text-[12.5px] sm:text-[13px] leading-[1.55] tracking-[-0.01em] text-[#161616]/70"
                >
                  <span className="absolute -left-4 top-[8px] h-1 w-1 rounded-full bg-[#161616]/35" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Progressive Disclosure Toggle Button & Stack Badges */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2.5">
          <ul className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => {
              const Icon = t.icon;
              return (
                <li key={t.name} className="flex">
                  <span className="inline-flex items-center gap-1 rounded-md border border-[#161616]/10 bg-white/80 px-2 py-0.8 text-[11px] font-medium text-[#161616]">
                    <Icon
                      className="h-3 w-3 shrink-0"
                      style={{ color: t.brandColor }}
                      aria-hidden="true"
                    />
                    <span>{t.name}</span>
                  </span>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-[11px] font-medium text-[#161616]/50 transition-colors hover:text-[#161616] cursor-pointer"
          >
            <span className="font-mono text-[11px]">
              {isExpanded ? "−" : "+"}
            </span>
            <span>{isExpanded ? "Hide details" : "View achievements"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-8 sm:py-10 border-b border-[#161616]/10">
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
        index="02"
        kicker="Background & Track Record"
        title="Professional Experience"
        subtitle="Software engineering, AI system deployment, and infrastructure operations."
      />

      <div className="flex flex-col gap-6 mt-1">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>

      {/* See Full Experience & Credentials CTA (Navigates to /experience) */}
      <div className="relative flex w-full items-center justify-center pt-7 sm:pt-8">
        <Link
          href="/experience"
          className="inline-flex h-8.5 items-center justify-center gap-1.5 rounded-md bg-[#161616] px-4 text-[12.5px] font-medium text-[#f3f3f1] shadow-2xs transition-all hover:bg-[#161616]/90 active:scale-95"
        >
          <span>Explore full experience &amp; credentials</span>
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