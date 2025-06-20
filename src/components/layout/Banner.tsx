"use client";

import { titleFont } from "@/assets/fonts";

import { useTranslation } from "@/context/LangContext";

export default function Banner() {
    const { translations } = useTranslation();

    return (
        <header className={`h-screen p-4 flex flex-col items-center justify-start overflow-hidden text-center text-light ${titleFont.className}`}>
            <section className="-mt-[1100px] h-[3000px] w-[3000px] bg-animation bg-no-repeat bg-center animate-spin-slow opacity-20 z-0 bg-contain vsm:-mt-[1450px] sm:-mt-[2080px] sm:h-[4000px] sm:w-[4000px] lg:-mt-[1500px] xl:-mt-[1600px] 2xl:-mt-[1850px]"
                     style={{ backgroundImage: "url(/banner-animation.png" }}
            > </section>
            <section className="p-2 absolute top-1/3 text-xl vsm:text-3xl sm:text-5xl">
                    <h1 className="z-10 inline">{translations.banner.title}</h1>
                    <h2 className="z-10 inline text-interest">{translations.banner.job}</h2>
            </section>
        </header>
    )
};