import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const StickyActions = () => (
  <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 md:hidden">
    <Link
      href={`tel:${siteConfig.phoneHref}`}
      className="rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-teal/30"
    >
      Call
    </Link>
    <Link
      href={siteConfig.whatsappHref}
      className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-green-500/30"
    >
      WhatsApp
    </Link>
  </div>
);

export default StickyActions;
