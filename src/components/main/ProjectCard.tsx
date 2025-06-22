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
        <section className="min-h-auto lg:h-[60vh]">
            <Link href={`projects/${slug}`} className="min-h-[80vh]">
                <figure className={`relative aspect-[4/3] h-90 flex w-[80vw] mx-auto flex-col justify-center rounded-lg items-center group transition-all duration-1000 hover:opacity-100 hover:drop-shadow-[0_0_10px_#C6C6CF] hover:sm:drop-shadow-[0_0_15px_#C6C6CF] my-10 vsm:my-18 vsm:w-[74vw] sm:mt-20 sm:mb-36 sm:h-[25rem] sm:w-[36vw] lg:w-[18vw] lg:h-[50vh] hover:lg:scale-110 ${index === activeSlide ? "z-30 lg:scale-110" : "z-20 lg:scale-90 lg:opacity-60"}`}>
                    {mobilePicture && name && alt && (
                        <Image
                            src={mobilePicture}
                            alt={alt}
                            fill
                            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 38vw, 15vw"
                            className="rounded-lg "
                        />
                    )}

                    <figcaption
                        className={`absolute bottom-0 left-0 w-full h-1/2 z-30 flex flex-col justify-center gap-4 bg-black/70 text-light p-1 rounded-b-lg transition-all duration-500 scale-100 group-hover:opacity-100 lg:rounded-lg lg:opacity-0 lg:scale-95 lg:group-hover:scale-100 lg:top-0 lg:h-full`}
                    >
                        <h3 className={`text-xl mb-2 sm:text-2xl lg:text-xl ${titleFont.className}`}>{name}</h3>
                        <p className="sm:text-xl lg:text-sm">{resume}</p>
                    </figcaption>
                </figure>
            </Link>
        </section>
    )
}