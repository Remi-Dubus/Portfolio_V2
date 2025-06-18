import type { Metadata } from "next";
import { Bounce, ToastContainer } from "react-toastify";
import "./globals.css";

import { paragraphFont } from "@/assets/fonts";

import NavBar from "@/components/navigation/NavBar";
import { LangProvider } from "@/context/LangContext";

export const metadata: Metadata = {
  title: "Portfolio | Rémi Dubus",
  description: "Junior web developer with skills in HTML, CSS, Typescript, Vite, React.js, Next.js, Node.js, Express.js & MySQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
        <head>
            <link rel="icon" href="/favicon.ico" />
        </head>
        <LangProvider>
            <body
                className={`${paragraphFont.className} antialiased`}
            >
                <NavBar />
                {children}
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                />
            </body>
        </LangProvider>
    </html>
  );
};
