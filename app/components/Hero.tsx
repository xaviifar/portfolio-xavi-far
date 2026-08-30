import Image from "next/image";

const socials = [
  { label: "Experiencia", src: "/icons/experiencia.svg", background: "bg-[#f7d24d]" },
  { label: "Proyectos", src: "/icons/projects.svg", background: "bg-[#f4f4f4]" },
  { label: "GitHub", src: "/icons/github.webp", background: "bg-[#0b0b0b]" },
  { label: "IA", src: "/icons/chat.svg", background: "bg-[#f7d24d]" },

  { label: "LinkedIn", src: "/icons/linkedin.svg", background: "bg-[#eaf2ff]" },
  { label: "Correo", src: "/icons/mail.svg", background: "bg-[#f6f6f6]" },
  { label: "CV", src: "/icons/cv.svg", background: "bg-[#f6f6f6]" },

];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f3f3f1] text-[#1d1d1d]">
      <nav className="absolute left-1/2 top-7 flex -translate-x-1/2 items-center gap-3 rounded-full border border-black/10 bg-[#f5f5f2]/90 px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-sm">
        <button
          type="button"
          aria-label="Menu"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white/60 text-[0.7rem] text-black/70"
        >
          ◌
        </button>
        <span className="text-[0.82rem] font-medium tracking-[-0.04em] text-black/80">
          about
        </span>
      </nav>

      <div className="flex min-h-screen flex-col items-center justify-center pt-4">
        <div className="mb-4 flex flex-col items-center">
          <div className="relative mb-4 h-36 w-36 overflow-hidden rounded-full border border-black/10 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]">
            <Image
              src="/portfolio.jpg"
              alt="Xavi Far"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-[1.6rem] font-medium tracking-[-0.06em] text-black/90">
            Xavi Far
          </p>
        </div>

        <h1 className="max-w-[980px] text-center text-[4.25rem] font-medium leading-[0.9] tracking-[-0.09em] text-[#171717] sm:text-[5.2rem] lg:text-[4.25rem]">
          <span className="inline-block align-middle">Full-stack</span>
          <span className="mx-2 inline-flex h-[1.1rem] items-center align-middle sm:mx-3 lg:mx-4">
            <img  className="h-18" src="/icons/dev.svg" alt="" />
          </span>
          <span className="inline-block align-middle">developer</span>
          <span className="mt-1 block align-middle">&amp; AI Specialist</span>
        </h1>

        <div className="mt-28 flex items-center gap-3 rounded-[1.9rem] border border-black/10 bg-white/25 px-4 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.05)] backdrop-blur-sm">
          {socials.map((social, index) => (
            <div key={social.label} className="group relative flex items-center justify-center">
              <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 rounded-full bg-[#161616] px-2.5 py-1 text-[0.7rem] font-medium tracking-[0.04em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {social.label}
              </span>

              <div
                className="flex h-16 w-16 items-center justify-center overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
                aria-label={social.label}
                title={social.label}
              >
                <Image
                  src={social.src}
                  alt={social.label}
                  width={44}
                  height={44}
                  className="h-14 w-14 object-contain"
                />
              </div>

              {index === 3 && (
                <div className="ml-3 h-12 w-px bg-black/25" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );    
}
