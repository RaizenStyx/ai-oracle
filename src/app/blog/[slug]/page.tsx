// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Layout from '../../../components/Layout';
import NewsletterForm from '../../../components/NewsletterForm';
import { blogPosts } from '../../../lib/blogs';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const id = await params;
  const post = blogPosts.find((p) => p.id === id.slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <article className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg text-white">
          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
        <NewsletterForm />
      </div>
    </Layout>
  );
}