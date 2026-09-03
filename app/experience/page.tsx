import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import SectionHeader from "@/app/components/SectionHeader";
import Skills from "@/app/components/Skills";
import Footer from "@/app/components/Footer";

const workHistory = [
  {
    company: "ESDI Systems",
    role: "Full-stack & AI Developer",
    period: "Jan 2026 — Present",
    location: "Barcelona, Spain",
    logoSrc: "/img/esdi.webp",
    description:
      "Architecting distributed backend infrastructure, asynchronous data processing pipelines, and agentic LLM workflows for production clients.",
    achievements: [
      "Designed and deployed event-driven microservices with Python and FastAPI, reducing manual review latency by 80%.",
      "Integrated vector embedding search and custom RAG retrieval mechanisms to handle complex semantic document queries.",
      "Engineered clean, responsive frontend web applications with Next.js and Tailwind CSS under strict design specifications.",
    ],
    previousRole: {
      role: "Python Developer",
      period: "Jan 2026 — Jun 2026",
      description:
        "Developed ETL data ingestion routines, automated database migrations, and built RESTful endpoints with comprehensive unit test suites.",
    },
    technologies: ["Python", "FastAPI", "PostgreSQL", "LangChain", "Docker", "Next.js"],
  },
  {
    company: "Fundació Pere Tarrés",
    role: "Systems Technician",
    period: "Dec 2023 — Jul 2024",
    location: "Barcelona, Spain",
    logoSrc: "/img/pt.webp",
    description:
      "Maintained core server infrastructure, automated diagnostic routines, and ensured network reliability across multi-site branch nodes.",
    achievements: [
      "Automated system health checks, backup validation, and incident report generation using Python and Linux bash scripts.",
      "Administered access control protocols, database sync routines, and network hardware configuration.",
    ],
    technologies: ["Linux / Bash", "Python", "Networking", "MySQL", "Server Infrastructure"],
  },
];

const educationHistory = [
  {
    institution: "Centre Estudis Monlau",
    degree: "MSc in Artificial Intelligence & Big Data",
    period: "Sep 2025 — Jun 2026",
    logoSrc: "/img/monlau.jpg",
    details:
      "Advanced specialization in Deep Learning, Vector Search Architectures, Neural Networks, and Big Data Processing (Spark, Databricks, Kafka).",
  },
  {
    institution: "Centre Estudis Monlau",
    degree: "Cross-platform Application Development (DAM)",
    period: "Sep 2025 — Jun 2026",
    logoSrc: "/img/monlau.jpg",
    details:
      "Full-stack software engineering, relational database design, design patterns, and enterprise software architecture.",
  },
  {
    institution: "Universitat de Lleida",
    degree: "BSc in Computer Engineering",
    period: "Previous Academic Background",
    logoSrc: "/img/udl.jpg",
    details:
      "Algorithms, data structures, computer architecture, discrete mathematics, and operating systems.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-[#161616]">
      {/* Master Container ("Hoja de Papel" blueprint effect) */}
      <div className="mx-auto flex min-h-screen w-full max-w-[840px] flex-col border-[#161616]/10 px-6 sm:border-x sm:px-12 md:px-16">
        <Header />

        <div className="pt-8 pb-12">
          {/* Back breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#161616]/50 transition-colors hover:text-[#161616] mb-8"
          >
            <span>←</span>
            <span>Return to Overview</span>
          </Link>

          {/* Intro Section */}
          <div className="flex flex-col gap-3 pb-8">
            <h1 className="text-[clamp(2.2rem,5vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.05em] text-[#161616]">
              Experience &amp; Track Record
            </h1>
            <p className="text-[15px] leading-[1.65] text-[#161616]/70 max-w-[620px]">
              Detailed timeline of engineering roles, technical responsibilities, key project milestones, and academic foundation.
            </p>
          </div>

          {/* Section 01: Work History */}
          <section className="pt-6 pb-12">
            <SectionHeader
              index="01"
              title="Professional Experience"
              subtitle="Production roles focused on AI architecture, data infrastructure, and system scalability."
            />

            <div className="flex flex-col gap-12">
              {workHistory.map((job) => (
                <article
                  key={job.company}
                  className="group flex flex-col gap-5 border-b border-[#161616]/10 pb-10 last:border-0"
                >
                  {/* Job Header */}
                  <div className="flex items-start gap-4">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-md border border-[#161616]/10 bg-white/60 p-1">
                      <Image
                        src={job.logoSrc}
                        alt={job.company}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-[17px] font-medium text-[#161616]">
                          {job.role}
                        </h3>
                        <span className="font-mono text-[11px] text-[#161616]/40 mt-0.5 sm:mt-0">
                          {job.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[13px] text-[#161616]/60">
                        <span className="font-medium text-[#161616]/80">{job.company}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary & Achievements */}
                  <div className="pl-0 sm:pl-15 flex flex-col gap-3">
                    <p className="text-[14px] leading-[1.65] text-[#161616]/80">
                      {job.description}
                    </p>

                    <ul className="flex flex-col gap-2 pl-4 pt-1">
                      {job.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="relative text-[13.5px] leading-[1.6] text-[#161616]/70"
                        >
                          <span className="absolute -left-4 top-[9px] h-1 w-1 rounded-full bg-[#161616]/30" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Previous Role under same organization */}
                    {job.previousRole && (
                      <div className="mt-3 border-l-2 border-[#161616]/10 pl-4 flex flex-col gap-1">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                          <h4 className="text-[14px] font-medium text-[#161616]">
                            {job.previousRole.role}
                          </h4>
                          <span className="font-mono text-[11px] text-[#161616]/40">
                            {job.previousRole.period}
                          </span>
                        </div>
                        <p className="text-[13px] leading-[1.6] text-[#161616]/65">
                          {job.previousRole.description}
                        </p>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/60 border border-[#161616]/10 px-2 py-0.5 text-[11px] font-medium text-[#161616]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 02: Education */}
          <section className="pt-6 pb-12">
            <SectionHeader
              index="02"
              title="Education &amp; Specializations"
              subtitle="Formal academic degrees in computer engineering and artificial intelligence."
            />

            <div className="flex flex-col gap-8">
              {educationHistory.map((edu) => (
                <div
                  key={edu.degree}
                  className="group flex items-start gap-4 border-b border-[#161616]/10 pb-6 last:border-0"
                >
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border border-[#161616]/10 bg-white/60 p-1">
                    <Image
                      src={edu.logoSrc}
                      alt={edu.institution}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-[15.5px] font-medium text-[#161616]">
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-[11px] text-[#161616]/40 mt-0.5 sm:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#161616]/60 font-medium">{edu.institution}</p>
                    <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#161616]/70">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Breakdown */}
          <Skills />
        </div>

        <Footer />
      </div>
    </main>
  );
}