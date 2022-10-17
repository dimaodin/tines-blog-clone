import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

interface CategoryProps {
    text?: string;
    href: string;
}

export function CategoryItem({
    href,
    text
}: CategoryProps) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <Link href={href}>
            <a
                className={`${isActive
                    ? 'text-indigo-600 bg-indigo-400 bg-opacity-10 hover:bg-indigo-400 hover:bg-opacity-10'
                    : 'bg-transparent'
                    } 'w-full text-black hover:bg-indigo-200 hover:bg-opacity-10 px-3 py-2 rounded-md text-md font-medium`}
            >
                {text}
            </a>
        </Link>
    );
}









