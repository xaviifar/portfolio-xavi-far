"use client";

import React from "react";
import type { IconType } from "react-icons";

import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiLangchain,
  SiQdrant,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiApachespark,
  SiDatabricks,
  SiApachekafka,
  SiApacheairflow,
  SiPandas,
  SiPolars,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiSupabase,
  SiFirebase,
  SiHuggingface,
  SiOllama,
  SiCelery,
  SiGithubactions,
  SiDuckdb,
  SiSqlalchemy,
  SiTerraform,
} from "react-icons/si";

import SectionHeader from "./SectionHeader";

interface Skill {
  name: string;
  brandColor: string;
  icon: IconType;
}

const capabilities = [
  "AI Agents",
  "RAG",
  "LLM Engineering",
  "Fine-tuning",
  "Agent Orchestration",
  "Tool Calling",
  "Semantic Search",
  "Reranking",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "Data Engineering",
  "Distributed Systems",
];

const skills: Skill[] = [
  // AI & MACHINE LEARNING
  { name: "Python", brandColor: "#3776AB", icon: SiPython },
  { name: "PyTorch", brandColor: "#EE4C2C", icon: SiPytorch },
  { name: "TensorFlow", brandColor: "#FF6F00", icon: SiTensorflow },
  { name: "Keras", brandColor: "#D00000", icon: SiKeras },
  { name: "scikit-learn", brandColor: "#F7931E", icon: SiScikitlearn },
  { name: "LangChain", brandColor: "#1C1C1C", icon: SiLangchain },
  { name: "LangGraph", brandColor: "#1C1C1C", icon: SiLangchain },
  { name: "Hugging Face", brandColor: "#FFD21E", icon: SiHuggingface },
  { name: "Ollama / vLLM", brandColor: "#000000", icon: SiOllama },
  { name: "Qdrant", brandColor: "#DC244C", icon: SiQdrant },
  { name: "pgvector", brandColor: "#4169E1", icon: SiPostgresql },

  // DATA
  { name: "Pandas", brandColor: "#150458", icon: SiPandas },
  { name: "Polars", brandColor: "#CD792C", icon: SiPolars },
  { name: "Apache Spark", brandColor: "#E25A1C", icon: SiApachespark },
  { name: "PySpark", brandColor: "#E25A1C", icon: SiApachespark },
  { name: "Databricks", brandColor: "#FF3621", icon: SiDatabricks },
  { name: "Apache Kafka", brandColor: "#231F20", icon: SiApachekafka },
  { name: "Apache Airflow", brandColor: "#017CEE", icon: SiApacheairflow },
  { name: "DuckDB", brandColor: "#FFF000", icon: SiDuckdb },

  // BACKEND & DATABASES
  { name: "FastAPI", brandColor: "#009688", icon: SiFastapi },
  { name: "Django", brandColor: "#092E20", icon: SiDjango },
  { name: "Redis", brandColor: "#DC382D", icon: SiRedis },
  { name: "PostgreSQL", brandColor: "#4169E1", icon: SiPostgresql },
  { name: "MySQL", brandColor: "#4479A1", icon: SiMysql },
  { name: "Celery", brandColor: "#378147", icon: SiCelery },
  { name: "SQLAlchemy", brandColor: "#D71F00", icon: SiSqlalchemy },
  { name: "Supabase", brandColor: "#3ECF8E", icon: SiSupabase },
  { name: "Firebase", brandColor: "#FFCA28", icon: SiFirebase },

  // INFRASTRUCTURE
  { name: "Docker", brandColor: "#2496ED", icon: SiDocker },
  { name: "Kubernetes", brandColor: "#326CE5", icon: SiKubernetes },
  { name: "Terraform", brandColor: "#844FBA", icon: SiTerraform },
  { name: "GitHub Actions", brandColor: "#2088FF", icon: SiGithubactions },
  { name: "Linux / Bash", brandColor: "#FCC624", icon: SiLinux },

  // FRONTEND
  { name: "TypeScript", brandColor: "#3178C6", icon: SiTypescript },
  { name: "React.js", brandColor: "#61DAFB", icon: SiReact },
  { name: "Next.js", brandColor: "#000000", icon: SiNextdotjs },
  { name: "Tailwind CSS", brandColor: "#06B6D4", icon: SiTailwindcss },
  { name: "Vite", brandColor: "#646CFF", icon: SiVite },
];

export default function Toolkit() {
  return (
    <section
      id="skills"
      aria-labelledby="stack"
      className="relative border-b border-[#161616]/10 py-7 sm:py-9"
    >
      {/* Corner markers */}
      <span className="pointer-events-none absolute -left-[5px] -top-[5px] hidden select-none font-mono text-[10px] text-[#161616]/30 sm:inline-block">
        +
      </span>

      <span className="pointer-events-none absolute -right-[5px] -top-[5px] hidden select-none font-mono text-[10px] text-[#161616]/30 sm:inline-block">
        +
      </span>

      <span className="pointer-events-none absolute -bottom-[5px] -left-[5px] hidden select-none font-mono text-[10px] text-[#161616]/30 sm:inline-block">
        +
      </span>

      <span className="pointer-events-none absolute -bottom-[5px] -right-[5px] hidden select-none font-mono text-[10px] text-[#161616]/30 sm:inline-block">
        +
      </span>

      {/* Header */}
      <SectionHeader
        index="01"
        kicker="AI Engineering Toolkit"
        title="What I build with."
        subtitle="AI systems, data infrastructure and software technologies used to build production-ready products."
      />

      {/* Capabilities */}
      <div className="pt-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#161616]/40">
            Capabilities
          </span>

          <span className="h-px flex-1 bg-[#161616]/10" />
        </div>

        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
          {capabilities.map((capability, index) => (
            <React.Fragment key={capability}>
              <span className="text-[12px] font-medium tracking-tight text-[#161616]/75 transition-colors hover:text-[#161616]">
                {capability}
              </span>

              {index < capabilities.length - 1 && (
                <span
                  className="text-[11px] text-[#161616]/20"
                  aria-hidden="true"
                >
                  /
                </span>
              )}
            </React.Fragment>
          ))}
          <span
    className="text-[12px] font-medium tracking-tight text-[#161616]/35"
    aria-label="And more"
  >
    ...
  </span>
        </div>
      </div>

      {/* Technologies */}
      <div className="pt-7">
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#161616]/40">
            Technologies
          </span>

          <span className="h-px flex-1 bg-[#161616]/10" />

          <span className="font-mono text-[10px] text-[#161616]/25">
            {skills.length}
          </span>
        </div>

        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <li key={skill.name}>
                <span className="group inline-flex select-none items-center gap-1.5 whitespace-nowrap rounded-md border border-[#161616]/10 bg-white/80 px-2.5 py-1 text-[11.5px] font-medium text-[#161616] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-px hover:border-[#161616]/30 hover:bg-white">
                  <Icon
                    className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: skill.brandColor }}
                    aria-hidden="true"
                  />

                  <span className="tracking-tight text-[#161616]/85 group-hover:text-[#161616]">
                    {skill.name}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}