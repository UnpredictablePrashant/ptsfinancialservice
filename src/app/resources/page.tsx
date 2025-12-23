import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import posts from '@/content/resources/posts.json';
import type { ResourcePost } from '@/types';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Resources & Knowledge Hub',
  description: 'Curated explainers on investments, insurance, and credit so you can take informed decisions.',
  path: '/resources'
});

const resourcePosts = posts as ResourcePost[];

export default function ResourcesPage() {
  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading
        alignment="left"
        eyebrow="Resources"
        title="Knowledge hub"
        description="No-fluff explainers to keep you informed between review meetings."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {resourcePosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">{post.category}</p>
            <h3 className="mt-3 font-serif text-xl text-brand-navy">{post.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <p className="mt-4 text-xs text-slate-500">
              {post.readingTime} · {post.pillar} · {new Date(post.publishedOn).toLocaleDateString('en-IN')}
            </p>
            <Link
              href={`/resources/${post.slug}`}
              className="mt-4 inline-flex items-center text-sm font-semibold text-brand-teal"
              aria-label={`Read ${post.title}`}
            >
              Read article <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs text-slate-500">
        These resources are educational and not investment advice. Mutual fund investments are subject to market risks. Read all
        scheme related documents carefully.
      </p>
      <div className="mt-12">
        <CTASection
          title="Discuss these insights with us"
          description="Book a conversation to see how these ideas translate to your personal goals."
          primary={{ href: '/contact', label: 'Book a session' }}
          secondary={{ href: siteConfig.whatsappHref, label: 'Quick question?' }}
        />
      </div>
    </div>
  );
}
