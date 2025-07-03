import { technoColor } from "@/utils/technoColor";

export default function TechnoIcones(technos: { techno: string[] }) {

    return (
        <article className="grid grid-cols-3 w-full my-6 gap-3 sm:px-15 sm:text-lg sm:h-10 lg:my-2 lg:px-0 lg:h-8 xl:my-4 2xl:mt-8">
            {technos["techno"].map((techno: string) => (
                <section key={techno} className={`shadow-shadow shadow-md text-center rounded-full flex flex-col justify-center ${technoColor(techno)}`}>
                    <p>{techno}</p>
                </section>
            ))}
        </article>
    )
};