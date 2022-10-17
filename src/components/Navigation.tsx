import React, { useState } from "react";
import { NavItem } from "./NavItem";
import { Button } from "./Button";
import { ButtonType } from '@/lib/types';

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    return (
        <div>
            <nav className="relative w-full pt-16 xl:pt-20 pb-8 mx-auto">
                <div className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl xl:block px-4 bg-white rounded-2xl mx-auto">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <div className="w-full justify-between flex items-center">
                            <a className="flex-shrink-0" href="/">
                                <img className="h-full w-full" src="/tines.svg" alt="Workflow" />
                            </a>
                            <div className="hidden lg:block">
                                <div className="flex items-baseline">
                                    <NavItem href="/" text="Product" />
                                    <NavItem href="/news" text="Use cases" />
                                    <NavItem href="/product-updates" text="Resources" isDropdown />
                                    <NavItem href="/tutorials" text="Company" isDropdown />
                                    <NavItem href="/inside-tines" text="Pricing" />
                                    <Button buttonType={ButtonType.HEADER}>Sign up for free</Button>
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

export default Navigation;