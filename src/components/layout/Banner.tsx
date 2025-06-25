"use client";

import { titleFont } from "@/assets/fonts";

import { useTranslation } from "@/context/LangContext";

export default function Banner() {
    const { translations } = useTranslation();

    return (
        <header className="h-fit p-4 flex flex-col items-center justify-start overflow-hidden">
            <section className="-mt-[1880px] h-[3000px] w-[3000px] bg-animation bg-no-repeat bg-center animate-spin-slow opacity-20 z-0 bg-contain vsm:-mt-[2350px] vsm:h-[3800px] vsm:w-[3800px] sm:-mt-[2880px] sm:h-[4700px] sm:w-[4700px]"
                     style={{ backgroundImage: "url(/banner-animation.png" }}
            > </section>
        </header>
    )
};