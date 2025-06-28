"use client";

export default function Banner() {

    return (
        <header className="h-fit p-4 flex flex-col items-center justify-start overflow-hidden lg:relative lg:h-screen">
            <section className="-mt-[1880px] h-[3000px] w-[3000px] bg-animation bg-no-repeat bg-center animate-spin-slow opacity-20 z-0 bg-contain vsm:-mt-[2350px] vsm:h-[3800px] vsm:w-[3800px] sm:-mt-[2880px] sm:h-[4700px] sm:w-[4700px] lg:-mt-800 lg:absolute -lg:translate-x-1/2 -lg:right-1/2"
                     style={{ backgroundImage: "url(/banner-animation.png" }}
            />
        </header>
    )
};