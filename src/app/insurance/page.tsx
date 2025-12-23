import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';
import { insurancePillars, serviceCategories } from '@/data/services';
import { insuranceTypes } from '@/data/products';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

const insuranceCategory = serviceCategories.find((category) => category.slug === 'insurance');

export const metadata = buildMetadata({
  title: 'Insurance Solutions',
  description: 'Life, health, motor, travel, and business insurance advisory with IRDAI compliance.',
  path: '/insurance'
});

export default function InsurancePage() {
  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading
        alignment="left"
        eyebrow="Insurance Advisory"
        title="Protect what matters with layered coverage"
        description="We map sum insured, riders, and claim processes to your risk profile."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-2xl text-brand-navy">Coverage spectrum</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {insuranceCategory?.items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-2xl text-brand-navy">Pillars we focus on</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {insurancePillars.map((pillar) => (
              <li key={pillar.title}>
                <p className="font-semibold text-brand-teal">{pillar.title}</p>
                <p>{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="font-serif text-2xl text-brand-navy">Insurance types we facilitate</h3>
        <p className="mt-2 text-sm text-slate-600">
          The following lineup covers every insurance product requested by the advisory brief. Each recommendation clearly
          states insurer, benefits, riders, and exclusions.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {insuranceTypes.map((insurance) => (
            <div key={insurance.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <p className="text-base font-semibold text-brand-navy">{insurance.title}</p>
              <p className="mt-2 text-sm text-slate-600">{insurance.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <CTASection
          title="Get an insurance gap analysis"
          description="Share policy copies securely and we will highlight overlaps or missing protections."
          primary={{ href: '/contact', label: 'Review my cover' }}
          secondary={{ href: siteConfig.whatsappHref, label: 'WhatsApp documents' }}
        />
      </div>
    </div>
  );
}
