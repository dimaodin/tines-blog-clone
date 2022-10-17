import React from "react";
import latestPosts from '@/data/latestPosts'
import BlogCard from "@/components/BlogCard";

const LatestPosts = () => {
    return (
        <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
            <div className="flex flex-col w-full h-full">
                <div className="block mb-4 px-4">
                    <h1 className="text-xl font-extrabold leading-9 text-gray-900">
                        Latest Posts
                    </h1>
                </div>
                <div className="flex flex-row flex-wrap lg:flex-nowrap">
                    {latestPosts.map((post) => {
                        return (
                            <BlogCard
                                key={post.title}
                                title={post.title}
                                description={post.description}
                                imgSrc={post.imgSrc}
                                href={post.href}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default LatestPosts;