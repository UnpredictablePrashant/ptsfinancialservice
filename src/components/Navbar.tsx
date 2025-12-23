'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';
import { navLinks, siteConfig } from '@/lib/site';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="PTS Financial Services Home">
          <Image src="/images/logo.jpg" alt="PTS Financial Services logo" width={48} height={48} className="h-10 w-10 rounded-full object-cover" priority />
          <span className="font-serif text-xl text-brand-navy">
            PTS <span className="text-brand-gold">Financial</span>
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm font-semibold text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx('transition hover:text-brand-gold', pathname === link.href && 'text-brand-teal')}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="rounded-full bg-brand-teal px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-gold hover:text-brand-navy"
          >
            Book consultation
          </Link>
        </div>
        <button
          className="inline-flex items-center rounded-full border border-slate-200 p-2 text-brand-navy md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span aria-hidden="true">{isOpen ? '×' : '≡'}</span>
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx('rounded-lg px-3 py-2 hover:bg-slate-50', pathname === link.href && 'text-brand-teal')}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`tel:${siteConfig.phoneHref}`}
              className="rounded-lg bg-brand-teal px-3 py-2 text-center text-white"
              onClick={() => setIsOpen(false)}
            >
              Call now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
