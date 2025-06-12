"use client";

import { useState } from "react";
import Link from "next/link";

import { useTranslation } from "@/context/LangContext";

import BurgerButton from "@/components/navigation/BurgerButton";
import SwitchLanguageButton from "@/components/navigation/SwitchLanguageButton";
import {convertMenuTranslation} from "@/utils/convertObjectToArray";

export default function NavBar (){
    const [openMenu, setOpenMenu] = useState(false);
    const handleClickMenu = () => setOpenMenu(!openMenu);

    const { translations } = useTranslation();

    const menu = convertMenuTranslation(translations.navbar);

    return (
       <header>
           <SwitchLanguageButton />
           <BurgerButton handleClickMenu={handleClickMenu} openMenu={openMenu} />
           <section className={`z-15 h-screen inset-0 overflow-auto top-0 fixed transition-all duration-1000 bg-black/60 backdrop-blur-sm lg:overflow-hidden ${openMenu ? "opacity-100" : "opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100 lg:bg-black/0 lg:backdrop-blur-none"}`}>
               <ul className={`fixed h-screen w-screen flex justify-center gap-4 pb-45 flex-col text-light font-paragraph transform duration-1000 ease-in-out sm:gap-12 lg:flex-row lg:justify-end lg:gap-0 lg:h-18 lg:bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))] ${openMenu ? "-translate-x-0" : "lg:opacity-100 lg:-translate-x-0 translate-x-full opacity-0"}`}>
                   {menu.map((el, index) => (
                       <li
                           className={`text-lightcolor p-2 vsm:p-4 lg:h-18 lg:px-0 ${index === menu.length - 1 ? "mr-20" : "mr-0"}`}
                           key={el.name}
                       >
                           <Link href={el.link ? el.link : "#"} className="text-xl hover:text-interest relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-interest after:transition-all after:duration-600 hover:after:w-full active:text-active-interest vsm:text-2xl sm:text-3xl sm:ml-4 xl:mr-5 xl:text-2xl 2xl:text-3xl 2xl:mr-10">{el.name}</Link>
                       </li>
                   ))}
               </ul>
               <ul>
                   <li className="fixed bottom-8 flex justify-center gap-8 w-full sm:mb-6 lg:flex lg:justify-end lg:mr-20 lg:right-0.5">
                       <Link href={translations.link.gitHubLink}>
                           <svg
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 24 24"
                               fill="currentColor"
                               className="w-12 h-12 p-0.5 text-light cursor-pointer duration-300 active:scale-110 hover:text-interest sm:h-16 sm:w-16 lg:opacity-50 lg:hover:opacity-100"
                           >
                               <path xmlns="http://www.w3.org/2000/svg" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                           </svg>
                       </Link>
                       <Link href={translations.link.linkedinLink}>
                           <svg
                               xmlns="http://www.w3.org/2000/svg"
                               x="0px"
                               y="0px"
                               viewBox="0 0 50 50"
                               fill="currentColor"
                               className="w-12 h-12 text-light cursor-pointer duration-300 active:scale-110 hover:text-interest sm:h-16 sm:w-16 lg:opacity-50 lg:hover:opacity-100 lg:h-16 lg:w-16"
                           >
                               <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                           </svg>
                       </Link>
                   </li>
               </ul>
           </section>
       </header>
    )
};