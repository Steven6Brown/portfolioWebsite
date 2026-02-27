import { getPostBySlug, getAllPosts } from "../../../lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { IoArrowBackOutline } from "react-icons/io5";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="blog-page bg-gradient-to-b from-h-black to-[#222222] min-h-screen flex flex-col">
      
      {/* Navbar */}
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="pt-32 flex-grow">
        <div className="container mx-auto">

          <div className="mx-auto mt-10 mb-10 p-6 bg-[#1a1a1a] rounded-xl border border-gray-800">

            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-[#121212] border border-gray-700 text-gray-300 hover:border-p-green hover:text-white transition-colors duration-200 z-10 relative"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Post title with gradient */}
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                {post.title}
              </span>
            </h1>

            {/* Post metadata */}
            <div className="flex items-center gap-4 text-sm text-bt-grey mb-10">
              <time dateTime={post.date}>{post.formattedDate}</time>
              {post.readingTime && <span>{post.readingTime} min read</span>}
            </div>

            {/* Post content */}
            <article
              className="blog-content text-bt-grey leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Gradient bars under h2/h3 inside blog content */}
            <div className="hidden">
              <style>
                {`
                  .blog-content h2, .blog-content h3 {
                    position: relative;
                    display: inline-block; /* width fits text */
                    color: white;
                    margin-top: 2rem;
                    margin-bottom: 0.5rem;
                  }
                  .blog-content h2::after, .blog-content h3::after {
                    content: '';
                    display: block;
                    height: 3px;
                    width: 100%; /* span full width of text */
                    margin-top: 0.5rem;
                    border-radius: 2px;
                    background: linear-gradient(to right, #22c55e, #3b82f6);
                  }
                `}
              </style>
            </div>

            {/* Back button */}
            <div className="mt-8">
              <Link href="/blog">
                <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-gray-300 hover:text-white hover:border-p-green transition-all duration-200">
                  <IoArrowBackOutline className="h-5 w-5" />
                  Back to Blog
                </button>
              </Link>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}