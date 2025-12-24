import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

const differentiators = [
  {
    title: 'Human + digital',
    body: 'Trackers, reminders, and analytics dashboards combined with one-on-one reviews.'
  },
  {
    title: 'Licensed expertise',
    body: 'AMFI and IRDAI registrations with continuous upskilling on market, insurance, and credit changes.'
  },
  {
    title: 'Goal-based reporting',
    body: 'Progress dashboards for retirement, children’s education, business expansion, or protection needs.'
  },
  {
    title: 'Transparent pricing',
    body: 'Clear disclosure of fees/commissions and opt-out flexibility at every stage.'
  }
];

export const metadata = buildMetadata({
  title: 'Why Choose Us',
  description: 'Discover the differentiators that make PTS Finserv a trusted financial partner.',
  path: '/why-us'
});

export default function WhyUsPage() {
  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading
        alignment="left"
        eyebrow="Why clients choose us"
        title="Trust, transparency, continuity"
        description="We build long-term relationships by being present through every market and life transition."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {differentiators.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="font-serif text-2xl text-brand-navy">{item.title}</p>
            <p className="mt-3 text-sm text-slate-600">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <CTASection
          title="Experience the difference"
          description="Engage us for a pilot review. If you don’t see value, there is no obligation to continue."
          primary={{ href: '/contact', label: 'Schedule a review' }}
          secondary={{ href: siteConfig.whatsappHref, label: 'Talk now' }}
        />
      </div>
    </div>
  );
}
