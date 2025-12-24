import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About PTS Finserv',
  description: 'Learn about the mission, ethos, and leadership team at PTS Finserv.',
  path: '/about'
});

export default function AboutPage() {
  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading
        alignment="left"
        eyebrow="About us"
        title="Our story"
        description="PTS Finserv is rooted in client-first advisory that balances growth with protection."
      />
      <div className="mt-8 space-y-6 text-base text-slate-600">
        <p>
          Founded by <strong>Prakash Sarkar</strong>, a Certified Investment Planner, we started with a simple promise: deliver
          transparent guidance that respects regulatory boundaries while helping families grow and protect their wealth.
        </p>
        <p>
          We blend technology with a concierge mindset—digital onboarding, WhatsApp-ready updates, and in-person reviews when
          needed. Every piece of advice is documented, explaining suitability, risks, and potential costs upfront.
        </p>
        <p>
          From first-time SIP investors to established business owners, our processes remain the same: discovery, calibrated
          product selection, and disciplined monitoring.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-2xl text-brand-navy">Our mission</h3>
          <p className="mt-3 text-sm text-slate-600">
            Empower Indian households with compliant, unbiased financial insights that nurture long-term wealth creation.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-2xl text-brand-navy">Our mindset</h3>
          <p className="mt-3 text-sm text-slate-600">
            Client trust over transactions. Every recommendation is mapped to life goals, liquidity needs, and family values.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <CTASection
          title="Let’s co-create your financial roadmap"
          description="Schedule a consultation to review your insurance coverage, investment mix, and borrowing strategy."
          primary={{ href: '/contact', label: 'Contact PTS' }}
          secondary={{ href: siteConfig.whatsappHref, label: 'Chat on WhatsApp' }}
        />
      </div>
    </div>
  );
}
