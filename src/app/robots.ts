import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/de/impressum', '/de/datenschutz', '/de/agb'] },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
