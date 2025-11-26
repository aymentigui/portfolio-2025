/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://aimen-blog.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.8,
    exclude: ['/secret-page'],
  };
  