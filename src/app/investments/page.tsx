import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';
import { serviceCategories, wealthProcess } from '@/data/services';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

const investmentCategory = serviceCategories.find((category) => category.slug === 'investments');

export const metadata = buildMetadata({
  title: 'Investment Solutions',
  description: 'Goal-based investment planning covering mutual funds, SIPs/SWPs, fixed income, and demat support.',
  path: '/investments'
});

export default function InvestmentPage() {
  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading
        alignment="left"
        eyebrow="Investment Solutions"
        title="Goal-based strategies backed by compliance"
        description="We curate mutual funds, SIPs, SWPs, and fixed-income ladders using AMFI registered partners."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-2xl text-brand-navy">What we cover</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {investmentCategory?.items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-2xl text-brand-navy">Our process</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {wealthProcess.map((step) => (
              <li key={step.title}>
                <p className="font-semibold text-brand-teal">{step.title}</p>
                <p>{step.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-xs text-slate-500">
        Mutual fund investments are subject to market risks. Please read all scheme related documents carefully. Past
        performance is not indicative of future returns.
      </p>
      <div className="mt-10">
        <CTASection
          title="Align investments with your milestones"
          description="From SIPs to SWPs, we map asset allocation to your cash flow comfort and review every quarter."
          primary={{ href: '/contact', label: 'Plan my investments' }}
          secondary={{ href: siteConfig.whatsappHref, label: 'Chat now' }}
        />
      </div>
    </div>
  );
}
