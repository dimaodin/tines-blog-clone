import Header from '@/sections/Header'
import Layout from '@/components/Layout'
import Categories from '@/sections/Categories';
import FeaturedPost from '@/sections/FeaturedPost';
import LatestPosts from '@/sections/LatestPosts';
import CTA from '@/sections/CTA';
import Posts from '@/sections/Posts';

export default function IndexPage() {
  return (
    <Layout title="Blog | Tines">
      <main>
        <Header />
        <Categories />
        <FeaturedPost />
        <LatestPosts />
        <CTA />
        <Posts />
      </main>
    </Layout>
  )
}
