import type { Metadata } from "next";
import "./globals.css";

import { paragraphFont } from "@/assets/fonts";
import NavBar from "@/components/navigation/NavBar";
import {LangProvider} from "@/context/LangContext";

export const metadata: Metadata = {
  title: "Portfolio | Rémi Dubus",
  description: "Junior web developer with skills in HTML, CSS, Typescript, Vite React, Next.js, Node.js, Express & MySQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
        <LangProvider>
            <body
                className={`${paragraphFont.className} antialiased`}
            >
                <NavBar />
                {children}
            </body>
        </LangProvider>
    </html>
  );
};
