"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  shortcut: string;
  isAiChat?: boolean;
}

const navItems: NavItem[] = [
  { label: "Me", href: "/", shortcut: "M" },
  { label: "Experience", href: "/experience", shortcut: "E" },
  { label: "Work", href: "/#work", shortcut: "W" },
  { label: "Skills", href: "/#skills", shortcut: "S" },
  { label: "AI Chat", href: "/chat", shortcut: "A", isAiChat: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[800px] pointer-events-none">
      <header className="pointer-events-auto flex items-center justify-between rounded-full border border-[#161616]/10 bg-[#f3f3f1]/80 px-5 sm:px-6 py-2.5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all">
        {/* Brand with sys metadata */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <span className="font-mono text-[10px] font-semibold text-indigo-600 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
            SYS.ACTIVE
          </span>
          <span className="text-[14px] font-semibold tracking-[-0.04em] text-[#161616] transition-opacity group-hover:opacity-70">
            Xavi Far.
          </span>
        </Link>

        {/* Navigation items */}
        <nav className="flex items-center gap-3 sm:gap-5 text-[13px] tracking-[-0.035em]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            if (item.isAiChat) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-medium transition-all ${
                    isActive
                      ? "bg-indigo-600 text-[#f3f3f1] shadow-sm shadow-indigo-500/20"
                      : "bg-[#161616]/5 text-[#161616] border border-[#161616]/10 hover:bg-indigo-600 hover:text-[#f3f3f1] hover:border-indigo-600"
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1.5"
              >
                <span
                  className={
                    isActive
                      ? "font-medium text-[#161616] underline underline-offset-4 decoration-indigo-500"
                      : "text-[#161616]/60 transition-colors duration-200 group-hover:text-[#161616]"
                  }
                >
                  {item.label}
                </span>
                <span className="hidden sm:inline-block rounded bg-[#161616]/5 px-1.5 py-0.5 font-mono text-[9px] font-medium tracking-widest text-[#161616]/40 transition-colors group-hover:bg-[#161616]/10 group-hover:text-[#161616]/70">
                  {item.shortcut}
                </span>
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
}
