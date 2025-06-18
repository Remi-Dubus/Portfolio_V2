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
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
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
                    arrows: false,
                    draggable: true,
                    speed: 2000,
                    autoplaySpeed: 3800,
                    slidesToShow: 2,
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
        <article className="h-screen">
            <h2 className={`text-2xl text-interest sm:text-4xl sm:p-4 sm:text-center lg:text-start lg:mb-8 xl:px-20 xl:text-5xl xl:mb-20 ${titleFont.className}`}>{translations.navbar.projects}</h2>
            <Slider {...settings} className="w-11/12 mt-10 h-[70vh] mx-auto flex flex-col sm:mt-20">
                {projects.map((el, index) => (
                    <ProjectCard
                        key={el.index}
                        index={index}
                        name={el.name}
                        resume={el.resume}
                        mobilePicture={el.mobilePicture}
                        activeSlide={activeSlide}
                    />
                ))}
            </Slider>
        </article>
    )
};