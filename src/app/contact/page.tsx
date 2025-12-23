import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { localBusinessJsonLd } from '@/lib/structuredData';

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Reach PTS Financial Services for consultations via phone, WhatsApp, or the contact form.',
  path: '/contact'
});

export default function ContactPage() {
  return (
    <>
      <div className="section-container px-4 py-16">
        <Breadcrumbs />
        <SectionHeading
          alignment="left"
          eyebrow="Contact"
          title="We would love to hear from you"
          description="Calls, WhatsApp, or email—all routes are monitored by the advisory desk."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-2xl text-brand-navy">Reach us directly</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                Phone:{' '}
                <a href={`tel:${siteConfig.phoneHref}`} className="font-semibold text-brand-teal">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                WhatsApp:{' '}
                <a href={siteConfig.whatsappHref} className="font-semibold text-brand-teal">
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                Email:{' '}
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-teal">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">{siteConfig.addressLine}</p>
            <p className="mt-1 text-sm text-slate-600">{siteConfig.branchAddress}</p>
            <p className="mt-2 text-sm text-slate-600">{siteConfig.timings}</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg">
            <ContactForm />
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          By submitting this form you consent to PTS Financial Services contacting you via phone, email, or WhatsApp. We never
          sell your data.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd({ page: 'Contact' })) }}
      />
    </>
  );
}
