export default function Experience() {
    return (
        <div className="mt-10 mx-10 flex flex-col justify-center sm:self-center sm:w-xl">

            <a className="flex flex-row items-center " href="/">
                <svg className="w-4 h-4" viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)"> <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#000000"></path> </g> </g></svg>
                <span className="ml-2 underline"> Back </span>
            </a>

            <div className="mt-10">
                <h3><span className="text-2xl">Hi, im Xavi 👋</span></h3>
                <p className="mt-1">
                    I'm a full-stack developer specialized in AI and Big Data,
                    focused on building intelligent systems, AI agents and
                    modern software products.
                </p>

                <p className="mt-2">
                    I enjoy working across the stack, from backend architecture
                    and data pipelines to AI-powered applications.
                </p>

            </div>

            <span className="mt-12">EXPERIENCIA</span>


            <ol className="mt-6 flex flex-col">
                <li className="flex gap-2 px-2 ">
                    <img className="w-10 h-10" src="/img/esdi.webp" alt="" />
                    <div className="flex flex-col">
                        <div className="flex flex-col mx-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-[1.2rem]">Full-stack Developer</h3>
                                <span className="period text-[0.9rem] sm:ml-auto sm: ">Jul 25 - Ago 26</span>
                            </div>
                            <p>ESDI Systems</p>
                            <p className="mt-2 text-xs sm:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, deserunt commodi eaque officia dignissimos enim praesentium</p>
                        </div>

                        <div className="flex flex-col mx-2 mt-3">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-[1.2rem]">Python Developer</h3>
                                <span className="period text-[0.9rem] sm:ml-auto">Ene 26 - Jun 26</span>
                            </div>
                            <p>ESDI Systems</p>
                        </div>
                    </div>

                </li>

                <li className="flex gap-2 px-2 mt-10">
                    <img className="w-10 h-10" src="/img/pt.webp" alt="" />
                    <div className="flex flex-col">
                        <div className="flex flex-col mx-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-[1.2rem]">Técnico sistemas</h3>
                                <span className="period text-[0.9rem] sm:ml-auto sm: ">Dic 23 - Jul 24</span>
                            </div>
                            <p>Fundació Pere Tarrés</p>
                            <p className="mt-2 text-xs sm:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, deserunt commodi eaque officia dignissimos enim praesentium</p>
                        </div>
                    </div>

                </li>
            </ol>
            <div>
                <p className="mt-10 text-xl">He estado trabajando en mis estudios y centrandome en <a><span>proyectos</span></a> para poder aprender</p>
            </div>

            <div className="h-px flex-1 bg-black" />

            <span className="mt-12">EDUCACIÓN</span>
            <ol>
                <li className="flex gap-2 px-2 mt-10">
                    <img className="w-10 h-10" src="/img/udl.jpg" alt="" />
                    <div className="flex flex-col">
                        <div className="flex flex-col mx-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-[1.2rem]">Grado en Ingenieria Informática</h3>
                                <span className="period text-[0.9rem] sm:ml-auto sm: "></span>
                            </div>
                            <p>Universitat de Lleida</p>
                        </div>
                    </div>

                </li>
                <li className="flex gap-2 px-2 mt-10">
                    <img className="w-10 h-10" src="/img/monlau.jpg" alt="" />
                    <div className="flex flex-col">
                        <div className="flex flex-col mx-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-[1.2rem]">Master en IA y Big Data</h3>
                                <span className="period text-[0.9rem] sm:ml-auto sm: ">Set 25 - Jun 26</span>
                            </div>
                            <p>Centre Estudis Monlau</p>
                            <p className="mt-2 text-xs sm:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, deserunt commodi eaque officia dignissimos enim praesentium</p>
                        </div>
                    </div>

                </li>
                <li className="flex gap-2 px-2 mt-10">
                    <img className="w-10 h-10" src="/img/monlau.jpg" alt="" />
                    <div className="flex flex-col">
                        <div className="flex flex-col mx-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-[1.2rem]">Desarrollo aplicaciones Multiplataforma</h3>
                                <span className="period text-[0.9rem] sm:ml-auto sm: ">Set 25 - Jun 26</span>
                            </div>
                            <p>Centre Estudis Monlau</p>
                            <p className="mt-2 text-xs sm:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, deserunt commodi eaque officia dignissimos enim praesentium</p>
                        </div>
                    </div>
                </li>
            </ol>

            {/* <span className="mt-12 text-xs font-medium tracking-[0.2em]">
                EXPERIENCIA
            </span>

            <div className="relative mt-6">
                <div
                    aria-hidden="true"
                    className="
      absolute
      left-5
      top-0
      bottom-0
      w-px
      -translate-x-1/2
      bg-[repeating-linear-gradient(to_bottom,#000_0_5px,transparent_5px_11px)]
      opacity-20
    "
                />

                <ol className="flex flex-col gap-10">
                    <li className="relative flex gap-3">
                        <img
                            src="/img/esdi.webp"
                            alt=""
                            aria-hidden="true"
                            className="z-10 h-10 w-10 shrink-0 rounded-[22%] bg-[#f3f3f1] object-contain"
                        />

                        <div className="min-w-0 flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                <h3 className="text-[1.2rem] font-medium">
                                    Full-stack Developer
                                </h3>

                                <span className="shrink-0 text-[0.9rem] text-black/40">
                                    Jul 2025 — Ago 2026
                                </span>
                            </div>

                            <p className="text-black/60">
                                ESDI Systems
                            </p>

                            <p className="mt-2 text-sm leading-6 text-black/60">
                                Desarrollo de aplicaciones y servicios backend utilizando
                                Python y diferentes tecnologías web.
                            </p>
                        </div>
                    </li>

                    <li className="relative flex gap-3">
                        <img
                            src="/img/pt.webp"
                            alt=""
                            aria-hidden="true"
                            className="z-10 h-10 w-10 shrink-0 rounded-[22%] bg-[#f3f3f1] object-contain"
                        />

                        <div className="min-w-0 flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                <h3 className="text-[1.2rem] font-medium">
                                    Técnico de Sistemas
                                </h3>

                                <span className="shrink-0 text-[0.9rem] text-black/40">
                                    Dic 2023 — Jul 2024
                                </span>
                            </div>

                            <p className="text-black/60">
                                Fundació Pere Tarrés
                            </p>

                            <p className="mt-2 text-sm leading-6 text-black/60">
                                Soporte técnico y mantenimiento de sistemas y equipos
                                informáticos.
                            </p>
                        </div>
                    </li>
                </ol> */}
            </div>




    )
}