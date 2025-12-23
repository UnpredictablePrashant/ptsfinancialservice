import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  items: string[];
  href: string;
};

const ServiceCard = ({ title, description, items, href }: Props) => (
  <article className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
    <div className="flex-1">
      <h3 className="font-serif text-2xl text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <ul className="mt-4 space-y-1 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-gold" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <Link
      href={href}
      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-gold"
      aria-label={`Explore ${title}`}
    >
      Explore {title} <span aria-hidden="true">→</span>
    </Link>
  </article>
);

export default ServiceCard;
