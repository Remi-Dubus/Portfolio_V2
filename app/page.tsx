"use client";

import Banner from "@/components/layout/Banner";
import About from "@/components/main/About";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-shadow via-dark to-active-dark">
        <Banner />
        <About />
        <Skills />
    </main>
  );
};
