import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { titleFont } from "@/assets/fonts";

import { useTranslation } from "@/context/LangContext";
import { sendEmail } from "@/utils/sendEmail";
import { regex } from "@/utils/regex";

import { contactFormType } from "@/types/definitions";

export default function Contact() {
    const { language, translations } = useTranslation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<contactFormType>({
        defaultValues: {
            name: "",
            email: "",
            text: "",
        },
    });

    useEffect(() => {
        reset();
    }, [language]);

    const[loading, setLoading] = useState<boolean>(false);

    const onSubmitContactForm = async (contactForm: contactFormType) => {
        setLoading(true);

        const response = await sendEmail(contactForm);

        if(response.success) {
            toast.success(translations.contact.contactSuccess);
            setLoading(false);
            reset();
        } else {
            toast.error(translations.contact.contactError);
        };
    };

    return  (
        <article id="contact" className="relative mt-2 flex flex-col sm:mt-0 sm:p-4 lg:h-screen lg:snap-start lg:my-0 xl:px-20 2xl:px-40">
            <h2 className={`text-2xl text-center text-interest sm:text-4xl sm:text-center lg:z-15 lg:mb-4 lg:mt-14 xl:text-5xl xl:mb-10 2xl:mb-12 2xl:text-6xl ${titleFont.className}`}>{translations.contact.contactTitle}</h2>
            <form
                className="w-11/12 h-fit mx-auto flex flex-col item-center pt-1 gap-4 sm:pt-4 sm:w-2/3 lg:h-auto lg:gap-7 lg:grid lg:grid-cols-4 xl:pt-0 xl:w-1/2"
                onSubmit={handleSubmit(onSubmitContactForm)}
            >
                <section className="relative mt-4 h-fit vsm:mt-8 lg:mt-0 lg:col-span-2">
                    <input
                        {...register("name", {
                                required: translations.errorMessage.required,
                                minLength: {
                                    value: 3,
                                    message: translations.errorMessage.minCharName,
                                },
                                maxLength: {
                                    value: 50,
                                    message: translations.errorMessage.maxChar,
                                },
                                pattern: {
                                    value: regex.nameRegex,
                                    message: translations.errorMessage.text,
                                },
                        })}
                        type="text"
                        id="name"
                        placeholder=" "
                        className="w-full peer border-3 text-light rounded-lg placeholder-transparent focus:outline-none border-light focus:border-interest sm:h-9 sm:text-lg"
                    />
                     <label
                        htmlFor="name"
                        className="absolute -top-5 text-light left-1 text-sm transition-all peer-placeholder-shown:top-1 peer-focus:left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-7 peer-focus:text-lg peer-focus:text-interest sm:peer-placeholder-shown:text-lg sm:-top-7 sm:peer-focus:-top-8 sm:peer-focus:text-2xl sm:text-xl xl:text-2xl 2xl:peer-focus:-top-10 2xl:peer-focus:text-3xl"
                     >
                        {translations.contact.contactName}
                    </label>
                    <p className="mt-1.5 text-error sm:text-lg">{errors.name?.message}</p>
                </section>
                <section className="relative mt-4 h-fit lg:mt-0 lg:col-span-2">
                    <input
                        {...register("email", {
                            required: translations.errorMessage.required,
                            minLength: {
                                value: 10,
                                message: translations.errorMessage.minCharEmail,
                            },
                            maxLength: {
                                value: 50,
                                message: translations.errorMessage.maxChar,
                            },
                            pattern: {
                                value: regex.emailRegex,
                                message: translations.errorMessage.email,
                            },
                        })}
                        type="text"
                        id="email"
                        placeholder=" "
                        className="w-full peer border-3 text-light rounded-lg placeholder-transparent focus:outline-none border-light focus:border-interest sm:h-9 sm:text-lg"
                    />
                    <label
                        htmlFor="email"
                        className="absolute -top-5 text-light left-1 text-sm transition-all peer-placeholder-shown:top-1 peer-focus:left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-7 peer-focus:text-lg peer-focus:text-interest sm:peer-placeholder-shown:text-lg sm:-top-7 sm:peer-focus:-top-8 sm:peer-focus:text-2xl sm:text-xl xl:text-2xl 2xl:peer-focus:-top-10 2xl:peer-focus:text-3xl"
                    >
                        {translations.contact.contactMail}
                    </label>
                    <p className="mt-1.5 text-error sm:text-lg">{errors.email?.message}</p>
                </section>
                <section className="relative mt-5 h-fit lg:mt-0 lg:col-span-4 lg:row-span-6">
                    <textarea
                        {...register("text", {
                            required: translations.errorMessage.required,
                            minLength: {
                                value: 30,
                                message: translations.errorMessage.minCharText,
                            },
                            maxLength: {
                                value: 2000,
                                message: translations.errorMessage.maxChar,
                            },
                            pattern: {
                                value: regex.textRegex,
                                message: translations.errorMessage.text,
                            },
                        })}
                        id="text"
                        placeholder=" "
                        className="w-full peer h-[58vw] overflow-y-auto resize-none border-3 text-light rounded-lg placeholder-transparent focus:outline-none border-light focus:border-interest sm:h-90 sm:text-lg lg:h-48 xl:h-74 2xl:h-90"
                    />
                    <label
                        htmlFor="text"
                        className="absolute -top-5 text-light left-1 text-sm transition-all peer-placeholder-shown:top-1 peer-focus:left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-7 peer-focus:text-lg peer-focus:text-interest sm:peer-placeholder-shown:text-lg sm:-top-7 sm:peer-focus:-top-8 sm:peer-focus:text-2xl sm:text-xl xl:text-2xl 2xl:peer-focus:-top-10 2xl:peer-focus:text-3xl"
                    >
                        {translations.contact.contactMessage}
                    </label>
                    <p className="text-error sm:text-lg">{errors.text?.message}</p>
                </section>
                <button type="submit" className={`mb-4 shadow-shadow shadow-md w-1/4 z-10 mx-auto rounded-lg h-8 sm:text-xl sm:h-12 sm:w-1/3 lg:col-start-2 lg:text-xl lg:col-span-2 xl:w-1/2 xl:text-2xl ${loading ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-dark text-light active:scale-110 hover:bg-interest hover:text-dark focus:border-interest focus:border-2"}`}>{translations.contact.contactButton}</button>
            </form>
        </article>
    );
};