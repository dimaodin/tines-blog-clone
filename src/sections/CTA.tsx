import React from "react";
import { Form } from '../components/Form';

const CTA = () => {

    return (
        <div className="my-16 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto p-6">
            <div className="w-full h-full bg-indigo-700 bg-opacity-70 rounded-3xl">
                <div className="relative flex flex-col md:flex-row justify-between items-center px-20 py-16 overflow-hidden">
                    <div className="flex flex-col order-last md:order-none items-center md:items-start">
                        <h2 className="text-4xl font-semibold font-display text-white">
                            World class ideas
                        </h2>
                        <h2 className="mt-2 text-4xl font-light font-serif text-white">
                            right in your inbox
                        </h2>
                        <Form />
                        <div className="flex justify-start mt-6">
                            <p className="text-center md:text-left text-sm font-thin text-gray-200">
                                By filling out this form your agree to the terms and conditions in our <a className="hover:underline" href="/privacy" target="_blank">Privacy&nbsp;Notice</a> <sup>↗</sup>.
                            </p>
                        </div>
                    </div>
                    <div className="ml-8 xl:left-1/2 right-0">
                        <img className="w-full object-cover max-w-44 mx-auto" src="/images/cta.svg" alt="cta illustration" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;










