import { Montserrat, Quattrocento, Work_Sans} from "next/font/google";

export const mainTitleFont = Montserrat({
    weight: ["600"],
    subsets: ["latin"],
});

export const titleFont = Quattrocento({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const paragraphFont = Work_Sans({
    subsets: ["latin"],
});