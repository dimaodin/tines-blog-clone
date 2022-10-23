import React from "react";
import { useForm, useController } from 'react-hook-form';
import { Button } from "./Button";
import { ButtonType } from '../lib/types';
import { FaInfoCircle } from 'react-icons/fa';

type FormValues = {
    email: string,
    companyName: string,
    firstName: string,
    lastName: string
};

export function CTAForm() {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>();
    const { field } = useController({
        control: control,
        name: "email",
        rules: {
            required: true,
            pattern: /(^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/i
        }
    });
    const onSubmit = handleSubmit((data) => console.log(data));
    return (
        <div>
            <form onSubmit={onSubmit} className="w-full max-w-xl mt-10" action="#" method="post" noValidate>
                <div className="flex flex-wrap gap-0 mb-2">
                    <div className="cta-form-input-container">
                        <input {...field} className="cta-form-input sm:border-r-[1px] sm:focus:border-r-2 border-b-[1px] focus:border-b-2 rounded-xl rounded-b-none xl:rounded-tl-xl xl:rounded-r-none" id="cta-email" {...register("email", { required: true })} name="email" type="email" placeholder="Your email *" />
                    </div>
                    <div className="cta-form-input-container">
                        <input className="cta-form-input border-t-[1px] sm:border-t-2 sm:border-l-[1px] sm:focus:border-l-2 border-b-[1px] focus:border-b-2 xl:rounded-tr-xl" id="cta-company-name" {...register("companyName")} name="company name" type="text" placeholder="Your company name" />
                    </div>
                    <div className="cta-form-input-container">
                        <input className="cta-form-input border-b-[1px] focus:border-b-2 sm:border-b-2 border-t-[1px] focus:border-t-2 sm:border-r-[1px] sm:focus:border-r-2 xl:rounded-bl-xl" id="cta-first-name" {...register("firstName")} name="first" type="text" placeholder="First name" />
                    </div>
                    <div className="cta-form-input-container">
                        <input className="cta-form-input sm:border-l-[1px] sm:focus:border-l-2 border-t-[1px] focus:border-t-2 rounded-b-xl xl:rounded-b-none xl:rounded-br-xl" id="cta-last-name" {...register("lastName")} name="last" type="text" placeholder="Last name" />
                    </div>
                </div>
                <div className="flex justify-center md:justify-start mt-4 mx-12 sm:mx-0">
                    <Button type={ButtonType.CTA}>Subscribe</Button>
                </div>
                <div className="flex justify-start mt-6">
                    <p className="text-center md:text-left text-sm font-thin text-gray-200">
                        By filling out this form your agree to the terms and conditions in our <a className="hover:underline" href="/privacy" target="_blank">Privacy&nbsp;Notice</a> <sup>↗</sup>.
                    </p>
                </div>
                {errors?.email && <p className="block mt-4 bg-lightPurpleTines bg-opacity-90 opacity-90 p-4 text-lg text-white leading-none rounded-lg flex items-center"><FaInfoCircle size="1.5rem" className="inline-block mr-2" />Please enter a valid email address</p>}
            </form>

        </div>

    );
};