import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

interface CategoryProps {
    text?: string;
    href: string;
}

export function BlogCategoryItem({
    href,
    text
}: CategoryProps) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <Link href={href}>
            <a
                className={`${isActive
                    ? 'text-purpleTines bg-purpleTines bg-opacity-10'
                    : 'bg-transparent hover:bg-purpleTines hover:bg-opacity-5 text-black'
                    } 'w-full px-3 py-2 rounded-md text-md font-medium`}
            >
                {text}
            </a>
        </Link>
    );
}









