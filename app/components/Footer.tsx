export default function Footer() {
  return (
    <footer className="border-t border-[#161616]/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-10 md:px-8">
        
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Identity */}
          <div>
            <p className="text-sm font-medium tracking-tight text-[#161616]">
              Xavi Far
            </p>

            <p className="mt-1 text-sm text-[#161616]/50">
              AI · Backend · Data
            </p>
          </div>

          {/* Contact */}
          <a
            href="mailto:tu@email.com"
            className="group w-fit text-sm text-[#161616] transition-opacity hover:opacity-50"
          >
            Let's talk
            <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#161616]/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#161616]/40">
            © {new Date().getFullYear()} Xavi Far
          </p>

          <nav className="flex items-center gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#161616]/50 transition-colors hover:text-[#161616]"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#161616]/50 transition-colors hover:text-[#161616]"
            >
              LinkedIn
            </a>

            <a
              href="/chat"
              className="text-xs text-[#161616]/50 transition-colors hover:text-[#161616]"
            >
              Ask AI
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}