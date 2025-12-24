import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: 'Terms of engagement for PTS Finserv website and advisory practice.',
  path: '/terms'
});

export default function TermsPage() {
  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading alignment="left" eyebrow="Terms" title="Terms & Conditions" />
      <div className="mt-8 space-y-4 text-sm text-slate-600">
        <p>
          Accessing this website implies acceptance of these terms. Content is subject to change without notice. All trademarks and
          registrations belong to their respective owners.
        </p>
        <p>
          Advisory engagements commence only after onboarding formalities, documentation, and fee/commission disclosures are
          completed. Either party may terminate the engagement by written notice.
        </p>
        <p>
          Indian laws govern the use of this site. Any disputes fall under the jurisdiction of the competent courts in Kolkata,
          India.
        </p>
      </div>
    </div>
  );
}
