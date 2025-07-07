"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Title from "@/components/main/Title";
import About from "@/components/main/About";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Contact from "@/components/main/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="h-screen overflow-x-hidden lg:overflow-y-scroll lg:absolute lg:top-0 lg:w-screen lg:snap-y lg:snap-mandatory">
        <Title />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <article className="lg:hidden">
            <Footer />
        </article>
    </main>
  );
};