import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

const certifications = [
  {
    title: 'AMFI Registered Mutual Fund Distributor',
    detail: 'ARN-281995',
    description: 'Registered under AMFI to distribute mutual fund products and comply with disclosure norms.'
  },
  {
    title: 'IRDAI Registered Insurance Advisor',
    detail: 'ICICI Prudential Agent Code ICI01684672',
    description: 'Authorised to recommend and service life, health, and general insurance policies.'
  },
  {
    title: 'Data privacy & consent',
    detail: 'In line with RBI and SEBI advisories',
    description: 'Client data stored securely with consent logs and periodic audits.'
  }
];

export const metadata = buildMetadata({
  title: 'Certifications & Registrations',
  description: 'Regulatory details of PTS Financial Services.',
  path: '/certifications'
});

export default function CertificationsPage() {
  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading
        alignment="left"
        eyebrow="Compliance"
        title="Certifications & Registrations"
        description="We operate under the supervision of Indian regulators and adhere to fair practice codes."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {certifications.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="font-serif text-xl text-brand-navy">{item.title}</p>
            <p className="mt-2 text-sm font-semibold text-brand-teal">{item.detail}</p>
            <p className="mt-3 text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <CTASection
          title="Request compliance documents"
          description="Need letters, certificates, or policy copies for your due diligence? We will share them promptly."
          primary={{ href: '/contact', label: 'Request documents' }}
          secondary={{ href: siteConfig.whatsappHref, label: 'Quick note' }}
        />
      </div>
    </div>
  );
}
