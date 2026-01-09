import type { MetadataRoute } from "next";

// Force static generation for GitHub Pages export
export const dynamic = "force-static";

const siteUrl = "https://abiudcantu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Future: Add /blog listing page when implemented
    // {
    //   url: `${siteUrl}/blog`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
  ];

  // Future: Dynamic blog post pages
  // const blogPosts = getAllBlogPosts();
  // const blogPages = blogPosts.map((post) => ({
  //   url: `${siteUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt || post.publishedAt),
  //   changeFrequency: "monthly" as const,
  //   priority: 0.6,
  // }));

  return [
    ...staticPages,
    // ...blogPages,
  ];
}
