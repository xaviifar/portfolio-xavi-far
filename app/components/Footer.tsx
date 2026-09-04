"use client";

import { useState } from "react";
import Link from "next/link";

const states = [
  {
    label: "available",
    text: "Open to interesting problems.",
  },
  {
    label: "building",
    text: "Turning ideas into working systems.",
  },
  {
    label: "thinking",
    text: "Always exploring what's next.",
  },
];

export default function Footer() {
  const [stateIndex, setStateIndex] = useState(0);

  const currentState = states[stateIndex];

  return (
    <footer className="mt-16 mb-10 border-t border-[#161616]/10 pt-10 sm:mt-20">
      {/* ─────────────────────────────────────
          CLOSING
      ───────────────────────────────────── */}

      <div className="flex flex-col gap-8 border-b border-[#161616]/10 pb-10">
        <div className="max-w-[600px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#161616]/35">
            Let's build something
          </span>

          <h2 className="mt-3 text-[28px] font-medium leading-[1.05] tracking-[-0.045em] text-[#161616] sm:text-[36px]">
            Have a problem worth solving?
          </h2>

          <p className="mt-4 max-w-[500px] text-[14px] leading-[1.7] text-[#161616]/55">
            I'm interested in building useful products, intelligent systems
            and solving hard technical problems.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href="mailto:tuemail@dominio.com"
            className="group inline-flex items-center gap-3 rounded-md bg-[#161616] px-4 py-2.5 text-[13px] font-medium text-[#f3f3f1] transition-all duration-200 hover:-translate-y-px"
          >
            <span>Get in touch</span>

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[#161616]/15 bg-white/60 px-4 py-2.5 text-[13px] font-medium text-[#161616] transition-colors hover:border-[#161616]/35 hover:bg-white"
          >
            Resume ↗
          </a>
        </div>
      </div>

      {/* ─────────────────────────────────────
          SMALL INTERACTIVE ELEMENT
      ───────────────────────────────────── */}

      <div className="flex flex-col gap-4 border-b border-[#161616]/10 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#161616]/20" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#161616]/50" />
          </span>

          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em]">
            <span className="text-[#161616]/35">Status</span>
            <span className="text-[#161616]/70">{currentState.label}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() =>
            setStateIndex((current) => (current + 1) % states.length)
          }
          className="group text-left font-mono text-[10px] text-[#161616]/35 transition-colors hover:text-[#161616]/65 sm:text-right"
        >
          <span className="mr-2 text-[#161616]/20">↻</span>
          {currentState.text}
        </button>
      </div>

      {/* ─────────────────────────────────────
          BOTTOM
      ───────────────────────────────────── */}

      <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] font-medium tracking-tight text-[#161616]">
            Xavi Far
          </span>

          <span className="font-mono text-[10px] text-[#161616]/35">
            AI · Backend · Data
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#161616]/45">
          <a
            href="https://github.com/xaviifar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#161616]"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/xavi-far/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#161616]"
          >
            LinkedIn ↗
          </a>

          <Link
            href="/chat"
            className="font-medium text-[#161616]/65 transition-colors hover:text-[#161616]"
          >
            Ask AI →
          </Link>

          <Link
            href="#me"
            className="transition-colors hover:text-[#161616]"
          >
            Back to top ↑
          </Link>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-[#161616]/20">
        <span>© {new Date().getFullYear()} Xavi Far</span>
        <span>Built with curiosity.</span>
      </div>
    </footer>
  );
}