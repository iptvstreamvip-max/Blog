import { Article } from "@/lib/types";
import type { MetadataRoute } from "next";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: articles } = (await fetch(
    `${STRAPI_URL}/api/articles?fields[0]=slug&fields[1]=updatedAt&pagination[pageSize]=100`,
    { cache: "force-cache", next: { tags: ["articles"], revalidate: false } }
  ).then((res) => res.json())) as { data: Article[] };

  const articlesSitmap = articles.map((article) => ({
    url: `${BASE_URL}/blogpost/${article.slug}`,
    lastModified: `${article.updatedAt}`,
    changeFrequency: "monthly",
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...articlesSitmap,
  ];
}
