import type { Metadata } from 'next';
import { siteConfig } from './site';

type MetadataArgs = {
  title: string;
  description: string;
  path: string;
};

export const buildMetadata = ({ title, description, path }: MetadataArgs): Metadata => ({
  title: `${title} | ${siteConfig.name}`,
  description,
  alternates: {
    canonical: `${siteConfig.url}${path}`
  },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}${path}`,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${siteConfig.name}`,
    description
  }
});
