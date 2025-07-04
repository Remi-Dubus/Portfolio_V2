import Link from "next/link";
import Image from "next/image";

import { titleFont } from "@/assets/fonts";

import { slugify } from "@/utils/slug";

import { projectType } from "@/types/definitions";

export default function ProjectCard(
    {
        index,
        name,
        alt,
        resume,
        mobilePicture,
        activeSlide,
    } : projectType
) {
    const slug = name && slugify(name);

    return (
        <section className="min-h-auto lg:h-[60vh] lg:pt-3 2xl:pt-10">
            <Link href={`projects/${slug}`}>
                <figure className={`relative aspect-[4/3] -top-5 h-90 flex w-[80vw] mx-auto flex-col justify-center rounded-lg items-center group transition-all duration-1000 hover:opacity-100 hover:drop-shadow-[0_0_10px_#C6C6CF] hover:sm:drop-shadow-[0_0_15px_#C6C6CF] my-10 vsm:my-10 vsm:w-[68vw] sm:my-14 sm:mb-16 sm:h-[25rem] sm:w-[36vw] lg:w-[16vw] lg:h-[40vh] hover:lg:scale-110 hover:lg:blur-none hover:lg:grayscale-0 2xl:my-10 2xl:h-[45vh] ${index === activeSlide ? "z-30 lg:scale-110" : "z-20 lg:scale-90 lg:blur-sm lg:grayscale-100"}`}>
                    {mobilePicture && name && alt && (
                        <Image
                            src={mobilePicture}
                            alt={alt}
                            fill
                            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 38vw, 15vw"
                            className="rounded-lg"
                        />
                    )}

                    <figcaption
                        className={`absolute bottom-0 left-0 w-full h-1/2 z-30 flex flex-col gap-2 bg-black/80 text-light p-1 rounded-b-lg transition-all scale-100 group-hover:opacity-100 transform duration-1000 ease-in-out lg:translate-y-20 lg:group-hover:translate-y-0 lg:opacity-0 lg:scale-95 lg:group-hover:scale-100 lg:h-4/6 lg:group-hover:z-20 xl:h-1/2`}
                    >
                        <h3 className={`text-interest text-xlS text-center sm:text-2xl lg:text-xl 2xl:text-3xl ${titleFont.className}`}>{name}</h3>
                        <p className="sm:text-xl lg:text-base xl:px-1 2xl:text-xl 2xl:px-2">{resume}</p>
                    </figcaption>
                </figure>
            </Link>
        </section>
    )
}