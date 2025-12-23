import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { locations } from '@/data/locations';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Locations | West Bengal Advisory Desks',
  description:
    'PTS Financial Services serves clients across Kolkata, Siliguri, and every West Bengal district with AMFI registered mutual fund & IRDAI insurance advisory.',
  path: '/locations'
});

export default function LocationsPage() {
  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading
        alignment="left"
        eyebrow="Locations"
        title="Serving families across Kolkata, Siliguri & West Bengal"
        description="Choose your city to see how we customise insurance, investments, and loan strategies for the local context."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {locations.map((location) => (
          <article key={location.slug} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">{location.region}</p>
            <h2 className="mt-2 font-serif text-2xl text-brand-navy">{location.city}</h2>
            <p className="mt-2 text-sm text-slate-600">{location.hero}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light">Focus areas</p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">
              {location.focusAreas.slice(0, 2).map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <Link
              href={`/locations/${location.slug}`}
              className="mt-5 inline-flex items-center text-sm font-semibold text-brand-teal"
              aria-label={`Explore ${location.city} advisory services`}
            >
              Explore city page <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <CTASection
          title="Need a local advisor?"
          description="Even if your town is not listed we can coordinate documentation digitally and arrange periodic in-person reviews."
          primary={{ href: '/contact', label: 'Book a consultation' }}
          secondary={{ href: siteConfig.whatsappHref, label: 'WhatsApp Prakash' }}
        />
      </div>
    </div>
  );
}
