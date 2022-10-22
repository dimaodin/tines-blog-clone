import React from "react";
import { CTAForm } from '../components/CTAForm';

const SubscribeCTA = () => {

    return (
        <div className="blog-section-container my-16 p-6">
            <div className="bg-purpleTines rounded-3xl">
                <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 overflow-hidden">
                    <div className="flex flex-col order-last md:order-none items-center md:items-start">
                        <div className="mt-6 md:mt-0 text-center md:text-left">
                            <h2 className="text-2xl md:text-4xl font-semibold font-display text-white">
                                World class ideas
                            </h2>
                            <h2 className="md:mt-2 text-2xl md:text-4xl font-light font-serif text-white">
                                right in your inbox
                            </h2>
                        </div>
                        <CTAForm />
                    </div>
                    <div className="ml-8 xl:left-1/2 right-0">
                        <img className="w-full object-cover max-w-44 mx-auto" src="/images/cta.svg" alt="cta illustration" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeCTA;










