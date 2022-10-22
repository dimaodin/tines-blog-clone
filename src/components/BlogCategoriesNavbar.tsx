import React from "react";
import { BlogCategoryItem } from "./BlogCategoryItem"

const BlogCategoriesNavbar = () => {
    return (
        <div>
            <nav className="w-full py-8 xl:py-16 bg-paleDesert rounded-b-3xl pb-16 xl:pb-24 mx-auto">
                <div className="blog-section-container xl:block">
                    <div className="flex xl:items-center flex-col xl:flex-row justify-between box-content">
                        <div className="text-5xl flex items-center justify-center sm:justify-start font-bold mb-8 xl:mb-0">
                            <h1>
                                Blog
                            </h1>
                        </div>
                        <div className="overflow-hidden flex flex-col lg:flex-row items-center sm:items-left md:items-center justify-center bg-white rounded-3xl max-w-3xl lg:pt-0 pt-2 mx-4 md:mx-0">
                            <div className="pl-4 md:ml-0 md:pl-2 w-full flex flex-wrap inline-flex items-center justify-center sm:justify-left md:justify-center md:block">
                                <BlogCategoryItem href="/" text="All" />
                                <BlogCategoryItem href="/news" text="News" />
                                <BlogCategoryItem href="/product-updates" text="Product updates" />
                                <BlogCategoryItem href="/tutorials" text="Tutorials" />
                                <BlogCategoryItem href="/inside-tines" text="Inside Tines" />
                                <BlogCategoryItem href="/engineering" text="Engineering" />
                            </div>

                            <div className="md:block flex py-4 pr-2">
                                <div className="ml-2 flex md:flex-row space-y-2 md:space-y-0">
                                    <div className="relative flex items-center w-full h-full group">
                                        <svg className="absolute left-0 z-20 w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                            </path>
                                        </svg>
                                        <input type="search" className="block w-full py-2.5 pl-12 border-none leading-normal rounded-lg hover:ring-2 hover:ring-purpleTines hover:ring-opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purpleTines focus:ring-opacity-90 bg-paleDesert bg-opacity-70 text-gray-500 aa-input placeholder-gray-500 placeholder-opacity-70" placeholder="Search" />
                                        <div className="absolute bg-paleDark opacity-90 right-0 h-auto px-1.5 py-0.5 mr-2 text-xs text-gray-400 rounded-md block">
                                            ⌘K
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default BlogCategoriesNavbar;










