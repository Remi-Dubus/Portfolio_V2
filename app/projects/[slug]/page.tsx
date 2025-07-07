"use client";

import { notFound, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { titleFont } from "@/assets/fonts";

import { useTranslation } from "@/context/LangContext";
import { convertProjectsTranslation } from "@/utils/convertObjectToArray";
import { compareSlugToProjectsName } from "@/utils/slug";
import ScrollToTop from "@/components/ui/ScrollToTop";
import TechnoIcones from "@/components/ui/TechnoIcones";
import Footer from "@/components/layout/Footer";

export default function  ProjectPages() {
    const params = usePathname();

    const { translations } = useTranslation();
    const projects = convertProjectsTranslation(translations.projects);

    const currentProject = compareSlugToProjectsName({ projects: projects, params});

    if(!currentProject) {
        notFound();
    };

    return (
        <main className="relative overflow-x-hidden min-h-screen flex flex-col justify-between smh-screen sm:min-h-screen">
            <ScrollToTop />
            <article className="relative mt-16 px-2 vsm:px-5 gap-4 flex flex-col items-center justify-center lg:items-start lg:fixed lg:z-20 lg:top-1/4 lg:-translate-y-1/4 lg:px-10 lg:grid lg:grid-cols-2 2xl:top-60 2xl:mx-60">
                <figcaption className={`text-2xl text-center text-interest sm:text-4xl lg:text-start xl:text-5xl 2xl:px-20 ${titleFont.className}`}>
                    {currentProject?.name}
                </figcaption>
                <figure className="relative w-55 h-30 vsm:h-45 vsm:w-64 sm:h-70 sm:w-96 lg:mx-auto lg:mt-4 lg:h-[51vh] lg:w-[40vw] lg:col-start-2 lg:row-span-2 xl:w-[43vw] 2xl:h-[45vh] 2xl:w-[34vw] 2xl:mt-10">
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
                <section className="w-full flex flex-col gap-2 items-center mx-auto lg:col-start-2 lg:w-[40vw] xl:w-[43vw] 2xl:w-[34vw]">
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
                            className="text-interest relative inline-block after:absolute after:left-0 after:-bottom-0 after:h-0.5 after:w-0 after:bg-interest after:transition-all after:duration-600 hover:after:w-full active:text-active-interest vsm:text-md sm:text-xl lg:my-1 xl:text-2xl xl:my-2"
                        >
                            {translations.projectPage.deployedWebSite}</Link>
                    ) : (
                        <p className="text-light vsm:text-md sm:text-xl xl:text-2xl">{translations.projectPage.notDeployedWebSite}</p>
                    )}
                </section>
                <section  className="min-h-fit sm:px-20 sm:min-h-auto lg:col-start-1 lg:px-0 lg:row-start-2 lg:row-span-2 2xl:px-20">
                    <p className="inline-block text-light vsm:text-md sm:text-xl lg:text-lg xl:text-2xl">{currentProject?.text}</p>
                    {currentProject?.techno && (
                        <TechnoIcones techno={currentProject?.techno} />
                    )}
                </section>
            </article>
            <article className="lg:hidden">
                <Footer />
            </article>
        </main>
    );
}
