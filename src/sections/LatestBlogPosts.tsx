import React from "react";
import BlogPostCard from "../components/BlogPostCard";
import { SinglePostType } from "@/lib/types";

interface LatestBlogPostsProps {
    posts: SinglePostType[];
}

export function LatestBlogPosts({ posts }: LatestBlogPostsProps) {
    return (
        <div className="blog-section-container">
            <div className="block mb-4 px-4">
                <h1 className="hidden sm:block text-xl font-extrabold leading-9 text-gray-900">
                    Latest Posts
                </h1>
            </div>
            <div className="blog-posts-container">
                {posts.map((post) => {
                    return (
                        <BlogPostCard
                            key={post.id}
                            title={post.title}
                            description={post.description}
                            imgSrc={post.imgSrc}
                            slug={post.slug}
                        />
                    )
                })}
            </div>
        </div>
    );
};