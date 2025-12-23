import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { locations } from '@/data/locations';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

const getLocation = (slug: string) => locations.find((location) => location.slug === slug);

type LocationPageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = () => locations.map((location) => ({ slug: location.slug }));

export const generateMetadata = ({ params }: LocationPageProps) => {
  const location = getLocation(params.slug);

  if (!location) {
    return buildMetadata({
      title: 'Location',
      description: 'Local advisory desk',
      path: `/locations/${params.slug}`
    });
  }

  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${location.slug}`
  });
};

export default function LocationPage({ params }: LocationPageProps) {
  const location = getLocation(params.slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading
        alignment="left"
        eyebrow={`${location.city}, ${location.region}`}
        title={`Financial Advisory in ${location.city}`}
        description={location.hero}
      />
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-2xl text-brand-navy">Why {location.city} trusts us</h3>
          <p className="mt-3 text-sm text-slate-600">{location.description}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {location.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-2xl text-brand-navy">Neighbourhoods we actively serve</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {location.neighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="rounded-full border border-brand-light/40 bg-brand-light/10 px-4 py-1 text-sm text-brand-navy"
              >
                {neighborhood}
              </span>
            ))}
          </div>
          <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">SEO Keywords</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-500">
            {location.keywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="font-serif text-2xl text-brand-navy">Popular services in {location.city}</h3>
        <p className="mt-3 text-sm text-slate-600">
          Insurance: term, health, ULIP, group, motor, fire, marine, business, crop. Investments: SIPs, SWPs, mutual funds, ETFs,
          AIFs, PMS, demat onboarding. Loans: home loans, LAP, personal loans, credit line comparisons.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          We operate under AMFI ARN-281995 and IRDAI agent code ICI01684672, ensuring regulators recognise every recommendation.
        </p>
      </div>
      <div className="mt-12">
        <CTASection
          eyebrow={`${location.city} desk`}
          title={`Book a consultation in ${location.city}`}
          description={`Call ${siteConfig.phoneDisplay}, WhatsApp us, or submit the contact form to receive a personalised proposal for ${location.city}.`}
          primary={{ href: '/contact', label: 'Contact us' }}
          secondary={{ href: siteConfig.whatsappHref, label: 'Chat on WhatsApp' }}
        />
      </div>
    </div>
  );
}
