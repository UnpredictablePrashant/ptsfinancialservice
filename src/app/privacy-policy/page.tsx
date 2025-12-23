import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Understand how PTS Financial Services collects, uses, and protects your data.',
  path: '/privacy-policy'
});

export default function PrivacyPolicyPage() {
  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading alignment="left" eyebrow="Policy" title="Privacy Policy" />
      <div className="mt-10 space-y-6 text-sm text-slate-600">
        <p>We collect only the information necessary to deliver advisory services, such as contact details and documentation.</p>
        <p>
          Your data is stored on encrypted systems with restricted access. We never sell data to third parties. Information may be
          shared with regulators or product providers strictly on a need-to-know basis and with your consent.
        </p>
        <p>
          Marketing communications are opt-in and can be stopped anytime by writing to us. Cookies and analytics help improve the
          website experience but do not capture sensitive details.
        </p>
        <p>Please email us if you would like to review, update, or delete the information we maintain about you.</p>
      </div>
    </div>
  );
}
