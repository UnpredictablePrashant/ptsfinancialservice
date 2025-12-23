import Link from 'next/link';
import { ReactNode } from 'react';

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  children?: ReactNode;
};

const CTASection = ({ eyebrow, title, description, primary, secondary, children }: CTASectionProps) => (
  <section className="relative overflow-hidden rounded-3xl bg-brand-navy px-8 py-10 text-white shadow-xl">
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">{eyebrow}</p>}
        <h3 className="mt-2 font-serif text-3xl">{title}</h3>
        <p className="mt-4 text-base text-slate-200">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={primary.href}
            className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-white"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
      {children && <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">{children}</div>}
    </div>
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 w-64 translate-x-1/2 bg-[radial-gradient(circle,_rgba(11,167,181,0.3),_transparent_70%)]"
    />
  </section>
);

export default CTASection;
