import React from "react";
import BlogPostCard from "../components/BlogPostCard";
import { SinglePostType } from "@/lib/types";

interface BlogPostsProps {
    posts: SinglePostType[];
}

export function BlogPosts({ posts }: BlogPostsProps) {
    return (
        <div className="blog-section-container">
            <div className="blog-posts-container pb-16 md:pb-24">
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