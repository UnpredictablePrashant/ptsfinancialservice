export type ServiceCategory = {
  slug: string;
  title: string;
  description: string;
  items: string[];
  path: string;
};

export type ResourcePost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedOn: string;
  pillar: string;
  content: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
};

export type ProductOffering = {
  title: string;
  description: string;
  category: 'Investments' | 'Insurance' | 'Loans' | 'Wealth';
};
