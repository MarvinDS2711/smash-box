import type { MetadataRoute } from 'next';
import { restaurant } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = restaurant.siteUrl;
  const routes = ['', '/carte', '/galerie', '/avis', '/reservation', '/contact', '/mentions-legales', '/politique-confidentialite'];
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: r === '' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : r === '/carte' || r === '/reservation' ? 0.9 : 0.7,
  }));
}
