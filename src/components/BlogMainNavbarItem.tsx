import React from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from 'react-icons/ri';

interface NavProps {
    text?: string;
    href: string;
    isDropdown?: boolean;
}

export function BlogMainNavbarItem({
    href,
    text,
    isDropdown,
}: NavProps) {

    return (
        <Link href={href}>
            <a
                className='flex text-black hover:text-indigo-500 hover:opacity-80 px-3 py-2 rounded-md text-md'
            >
                {text}{isDropdown ? <RiArrowDropDownLine size="1.5rem" className="" /> : null}
            </a>
        </Link>
    );
}