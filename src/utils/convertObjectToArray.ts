import croustiEatMobilePicture from "../assets/images/crousti-eat-mobile.png";
import buyAPlanetMobilePicture from "../assets/images/buy-a-planet-mobile.png";
import eShopMobilePicture from "../assets/images/eshop-mobile.png";
import boarderlineMobilePicture from "../assets/images/boarderline-mobile.png";
import portfolioMobilePicture from "../assets/images/portfolio-mobile.png";
import geocodeMobilePicture from "../assets/images/geocode-mobile.png";
import fournilExpressMobilePicture from "../assets/images/fournil-express-mobile.png";

import croustiEatDesktopPicture from "../assets/images/crousti-eat-desktop.png";
import buyAPlanetDesktopPicture from "../assets/images/buy-a-planet-desktop.png";
import eShopDesktopPicture from "../assets/images/eshop-desktop.png";
import boarderlineDesktopPicture from "../assets/images/boarderline-desktop.png";
import portfolioDesktopPicture from "../assets/images/portfolio-desktop.png";
import geocodeDesktopPicture from "../assets/images/geocode-desktop.png";
import fournilExpressDesktopPicture from "../assets/images/fournil-express-desktop.png";

import type { projectType } from "@/types/definitions";

export function convertMenuTranslation(
    translations: Record<string, string>
): { name?: string; link?: string }[] {
    const newTranslationMenu: { name?: string; link?: string }[] = [];
    let element: { name?: string; link?: string } = {};
    let previousKey = "";

    for (const [key, value] of Object.entries(translations)) {
        if (previousKey.slice(0, 3) === key.slice(0, 3)) {
            element.link = value;
        } else {
            if (Object.keys(element).length > 0) {
                newTranslationMenu.push(element);
            };
            element = { name: value };
        };
        previousKey = key;
    };

    if (Object.keys(element).length > 0) {
        newTranslationMenu.push(element);
    };

    return newTranslationMenu;
};

export function convertAboutTranslation(translations: Record<string, string>): { key?: number; about?:string }[] {
    let index = 1;
    const newTranslationAbout: { key?: number; about?:string }[] = [];

    for(const [key, value] of Object.entries(translations)) {
        if(key.slice(0, 9) === "aboutText") {
            const element: { key?: number; about?:string } = {key: index, about: value};
            newTranslationAbout.push(element);
        };
        index++;
    };

    return newTranslationAbout;
};

export function convertProjectsTranslation(translations: Record<string, string | string[]>): projectType[] {
    const currentPropsObject = (key: string): string => {
        return key.match(/(Name|Text|Alt|Resume|Link|GitHub|Techno)$/)?.[0] || "";
    };

    const newTranslationProjects: projectType[] = [];
    let element: projectType = {};
    let previousKey = "";

    for (const [key, value] of Object.entries(translations)) {
        const currentProps = currentPropsObject(key);

        if (previousKey.slice(0, 4) === key.slice(0, 4)) {
            if(currentProps === "Resume" && typeof value === "string") {
                element.resume = value;
            } else if(currentProps === "Alt" && typeof value === "string") {
                element.alt = value;
            } else if(currentProps === "Text" && typeof value === "string") {
                element.text = value;
            } else if(currentProps === "Link" && typeof value === "string") {
                element.link = value;
            } else if(currentProps === "GitHub" && typeof value === "string") {
                element.gitHub = value;
            } else if(currentProps === "Techno" && Array.isArray(value)) {
                element.techno = value;
            };
        } else {
            if (Object.keys(element).length > 0) {
                newTranslationProjects.push(element);
            };

            if(typeof value === "string") {
                element = { name: value };
            };

        };
        previousKey = key;
    };


    if (Object.keys(element).length > 0) {
        newTranslationProjects.push(element);
    };

    for(const element of newTranslationProjects) {
        const elementLowerCase = element?.name?.split("").map( e => e.toLowerCase()).join("");

        if(elementLowerCase === "crousti eat") {
            element.mobilePicture = croustiEatMobilePicture;
            element.desktopPicture = croustiEatDesktopPicture;
        } else if(elementLowerCase === "buy a planet") {
            element.mobilePicture = buyAPlanetMobilePicture;
            element.desktopPicture = buyAPlanetDesktopPicture;
        } else if(elementLowerCase === "eshop") {
            element.mobilePicture = eShopMobilePicture;
            element.desktopPicture = eShopDesktopPicture;
        } else if(elementLowerCase === "boarder line") {
            element.mobilePicture = boarderlineMobilePicture;
            element.desktopPicture = boarderlineDesktopPicture;
        } else if(elementLowerCase?.split(" ")[2] === "portfolio") {
            element.mobilePicture = portfolioMobilePicture;
            element.desktopPicture = portfolioDesktopPicture;
        } else if(elementLowerCase === "geocode") {
            element.mobilePicture = geocodeMobilePicture;
            element.desktopPicture = geocodeDesktopPicture;
        } else if(elementLowerCase === "fournil express") {
            element.mobilePicture = fournilExpressMobilePicture;
            element.desktopPicture = fournilExpressDesktopPicture;
        };
    };

    return newTranslationProjects;
};