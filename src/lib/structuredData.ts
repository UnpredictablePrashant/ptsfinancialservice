import { siteConfig } from './site';

type LocalBusinessSchemaOptions = {
  page?: string;
};

export const localBusinessJsonLd = (options: LocalBusinessSchemaOptions = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  founder: 'Prakash Sarkar',
  slogan: siteConfig.tagline,
  areaServed: siteConfig.serviceArea,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.addressLine,
    addressCountry: 'IN'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '19:30'
    }
  ],
  sameAs: [siteConfig.whatsappHref],
  additionalProperty: options.page ? [{ '@type': 'PropertyValue', name: 'Page', value: options.page }] : undefined
});
