import Link from "next/link";
import Image from 'next/image';

interface BlogCardProps {
    title: string
    description: string
    imgSrc: string
    slug: string
}

const BlogPostCard = ({ title, description, slug, imgSrc }: BlogCardProps) => {
    return (
        <Link href={'/posts/' + slug} passHref>
            <a className="relative min-h-full cursor-pointer p-4 transition-all 
            before:content-[''] before:block before:absolute before:transition-all 
            before:-left-1 before:-right-1 before:-top-1
            before:-bottom-1 before:bg-purpleTines before:rounded-xl
            before:scale-95 before:opacity-0 before:pointer-events-none
            hover:before:scale-100 hover:before:opacity-5">
                <Image
                    alt="Blog Card"
                    height="391"
                    width="744"
                    src={imgSrc}
                    blurDataURL={imgSrc}
                    placeholder="blur"
                    className="object-cover rounded-lg"
                />
                <h3 className="mt-4 text-gray-800 text-xl xl:text-2xl font-bold mb-2">
                    {title}
                </h3>
                <p className="mt-4 text-gray-600 font-light text-md xl:text-lg">
                    {description}
                </p>
            </a>
        </Link>
    );
};

export default BlogPostCard