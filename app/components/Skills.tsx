import type { IconType } from "react-icons";
import {
  SiPython,
  SiCplusplus,
  SiR,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiApachespark,
  SiDatabricks,
  SiPandas,
  SiPolars,
  SiQdrant,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import SectionHeader from "./SectionHeader";

type Tool = {
  label: string;
  icon?: IconType;
  color?: string;
};

const tools: Tool[] = [
  { label: "Python", icon: SiPython, color: "#3776AB" },
  { label: "Java", icon: DiJava, color: "#ED8B00" },
  { label: "C++", icon: SiCplusplus, color: "#00599C" },
  { label: "R", icon: SiR, color: "#276DC3" },
  { label: "SQL" },
  { label: "Flask", icon: SiFlask, color: "#161616" },
  { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { label: "MySQL", icon: SiMysql, color: "#4479A1" },
  { label: "Redis", icon: SiRedis, color: "#DC382D" },
  { label: "Qdrant", icon: SiQdrant, color: "#161616" },
  { label: "pgvector" },
  { label: "Apache Spark", icon: SiApachespark, color: "#E25A1C" },
  { label: "Databricks", icon: SiDatabricks, color: "#FF3621" },
  { label: "Pandas", icon: SiPandas, color: "#150458" },
  { label: "Polars", icon: SiPolars, color: "#CD792C" },
  { label: "Power BI" },
];

const focusAreas = [
  "Machine Learning",
  "Deep Learning",
  "Neural Networks",
  "LLMs",
  "Fine-tuning",
  "Local Models",
  "RAG Pipelines",
  "Autonomous Agents",
];

function ToolChip({ label, icon: Icon, color }: Tool) {
  return (
    <li className="group inline-flex items-center gap-1.5 rounded-md border border-[#161616]/10 bg-white/60 px-2.5 py-1 text-[11.5px] font-medium text-[#161616] transition-all duration-200 hover:border-[#161616]/30">
      {Icon && (
        <Icon
          className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
          style={{ color }}
          aria-hidden="true"
        />
      )}
      {label}
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="pt-6 pb-8">
      <SectionHeader
        index="05"
        title="Technical Stack &amp; Focus"
        subtitle="Tools I build with day-to-day, and core focus areas in AI engineering and data architecture."
      />

      <div className="mt-4">
        <h3 className="text-[10.5px] font-mono font-medium uppercase tracking-[0.08em] text-[#161616]/40">
          Tools &amp; Technologies
        </h3>
        <ul className="mt-2.5 flex flex-wrap gap-1.5 p-0">
          {tools.map((tool) => (
            <ToolChip key={tool.label} {...tool} />
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h3 className="text-[10.5px] font-mono font-medium uppercase tracking-[0.08em] text-[#161616]/40">
          Core Focus Areas
        </h3>
        <ul className="mt-2.5 flex flex-wrap gap-1.5 p-0">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-md bg-[#161616]/5 border border-[#161616]/10 px-2.5 py-0.5 font-mono text-[10.5px] text-[#161616]/70"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}