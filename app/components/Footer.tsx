import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 sm:mt-16 mb-10 flex flex-col border-t border-[#161616]/10 pt-10">
      {/* High-Conversion Closing Call to Action */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#161616]/10">
        <div className="flex flex-col gap-2 max-w-[480px]">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#161616]/40 font-medium">
            Contact &amp; Collaboration
          </span>
          <h3 className="text-[20px] sm:text-[24px] font-medium tracking-[-0.035em] text-[#161616] leading-tight">
            Ready to engineer scalable AI systems for production?
          </h3>
          <p className="text-[13.5px] leading-[1.6] text-[#161616]/70">
            Available for full-stack AI roles, backend architecture, and high-impact distributed projects.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <a
            href="mailto:tuemail@dominio.com"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[#161616] bg-[#161616] px-4 py-2.5 text-[13px] font-medium text-[#f3f3f1] transition-all duration-200 hover:bg-transparent hover:text-[#161616]"
          >
            <span>Initialize Comms</span>
            <span>→</span>
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[#161616]/15 bg-white/60 px-4 py-2.5 text-[13px] font-medium text-[#161616] transition-all duration-200 hover:border-[#161616]"
          >
            <span>Deploy Resume</span>
          </a>
        </div>
      </div>

      {/* Blueprint Metadata & Status Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-[#161616]/10 font-mono text-[11px] text-[#161616]/50">
        <div className="flex flex-col gap-0.5">
          <span className="text-[9.5px] uppercase tracking-wider text-[#161616]/30">Location</span>
          <span className="text-[#161616]/80">Barcelona, ES</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[9.5px] uppercase tracking-wider text-[#161616]/30">Status</span>
          <span className="flex items-center gap-1.5 text-[#161616]/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[#161616]/60" />
            Open for opportunities
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[9.5px] uppercase tracking-wider text-[#161616]/30">Framework</span>
          <span className="text-[#161616]/80">Next.js &amp; Tailwind</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[9.5px] uppercase tracking-wider text-[#161616]/30">Architecture</span>
          <span className="text-[#161616]/80">Editorial Blueprint</span>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-[12px] text-[#161616]/50 gap-4">
        <p className="font-mono text-[11px]">
          © {new Date().getFullYear()} Xavi Far. Crafted with editorial precision.
        </p>

        <div className="flex items-center gap-5 text-[12.5px]">
          <Link href="#me" className="hover:text-[#161616] transition-colors">
            Top ↑
          </Link>
          <a
            href="https://github.com/xaviifar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#161616] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/xavi-far/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#161616] transition-colors"
          >
            LinkedIn ↗
          </a>
          <Link href="/chat" className="hover:text-[#161616] transition-colors font-medium">
            Ask AI ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
