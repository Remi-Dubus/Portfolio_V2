export type translationType = {
    banner: {
        title: string;
        job: string;
        bannerAlt: string
    };
};

export type languageType = {
    language: string;
    toggleLanguage: () => void;
    translations: translationType;
};