import Image from "next/image";
import { mainTitleFont } from "@/assets/fonts";

import { useTranslation } from "@/context/LangContext";

export default function Banner() {
    const { translations } = useTranslation();

    return (
        <header className={`h-screen p-4 flex flex-col items-center justify-start overflow-hidden text-3xl text-center text-light ${mainTitleFont.className}`}>
            <section className="-mt-[1310px] h-[2600px] w-[2600px] animate-spin-slow opacity-30 sm:opacity-20 sm:-mt-[1500px] md:-mt-[1595px] lg:-mt-[1400px] 2xl:h-[3500px] 2xl:w-[3500px] 2xl:opacity-15 2xl:-mt-[2000px]">
                <Image
                    src="/banner-animation.png"
                    alt={translations.banner.bannerAlt}
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="pointer-events-none select-none"
                />
            </section>
            <section className="absolute top-1/3 sm:text-5xl">
                <h1 className="z-10 inline">{translations.banner.title}</h1>
                <h2 className="z-10 inline text-interest">{translations.banner.job}</h2>
            </section>
        </header>
    )
};