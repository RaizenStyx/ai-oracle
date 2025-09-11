// app/blog/page.tsx
import Layout from '../../components/Layout';
import NewsletterForm from '../../components/NewsletterForm';
import Link from 'next/link';
import { blogPosts } from '../../lib/blogs';

export default function BlogListPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#B8860B] mb-4">
          The Oracle’s Journal
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Insights, guides, and inspiration for your spiritual journey.
        </p>
        <div className="w-full max-w-4xl space-y-8 text-left">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-2xl font-bold text-white hover:text-[#B8860B] transition-colors mb-2">{post.title}</h2>
              </Link>
              <p className="text-sm text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`}>
                <div className="text-[#B8860B] hover:text-white transition-colors">
                  Read More &rarr;
                </div>
              </Link>
            </div>
          ))}
        </div>
        <NewsletterForm />
      </div>
    </Layout>
  );
}