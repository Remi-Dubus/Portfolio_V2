"use client";

export default function Banner() {

    return (
        <header className="h-fit p-4 flex flex-col items-center justify-start overflow-hidden lg:relative lg:h-screen">
            <section className="-mt-[1980px] border-2 border-purple-500 h-[3200px] w-[3200px] bg-animation bg-no-repeat bg-center animate-spin-slow opacity-20 z-0 bg-contain vsm:-mt-[2800px] vsm:h-[4450px] vsm:w-[4450px] sm:-mt-[2880px] sm:h-[4640px] sm:w-[4640px] ls:-mt-[3350px] ls:h-[5500px] ls:w-[5500px] lg:-mt-760 lg:h-[4800px] lg:w-[4800px] lg:absolute -lg:translate-x-1/2 -lg:right-1/2"
                     style={{ backgroundImage: "url(/banner-animation.png" }}
            />
        </header>
    )
};