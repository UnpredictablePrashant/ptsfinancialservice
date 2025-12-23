'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const crumbs = segments.map((segment, index) => ({
    label: segment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()),
    href: '/' + segments.slice(0, index + 1).join('/')
  }));

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="text-brand-teal hover:text-brand-gold">
            Home
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            <Link
              href={crumb.href}
              className="capitalize text-slate-500 transition hover:text-brand-gold"
              aria-current={crumb.href === pathname ? 'page' : undefined}
            >
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
