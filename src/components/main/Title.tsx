import { titleFont } from "@/assets/fonts";

import { useTranslation } from "@/context/LangContext";

export default function Title() {
    const { translations } = useTranslation();

    return (
        <article className={`p-2 absolute top-1/3 text-center w-full text-light text-xl vsm:text-3xl sm:text-5xl lg:top-0 lg:relative lg:flex lg:flex-col lg:item-center lg:justify-center lg:h-screen lg:snap-start 2xl:text-7xl ${titleFont.className}`}>
            <section className="lg:pb-40">
                <h1 className="z-10 inline">{translations.banner.title}</h1>
                <h2 className="z-10 inline text-interest lg:my-auto">{translations.banner.job}</h2>
            </section>
        </article>
    );
}