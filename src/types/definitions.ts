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
    },
    "about": {
        "aboutTitle": string;
        "aboutTextPart1": string;
        "aboutTextPart2": string;
        "aboutTextPart3": string;
        "aboutTextPart4": string;
        "aboutTextPart5": string;
    },
    "skills": {
        "skillsTitle": string;
    }
};

export type languageType = {
    language: string;
    toggleLanguage: () => void;
    translations: translationType;
};