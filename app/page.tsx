"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from "@/components/main/About";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
    </main>
  );
};
