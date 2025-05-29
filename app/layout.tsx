import type { Metadata } from "next";
import "./globals.css";

import { paragraphFont } from "@/assets/fonts";

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
      <body
        className={`${paragraphFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
