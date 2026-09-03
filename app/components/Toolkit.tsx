import SectionHeader from "./SectionHeader";

const toolkit = [
  {
    category: "AI & Agents",
    skills: [
      "LangChain / LlamaIndex",
      "OpenAI / Anthropic APIs",
      "Pinecone / Weaviate / Qdrant",
      "RAG Architectures",
      "Prompt Engineering & Fine-tuning",
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      "Python (FastAPI, Flask)",
      "PostgreSQL / MongoDB / Redis",
      "Apache Kafka / Spark",
      "Data Pipelines (ETL)",
      "Microservices & Event-driven API",
    ],
  },
  {
    category: "Infra & DevOps",
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Docker & Kubernetes",
      "CI/CD (GitHub Actions)",
      "Terraform & IaC",
      "Linux Kernel / Bash Automation",
    ],
  },
];

export default function Toolkit() {
  return (
    <section className="pt-10 pb-12">
      <SectionHeader index="04" title="Core Toolkit" />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
        {toolkit.map((block) => (
          <div key={block.category} className="flex flex-col">
            <h3 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-[#161616]/50 font-medium">
              {block.category}
            </h3>
            <ul className="flex flex-col gap-2 border-l border-[#161616]/10 pl-3.5 mt-1">
              {block.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-[13px] font-medium tracking-[-0.01em] text-[#161616]/70 transition-colors hover:text-[#161616]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}