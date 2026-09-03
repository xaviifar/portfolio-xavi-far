import Image from "next/image";

export interface WorkCardProps {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  architecture: string;
  whatIBuilt: string;
  technologies: string[];
  result: string;
  imageSrc: string;
  link: string;
}

export default function WorkCard({
  id,
  title,
  subtitle,
  problem,
  architecture,
  whatIBuilt,
  technologies,
  result,
  imageSrc,
  link,
}: WorkCardProps) {
  return (
    <article className="group flex flex-col gap-6 border-b border-[#161616]/10 pb-10 last:border-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <div className="mb-2 font-mono text-[11px] font-medium tracking-widest text-[#161616]/40">
            {id}
          </div>
          <h3 className="text-[clamp(1.5rem,4vw,2.2rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#161616]">
            {title}
          </h3>
          <p className="mt-1.5 text-[15px] tracking-[-0.02em] text-[#161616]/60">
            {subtitle}
          </p>
        </div>

        <a
          href={link}
          className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium tracking-[-0.02em] text-[#161616]/60 transition-colors hover:text-[#161616]"
        >
          Explore project
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* Visual Image */}
      <a
        href={link}
        className="relative block aspect-[16/9] w-full overflow-hidden rounded-md bg-[#161616]/5 ring-1 ring-inset ring-[#161616]/10"
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 840px) 100vw, 840px"
          className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />
      </a>

      {/* Blueprint Metadata Table */}
      <div className="flex flex-col border-t border-[#161616]/10">
        <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] border-b border-[#161616]/10 py-3">
          <span className="text-[10px] uppercase tracking-[0.08em] text-[#161616]/40 font-medium">
            Problem
          </span>
          <span className="text-[13px] leading-[1.6] text-[#161616]/80 sm:text-[14px]">
            {problem}
          </span>
        </div>

        <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] border-b border-[#161616]/10 py-3">
          <span className="text-[10px] uppercase tracking-[0.08em] text-[#161616]/40 font-medium">
            Architecture
          </span>
          <span className="text-[13px] leading-[1.6] text-[#161616]/80 sm:text-[14px]">
            {architecture}
          </span>
        </div>

        <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] border-b border-[#161616]/10 py-3">
          <span className="text-[10px] uppercase tracking-[0.08em] text-[#161616]/40 font-medium">
            What I built
          </span>
          <span className="text-[13px] leading-[1.6] text-[#161616]/80 sm:text-[14px]">
            {whatIBuilt}
          </span>
        </div>

        <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] border-b border-[#161616]/10 py-3">
          <span className="text-[10px] uppercase tracking-[0.08em] text-[#161616]/40 font-medium">
            Technologies
          </span>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-[#161616]/5 border border-[#161616]/10 px-2 py-0.5 font-mono text-[11px] text-[#161616]/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] py-3">
          <span className="text-[10px] uppercase tracking-[0.08em] text-[#161616]/40 font-medium">
            Result
          </span>
          <span className="text-[13px] font-medium leading-[1.6] text-[#161616] sm:text-[14px]">
            {result}
          </span>
        </div>
      </div>

      <div className="mt-2 sm:hidden">
        <a
          href={link}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#161616] border border-[#161616] px-4 py-3 text-[13px] font-medium text-[#f3f3f1] transition-colors hover:bg-transparent hover:text-[#161616]"
        >
          Explore project →
        </a>
      </div>
    </article>
  );
}