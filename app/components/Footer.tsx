import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 mb-12 flex flex-col sm:flex-row items-center justify-between border-t border-[#161616]/10 pt-8 text-[12px] text-[#161616]/40 font-mono gap-4">
      <p>© {new Date().getFullYear()} Xavi Far. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <Link href="#me" className="hover:text-[#161616] transition-colors">
          Top ↑
        </Link>
        <a
          href="https://github.com/xaviifar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#161616] transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/xavi-far/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#161616] transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
