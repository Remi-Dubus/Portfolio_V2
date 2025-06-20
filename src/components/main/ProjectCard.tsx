import Link from "next/link";
import Image from "next/image";

import { titleFont } from "@/assets/fonts";

import { projectType } from "@/types/definitions";
import {slugify} from "@/utils/slug";


export default function ProjectCard(
    {
        index,
        name,
        resume,
        mobilePicture,
        activeSlide,
    } : projectType
) {
    const slug = name && slugify(name);

    return (
        <section className="vsm:h-[80vh] p-6">
            <Link href={`projects/${slug}`} className="h-[70vh]">
                <figure className={`relative flex h-[65vh] vsm:h-[60vh] w-[80vw] mx-auto flex-col justify-center rounded-lg items-center group transition-all duration-1000 hover:opacity-100 hover:drop-shadow-[0_0_10px_#C6C6CF] vsm:mt-8 hover:sm:drop-shadow-[0_0_15px_#C6C6CF] sm:h-[55vh] sm:w-[38vw] lg:w-[15vw] lg:h-[50vh] hover:lg:scale-110 ${index === activeSlide ? "z-30 lg:scale-110" : "z-20 lg:scale-90 lg:opacity-60"}`}>
                    {mobilePicture && name && (
                        <Image
                            src={mobilePicture}
                            alt={name}
                            fill
                            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 38vw, 15vw"
                            className="rounded-lg"
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