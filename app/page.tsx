"use client";

import Banner from "@/components/layout/Banner";
import About from "@/components/main/About";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-shadow via-dark to-active-dark">
        <Banner />
        <About />
    </main>
  );
};
