"use client";

import type { IconType } from "react-icons";
import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiApachespark,
  SiDatabricks,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiLinux,
  SiQdrant,
  SiLangchain,
  SiPydantic,
  SiCelery,
  SiGithubactions,
  SiApachekafka,
  // SiOpenai,
  SiHuggingface,
  SiOllama,
  SiSqlalchemy,
  SiPandas,
  SiPolars,
  SiApacheairflow,
  SiDuckdb,
  // SiAmazonwebservices,
  SiNginx,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";

interface ToolItem {
  name: string;
  icon?: IconType | (() => React.ReactNode);
  iconColor?: string;
}

interface ToolCategory {
  title: string;
  index: string;
  description: string;
  tools: ToolItem[];
}

const toolkitCategories: ToolCategory[] = [
  {
    index: "01",
    title: "AI & Cognitive Systems",
    description: "Agent loops, vector retrieval, embeddings & deterministic guardrails",
    tools: [
      { name: "Python 3.12", icon: SiPython, iconColor: "#3776AB" },
      { name: "LangGraph", icon: SiLangchain, iconColor: "#1C1C1C" },
      { name: "LangChain", icon: SiLangchain, iconColor: "#1C1C1C" },
      { name: "Qdrant", icon: SiQdrant, iconColor: "#DC382D" },
      { name: "pgvector", icon: SiPostgresql, iconColor: "#4169E1" },
      { name: "Pydantic", icon: SiPydantic, iconColor: "#E92063" },
      // { name: "OpenAI API", icon: SiOpenai, iconColor: "#10A37F" },
      { name: "Hugging Face", icon: SiHuggingface, iconColor: "#FFD21E" },
      { name: "Ollama / vLLM", icon: SiOllama, iconColor: "#161616" },
      {
        name: "Hybrid RAG",
        icon: () => (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path d="M4 4H20V8H4V4Z" fill="#F56565" />
            <path d="M4 10H20V14H4V10Z" fill="#4299E1" />
            <path d="M4 16H20V20H4V16Z" fill="#48BB78" />
          </svg>
        ),
      },
    ],
  },
  {
    index: "02",
    title: "Backend & Data Engines",
    description: "Distributed pipelines, high-throughput microservices, caching & OLAP",
    tools: [
      { name: "FastAPI", icon: SiFastapi, iconColor: "#009688" },
      { name: "PostgreSQL", icon: SiPostgresql, iconColor: "#4169E1" },
      { name: "Redis", icon: SiRedis, iconColor: "#DC382D" },
      { name: "Apache Spark", icon: SiApachespark, iconColor: "#E25A1C" },
      { name: "Databricks", icon: SiDatabricks, iconColor: "#FF3621" },
      { name: "Apache Kafka", icon: SiApachekafka, iconColor: "#231F20" },
      { name: "Apache Airflow", icon: SiApacheairflow, iconColor: "#017CEE" },
      { name: "DuckDB", icon: SiDuckdb, iconColor: "#FFF000" },
      { name: "Celery", icon: SiCelery, iconColor: "#378147" },
      { name: "SQLAlchemy", icon: SiSqlalchemy, iconColor: "#D71F00" },
      { name: "Polars / Pandas", icon: SiPolars, iconColor: "#CD792C" },
    ],
  },
  {
    index: "03",
    title: "Cloud & Infrastructure",
    description: "Containers, orchestrators, declarative IaC, monitoring & automated CI/CD",
    tools: [
      { name: "Docker", icon: SiDocker, iconColor: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, iconColor: "#326CE5" },
      { name: "Terraform", icon: SiTerraform, iconColor: "#844FBA" },
      // { name: "AWS", icon: SiAmazonwebservices, iconColor: "#FF9900" },
      { name: "GitHub Actions", icon: SiGithubactions, iconColor: "#2088FF" },
      { name: "Linux / Bash", icon: SiLinux, iconColor: "#FCC624" },
      { name: "Nginx", icon: SiNginx, iconColor: "#009639" },
      { name: "Prometheus", icon: SiPrometheus, iconColor: "#E6522C" },
      { name: "Grafana", icon: SiGrafana, iconColor: "#F46800" },
    ],
  },
];

export default function Toolkit() {
  return (
    <section id="skills" className="relative py-7 sm:py-9 border-b border-[#161616]/10">
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
        index="01"
        kicker="Core Toolkit"
        title="Engineering Stack &amp; Technologies"
        subtitle="Primary runtimes, frameworks, vector databases, and data engines leveraged across production systems."
      />

      {/* 3-Column Categorized Grid with Micro-Tags */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-4">
        {toolkitCategories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col border border-[#161616]/10 bg-white/40 p-3.5 sm:p-4 rounded-md transition-colors hover:border-[#161616]/20"
          >
            {/* Category Header */}
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-[13.5px] font-medium tracking-tight text-[#161616]">
                {category.title}
              </h3>
              <span className="font-mono text-[9px] text-[#161616]/35 font-medium">
                {category.index}
              </span>
            </div>

            <p className="text-[11px] leading-[1.4] text-[#161616]/55 mb-3">
              {category.description}
            </p>

            {/* Micro-Tags Flex Wrap Layout */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {category.tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className="group inline-flex items-center gap-1.5 rounded-md border border-[#161616]/10 bg-white/80 px-2 py-1 text-[11px] font-medium text-[#161616] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all hover:border-[#161616]/30 hover:bg-white"
                  >
                    {Icon ? (
                      typeof Icon === "function" && !(Icon.prototype && Icon.prototype.isReactComponent) ? (
                        /* @ts-ignore */
                        <Icon />
                      ) : (
                        /* @ts-ignore */
                        <Icon
                          className="h-3 w-3 shrink-0 transition-transform group-hover:scale-110"
                          style={{ color: tool.iconColor }}
                          aria-hidden="true"
                        />
                      )
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#161616]/30 shrink-0" />
                    )}
                    <span className="tracking-tight text-[#161616]/85 group-hover:text-[#161616]">
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}