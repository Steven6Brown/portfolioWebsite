import { getAllPosts } from '@/lib/blog';
import { PROJECTS } from '@/lib/projects';

const BASE_URL = 'https://www.stevenrbrown.org';

const PROJECT_SLUGS = [
  'talonforge',
  'kestrel',
  'vantage',
  'quotework',
  'finio',
  'golfcaddie',
  'cloakai',
  'nextjs-portfolio',
  'security-operations-center',
  'orange-pi-5-plus-setup',
  'external-network-audit',
  'todo-list-manager',
  'psu-homecoming-website',
  'diamond-stat-trax',
  'dunkin-donuts-networking-map',
];

export default async function sitemap() {
  const posts = await getAllPosts();

  const staticPages = ['', '/blog', '/privacy', '/accessibility'].map((path) => ({
    url: `${BASE_URL}${path}`,
  }));

  const projectPages = [...PROJECT_SLUGS, ...PROJECTS.map((p) => p.slug)].map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
  }));

  const blogPages = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date || undefined,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
