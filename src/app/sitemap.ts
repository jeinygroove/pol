import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/schedule', '/gallery'];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of siteConfig.locales) {
    for (const page of pages) {
      entries.push({
        url: `${siteConfig.url}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    }
  }

  return entries;
}
