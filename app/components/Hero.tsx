// Hero.tsx
import Image from "next/image";
import React from "react";

const NavIcons = {
    about: (
        <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
        >
            <circle cx="8" cy="5.2" r="2.6" />
            <path d="M2.8 13.2c.9-2.6 3-3.9 5.2-3.9s4.3 1.3 5.2 3.9" />
        </svg>
    ),

    experience: (
        <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="2" y="5" width="12" height="8" rx="1.4" />
            <path d="M5.5 5V3.8c0-.7.6-1.3 1.3-1.3h2.4c.7 0 1.3.6 1.3 1.3V5" />
        </svg>
    ),

    skills: (
        <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2.2 9.6 6.3 14 6.9 10.8 9.8 11.7 14 8 11.8 4.3 14 5.2 9.8 2 6.9 6.4 6.3Z" />
        </svg>
    ),

    projects: (
        <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 4.4c0-.7.6-1.2 1.3-1.2h2.9l1.2 1.5h5.3c.7 0 1.3.5 1.3 1.2v6.6c0 .7-.6 1.2-1.3 1.2H3.3c-.7 0-1.3-.5-1.3-1.2Z" />
        </svg>
    ),

    contact: (
        <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="2" y="3.5" width="12" height="9" rx="1.3" />
            <path d="M2.5 4.3 8 8.4l5.5-4.1" />
        </svg>
    ),
};

const navItems = [
    { label: "About", href: "#about", icon: NavIcons.about },
    { label: "Experience", href: "/experience", icon: NavIcons.experience },
    { label: "Skills", href: "#skills", icon: NavIcons.skills },
    { label: "Projects", href: "/projects", icon: NavIcons.projects },
    {
        label: "Contact",
        href: "/contact",
        icon: NavIcons.contact,
        primary: true,
    },
];

const socials = [
    {
        label: "GitHub",
        src: "/icons/github.svg",
        href: "https://github.com/xaviifar",
        target: "_blank",
    },
    {
        label: "LinkedIn",
        src: "/icons/linkedin.svg",
        href: "https://www.linkedin.com/in/xavi-far/",
        target: "_blank",
    },
    {
        label: "Email",
        src: "/icons/mail.svg",
        href: "mailto:xavi@example.com",
    },
    {
        label: "Download CV",
        src: "/icons/cv.svg",
        href: "/cv",
    },
    {
        label: "AI",
        src: "/icons/claude.svg",
        href: "#ai",
        dividerBefore: true,
    },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#f3f3f1] text-[#1d1d1d]">
            {/* Main navigation */}
            <nav className="absolute left-1/2 top-8 flex -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-[#f5f5f2]/90 px-2 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-sm">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className={
                            item.primary
                                ? "flex h-7 items-center gap-1.5 rounded-full bg-[#161616] px-3.5 text-[0.7rem] font-medium text-white transition-colors duration-200 ease-out hover:bg-[#161616]/85"
                                : "flex h-7 items-center gap-1.5 rounded-full px-3 text-[0.7rem] font-medium text-black/70 transition-colors duration-200 ease-out hover:bg-black/[0.04] hover:text-black/90"
                        }
                    >
                        <span className="h-3.5 w-3.5">{item.icon}</span>
                        {item.label}
                    </a>
                ))}
            </nav>

            {/* Hero content */}
            <div className="flex min-h-screen flex-col items-center justify-center pt-4">
                <div className="mb-4 flex flex-col items-center">
                    <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border border-black/10 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] sm:h-36 sm:w-36">
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
                    <span className="inline-block align-middle">
                        AI Engineer
                    </span>

                    <span
                        className="mx-2 inline-flex h-[0.7rem] items-center align-middle sm:mx-3 lg:mx-4"
                        aria-hidden="true"
                    >
                        <img
                            className="h-12 sm:h-18"
                            src="/icons/dev.svg"
                            alt=""
                        />
                    </span>

                    <span className="inline-block align-middle">
                        Big Data
                    </span>

                    <br />

                    <span className="inline-block align-middle">
                        &amp; Backend Dev
                    </span>
                </h1>

                {/* Social / resources navigation */}
                <nav
                    className="nav mt-16 sm:mt-20"
                    aria-label="External profiles and resources"
                >
                    {/* Desktop */}
                    <ul className="m-0 hidden list-none items-center gap-1 p-0 md:flex">
                        {socials.map((social) => (
                            <React.Fragment key={social.label}>
                                {social.dividerBefore && (
                                    <li
                                        aria-hidden="true"
                                        className="mx-2 h-12 w-px bg-black/25"
                                    />
                                )}

                                <li className="app group relative flex flex-row items-center justify-center">
                                    <a
                                        href={social.href || "#"}
                                        target={social.target}
                                        rel={
                                            social.target === "_blank"
                                                ? "noreferrer noopener"
                                                : undefined
                                        }
                                        className="flex h-16 w-16 items-center justify-center overflow-hidden"
                                        aria-label={social.label}
                                        title={social.label}
                                    >
                                        <Image
                                            src={social.src}
                                            alt=""
                                            width={44}
                                            height={44}
                                            className="h-14 w-14 object-contain"
                                        />
                                    </a>

                                    <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#161616] px-2.5 py-1 text-[0.8rem] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                        {social.label}
                                    </span>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>

                    {/* Mobile */}
                    <ul className="m-0 grid list-none grid-cols-3 items-center gap-4 p-0 md:hidden">
                        {socials.map((social) => (
                            <li
                                key={social.label}
                                className="app group relative flex flex-col items-center justify-center"
                            >
                                <a
                                    href={social.href || "#"}
                                    target={social.target}
                                    rel={
                                        social.target === "_blank"
                                            ? "noreferrer noopener"
                                            : undefined
                                    }
                                    className="flex h-20 w-20 items-center justify-center overflow-hidden"
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    <Image
                                        src={social.src}
                                        alt=""
                                        width={44}
                                        height={44}
                                        className="h-16 w-16 object-contain"
                                    />
                                </a>

                                <span className="pointer-events-none mt-2 block w-full truncate text-center text-[0.8rem] font-medium text-[#161616]">
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
