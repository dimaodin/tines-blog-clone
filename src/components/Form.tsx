import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from "./Button";
import { ButtonType } from '@/lib/types';

type FormValues = {
    email: string,
    companyName: string,
    firstName: string,
    lastName: string
};

export function Form() {

    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl mt-10" action="#" method="post">
                <div className="flex flex-wrap mb-2">
                    <div className="w-full xl:w-1/2">
                        <input className="text-lg appearance-none block w-full bg-transparent text-gray-700 divide-y focus:divide-y border-indigo-100 border-opacity-50 rounded-xl rounded-b-none xl:rounded-tl-xl xl:rounded-r-none py-3 px-4 leading-tight focus:outline-none focus:border-purple-100 placeholder-indigo-100 placeholder-opacity-70" id="cta-email" {...register("email")} name="email" type="email" placeholder="Your email *" autoComplete="off" required />
                    </div>
                    <div className="w-full xl:w-1/2">
                        <input className="text-lg appearance-none block w-full bg-transparent text-gray-700 divide-y focus:divide-y border-indigo-100 border-opacity-50 rounded-none xl:rounded-tr-xl py-3 px-4 leading-tight focus:outline-none focus:border-purple-100 placeholder-indigo-100 placeholder-opacity-70" id="cta-company-name" {...register("companyName")} name="company name" type="text" placeholder="Your company name" />
                    </div>
                    <div className="w-full xl:w-1/2">
                        <input className="text-lg appearance-none block w-full bg-transparent text-gray-700 divide-y focus:divide-y border-indigo-100 border-opacity-50 rounded-none xl:rounded-bl-xl py-3 px-4 leading-tight focus:outline-none focus:border-purple-100 placeholder-indigo-100 placeholder-opacity-70" id="cta-first-name" {...register("firstName")} name="first" type="text" placeholder="First name" />
                    </div>
                    <div className="w-full xl:w-1/2">
                        <input className="text-lg appearance-none block w-full bg-transparent text-gray-700 border-[1px] focus:divide-y border-indigo-100 border-opacity-50 rounded-none rounded-b-xl xl:rounded-b-none xl:rounded-br-xl py-3 px-4 leading-tight focus:outline-none focus:border-purple-100 placeholder-indigo-100 placeholder-opacity-70" id="cta-last-name" {...register("lastName")} name="last" placeholder="Last name" />
                    </div>
                </div>
                <div className="flex justify-center md:justify-start mt-4">
                    <Button buttonType={ButtonType.CTA}>Subscribe</Button>
                </div>
            </form>
        </div>
    );
};