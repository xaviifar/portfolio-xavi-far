"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  shortDescription: string;
  details: string[];
  logo?: React.ReactNode;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "AI Engineer",
    company: "Tech Innovators",
    date: "2023 — Present",
    shortDescription:
      "Architected and deployed scalable RAG pipelines and autonomous agents for enterprise clients.",
    details: [
      "Led the development of a multi-agent system using LangChain and FastAPI, reducing manual data extraction by 85%.",
      "Implemented semantic search using Pinecone Vector DB, achieving 98% accuracy across 50,000+ internal documents.",
      "Mentored a team of 3 junior developers in best practices for LLM integration and prompt engineering.",
    ],
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#161616]">
        <rect width="14" height="14" x="5" y="5" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M9 9h6v6H9z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "DataFlow Systems",
    date: "2021 — 2023",
    shortDescription:
      "Migrated legacy monolithic APIs to event-driven microservices on AWS.",
    details: [
      "Redesigned the core routing logic using Python and PostgreSQL, improving system uptime to 99.99%.",
      "Set up CI/CD pipelines with GitHub Actions and Docker, reducing deployment time from 2 hours to 15 minutes.",
      "Collaborated with data scientists to deploy early-stage machine learning models into production.",
    ],
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#161616]">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 3,
    role: "Data Science Intern",
    company: "Analytics Group",
    date: "2020 — 2021",
    shortDescription:
      "Built predictive models using Python, automating data cleaning pipelines.",
    details: [
      "Created Python scripts using pandas and scikit-learn that saved the data team ~15 hours of manual work per week.",
      "Designed interactive dashboards in Tableau to visualize customer churn for the marketing department.",
    ],
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#161616]">
        <path
          d="M4 20h16M7 20V8m5 12V4m5 16v-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group flex items-start gap-4 sm:gap-5 border-b border-[#161616]/10 pb-6 last:border-0 last:pb-0">
      {/* Company Icon / Logo Container */}
      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#161616]/5 ring-1 ring-inset ring-[#161616]/10 transition-transform duration-300 group-hover:scale-105">
        <span className="opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
          {exp.logo}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Role, Company, and Mono Date */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-[15px] font-medium tracking-tight text-[#161616]">
            {exp.role}
          </h3>
          <span className="font-mono text-[11px] text-[#161616]/40 mt-0.5 sm:mt-0">
            {exp.date}
          </span>
        </div>

        <h4 className="text-[13px] font-medium tracking-tight text-[#161616]/60 mt-0.5">
          {exp.company}
        </h4>

        {/* Short Summary */}
        <p className="mt-2 text-[13.5px] leading-[1.6] tracking-[-0.01em] text-[#161616]/70">
          {exp.shortDescription}
        </p>

        {/* Accordion / Details */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isExpanded ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="flex flex-col gap-2 pl-4 pt-1">
              {exp.details.map((detail: string, i: number) => (
                <li
                  key={i}
                  className="relative text-[13px] leading-[1.6] tracking-[-0.01em] text-[#161616]/70"
                >
                  <span className="absolute -left-4 top-[9px] h-1 w-1 rounded-full bg-[#161616]/30" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Progressive Disclosure Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 flex w-fit items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.05em] text-[#161616]/40 transition-colors hover:text-[#161616]"
        >
          <span className="w-2.5 font-mono text-[13px] leading-none">
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
    <section id="experience" className="pt-10 pb-12">
      <SectionHeader title="Experience" />

      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>

      <div className="mt-10 sm:mt-12">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-md border border-[#161616] bg-[#161616] px-4 py-2.5 text-[13px] font-medium text-[#f3f3f1] transition-all hover:bg-transparent hover:text-[#161616]"
        >
          <span>Download full resume</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}