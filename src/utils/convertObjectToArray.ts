export function convertMenuTranslation(
    translation: Record<string, string>
): { name?: string; link?: string }[] {
    const newTranslationMenu: { name?: string; link?: string }[] = [];
    let element: { name?: string; link?: string } = {};

    const keys = Object.keys(translation);
    let previousKey = "";

    for (const [key, value] of Object.entries(translation)) {
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

export function convertAboutTranslation(translation: Record<string, string>): { key?: number; about?:string }[] {
    let index = 1
    const newTranslationAbout: { key?: number; about?:string }[] = [];

    for(const [key, value] of Object.entries(translation)) {
        if(key.slice(0, 9) === "aboutText") {
            let element: { key?: number; about?:string } = {key: index, about: value};
            newTranslationAbout.push(element);
        }
        index++;
    };

    return newTranslationAbout;
}