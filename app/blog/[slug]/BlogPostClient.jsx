'use client';
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function BlogPostClient({ post }) {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="blog-page bg-gradient-to-b from-h-black to-[#222222] min-h-screen flex flex-col">

      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      <main className="pt-32 flex-grow">
        <div className="container mx-auto">

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4" data-aos="fade-up">
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

          {/* Title & Meta */}
          <div data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                {post.title}
              </span>
            </h1>
            <div className="flex items-center gap-4 text-sm text-bt-grey mb-10">
              <time dateTime={post.date}>{post.formattedDate}</time>
              {post.readingTime && <span>{post.readingTime} min read</span>}
            </div>
          </div>

          {/* Content box */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="mx-auto mb-6 p-6 bg-[#1a1a1a] rounded-xl border border-gray-800">
              <article
                className="blog-content text-bt-grey leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </div>
          </div>

          {/* Back button */}
          <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
            <Link href="/blog">
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-gray-300 hover:text-white hover:border-p-green transition-all duration-200">
                <IoArrowBackOutline className="h-5 w-5" />
                Back to Blog
              </button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}