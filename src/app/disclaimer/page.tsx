import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Disclaimer',
  description: 'Disclaimers for PTS Financial Services website and advisory services.',
  path: '/disclaimer'
});

export default function DisclaimerPage() {
  return (
    <div className="section-container px-4 py-16">
      <Breadcrumbs />
      <SectionHeading alignment="left" eyebrow="Disclaimer" title="Important notices" />
      <div className="mt-8 space-y-4 text-sm text-slate-600">
        <p>
          The information on this website is for educational purposes only and should not be considered investment, insurance, or
          loan advice without a personalised consultation.
        </p>
        <p>
          Mutual fund investments are subject to market risks. Insurance benefits and loan approvals depend on underwriting and
          regulatory norms. Past performance or illustrations do not guarantee future outcomes.
        </p>
        <p>
          PTS Financial Services is not responsible for decisions made solely based on website content. Please schedule a
          consultation for tailored recommendations.
        </p>
      </div>
    </div>
  );
}
