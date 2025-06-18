import { useEffect } from "react";
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

    const onSubmitContactForm = async (contactForm: contactFormType) => {
        const response = await sendEmail(contactForm);

        if(response.success) {
            toast.success(translations.contact.contactSuccess);
            reset();
        } else {
            toast.error(translations.contact.contactError);
        };
    };

    return  (
        <article className="h-full lg:h-fit flex flex-col sm:p-4 xl:px-20">
            <h2 className={`text-2xl text-center text-interest sm:text-4xl sm:text-center lg:mb-8 xl:text-5xl xl:mb-20 ${titleFont.className}`}>{translations.contact.contactTitle}</h2>
            <form
                className="w-11/12 h-fit mx-auto flex flex-col item-center pt-8 gap-4 sm:w-2/3 xl:w-1/2 lg:h-auto lg:gap-10 lg:grid lg:grid-cols-4 xl:pt-0"
                onSubmit={handleSubmit(onSubmitContactForm)}
            >
                <section className="relative mt-4 h-fit lg:mt-0 lg:col-span-2">
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
                        className="w-full peer border-3 text-light rounded-lg placeholder-transparent focus:outline-none border-light  focus:border-interest sm:h-9 sm:text-lg"
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
                        className="w-full peer h-[50vw] resize-none border-3 text-light rounded-lg placeholder-transparent focus:outline-noneborder-light focus:border-interest sm:h-90 sm:text-lg"
                    />
                    <label
                        htmlFor="text"
                        className="absolute -top-5 text-light left-1 text-sm transition-all peer-placeholder-shown:top-1 peer-focus:left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-7 peer-focus:text-lg peer-focus:text-interest sm:peer-placeholder-shown:text-lg sm:-top-7 sm:peer-focus:-top-8 sm:peer-focus:text-2xl sm:text-xl xl:text-2xl 2xl:peer-focus:-top-10 2xl:peer-focus:text-3xl"
                    >
                        {translations.contact.contactMessage}
                    </label>
                    <p className="text-error sm:text-lg">{errors.text?.message}</p>
                </section>
                <button type="submit" className="mb-4 shadow-shadow shadow-md w-1/4 mx-auto rounded-lg h-8 bg-dark text-light active:scale-110 hover:bg-interest hover:text-dark focus:border-interest focus:border-2 sm:text-lg sm:h-12 sm:w-1/3 lg:col-start-2 lg:text-xl lg:col-span-2 xl:text-2xl">{translations.contact.contactButton}</button>
            </form>
        </article>
    );
};