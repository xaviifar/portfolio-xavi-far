"use client";
import { useState } from "react";
import Image from "next/image";

// Array de experiencia optimizado para "Divulgación Progresiva"
const experiences = [
  {
    id: 1,
    role: "AI Engineer",
    company: "Tech Innovators",
    date: "2023 — Present",
    // Lo que se ve por defecto
    shortDescription: "Architected and deployed scalable RAG pipelines and autonomous agents for enterprise clients.",
    // Lo que se despliega al darle a "Show more"
    details: [
      "Led the development of a multi-agent system using LangChain and FastAPI, reducing manual data extraction by 85%.",
      "Implemented semantic search using Pinecone Vector DB, achieving 98% accuracy across 50,000+ internal documents.",
      "Mentored a team of 3 junior developers in best practices for LLM integration and prompt engineering."
    ],
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#161616]">
        <rect width="14" height="14" x="5" y="5" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 9h6v6H9z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "DataFlow Systems",
    date: "2021 — 2023",
    shortDescription: "Migrated legacy monolithic APIs to event-driven microservices on AWS.",
    details: [
      "Redesigned the core routing logic using Python and PostgreSQL, improving system uptime to 99.99%.",
      "Set up CI/CD pipelines with GitHub Actions and Docker, reducing deployment time from 2 hours to 15 minutes.",
      "Collaborated with data scientists to deploy early-stage machine learning models into production."
    ],
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#161616]">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 3,
    role: "Data Science Intern",
    company: "Analytics Group",
    date: "2020 — 2021",
    shortDescription: "Built predictive models using Python, automating data cleaning pipelines.",
    details: [
      "Created Python scripts using pandas and scikit-learn that saved the data team ~15 hours of manual work per week.",
      "Designed interactive dashboards in Tableau to visualize customer churn for the marketing department."
    ],
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#161616]">
        <path d="M4 20h16M7 20V8m5 12V4m5 16v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  }
];

// Subcomponente interactivo para cada tarjeta de experiencia
function ExperienceCard({ exp }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group flex items-start gap-4 sm:gap-5 border-b border-[#161616]/5 pb-6 last:border-0 last:pb-0">
      
      {/* Logo de la empresa */}
      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#161616]/10 bg-white/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-transform duration-300 group-hover:scale-105">
        <span className="opacity-70 transition-opacity group-hover:opacity-100">
          {exp.logo}
        </span>
      </div>
      
      {/* Contenido principal */}
      <div className="flex flex-1 flex-col">
        {/* Cabecera: Rol, Empresa y Fecha */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-[15px] font-medium tracking-tight text-[#161616]">
            {exp.role}
          </h3>
          <span className="font-mono text-[10px] text-[#161616]/40 mt-0.5 sm:mt-0">
            {exp.date}
          </span>
        </div>
        
        <h4 className="text-[13px] font-medium tracking-tight text-[#161616]/50 mt-0.5">
          {exp.company}
        </h4>

        {/* Resumen corto (Siempre visible) */}
        <p className="mt-2 text-[13.5px] leading-[1.6] tracking-[-0.01em] text-[#161616]/70">
          {exp.shortDescription}
        </p>

        {/* Detalles Expandibles (Acordeón Animado) */}
        <div 
          className={`grid transition-all duration-300 ease-in-out ${
            isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="flex flex-col gap-2 pl-4">
              {exp.details.map((detail, i) => (
                <li key={i} className="relative text-[13px] leading-[1.6] tracking-[-0.01em] text-[#161616]/70">
                  {/* Custom bullet sutil */}
                  <span className="absolute -left-4 top-[8px] h-1 w-1 rounded-full bg-[#161616]/30"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Botón interactivo (Read more / Read less) */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 flex w-fit items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.05em] text-[#161616]/40 transition-colors hover:text-[#161616]"
        >
          <span className="w-2.5 font-mono text-[14px] leading-none">
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
    <section id="experience" className="bg-[#f3f3f1] text-[#161616]">
      <div className="mx-auto w-full max-w-[760px] px-5 sm:px-8">
        
        {/* Cabecera de la sección */}
        <div className="mb-8 flex items-center gap-4 sm:mb-10">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#161616]/40">
            Experience
          </h2>
          <div className="h-[1px] flex-1 bg-[#161616]/10"></div>
        </div>

        {/* Lista de Experiencia */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>

        {/* Enlace estático global: Download CV */}
        <div className="mt-12 sm:mt-16">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit items-center gap-2 rounded-full border border-[#161616]/10 bg-white/50 px-5 py-2.5 text-[12px] font-medium tracking-tight text-[#161616] transition-all hover:bg-[#161616] hover:text-[#f3f3f1]"
          >
            <span>Download full resume</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}