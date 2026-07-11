
function Banner() {
    const username ="Willem April";
    const tagline = "Passionate web developer building real-world projects & creating meaningful applications.";

    return (
        <section className="min-h-screen bg-black text-white flex">
            <div className="container relative flex flex-col">
                {/* top */}
                <div className="h-full flex flex-col items-center justify-center md:items-start text-center md:text-left">
                    <h1 className="text-[clamp(80px,16vw,280px)] md:text-[clamp(120px,16vw,280px)] font-Barlow font-bold tracking-tight uppercase text-transparent bg-clip-text bg-linear-to-r from-white/95 via-gray-400 to-white">{username}</h1>
                    <p className="text-[clamp(20px,2.5vw,24px)] font-Barlow text-text-secondary md:max-w-150 uppercase">
                        {tagline}
                    </p>
                </div>
                {/* bottom */}
                <div className="shrink-0 flex justify-between items-center flex-wrap gap-4 py-6 px-0 border-t border-white/6 text-xs font-normal tracking-[0.03em] max-md:flex-col max-md:items-start max-md:gap-2.5 max-md:py-6">

                    {/* copyright */}
                    <span className="flex items-center gap-1.5 max-md:w-full max-md:justify-between">
                        <span className="text-[0.7rem] tracking-[0.08em] font-medium text-[#6b6b6b] uppercase">
                            ©
                        </span>
                        <span className="text-[#a0a0a0] font-normal">2026</span>
                    </span>
                    {/* based in */}
                    <span className="flex items-center gap-1.5 max-md:w-full max-md:justify-between">
                        <span className="text-[0.7rem] tracking-[0.08em] font-medium text-[#6b6b6b] uppercase">
                            Based In
                        </span>
                        <span className="text-[#a0a0a0] font-normal">Gauteng</span>
                    </span>
                    {/* Role */}
                    <span className="flex items-center gap-1.5 max-md:w-full max-md:justify-between">
                        <span className="text-[0.7rem] tracking-[0.08em] font-medium text-[#6b6b6b] uppercase">
                            role
                        </span>
                        <span className="text-[#a0a0a0] font-normal">Full-Stack Developer</span>
                    </span>


                </div>
            </div>
        </section>
    )
}

export default Banner