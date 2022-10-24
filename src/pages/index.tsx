import BlogMainHeader from '../sections/BlogMainHeader'
import Layout from '../components/Layout'
import { FeaturedBlogPost } from '../sections/FeaturedBlogPost';
import { LatestBlogPosts } from '../sections/LatestBlogPosts';
import SubscribeCTA from '../sections/SubscribeCTA';
import { BlogPosts } from '../sections/BlogPosts';
import { SinglePostType } from "@/lib/types";

type Props = {
  allPosts: SinglePostType[];
  latestPosts: SinglePostType[];
  featuredPost: SinglePostType;
}

const IndexPage = ({ allPosts, latestPosts, featuredPost }: Props) => {

  return (
    <>
      <Layout title="Blog | Tines">
        <main>
          <BlogMainHeader />
          <FeaturedBlogPost post={featuredPost} />
          <LatestBlogPosts posts={latestPosts} />
          <SubscribeCTA />
          <BlogPosts posts={allPosts} />
        </main>
      </Layout>
    </>
  )
}

export default IndexPage


export const getStaticProps = async () => {
  const allPosts = require("@/public/data/allPosts.json");
  const latestPosts = require("@/public/data/latestposts.json");
  const featuredPost = require("@/public/data/featuredpost.json");
  return {
    props: { allPosts: allPosts, latestPosts: latestPosts, featuredPost: featuredPost },
  };
};