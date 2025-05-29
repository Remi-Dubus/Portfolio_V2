"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import type { languageType } from "@/types/definitions";

// Import JSON locales
import fr from "../assets/locales/fr.json";
import en from "../assets/locales/fr.json";

const translations = { en, fr };

// Context creation
const LangContext = createContext<languageType>({
    language: "fr",
    toggleLanguage: () => undefined,
    translations: translations.fr
});

// Provide context
export function LangProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<"fr" | "en">("fr");

    const toggleLanguage = () => {
        setLanguage(language === "fr" ? "en" : "fr");
    };

    const value = {
        language,
        toggleLanguage,
        translations: translations[language],
    };

    return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

// Consume context
export const useTranslation = (): languageType => {
    return useContext(LangContext);
};