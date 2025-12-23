import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import posts from '@/content/resources/posts.json';
import type { ResourcePost } from '@/types';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

const resourcePosts = posts as ResourcePost[];

type ResourcePageProps = {
  params: {
    slug: string;
  };
};

const getPost = (slug: string) => resourcePosts.find((post) => post.slug === slug);

export const generateStaticParams = () => resourcePosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: ResourcePageProps) => {
  const post = getPost(params.slug);
  const base = `/resources/${params.slug}`;

  if (!post) {
    return buildMetadata({
      title: 'Resource',
      description: 'Resource article',
      path: base
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/resources/${post.slug}`
  });
};

export default function ResourceArticlePage({ params }: ResourcePageProps) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading
        alignment="left"
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />
      <div className="mt-4 text-sm text-slate-500">
        <span>{post.readingTime}</span>
        <span className="mx-2">•</span>
        <span>{post.pillar}</span>
        <span className="mx-2">•</span>
        <time dateTime={post.publishedOn}>{new Date(post.publishedOn).toLocaleDateString('en-IN')}</time>
      </div>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6 text-xs text-slate-500">
        The information shared above is educational. Mutual fund investments are subject to market risks. Insurance and loan
        products are governed by respective regulations. Please consider your personal situation before acting on any insight.
      </p>
      <div className="mt-12">
        <CTASection
          title="Apply these insights to your portfolio"
          description="Share your documents or goals and we will tailor an actionable plan within one business day."
          primary={{ href: '/contact', label: 'Talk to Prakash' }}
          secondary={{ href: siteConfig.whatsappHref, label: 'WhatsApp us' }}
        />
      </div>
    </div>
  );
}
