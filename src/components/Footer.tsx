import Link from 'next/link';
import { navLinks, siteConfig } from '@/lib/site';
import { locations } from '@/data/locations';

const Footer = () => (
  <footer className="mt-20 border-t border-slate-100 bg-white">
    <div className="section-container grid gap-8 px-4 py-12 md:grid-cols-5">
      <div>
        <p className="font-serif text-2xl text-brand-navy">PTS Financial Services</p>
        <p className="mt-3 text-sm text-slate-600">{siteConfig.tagline}</p>
        <p className="mt-4 text-xs text-slate-500">
          AMFI Registered Mutual Fund Distributor (ARN-281995) · IRDAI Registered Insurance Advisor (ICICI Prudential Agent Code
          ICI01684672)
        </p>
      </div>
      <div>
        <p className="font-semibold text-brand-navy">Navigate</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-brand-gold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-semibold text-brand-navy">Contact</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>
            Phone:{' '}
            <a href={`tel:${siteConfig.phoneHref}`} className="text-brand-teal hover:text-brand-gold">
              {siteConfig.phoneDisplay}
            </a>
          </li>
          <li>
            WhatsApp:{' '}
            <a href={siteConfig.whatsappHref} className="text-brand-teal hover:text-brand-gold">
              {siteConfig.whatsappDisplay}
            </a>
          </li>
          <li>
            Email:{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-teal hover:text-brand-gold">
              {siteConfig.email}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-semibold text-brand-navy">Quick info</p>
        <p className="mt-3 text-sm text-slate-600">{siteConfig.addressLine}</p>
        <p className="mt-1 text-sm text-slate-600">{siteConfig.branchAddress}</p>
        <p className="mt-2 text-sm text-slate-600">{siteConfig.timings}</p>
      </div>
      <div>
        <p className="font-semibold text-brand-navy">West Bengal Desks</p>
        <p className="mt-2 text-sm text-slate-600">
          Localised advisory for Siliguri, Kolkata, Durgapur, Asansol, and every West Bengal growth corridor.
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          {locations.map((location) => (
            <li key={location.slug}>
              <Link href={`/locations/${location.slug}`} className="text-brand-teal hover:text-brand-gold">
                {location.city} financial advisor
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-500">
          Find mutual fund distributors, insurance advisors, and loan consultants near Sevoke Road, Ballygunge, Howrah, Bardhaman,
          Malda, and the Dooars.
        </p>
      </div>
    </div>
    <div className="border-t border-slate-100 px-4 py-6 text-center text-xs text-slate-500">
      Mutual fund investments are subject to market risks. Please read all scheme related documents carefully. Insurance and loan products are offered through licensed partners. © {new Date().getFullYear()} {siteConfig.name}
    </div>
  </footer>
);

export default Footer;
