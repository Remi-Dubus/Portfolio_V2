import Image from "next/image";

import { useTranslation } from "@/context/LangContext";

export default function SwitchLanguageButton() {
    const { flag, toggleLanguage, translations } = useTranslation();

    return <button onClick={toggleLanguage} className="fixed z-20 w-[3rem] h-[3rem] right-16 top-2 border-2 border-light rounded-lg sm:top-4 sm:right-20 sm:w-[3.5rem] sm:h-[3.5rem] lg:top-3 lg:right-4 lg:w-[3rem] lg:h-[3rem]">
        <Image src={flag} alt={translations.languageButton.flagAlt} fill sizes="(max-width: 640px) 80vw, (max-width: 1024px) 38vw, 15vw" className="rounded-lg"/>
    </button>
}