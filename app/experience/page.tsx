import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import SectionHeader from "@/app/components/SectionHeader";
import Skills from "@/app/components/Skills";
import Footer from "@/app/components/Footer";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-[#161616]">
      {/* Master Container (Paper Sheet Effect) */}
      <div className="mx-auto flex min-h-screen w-full max-w-[840px] flex-col border-[#161616]/10 px-6 sm:border-x sm:px-12 md:px-16">
        <Header />

        <div className="pt-8 pb-12">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[#161616]/50 transition-colors hover:text-[#161616] mb-8"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>

          {/* Intro */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight tracking-[-0.05em] text-[#161616]">
              Detailed Background &amp; Experience
            </h1>
            <p className="text-[15px] leading-[1.65] text-[#161616]/70 max-w-[620px]">
              I&apos;m a full-stack developer specialized in AI and Big Data, focused on building intelligent systems, AI agents, and modern software products across the stack.
            </p>
          </div>

          {/* Detailed Timeline Section */}
          <section className="mt-12">
            <SectionHeader title="Work History" />

            <ol className="flex flex-col gap-8">
              {/* ESDI Systems */}
              <li className="group flex gap-4 sm:gap-5 border-b border-[#161616]/10 pb-8 last:border-0">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md bg-[#161616]/5 ring-1 ring-inset ring-[#161616]/10">
                  <Image
                    src="/img/esdi.webp"
                    alt="ESDI Systems"
                    fill
                    className="object-contain p-1 grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-[16px] font-medium text-[#161616]">
                      Full-stack Developer
                    </h3>
                    <span className="font-mono text-[11px] text-[#161616]/40 mt-0.5 sm:mt-0">
                      Jan 2026 — Aug 2026
                    </span>
                  </div>
                  <p className="text-[13px] font-medium text-[#161616]/60">ESDI Systems</p>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#161616]/70">
                    Architected intelligent backend systems, AI workflows, and modern web interfaces using Next.js, Python, and cloud infrastructure.
                  </p>

                  {/* Internal role evolution */}
                  <div className="mt-4 border-l-2 border-[#161616]/10 pl-3.5 flex flex-col gap-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="text-[14px] font-medium text-[#161616]/80">
                        Python Developer
                      </h4>
                      <span className="font-mono text-[11px] text-[#161616]/40">
                        Jan 2026 — Jun 2026
                      </span>
                    </div>
                    <p className="text-[13px] leading-[1.6] text-[#161616]/60">
                      Engineered data pipelines, REST APIs, and automated processing scripts.
                    </p>
                  </div>
                </div>
              </li>

              {/* Fundació Pere Tarrés */}
              <li className="group flex gap-4 sm:gap-5 border-b border-[#161616]/10 pb-8 last:border-0">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md bg-[#161616]/5 ring-1 ring-inset ring-[#161616]/10">
                  <Image
                    src="/img/pt.webp"
                    alt="Fundació Pere Tarrés"
                    fill
                    className="object-contain p-1 grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-[16px] font-medium text-[#161616]">
                      Systems Technician
                    </h3>
                    <span className="font-mono text-[11px] text-[#161616]/40 mt-0.5 sm:mt-0">
                      Dec 2023 — Jul 2024
                    </span>
                  </div>
                  <p className="text-[13px] font-medium text-[#161616]/60">
                    Fundació Pere Tarrés
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#161616]/70">
                    Managed infrastructure operation, system troubleshooting, network administration, and automated routine maintenance scripts.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Education Section */}
          <section className="mt-12">
            <SectionHeader title="Education" />

            <ol className="flex flex-col gap-6">
              <li className="group flex gap-4 sm:gap-5">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md bg-[#161616]/5 ring-1 ring-inset ring-[#161616]/10">
                  <Image
                    src="/img/udl.jpg"
                    alt="Universitat de Lleida"
                    fill
                    className="object-contain p-1 grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-[15px] font-medium text-[#161616]">
                      BSc in Computer Engineering
                    </h3>
                    <span className="font-mono text-[11px] text-[#161616]/40 mt-0.5 sm:mt-0">
                      Universitat de Lleida
                    </span>
                  </div>
                  <p className="text-[13px] text-[#161616]/60">Software Engineering &amp; Data Systems</p>
                </div>
              </li>

              <li className="group flex gap-4 sm:gap-5">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md bg-[#161616]/5 ring-1 ring-inset ring-[#161616]/10">
                  <Image
                    src="/img/monlau.jpg"
                    alt="Centre Estudis Monlau"
                    fill
                    className="object-contain p-1 grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-[15px] font-medium text-[#161616]">
                      MSc in Artificial Intelligence &amp; Big Data
                    </h3>
                    <span className="font-mono text-[11px] text-[#161616]/40 mt-0.5 sm:mt-0">
                      Sep 2025 — Jun 2026
                    </span>
                  </div>
                  <p className="text-[13px] text-[#161616]/60">Centre Estudis Monlau</p>
                  <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#161616]/70">
                    Advanced specialization in deep learning, neural networks, vector databases, and big data orchestration.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <Skills />
        </div>

        <Footer />
      </div>
    </main>
  );
}