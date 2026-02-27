import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

function ensureDir() {
  if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });
}

function estimateReadingTime(content) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export async function getAllPosts() {
  ensureDir();
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      formattedDate: data.date ? formatDate(data.date) : "",
      excerpt: data.excerpt || content.slice(0, 160).replace(/\n/g, " ") + "…",
      tags: data.tags || [],
      readingTime: estimateReadingTime(content),
    };
  });
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  ensureDir();
  const filepath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    formattedDate: data.date ? formatDate(data.date) : "",
    excerpt: data.excerpt || content.slice(0, 160).replace(/\n/g, " ") + "…",
    tags: data.tags || [],
    readingTime: estimateReadingTime(content),
    contentHtml: processed.toString(),
  };
}