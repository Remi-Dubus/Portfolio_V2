import type { contactFormType } from "@/types/definitions";

export async function sendEmail(contactForm: contactFormType) {

    const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
    });

    if (!response.ok) {
        return { success: false };
    }

    return await {
        success: true,
    };
}