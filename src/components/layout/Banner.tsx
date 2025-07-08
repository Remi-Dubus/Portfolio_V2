"use client";

export default function Banner() {

    return (
        <header className="flex flex-col items-center justify-start overflow-x-hidden">
            <section
                className="fixed top-0 left-0 w-full min-h-[120dvh] z-[-1] bg-gradient-to-b from-shadow via-dark to-active-dark"
                style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform',
                }}
            />
            <section className="will-change-transform backface-hidden fixed -mt-[1980px] border-2 h-[3200px] w-[3200px] bg-animation bg-no-repeat bg-center animate-spin-slow opacity-20 z-0 bg-contain vsm:-mt-[2800px] vsm:h-[4450px] vsm:w-[4450px] sm:-mt-[2900px] sm:h-[4640px] sm:w-[4640px] lg:-mt-760 lg:h-[4800px] lg:w-[4800px] -lg:translate-x-1/2 -lg:right-1/2"
                     style={{
                         backgroundImage: `url(/banner-animation.png)`,
                         backfaceVisibility: 'hidden',
                         willChange: 'transform',
                     }}
            />
        </header>
    )
};
