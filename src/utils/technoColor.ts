export const technoColor = (techno: string) : string => {
    if (techno === "html") {
        return "bg-html text-white";
    };
    if (techno === "css" || techno === "css module") {
        return "bg-css text-white";
    };
    if(techno === "javascript") {
        return "bg-javascript text-dark";
    };
    if(techno === "typescript") {
        return "bg-typescript text-white";
    };
    if (techno === "postgresql" || techno === "mysql") {
        return "bg-sql  text-white";
    };
    if(techno === "react" || techno === "tailwind") {
        return "bg-interest text-dark";
    };
    if(techno === "node") {
        return "bg-node text-white";
    };
    if(techno === "express") {
        return "bg-white text-dark";
    };
    if(techno === "next") {
        return "border-1 text-light border-light";
    } else {
        return "bg-light";
    };
};