import React from "react";
import posts from '@/data/posts'
import BlogCard from "@/components/BlogCard";

const Posts = () => {
    return (
        <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl px-6">
            <div className="py-5 flex flex-col w-full h-full pb-16 md:pb-24">
                <div className="flex flex-row -m-4 flex-wrap lg:flex-nowrap">
                    {posts.map((post) => {
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

export default Posts;