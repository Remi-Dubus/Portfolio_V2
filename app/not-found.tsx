"use client";

import Link from 'next/link';

import { titleFont } from "@/assets/fonts";

import { useTranslation } from "@/context/LangContext";

export default function NotFound() {
    const { translations } = useTranslation();

    return (
        <main className="h-fit top-1/2 w-screen -translate-y-1/2 overflow-x-hidden text-light absolute z-10 text-center p-2 sm:top-2/5 lg:p-8">
            <h2 className={`mb-4 text-2xl text-interest text-center vsm:text-4xl sm:text-6xl lg:relative lg:mt-10 xl:mb-8 xl:text-5xl 2xl:mt-26 2xl:mb-12 2xl:text-6xl ${titleFont.className}`}>404</h2>
            <p className="inline vsm:text-lg sm:text-2xl lg:text-lg xl:text-xl 2xl:text-3xl">{translations.notFound.notFoundPart1}</p>
            <Link className="text-interest relative inline-block after:absolute after:left-0 after:-bottom-0 after:h-0.5 after:w-0 after:bg-interest after:transition-all after:duration-600 hover:after:w-full active:text-active-interest vsm:text-lg sm:text-2xl lg:text-lg xl:text-xl 2xl:text-3xl" href="/">{translations.notFound.notFoundLink}</Link>
            <p className="inline vsm:text-lg sm:text-2xl lg:text-lg xl:text-xl 2xl:text-3xl">{translations.notFound.notFoundPart2}</p>
        </main>
    )
}