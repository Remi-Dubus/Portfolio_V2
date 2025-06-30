import { useState } from "react";
import Slider from "react-slick";

import { titleFont } from "@/assets/fonts";

import { useTranslation } from "@/context/LangContext";
import { convertProjectsTranslation } from "@/utils/convertObjectToArray";
import { CustomNextArrow, CustomPrevArrow } from "@/components/ui/Arrows";
import ProjectCard from "@/components/main/ProjectCard";


export default function Projects() {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        arrows: false,
        draggable: false,
        infinite: true,
        speed: 2500,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "0px",
        beforeChange: (before: number, i: number) => setActiveSlide(i),
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    nextArrow: <CustomNextArrow />,
                    prevArrow: <CustomPrevArrow />,
                    draggable: true,
                    speed: 1750,
                    autoplaySpeed: 3800,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 728,
                settings: {
                    arrows: false,
                    draggable: true,
                    speed: 1250,
                    autoplaySpeed: 3800,
                    slidesToShow: 1,
                },
            },
        ],
    };

    const { translations } = useTranslation();

    const projects = convertProjectsTranslation(translations.projects);

    return (
        <article id="project" className="relative min-h-96 mt-14 sm:p-4 sm:mt-18 lg:p-4 lg:h-screen lg:snap-start">
            <h2 className={`text-2xl text-interest text-center sm:text-4xl lg:mt-14 lg:relative lg:z-15 xl:text-5xl xl:mb-8 2xl:text-6xl ${titleFont.className}`}>{translations.navbar.projects}</h2>
            <Slider {...settings} className="mx-auto mt-2 vsm:mt-0 flex flex-col vsm:mb-4 sm:mb-0 sm:w-11/12 lg:w-full lg:mb-auto">
                {projects.map((el, index) => (
                    <ProjectCard
                        key={el.index}
                        index={index}
                        name={el.name}
                        alt={el.alt}
                        resume={el.resume}
                        mobilePicture={el.mobilePicture}
                        activeSlide={activeSlide}
                    />
                ))}
            </Slider>
        </article>
    )
};