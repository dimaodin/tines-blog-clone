import React from "react";
import Image from 'next/image';
import featuredPost from '@/data/featuredPost';
import Link from "next/link";

const FeaturedPost = () => {

    return (
        <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl px-4 py-16 sm:px-6">
            <Link href={featuredPost.href}>
                <div className="flex flex-col md:flex-row w-full h-full cursor-pointer">
                    <div
                        className="relative h-full md:h-64 overflow-hidden lg:h-full md:order-last"
                    >
                        <Image
                            alt="Featured Post"
                            height="391"
                            width="744"
                            src={featuredPost.imgSrc}
                            blurDataURL={featuredPost.imgSrc}
                            placeholder="blur"
                            className="inset-0 h-full w-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="w-full md:w-2/3 xl:w-1/3 h-full order-last md:order-none">
                        <span className="inline-block mt-6 md:mt-0 py-1.5 px-4 mb-4 text-base lg:text-md leading-5 text-indigo-700 bg-indigo-100 bg-opacity-50 font-bold uppercase rounded-full">
                            FEATURED
                        </span>
                        <h2 className="text-xl font-bold pr-6">{featuredPost.title}</h2>
                        <p className="mt-2 text-gray-600 text-base lg:text-lg pr-6">
                            {featuredPost.description}
                        </p>
                    </div>

                </div>
            </Link>
        </div>

    );
};

export default FeaturedPost;