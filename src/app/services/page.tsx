import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import LogoCloud from '@/components/LogoCloud';
import { serviceCategories } from '@/data/services';
import { productOfferings } from '@/data/products';
import {
  lifeInsuranceBrands,
  healthInsuranceBrands,
  mutualFundBrands,
  homeLoanPartners,
  wealthPartners,
  stockBrokingPartners
} from '@/data/partners';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Products & Services',
  description: 'Master list of investment, insurance, and loan services offered by PTS Finserv.',
  path: '/services'
});

export default function ServicesPage() {
  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading
        alignment="left"
        eyebrow="Products & Services"
        title="Holistic offerings under one advisory desk"
        description="Every engagement is modular—start where it matters most and expand as life evolves."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {serviceCategories.map((category) => (
          <ServiceCard
            key={category.slug}
            title={category.title}
            description={category.description}
            items={category.items}
            href={category.path}
          />
        ))}
      </div>
      <div className="mt-12">
        <SectionHeading
          alignment="left"
          eyebrow="Product lineup"
          title="Detailed list of products we promote"
          description="Below is the specific checklist requested by clients. Each product is mapped to a regulator-compliant partner."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productOfferings.map((product) => (
            <article key={product.title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">{product.category}</p>
              <h3 className="mt-3 text-lg font-semibold text-brand-navy">{product.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{product.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-12 space-y-6">
        <SectionHeading
          alignment="left"
          eyebrow="Trusted partners"
          title="Licenced insurers, AMCs, NBFCs & platforms"
          description="These are the institutions whose products we distribute or coordinate for clients."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <LogoCloud title="Life insurance" logos={lifeInsuranceBrands} />
          <LogoCloud title="Health/general insurance" logos={healthInsuranceBrands} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <LogoCloud title="Mutual funds" logos={mutualFundBrands} />
          <LogoCloud title="Home loan partners" logos={homeLoanPartners} columns={2} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <LogoCloud title="Wealth platforms" logos={wealthPartners} columns={2} />
          <LogoCloud title="Stock broking partners" logos={stockBrokingPartners} columns={2} />
        </div>
      </div>
      <p className="mt-6 text-xs text-slate-500">
        Mutual fund investments are subject to market risks. Insurance and loan approvals follow respective underwriting norms.
      </p>
      <div className="mt-12">
        <CTASection
          title="Need a portfolio review?"
          description="Share your current portfolio summary and we will highlight gaps within 5 working days."
          primary={{ href: '/contact', label: 'Request review' }}
          secondary={{ href: siteConfig.whatsappHref, label: 'Message us' }}
        />
      </div>
    </div>
  );
}
