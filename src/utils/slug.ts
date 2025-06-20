import {projectType} from "@/types/definitions";

export function slugify(text: string): string {
    return text
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9 -]/g, "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export function compareSlugToProjectsName({ projects, params }: { projects: projectType[]; params: string }) : projectType | null {
    const convertParams = params.split("/")[2].split("-").join(" ");

    let currentProject: projectType | null = null

    for (const project of projects) {
        if(convertParams === project.name?.toLowerCase()) {
            currentProject = project;
        }
    }

    return currentProject
};