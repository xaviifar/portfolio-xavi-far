// Skills.tsx
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
    SiQdrant
} from "react-icons/si";
import { DiJava } from "react-icons/di";

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
    { label: "Flask", icon: SiFlask, color: "#000000" },
    { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { label: "MySQL", icon: SiMysql, color: "#4479A1" },
    { label: "Redis", icon: SiRedis, color: "#DC382D" },
    { label: "Qdrant" ,icon: SiQdrant, color: "black    "},
    { label: "pgvector" },
    { label: "Apache Spark", icon: SiApachespark, color: "#E25A1C" },
    { label: "Databricks", icon: SiDatabricks, color: "#FF3621" },
    { label: "Pandas", icon: SiPandas, color: "#150458" },
    { label: "Polars", icon: SiPolars, color: "#CD792C" },

    // Power BI lo añadiremos como SVG propio
    { label: "Power BI" },
];

const focusAreas = [
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "LLMs",
    "Fine-tuning",
    "Local Models",
    "RAG",
    "AI Agents",
];

function ToolChip({ label, icon: Icon, color }: Tool) {
    return (
        <li className="group flex items-center gap-2 rounded-22px border border-black/10 bg-white/60 px-3 py-1.5 text-[0.8rem] text-black/70 transition-colors duration-200 hover:border-black/20">
            {Icon && (
                <Icon
                    className="h-3.5 w-3.5 shrink-0"
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
        <section id="skills" className="mt-16">
            <h2 className="text-xs font-medium tracking-wide text-[#161616]/45">
                Skills
            </h2>

            <p className="mt-3 max-w-md text-[15px] leading-6 text-[#161616]/70">
                Tools I build with day to day, and the areas of AI and data
                systems I focus on.
            </p>

            <div className="mt-6">
                <h3 className="text-[13px] text-[#161616]/50">
                    Tools & technologies
                </h3>

                <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                    {tools.map((tool) => (
                        <ToolChip key={tool.label} {...tool} />
                    ))}
                </ul>
            </div>

            <div className="mt-6">
                <h3 className="text-[13px] text-[#161616]/50">
                    Focus areas
                </h3>

                <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                    {focusAreas.map((area) => (
                        <li
                            key={area}
                            className="rounded-full bg-[#161616]/[0.04] px-3 py-1.5 text-[0.8rem] text-black/70"
                        >
                            {area}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}