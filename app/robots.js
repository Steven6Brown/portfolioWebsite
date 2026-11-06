export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }],
    sitemap: 'https://www.stevenrbrown.org/sitemap.xml',
  };
}
