import Image from "next/image";

import { useTranslation } from "@/context/LangContext";
import {convertAboutTranslation} from "@/utils/convertObjectToArray";
import {mainTitleFont} from "@/assets/fonts";

export default function About() {
    const { translations } = useTranslation();

    const about = convertAboutTranslation(translations.about);

    return (
        <article className="h-screen p-1 sm:p-4 xl:flex xl:flex-col xl:justify-center xl:px-20">
            <figure className="relative px-1 vsm:p-4">
                <h2 className={`text-2xl text-interest sm:text-4xl sm:text-center lg:text-start lg:mb-8 xl:text-5xl xl:mb-20 ${mainTitleFont.className}`}>{translations.about.aboutTitle}</h2>
                <Image
                    src="/remidubus.png"
                    alt="Rémi Dubus"
                    width={300}
                    height={300}
                    sizes="(min-width: 1024px) 300px, 100px"
                    className="w-[100px] my-6 vsm:w-[120px] sm:my-8 sm:w-[200px] lg:my-0 lg:mt-2 lg:ml-2 lg:w-[270px] rounded-lg mx-auto lg:float-left lg:mr-8 lg:mb-8"
                />
                <figcaption>
                    {about.map((e) => (
                        <p key={e.key} className="text-light text-sm mt-1 vsm:text-md vsm:mt-2 sm:mt-4 sm:text-xl xl:text-2xl">
                            {e.about}
                        </p>
                    ))}
                </figcaption>
            </figure>
        </article>
    )
}