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
                    speed: 2000,
                    autoplaySpeed: 3800,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 728,
                settings: {
                    arrows: false,
                    draggable: true,
                    speed: 2000,
                    autoplaySpeed: 3800,
                    slidesToShow: 1,
                },
            },
        ],
    };

    const { translations } = useTranslation();

    const projects = convertProjectsTranslation(translations.projects);


    return (
        <article id="project" className="min-h-screen vsm:min-h-auto lg:p-4 lg:h-screen lg:snap-start">
            <h2 className={`text-2xl text-interest text-center sm:text-4xl lg:mt-14 xl:text-5xl xl:mb-8 2xl:mt-26 2xl:text-6xl ${titleFont.className}`}>{translations.navbar.projects}</h2>
            <Slider {...settings} className="mx-auto flex flex-col vsm:my-18 lg:my-0 lg:mb-auto">
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