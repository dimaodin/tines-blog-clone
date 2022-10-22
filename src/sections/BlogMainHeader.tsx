import React from "react";
import BlogMainNavbar from "../components/BlogMainNavbar";
import BlogCategoriesNavbar from '../components/BlogCategoriesNavbar';

const BlogMainHeader = () => {
    return (
        <header className="relative bg-paleDesert">
            <BlogMainNavbar />
            <BlogCategoriesNavbar />
        </header>
    );
};

export default BlogMainHeader;