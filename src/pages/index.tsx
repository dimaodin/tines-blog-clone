import BlogMainHeader from '../sections/BlogMainHeader'
import Layout from '../components/Layout'
import FeaturedBlogPost from '../sections/FeaturedBlogPost';
import LatestBlogPosts from '../sections/LatestBlogPosts';
import SubscribeCTA from '../sections/SubscribeCTA';
import BlogPosts from '../sections/BlogPosts';

export default function IndexPage() {
  return (
    <Layout title="Blog | Tines">
      <main>
        <BlogMainHeader />
        <FeaturedBlogPost />
        <LatestBlogPosts />
        <SubscribeCTA />
        <BlogPosts />
      </main>
    </Layout>
  )
}
