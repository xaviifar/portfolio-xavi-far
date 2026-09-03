import type { IconType } from "react-icons";
import {
  SiPython,
  SiFlask,
  SiPostgresql,
  SiRedis,
  SiApachespark,
  SiDatabricks,
  SiDocker,
  SiKubernetes,
//   SiAmazonwebservices,
  SiTerraform,
  SiLinux,
//   SiOpenai,
  SiQdrant,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import SectionHeader from "./SectionHeader";

interface ToolItem {
  name: string;
  icon?: IconType | (() => React.ReactNode);
  color?: string;
}

interface ToolCategory {
  title: string;
  tagline: string;
  tools: ToolItem[];
}

const categories: ToolCategory[] = [
  {
    title: "AI & Agentic Systems",
    tagline: "LLM Orchestration & Vector Memory",
    tools: [
      {
        name: "LangChain",
        icon: () => (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1C1C1C" />
            <path d="M2 17L12 22L22 17" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    //   { name: "OpenAI / Anthropic APIs", icon: SiOpenai, color: "#10A37F" },
      { name: "Qdrant / pgvector", icon: SiQdrant, color: "#DC382D" },
      {
        name: "Pinecone / Weaviate",
        icon: () => (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M4 4H20V8H4V4Z" fill="#F56565" />
            <path d="M4 10H20V14H4V10Z" fill="#4299E1" />
            <path d="M4 16H20V20H4V16Z" fill="#48BB78" />
          </svg>
        ),
      },
      { name: "RAG & Knowledge Graphs" },
      { name: "Autonomous Agent Loops" },
    ],
  },
  {
    title: "Backend & Data Engines",
    tagline: "High-Throughput APIs & Distributed Pipelines",
    tools: [
      { name: "Python (FastAPI, Flask)", icon: SiPython, color: "#3776AB" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Redis In-Memory", icon: SiRedis, color: "#DC382D" },
      { name: "Apache Spark", icon: SiApachespark, color: "#E25A1C" },
      { name: "Databricks", icon: SiDatabricks, color: "#FF3621" },
      { name: "Event-Driven Architecture" },
    ],
  },
  {
    title: "Cloud, Infra & Systems",
    tagline: "Containerization, CI/CD & Production DevOps",
    tools: [
    //   { name: "AWS (EC2, S3, Lambda)", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform & IaC", icon: SiTerraform, color: "#844FBA" },
      { name: "Linux / Bash Automation", icon: SiLinux, color: "#FCC624" },
      { name: "GitHub Actions CI/CD" },
    ],
  },
];

const focusTags = [
  "RAG Pipelines",
  "Autonomous Agents",
  "LLM Fine-Tuning",
  "Semantic Search",
  "Distributed Systems",
  "Data Pipelines (ETL)",
  "API Benchmarking",
  "Production Observability",
];

export default function Toolkit() {
  return (
    <section id="skills" className="pt-6 pb-8">
      <SectionHeader
        title="Core Toolkit & Architecture"
        subtitle="Primary technologies, runtimes, and engineering focus areas I leverage for production systems."
      />

      {/* 3-Column Engineering Matrix Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4.5">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="flex flex-col justify-between rounded-lg border border-[#161616]/10 bg-white/50 p-4 sm:p-5 transition-all duration-200 hover:border-[#161616]/25 hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
          >
            <div>
              {/* Category Header */}
              <div className="flex flex-col pb-3 border-b border-[#161616]/10">
                <h3 className="text-[14.5px] font-medium tracking-tight text-[#161616]">
                  {cat.title}
                </h3>
                <span className="font-mono text-[10.5px] text-[#161616]/50 mt-0.5">
                  {cat.tagline}
                </span>
              </div>

              {/* Tools List */}
              <ul className="flex flex-col gap-2 pt-3">
                {cat.tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <li
                      key={tool.name}
                      className="flex items-center gap-2 text-[12.5px] font-medium text-[#161616]/80"
                    >
                      {Icon ? (
                        typeof Icon === "function" ? (
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                            {/* @ts-ignore */}
                            <Icon />
                          </span>
                        ) : (
                          // @ts-ignore
                          <Icon
                            className="h-3.5 w-3.5 shrink-0"
                            style={{ color: tool.color }}
                            aria-hidden="true"
                          />
                        )
                      ) : (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#161616]/30" />
                      )}
                      <span className="truncate">{tool.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Focus Area Badges Bar */}
      <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#161616]/10">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#161616]/40 mr-1.5">
          Specializations:
        </span>
        {focusTags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-[#161616]/5 border border-[#161616]/10 px-2 py-0.5 font-mono text-[10.5px] text-[#161616]/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}