import React from "react";
import latestPosts from "../data/latestPosts"
import BlogPostCard from "../components/BlogPostCard";

const LatestBlogPosts = () => {
    return (
        <div className="blog-section-container">
            <div className="block mb-4 px-4">
                <h1 className="text-xl font-extrabold leading-9 text-gray-900">
                    Latest Posts
                </h1>
            </div>
            <div className="blog-posts-container">
                {latestPosts.map((post) => {
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

export default LatestBlogPosts;