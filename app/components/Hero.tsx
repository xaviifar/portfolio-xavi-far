import Image from "next/image";

interface ActionLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  primary?: boolean;
}

const actionLinks: ActionLink[] = [
  {
    name: "Access Full Resume",
    href: "/cv.pdf",
    primary: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3.5 shrink-0"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    ),
  },
  {
    name: "Initialize Comms",
    href: "mailto:tuemail@dominio.com",
    primary: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3.5 shrink-0"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/xaviifar",
    primary: false,
    icon: (
      <svg
        viewBox="0 0 496 512"
        fill="currentColor"
        aria-hidden="true"
        className="size-3.5 shrink-0"
      >
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/xavi-far/",
    primary: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="size-3.5 shrink-0"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section id="me" className="flex flex-col pt-8 pb-8 sm:pt-12 sm:pb-10">
      <div className="flex flex-col">
        {/* Editorial Profile Avatar */}
        <div className="group relative mb-5 h-[68px] w-[54px] overflow-hidden rounded-md bg-[#161616]/5 ring-1 ring-inset ring-[#161616]/10 sm:h-[76px] sm:w-[60px]">
          <Image
            src="/portfolio.jpg"
            alt="Xavi Far"
            fill
            priority
            sizes="(max-width: 768px) 54px, 60px"
            className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.1rem,4.5vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.05em] text-[#161616]">
          Hi, I&apos;m Xavi. <br className="hidden sm:block" />
          <span className="text-[#161616]/40">I engineer </span>
          AI systems <br className="hidden sm:block" />
          <span className="text-[#161616]/40">for production.</span>
        </h1>

        {/* Value Proposition */}
        <div className="mt-4 max-w-[560px] space-y-2.5 text-[14.5px] leading-[1.6] tracking-[-0.02em] text-[#161616]/70 sm:text-[15.5px]">
          <p>
            I am a Backend &amp; AI Engineer specialized in transforming complex data into scalable, intelligent software systems.
          </p>
          <p>
            I don&apos;t just build wrappers. I design backend architectures, deploy{" "}
            <strong className="font-medium text-[#161616]">RAG pipelines</strong>, and develop{" "}
            <strong className="font-medium text-[#161616]">autonomous agents</strong> that solve actual business problems.
          </p>
        </div>

        {/* Action Grid */}
        <div className="mt-6">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4 max-w-[620px]">
            {actionLinks.map((link) => (
              <li key={link.name} className="flex min-w-0">
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-md border px-3 py-2 text-[12.5px] font-medium leading-4 whitespace-nowrap outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#161616]/50 ${
                    link.primary
                      ? "border-[#161616] bg-[#161616] text-[#f3f3f1] hover:bg-transparent hover:text-[#161616]"
                      : "border-[#161616]/10 bg-[#161616]/5 text-[#161616] hover:bg-[#161616] hover:text-[#f3f3f1] hover:border-[#161616]"
                  }`}
                >
                  {link.icon}
                  <span className="truncate">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}