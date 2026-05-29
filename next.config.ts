import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};


import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());

export default withNextIntl(nextConfig);
