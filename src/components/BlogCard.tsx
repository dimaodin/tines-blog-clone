import Link from "next/link";
import Image from 'next/image';

interface BlogCardProps {
    title: string
    description: string
    imgSrc: string
    href: string
}

const BlogCard = ({ title, description, href, imgSrc }: BlogCardProps) =>
    <Link href={href}>
        <div className="overflow-hidden w-full min-h-full cursor-pointer p-4 transition hover:bg-purple-100 hover:bg-opacity-30 rounded-xl">
            <div className="flex flex-col items-center w-full h-full">
                <Image
                    alt="Blog Card"
                    height="391"
                    width="744"
                    src={imgSrc}
                    blurDataURL={imgSrc}
                    placeholder="blur"
                    className="w-full object-cover rounded-lg"
                />
                <div className="w-full mt-4">
                    <p className="text-gray-800 text-xl xl:text-2xl font-bold mb-2">
                        {title}
                    </p>
                    <p className="text-gray-600 font-light text-md xl:text-lg">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </Link>

export default BlogCard