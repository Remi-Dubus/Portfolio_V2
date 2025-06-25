import { titleFont } from "@/assets/fonts";

import { useTranslation } from "@/context/LangContext";

export default function Title() {
    const { translations } = useTranslation();

    return (
        <article className={`p-2 absolute top-1/3 text-center w-full text-light text-xl vsm:text-3xl sm:text-5xl 2xl:text-6xl ${titleFont.className}`}>
            <h1 className="z-10 inline">{translations.banner.title}</h1>
            <h2 className="z-10 inline text-interest">{translations.banner.job}</h2>.
        </article>
    );
}