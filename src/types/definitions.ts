export type translationType = {
    banner: {
        title: string;
        job: string;
        bannerAlt: string
    };
    navbar: {
        about: string;
        aboutLink: string;
        projects: string;
        projectsLink: string;
        contact: string;
        contactLink: string;
    };
    link: {
        linkedinAlt: string;
        linkedinLink: string;
        gitHubAlt: string;
        gitHubLink: string;
    }
};

export type languageType = {
    language: string;
    toggleLanguage: () => void;
    translations: translationType;
};