"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { titleFont } from "@/assets/fonts";

import { useTranslation } from "@/context/LangContext";
import { convertProjectsTranslation } from "@/utils/convertObjectToArray";
import { compareSlugToProjectsName } from "@/utils/slug";
import TechnoIcones from "@/components/ui/TechnoIcones";

export default function  ProjectPages() {
    const params = usePathname();

    const { translations } = useTranslation();
    const projects = convertProjectsTranslation(translations.projects);

    const currentProject = compareSlugToProjectsName({ projects: projects, params});

    return (
        <main className="min-h-[70vh] vsm:min-h-[18vh] sm:min-h-auto sm:h-auto lg:h-[25vh]">
            <article className="absolute top-16 px-2 vsm:px-5 gap-4 flex flex-col items-center justify-center sm:top-24 lg:px-10 lg:grid lg:grid-cols-2 lg:top-38 2xl:top-45 2xl:mx-30">
                <figcaption className={`text-2xl text-center text-interest sm:text-4xl xl:text-5xl lg:absolute lg:-top-14 lg:left-10 2xl:-top-20 ${titleFont.className}`}>
                    {currentProject?.name}
                </figcaption>
                <figure className="relative w-55 h-30 vsm:h-45 vsm:w-64 sm:h-70 sm:w-96 lg:w-[100%] xl:h-[30vw] lg:col-start-1 2xl:w-[40vw] 2xl:h-[50vh]">
                    {currentProject?.desktopPicture && currentProject?.name && currentProject?.alt && (
                        <Image
                            src={currentProject?.desktopPicture}
                            alt={currentProject?.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, 80vw"
                            className="rounded-lg"
                        />
                    )}
                </figure>
                <section className="w-full flex flex-col gap-2 items-center lg:col-start-1">
                    {currentProject?.gitHub && (
                        <Link
                            href={currentProject?.gitHub}
                            className="text-interest relative inline-block after:absolute after:left-0 after:-bottom-0 after:h-0.5 after:w-0 after:bg-interest after:transition-all after:duration-600 hover:after:w-full active:text-active-interest vsm:text-md sm:text-xl xl:text-2xl"
                        >
                            {translations.projectPage.gitHubLink}
                        </Link>
                    )}
                    {currentProject?.link && currentProject?.link !== "#" ? (
                        <Link
                            href={currentProject?.link}
                            className="text-interest relative inline-block after:absolute after:left-0 after:-bottom-0 after:h-0.5 after:w-0 after:bg-interest after:transition-all after:duration-600 hover:after:w-full active:text-active-interest vsm:text-md sm:text-xl xl:text-2xl"
                        >
                            {translations.projectPage.deployedWebSite}</Link>
                    ) : (
                        <p className="text-light vsm:text-md sm:text-xl xl:text-2xl">{translations.projectPage.notDeployedWebSite}</p>
                    )}
                </section>
                <section  className="min-h-[75vh] sm:px-20 sm:min-h-auto lg:col-start-2 lg:px-15 lg:row-start-1 lg:row-span-2">
                    <p className="inline-block text-light vsm:text-md sm:text-xl xl:text-2xl">{currentProject?.text}</p>
                    {currentProject?.techno && (
                        <TechnoIcones techno={currentProject?.techno} />
                    )}
                </section>
            </article>
        </main>
    );
}