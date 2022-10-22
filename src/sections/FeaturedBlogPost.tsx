import React from "react";
import Image from 'next/image';
import Link from "next/link";
import featuredPost from "../data/featuredPost";

const FeaturedBlogPost = () => {
    return (
        <div className="blog-section-container px-4 py-8 sm:px-6 md:py-16">
            <Link href={'/posts/' + featuredPost.slug} passHref>
                <a className="flex flex-col sm:flex-row cursor-pointer items-center">
                    <div className="w-full md:w-2/3 xl:w-1/3 h-full">
                        <span className="inline-block mt-6 md:mt-0 py-1.5 px-4 mb-4 text-sm md:text-base lg:text-md leading-5 text-darkPurpleTines bg-purpleTines bg-opacity-10 font-bold uppercase rounded-full">
                            FEATURED
                        </span>
                        <h2 className="text-xl md:text-3xl font-bold pr-6">{featuredPost.title}</h2>
                        <p className="mt-2 text-gray-600 text-base lg:text-lg pr-6">
                            {featuredPost.description}
                        </p>
                    </div>
                    <div
                        className="relative h-full md:h-64 overflow-hidden lg:h-full order-first sm:order-last"
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
                </a>
            </Link>
        </div>
    );
};

export default FeaturedBlogPost;