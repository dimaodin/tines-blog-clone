import React, { useState } from "react";
import { BlogMainNavbarItem } from "./BlogMainNavbarItem";
import { Button } from "./Button";
import { ButtonType } from '../lib/types';
import logo from '../../public/tines.svg'

const BlogMainNavbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    return (
        <div>
            <nav className="relative w-full pt-8 xl:pt-20 pb-8 mx-auto">
                <div className="blog-section-container block px-4 bg-white rounded-2xl">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <div className="w-full justify-between flex items-center">
                            <a className="flex-shrink-0" href="/">
                                <img className="h-full w-full" src={logo.src} alt="logo" />
                            </a>
                            <div className="hidden lg:block">
                                <div className="flex items-baseline">
                                    <BlogMainNavbarItem href="/" text="Product" />
                                    <BlogMainNavbarItem href="/news" text="Use cases" />
                                    <BlogMainNavbarItem href="/product-updates" text="Resources" isDropdown />
                                    <BlogMainNavbarItem href="/tutorials" text="Company" isDropdown />
                                    <BlogMainNavbarItem href="/inside-tines" text="Pricing" />
                                    <Button type={ButtonType.NAVBAR}>Sign up for free</Button>
                                </div>
                            </div>
                        </div>
                        <section className="flex lg:hidden">
                            <div
                                className="burgerIcon -space-y-2 leading-none flex flex-col items-center justify-center"
                                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                            >
                                <span className="block h-0.5 w-4 bg-gray-800"></span>
                                <span className="block h-0.5 w-4 bg-gray-800"></span>
                                <span className="block h-0.5 w-4 bg-gray-800"></span>
                            </div>
                            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            </div>
                        </section>

                    </div>
                </div>

            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>

    );
};

export default BlogMainNavbar;