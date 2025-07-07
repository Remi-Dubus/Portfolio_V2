import type { Metadata } from "next";
import { Bounce, ToastContainer } from "react-toastify";
import "./globals.css";

import { paragraphFont } from "@/assets/fonts";

import Banner from "@/components/layout/Banner";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/layout/Footer";
import { LangProvider } from "@/context/LangContext";

export const metadata: Metadata = {
  title: "Portfolio | Rémi Dubus",
  description: "Junior web developer with skills in HTML, CSS, Typescript, Vite, React.js, Next.js, Node.js, Express.js, PostgreSQL and MySQL.",
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
                className={`${paragraphFont.className} antialiased min-h-screen overflow-x-hidden flex flex-col`}
            >
                <Banner />
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
                <article className="hidden lg:block lg:absolute lg:bottom-0 lg:w-full">
                    <Footer />
                </article>
            </body>
        </LangProvider>
    </html>
  );
};
