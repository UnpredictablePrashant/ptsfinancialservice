import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import posts from '@/content/resources/posts.json';
import type { ResourcePost } from '@/types';
import { locations } from '@/data/locations';

const routes = [
  '/',
  '/about',
  '/services',
  '/investments',
  '/insurance',
  '/loans',
  '/resources',
  '/contact',
  '/why-us',
  '/certifications',
  '/privacy-policy',
  '/disclaimer',
  '/terms'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const baseEntries = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified
  }));

  const resourceEntries = (posts as ResourcePost[]).map((post) => ({
    url: `${siteConfig.url}/resources/${post.slug}`,
    lastModified: new Date(post.publishedOn)
  }));

  const locationEntries = locations.map((location) => ({
    url: `${siteConfig.url}/locations/${location.slug}`,
    lastModified
  }));

  return [...baseEntries, ...resourceEntries, ...locationEntries];
}
