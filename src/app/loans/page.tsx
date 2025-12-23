import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';
import { loanEssentials, serviceCategories } from '@/data/services';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

const loansCategory = serviceCategories.find((category) => category.slug === 'loans');

export const metadata = buildMetadata({
  title: 'Loans & Credit',
  description: 'Home and personal loan guidance with transparent comparisons across lenders.',
  path: '/loans'
});

export default function LoansPage() {
  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading
        alignment="left"
        eyebrow="Loans & Credit"
        title="Borrow responsibly with complete clarity"
        description="We benchmark interest rates, fees, and eligibility to help you choose the right lender."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-2xl text-brand-navy">How we help</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {loansCategory?.items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-2xl text-brand-navy">Process highlights</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {loanEssentials.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-brand-teal">{item.title}</p>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-xs text-slate-500">
        Loan approvals are subject to lender underwriting. PTS Financial Services facilitates documentation and comparisons but
        does not guarantee sanctions.
      </p>
      <div className="mt-10">
        <CTASection
          title="Compare loan offers before you sign"
          description="Share existing sanction letters or requirements and receive a structured comparison deck."
          primary={{ href: '/contact', label: 'Start comparison' }}
          secondary={{ href: siteConfig.whatsappHref, label: 'Share via WhatsApp' }}
        />
      </div>
    </div>
  );
}
