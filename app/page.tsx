"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner from "@/components/layout/Banner";
import About from "@/components/main/About";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-shadow via-dark to-active-dark">
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </main>
  );
};
