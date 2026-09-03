"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  shortDescription: string;
  details: string[];
  logoSrc: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Full-stack & AI Developer",
    company: "ESDI Systems",
    date: "Jan 2026 — Present",
    shortDescription:
      "Architecting scalable backend infrastructure, agentic systems, and cloud data workflows.",
    details: [
      "Engineered automated data processing microservices with Python and FastAPI, reducing manual review latency by 80%.",
      "Integrated vector embeddings and custom retrieval pipelines to support real-time contextual queries.",
      "Collaborated on modern web interfaces using Next.js and Tailwind CSS under strict design specifications.",
    ],
    logoSrc: "/img/esdi.webp",
  },
  {
    id: 2,
    role: "Systems Technician",
    company: "Fundació Pere Tarrés",
    date: "Dec 2023 — Jul 2024",
    shortDescription:
      "Administered system infrastructure, network stability, and routine automation scripts.",
    details: [
      "Maintained core server uptime, system backups, and database synchronization across multi-branch nodes.",
      "Automated recurrent diagnostic procedures using bash and Python scripts to streamline technical triage.",
    ],
    logoSrc: "/img/pt.webp",
  },
];

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group flex items-start gap-3.5 sm:gap-4.5 border-b border-[#161616]/10 pb-5 last:border-0 last:pb-0">
      {/* Real Company Logo Container */}
      <div className="relative mt-0.5 h-9 w-9 shrink-0 overflow-hidden rounded-md border border-[#161616]/10 bg-white/60 p-1">
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
          <h3 className="text-[14.5px] font-medium tracking-tight text-[#161616]">
            {exp.role}
          </h3>
          <span className="font-mono text-[10.5px] text-[#161616]/40 mt-0.5 sm:mt-0">
            {exp.date}
          </span>
        </div>

        <h4 className="text-[12.5px] font-medium tracking-tight text-[#161616]/60 mt-0.5">
          {exp.company}
        </h4>

        {/* Short Summary */}
        <p className="mt-1.5 text-[13px] leading-[1.55] tracking-[-0.01em] text-[#161616]/70">
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
                  className="relative text-[12.5px] leading-[1.55] tracking-[-0.01em] text-[#161616]/70"
                >
                  <span className="absolute -left-4 top-[8px] h-1 w-1 rounded-full bg-[#161616]/30" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Progressive Disclosure Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2.5 flex w-fit items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.05em] text-[#161616]/40 transition-colors hover:text-[#161616]"
        >
          <span className="w-2 font-mono text-[12px] leading-none">
            {isExpanded ? "−" : "+"}
          </span>
          {isExpanded ? "Hide details" : "View details"}
        </button>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="pt-6 pb-8">
      <SectionHeader title="Work Experience" kicker="Professional Track Record" />

      <div className="flex flex-col gap-5">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>

      <div className="mt-6 sm:mt-8 flex items-center gap-4">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-md border border-[#161616] bg-[#161616] px-4 py-2 text-[12.5px] font-medium text-[#f3f3f1] transition-all duration-200 hover:bg-transparent hover:text-[#161616]"
        >
          <span>Access Full Resume</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>

        <Link
          href="/experience"
          className="text-[12.5px] font-medium text-[#161616]/60 underline underline-offset-4 hover:text-[#161616] transition-colors"
        >
          View detailed log &amp; education
        </Link>
      </div>
    </section>
  );
}