import React from "react";
import posts from "../data/posts"
import BlogPostCard from "../components/BlogPostCard";

const BlogPosts = () => {
    return (
        <div className="blog-section-container px-6">
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

export default BlogPosts;