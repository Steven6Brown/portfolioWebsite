import Link from "next/link";
import { getAllPosts } from "../../lib/blog";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Blog",
  description: "Cybersecurity insights, tool breakdowns, and lessons learned by Steven Brown.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="blog-page bg-gradient-to-b from-h-black to-[#222222] min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-24 flex-grow">
        {/* Header */}
        <div className="text-center mb-14">
          <h3 className="mb-2">
            <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text inline-block">
              Writing
            </span>
          </h3>
          <h2 className="text-white">Blog</h2>
          <p className="text-bt-grey text-lg max-w-xl mx-auto mt-4">
            Cybersecurity breakdowns, tool reviews, and lessons from building AI-powered security tools.
          </p>
        </div>

        {/* Blog posts */}
        {posts.length === 0 ? (
          <p className="text-center text-bt-grey mt-20">No posts yet — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative bg-h-black shadow-xl rounded-lg p-6 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]"
              >
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                    padding: '1px',
                    borderRadius: '8px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                {/* Tags */}
                {post.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-[#121212] border border-gray-700 text-gray-300 hover:border-p-green hover:text-white transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white group-hover:text-p-green transition-colors duration-300 mb-2">
                  {post.title}
                </h3>
                <p className="text-bt-grey text-sm mb-6 line-clamp-2 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4 text-xs text-bt-grey">
                    <time dateTime={post.date}>{post.formattedDate}</time>
                    {post.readingTime && <span>{post.readingTime} min read</span>}
                  </div>
                  <span className="text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-p-green to-s-blue text-black transition-all duration-200 hover:scale-105">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}