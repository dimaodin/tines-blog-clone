import BlogMainHeader from '../sections/BlogMainHeader'
import Layout from '../components/Layout'
import { FeaturedBlogPost } from '../sections/FeaturedBlogPost';
import { LatestBlogPosts } from '../sections/LatestBlogPosts';
import SubscribeCTA from '../sections/SubscribeCTA';
import { BlogPosts } from '../sections/BlogPosts';
import { SinglePostType } from "@/lib/types";
import allPosts from "../data/allPosts.json"
import latestPosts from "../data/latestPosts.json"
import featuredPost from "../data/featuredPost.json"

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
  return {
    props: { allPosts: allPosts, latestPosts: latestPosts, featuredPost: featuredPost },
  };
};