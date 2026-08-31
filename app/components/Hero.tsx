import Image from "next/image";

const navItems = [
    { label: "about", href: "#about" },
    { label: "work", href: "/projects" },
    { label: "contact", href: "/contact" },
];

const socials = [
    { label: "Experiencia", src: "/icons/exp.svg", href: "#experience" },
    { label: "Proyectos", src: "/icons/projects.svg", href: "/projects" },
    { label: "GitHub", src: "/icons/github.svg", href: "https://github.com/xaviifar", target: "_blank" },
    { label: "IA", src: "/icons/claude.svg", href: "#ai" },
    { label: "Linkedin", src: "/icons/linkedin.svg", href: "https://www.linkedin.com/in/xavi-far/", target: "_blank" },
    { label: "Correo", src: "/icons/mail.svg", href: "mailto:xavi@example.com" },
    { label: "CV", src: "/icons/cv.svg", href: "/cv" },
];

const socials_m = [
    { label: "Linkedin", src: "/icons/linkedin.svg", href: "https://www.linkedin.com/in/xavi-far/", target: "_blank" },
    { label: "Correo", src: "/icons/mail.svg", href: "mailto:xavi@example.com" },
    { label: "CV", src: "/icons/cv.svg", href: "/cv" },
    { label: "Experiencia", src: "/icons/exp.svg", href: "#experience" },
    { label: "Proyectos", src: "/icons/projects.svg", href: "/projects" },
    { label: "GitHub", src: "/icons/github.svg", href: "https://github.com/xaviifar", target: "_blank" },
    { label: "IA", src: "/icons/claude.svg", href: "#ai" },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#f3f3f1] text-[#1d1d1d]">
            <nav className="absolute left-1/2 top-8 flex -translate-x-1/2 items-center gap-3 rounded-full border border-black/10 bg-[#f5f5f2]/90 px-2 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-sm">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="flex h-7 items-center justify-center rounded-full border border-black/10 bg-white/60 px-3 text-[0.7rem] font-medium text-black/70 transition-opacity duration-200 ease-out hover:opacity-80"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            <div className="flex min-h-screen flex-col items-center justify-center pt-4">
                <div className="mb-4 flex flex-col items-center">
                    <div className="relative mb-4 h-28 w-28 sm_w-36 overflow-hidden rounded-full border border-black/10 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]">
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

                <h1 className="max-w-[980px] text-center text-[2.25rem] font-medium leading-[0.9] tracking-[-0.09em] text-[#171717] sm:text-[3.2rem] lg:text-[4.25rem]">
                    <span className="inline-block align-middle">AI Engineer</span>
                    <span className="mx-2 inline-flex h-[0.7rem] items-center align-middle sm:mx-3 lg:mx-4">
                        <img className="h-12 sm:h-18" src="/icons/dev.svg" alt="" />
                    </span>
                    <span className="inline-block align-middle">Big Data</span>
                    <br />
                    <span className="inline-block align-middle">& Backend Dev</span>

                </h1>
                <nav className="nav mt-16 sm:mt-20">
                    <ul className="hidden md:flex list-none gap-1 p-0 m-0 items-center">
                        {socials.map((social, index) => {
                            const item = (
                                <li key={social.label} className="app group relative flex flex-row items-center justify-center">
                                    <a
                                        href={social.href || "#"}
                                        target={social.target}
                                        rel={social.target === "_blank" ? "noreferrer noopener" : undefined}
                                        className="flex h-16 w-16 items-center justify-center overflow-hidden"
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
                                    </a>
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#161616] px-2.5 py-1 text-[0.8rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                        {social.label}
                                    </span>
                                </li>
                            );

                            if (index === 3) {
                                return (
                                    <>
                                        {item}
                                        <li key={`divider-${index}`} aria-hidden="true" className="mx-2 h-12 w-px bg-black/25" />
                                    </>
                                );
                            }

                            return item;
                        })}
                    </ul>

                    <ul className="grid grid-cols-3 md:hidden list-none gap-4 p-0 m-0 items-center">
                        {socials_m.map((social, index) => (
                            <li key={social.label} className={`app group relative flex flex-col items-center justify-center ${index === 6 ? 'col-span-1' : ''}`}>
                                <a
                                    href={social.href || "#"}
                                    target={social.target}
                                    rel={social.target === "_blank" ? "noreferrer noopener" : undefined}
                                    className="flex h-20 w-20 items-center justify-center overflow-hidden"
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    <Image
                                        src={social.src}
                                        alt={social.label}
                                        width={44}
                                        height={44}
                                        className="h-16 w-16 object-contain"
                                    />
                                </a>
                                <span className="mt-2 text-[0.8rem] font-medium text-[#161616] text-center block pointer-events-none w-full truncate">
                                    {social.label}
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
}
