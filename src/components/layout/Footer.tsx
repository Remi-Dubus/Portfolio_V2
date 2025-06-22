"use client";

import { useTranslation } from "@/context/LangContext";
import Link from "next/link";

export default function Footer() {
    const { translations } = useTranslation()

    return (
        <footer className="h-30 flex flex-col items-center text-light justify-center w-full gap-2 sm:text-lg sm:h-50 lg:text-xl">
            <p>
                Portfolio | Rémi Dubus &copy;2025
            </p>
            <p>
                {translations.footer.freepikText}
                <Link href="http://www.freepik.com" className="text-interest relative inline-block after:absolute after:left-0 after:-bottom-0 after:h-0.5 after:w-0 after:bg-interest after:transition-all after:duration-600 hover:after:w-full active:text-active-interest">
                    {translations.footer.freepikLink}
                </Link>
            </p>
            <p>
                {translations.footer.simpleIconsText}
                <Link href="https://simpleicons.org/" className="text-interest relative inline-block after:absolute after:left-0 after:-bottom-0 after:h-0.5 after:w-0 after:bg-interest after:transition-all after:duration-600 hover:after:w-full active:text-active-interest">
                    {translations.footer.simpleIconsLink}
                </Link>
            </p>
        </footer>
    );
};