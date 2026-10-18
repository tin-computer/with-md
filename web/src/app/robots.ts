import type { MetadataRoute } from 'next';

import { siteUrl } from '@/lib/with-md/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // Raw share endpoints must stay fetchable: user-triggered agent fetchers
        // (e.g. Claude-User) honor robots.txt, and the longer Allow rule wins
        // over the /s/ and /r/ Disallows. Indexing is blocked via X-Robots-Tag.
        allow: ['/', '/s/*/raw', '/r/*/raw'],
        disallow: [
          '/api/',
          '/workspace',
          '/embed',
          '/s/',
          '/r/',
          '/skill',
          '/http:/',
          '/https:/',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
