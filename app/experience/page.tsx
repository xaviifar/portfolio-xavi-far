import Skills from "@/app/components/Skills";


export default function Experience() {
    return (
      <div className="mt-10 mx-6 flex flex-col sm:mx-auto sm:w-xl sm:self-center">
  
        <a className="flex flex-row items-center w-fit" href="/">
          <svg
            className="w-4 h-4"
            viewBox="-19.04 0 75.803 75.803"
            xmlns="http://www.w3.org/2000/svg"
            fill="#161616"
          >
            <path
              d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z"
              transform="translate(-624.082 -383.588)"
            />
          </svg>
          <span className="ml-2 text-sm underline underline-offset-2">Back</span>
        </a>
  
        {/* Intro */}
        <div className="mt-10">
          <h1 className="text-2xl font-medium text-[#161616]">
            Hi, I'm Xavi 👋
          </h1>
          <p className="mt-3 text-[15px] leading-6 text-[#161616]/70">
            I'm a full-stack developer specialized in AI and Big Data,
            focused on building intelligent systems, AI agents and
            modern software products.
          </p>
          <p className="mt-3 text-[15px] leading-6 text-[#161616]/70">
            I work across the stack — from backend architecture and data
            pipelines to AI-powered applications.
          </p>
        </div>
  
        <div className="my-8 h-px w-full bg-[#161616]/10" />
  
        {/* Experience */}
        <section>
          <h2 className="text-xs font-medium tracking-wide text-[#161616]/45">
            Experience
          </h2>
  
          <ol className="mt-6 flex flex-col gap-10">
            {/* ESDI Systems — grouped roles */}
            <li className="flex gap-3">
              <img
                src="/img/esdi.webp"
                alt="ESDI Systems"
                className="h-9 w-9 shrink-0 rounded-lg bg-[#f3f3f1] object-contain p-1"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-[1.05rem] font-medium text-[#161616]">
                    Full-stack Developer
                  </h3>
                  <span className="shrink-0 text-[13px] text-[#161616]/40">
                    Jan 2026 — Aug 2026
                  </span>
                </div>
                <p className="text-[13px] text-[#161616]/50">ESDI Systems</p>
                <p className="mt-2 text-sm leading-6 text-[#161616]/70">
                  [Describe qué construiste aquí: stack usado, tipo de sistemas
                  o clientes, y un resultado concreto.]
                </p>
  
                {/* Previous role, same company */}
                <div className="mt-4 border-l-2 border-[#161616]/10 pl-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h4 className="text-sm font-medium text-[#161616]/80">
                      Python Developer
                    </h4>
                    <span className="shrink-0 text-[13px] text-[#161616]/40">
                      Jan 2026 — Jun 2026
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-[#161616]/60">
                    [Describe brevemente qué hacías en este rol previo, si
                    aporta algo distinto al de arriba.]
                  </p>
                </div>
              </div>
            </li>
  
            {/* Fundació Pere Tarrés */}
            <li className="flex gap-3">
              <img
                src="/img/pt.webp"
                alt="Fundació Pere Tarrés"
                className="h-9 w-9 shrink-0 rounded-lg bg-[#f3f3f1] object-contain p-1"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-[1.05rem] font-medium text-[#161616]">
                    Systems Technician
                  </h3>
                  <span className="shrink-0 text-[13px] text-[#161616]/40">
                    Dec 2023 — Jul 2024
                  </span>
                </div>
                <p className="text-[13px] text-[#161616]/50">Fundació Pere Tarrés</p>
                <p className="mt-2 text-sm leading-6 text-[#161616]/70">
                  [Describe qué hacías: soporte, infraestructura, automatización,
                  etc., con algún detalle concreto.]
                </p>
              </div>
            </li>
          </ol>
        </section>
  
        <div className="my-8 h-px w-full bg-[#161616]/10" />
  
        {/* Education */}
        <section>
          <h2 className="text-xs font-medium tracking-wide text-[#161616]/45">
            Education
          </h2>
  
          <ol className="mt-6 flex flex-col gap-10">
            <li className="flex gap-3">
              <img
                src="/img/udl.jpg"
                alt="Universitat de Lleida"
                className="h-9 w-9 shrink-0 rounded-lg bg-[#f3f3f1] object-contain p-1"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-[1.05rem] font-medium text-[#161616]">
                    BSc in Computer Engineering
                  </h3>
                  <span className="shrink-0 text-[13px] text-[#161616]/40">
                    [Añadir fechas]
                  </span>
                </div>
                <p className="text-[13px] text-[#161616]/50">Universitat de Lleida</p>
              </div>
            </li>
  
            <li className="flex gap-3">
              <img
                src="/img/monlau.jpg"
                alt="Centre Estudis Monlau"
                className="h-9 w-9 shrink-0 rounded-lg bg-[#f3f3f1] object-contain p-1"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-[1.05rem] font-medium text-[#161616]">
                    MSc in Artificial Intelligence &amp; Big Data
                  </h3>
                  <span className="shrink-0 text-[13px] text-[#161616]/40">
                    Sep 2025 — Jun 2026
                  </span>
                </div>
                <p className="text-[13px] text-[#161616]/50">Centre Estudis Monlau</p>
                <p className="mt-2 text-sm leading-6 text-[#161616]/70">
                  [Menciona proyecto destacado o especialización dentro del máster,
                  si aplica.]
                </p>
              </div>
            </li>
  
            <li className="flex gap-3">
              <img
                src="/img/monlau.jpg"
                alt="Centre Estudis Monlau"
                className="h-9 w-9 shrink-0 rounded-lg bg-[#f3f3f1] object-contain p-1"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-[1.05rem] font-medium text-[#161616]">
                    Cross-platform Application Development
                  </h3>
                  <span className="shrink-0 text-[13px] text-[#161616]/40">
                    Sep 2025 — Jun 2026
                  </span>
                </div>
                <p className="text-[13px] text-[#161616]/50">Centre Estudis Monlau</p>
                <p className="mt-2 text-sm leading-6 text-[#161616]/70">
                  [Menciona proyecto destacado, si aplica.]
                </p>
              </div>
            </li>
          </ol>

          <Skills></Skills>
        </section>
      </div>

    );
  }