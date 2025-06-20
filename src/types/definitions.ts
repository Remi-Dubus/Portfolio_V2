import { StaticImageData } from "next/image";
import { CSSProperties } from "react";

export type translationType = {
    banner: {
        title: string;
        job: string;
        bannerAlt: string;
    };
    navbar: {
        about: string;
        aboutLink: string;
        projects: string;
        projectsLink: string;
        contact: string;
        contactLink: string;
    };
    languageButton: {
        flagAlt: string;
    },
    link: {
        linkedinAlt: string;
        linkedinLink: string;
        gitHubAlt: string;
        gitHubLink: string;
    },
    about: {
        aboutTitle: string;
        aboutTextPart1: string;
        aboutTextPart2: string;
        aboutTextPart3: string;
        aboutTextPart4: string;
        aboutTextPart5: string;
    },
    skills: {
        skillsTitle: string;
    },
    projects: {
        croustiEatName: string;
        croustiEatResume: string;
        croustiEatText: string;
        croustiEatLink: string;
        croustiEatGitHub: string;
        croustiEatTechno: string[];

        buyAPlanetName: string;
        buyAPlanetResume: string;
        buyAPlanetText: string;
        buyAPlanetLink: string;
        buyAPlanetGitHub: string;
        buyAPlanetTechno: string[];

        eShopName: string;
        eShopResume: string;
        eShopText: string;
        eShopLink: string;
        eShopGitHub: string;
        eShopTechno: string[];

        boarderLineName: string;
        boarderLineResume: string;
        boarderLineText: string;
        boarderLineLink: string;
        boarderLineGitHub: string;
        boarderLineTechno: string[];

        portFolioName: string;
        portFolioResume: string;
        portFolioText: string;
        portFolioLink: string;
        portFolioGitHub: string;
        portFolioTechno: string[];

        geocodeName: string;
        geocodeResume: string;
        geocodeText: string;
        geocodeLink: string;
        geocodeGitHub: string;
        geocodeTechno: string[];

        fournilExpressName: string;
        fournilExpressResume: string;
        fournilExpressText: string;
        fournilExpressLink: string;
        fournilExpressGitHub: string;
        fournilExpressTechno: string[];
    };
    projectPage: {
        gitHubLink: string;
        deployedWebSite: string;
        notDeployedWebSite: string;
    };
    contact: {
        contactTitle: string;
        contactName: string;
        contactMail: string;
        contactMessage: string;
        contactButton: string;
        contactSuccess: string;
        contactError: string;
    };
    errorMessage: {
        required: string;
        text: string;
        email: string;
        minCharName: string;
        minCharEmail: string;
        minCharText: string;
        maxChar: string;
    };
    footer: {
        freepikText: string;
        freepikLink: string;
        simpleIconsText: string;
        simpleIconsLink: string;
    }
};

export type languageType = {
    language: string;
    toggleLanguage: () => void;
    translations: translationType;
    flag: StaticImageData;
};

export type projectType = {
    index?: number;
    name?: string;
    resume?: string;
    text?: string;
    link?: string;
    gitHub?: string;
    techno?: string[];
    activeSlide?: number;
    mobilePicture?: StaticImageData;
    desktopPicture?: StaticImageData;
};

export type arrowType = {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
};

export type contactFormType = {
    name: string;
    email: string;
    text: string;
};
