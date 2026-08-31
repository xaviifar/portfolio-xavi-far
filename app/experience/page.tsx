export default function Experience() {
    return (
        <div className="mt-10 mx-10 flex flex-col align-center justify-center">
            
            <a className="flex flex-row" href="/">
                <svg className="w-1 h-1"></svg>
                <span className="underline"> Back </span>
            </a>
            
            <div className="mt-10">
                <h3><span className="text-2xl">Hi, im Xavi 👋</span></h3>
                <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ea sapiente dicta odit obcaecati sit in veniam dolores!</p>

                <p className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, corporis quas magnam iste consequatur.</p>

            </div>

            <div className="mt-12">
                <span>EXPERIENCE</span>

                <ol className="mt-6 flex flex-col">
                    <li className="flex gap-2 px-2 ">
                            <img className="w-10 h-10" src="/img/esdi.webp" alt="" />
                                <div className="flex flex-col">
                                <div className="flex flex-col mx-2 ">
                                    <div className="flex flex-col sm:flex-row">
                                        <h3 className="text-[1.2rem]">Python Developer</h3>
                                        <span className="period  text-[0.9rem]">Jul 25 - Ago 26 </span>
                                    </div>
                                    <p>ESDI Systems</p>
                                    <p className="mt-2 text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, deserunt commodi eaque officia dignissimos enim praesentium</p>
                                </div>  
                                <div className="flex flex-col mx-2 mt-3">
                                    <div className="flex flex-col sm:flex-row">
                                        <h3 className="text-[1.2rem]">Python Developer</h3>
                                        <span className="period  text-[0.9rem]">Ene 26 - Jun 26 </span>
                                    </div>
                                    <p>ESDI Systems</p>
                                </div>  
                                </div>
                                 
                    </li>

                    <li className="mt-15 flex gap-2 px-2 ">
                            <img className="w-10 h-10" src="/img/pt.webp" alt="" />
                                <div className="flex flex-col mx-2 ">
                                    <div className="flex flex-col sm:flex-row">
                                        <h3 className="text-[1.2rem]">Soporte IT</h3>
                                        <span className="period  text-[0.9rem]">Jul 25 - Ago 26 </span>
                                    </div>
                                    <p>Fundació Pere Tarrés</p>
                                </div>   
                    </li>
                </ol>
            </div>

        </div>

    )
}