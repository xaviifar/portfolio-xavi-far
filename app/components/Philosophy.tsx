import SectionHeader from "./SectionHeader";

const principles = [
  {
    num: "01",
    title: "Architecture Over Hacks",
    description:
      "Clean event-driven data pipelines and deterministic state management always beat fragile wrapper shortcuts.",
  },
  {
    num: "02",
    title: "Autonomous Agent Reliability",
    description:
      "Engineering LLM agents with verifiable memory structures, high-retrieval RAG accuracy, and fallback constraints.",
  },
  {
    num: "03",
    title: "Production-Grade Deployment",
    description:
      "Shipping optimized, containerized backend services with observability, benchmarked latency, and 99.9% uptime.",
  },
];

export default function Philosophy() {
  return (
    <section className="pt-6 pb-8">
      <SectionHeader title="Engineering Philosophy" kicker="Approach & Standards" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
        {principles.map((item) => (
          <div key={item.num} className="flex flex-col gap-1.5">
            <span className="font-mono text-[10.5px] text-[#161616]/40">
              {item.num}
            </span>
            <h3 className="text-[14px] font-medium tracking-tight text-[#161616]">
              {item.title}
            </h3>
            <p className="text-[13px] leading-[1.55] text-[#161616]/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
