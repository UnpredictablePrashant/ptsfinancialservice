import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import LogoCloud from '@/components/LogoCloud';
import { serviceCategories } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { faqs } from '@/data/faqs';
import { productOfferings } from '@/data/products';
import { locations } from '@/data/locations';
import {
  lifeInsuranceBrands,
  healthInsuranceBrands,
  mutualFundBrands,
  homeLoanPartners,
  wealthPartners,
  stockBrokingPartners
} from '@/data/partners';
import posts from '@/content/resources/posts.json';
import type { ResourcePost } from '@/types';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { localBusinessJsonLd } from '@/lib/structuredData';

export const metadata = buildMetadata({
  title: 'PTS Financial Services',
  description: siteConfig.description,
  path: '/'
});

const heroHighlights = [
  'Personalised advisory led by Prakash Sarkar (Certified Investment Planner)',
  'Compliant execution for AMFI & IRDAI registered products',
  'Transparent reporting, no hype, and proactive review calls'
];

const valueProps = [
  { title: 'Personalised advisory', body: 'No one-size-fits-all portfolios. Every plan links to tangible goals.' },
  { title: 'Compliance-first', body: 'Documentation, disclosures, and audit trails you can rely on.' },
  { title: 'Transparency', body: 'Clear articulation of product costs, commissions, and risks.' },
  { title: 'Long-term view', body: 'Guiding families through multiple market cycles since launch.' }
];

const trustBadges = [
  'AMFI Registered Mutual Fund Distributor (ARN-281995)',
  'IRDAI Registered Insurance Advisor – ICICI Prudential (Agent Code ICI01684672)',
  'Data privacy and consent led onboarding'
];

const featuredPosts = (posts as ResourcePost[]).slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="section-container grid gap-12 px-4 py-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">PTS Financial Services</p>
          <h1 className="mt-4 font-serif text-4xl text-brand-navy sm:text-5xl">Trusted partner for insurance & investment growth</h1>
          <p className="mt-4 text-base text-slate-600">
            Empowering Indian families with compliant investment, insurance, and credit advisory. We combine research-driven
            recommendations with real human support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-gold hover:text-brand-navy"
            >
              Book free consultation
            </Link>
            <Link
              href={`tel:${siteConfig.phoneHref}`}
              className="rounded-full border border-brand-teal px-6 py-3 text-sm font-semibold text-brand-teal transition hover:border-brand-gold hover:text-brand-gold"
            >
              Talk to advisor
            </Link>
          </div>
          <ul className="mt-8 space-y-3">
            {heroHighlights.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-gold" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <Image
            src="/images/hero-grid.svg"
            alt="Financial planning illustration"
            width={480}
            height={360}
            className="rounded-3xl border border-slate-100 bg-white shadow-2xl"
            priority
          />
          <div className="absolute -left-6 bottom-6 rounded-2xl bg-white/90 p-4 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">Founder</p>
            <p className="mt-2 font-serif text-2xl text-brand-navy">Prakash Sarkar</p>
            <p className="text-sm text-slate-600">Certified Investment Planner · Financial Advisor & Wealth Creator</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-container px-4">
          <SectionHeading
            eyebrow="Local presence"
            title="Dedicated desks for Kolkata, Siliguri & West Bengal"
            description="We combine digital convenience with neighbourhood-level understanding so you always speak to someone who knows your market."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {locations.map((location) => (
              <article key={location.slug} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">{location.region}</p>
                <h3 className="mt-2 font-serif text-xl text-brand-navy">{location.city}</h3>
                <p className="mt-2 text-sm text-slate-600">{location.hero}</p>
                <Link
                  href={`/locations/${location.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-brand-teal"
                  aria-label={`Explore ${location.city}`}
                >
                  Explore city page <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Need help elsewhere in West Bengal? <Link href="/locations" className="text-brand-teal underline">View all locations</Link> or{' '}
            <Link href="/contact" className="text-brand-teal underline">contact us</Link> for a remote consultation.
          </p>
        </div>
      </section>

      <section className="section-container px-4 py-12">
        <SectionHeading
          eyebrow="Product coverage"
          title="Products we actively advise on"
          description="From protection-led plans to market instruments, every product recommendation is documented with suitability notes."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {productOfferings.map((product) => (
            <div
              key={product.title}
              className="rounded-2xl border border-slate-100 bg-white px-4 py-5 text-left shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">{product.category}</p>
              <p className="mt-2 text-base font-semibold text-brand-navy">{product.title}</p>
              <p className="mt-2 text-sm text-slate-600">{product.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Mutual fund and market-linked investments are subject to market risks. Insurance products are issued by IRDAI regulated
          insurers. Loan approvals depend on lender underwriting.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="section-container px-4">
          <SectionHeading
            eyebrow="Services Snapshot"
            title="Investments · Insurance · Loans"
            description="Integrated advisory platform that keeps your investments insured and liabilities optimised."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {serviceCategories.map((category) => (
              <ServiceCard
                key={category.slug}
                title={category.title}
                description={category.description}
                items={category.items.slice(0, 4)}
                href={category.path}
              />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            Mutual fund investments are subject to market risks. Read all scheme related documents carefully.
          </p>
        </div>
      </section>

      <section className="section-container px-4 py-16">
        <SectionHeading
          eyebrow="Why PTS"
          title="Value propositions that stand the test of time"
          description="We stay invested alongside you with accountability meetings, granular reporting, and proactive risk reviews."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {valueProps.map((value) => (
            <div key={value.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-brand-navy">{value.title}</p>
              <p className="mt-2 text-sm text-slate-600">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container grid gap-8 px-4 py-16 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">Founder note</p>
          <h3 className="mt-3 font-serif text-3xl text-brand-navy">Meet Prakash Sarkar</h3>
          <p className="mt-4 text-sm text-slate-600">
            With over a decade across financial planning, Prakash ensures every engagement stays client-first. He is an AMFI
            registered distributor and IRDAI licensed advisor—working closely with families, entrepreneurs, and professionals.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-slate-600">
            <li>• Certified Investment Planner | Financial Advisor & Wealth Creator</li>
            <li>• AMFI Registered Mutual Fund Distributor (ARN-281995)</li>
            <li>• IRDAI Registered Insurance Advisor – ICICI Prudential (Agent Code ICI01684672)</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-lg">
          <Image
            src="/images/ceo.jpg"
            alt="Prakash Sarkar portrait"
            width={360}
            height={420}
            className="h-full w-full rounded-2xl object-cover"
            priority
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-container px-4">
          <SectionHeading
            eyebrow="Trust & Compliance"
            title="We operate under regulator-approved registrations"
            description="Safety and suitability come before sales. We document every recommendation."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="rounded-2xl border border-brand-light/30 bg-brand-light/10 p-6 text-center text-sm font-semibold text-brand-navy"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container space-y-8 px-4 py-16">
        <SectionHeading
          eyebrow="Partner network"
          title="We collaborate with India’s leading insurers, AMCs, lenders & platforms"
          description="Authentic relationships with licensed institutions ensure every recommendation is backed by strong execution support."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <LogoCloud title="Life insurance partners" logos={lifeInsuranceBrands} />
          <LogoCloud title="Health & general insurance partners" logos={healthInsuranceBrands} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <LogoCloud title="Mutual fund AMCs" logos={mutualFundBrands} />
          <LogoCloud title="Home loan partners" logos={homeLoanPartners} columns={2} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <LogoCloud title="Wealth platforms" logos={wealthPartners} columns={2} />
          <LogoCloud title="Stock broking partners" logos={stockBrokingPartners} columns={2} />
        </div>
        <p className="text-xs text-slate-500">
          Logos shown are for representation of tie-ups and distribution partnerships. All trademarks belong to their respective
          owners.
        </p>
      </section>

      <section className="section-container px-4 py-16">
        <SectionHeading
          eyebrow="Voices"
          title="Clients appreciate clarity & discipline"
          description="Testimonials are illustrative and anonymised to protect privacy."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">Testimonials do not constitute investment advice or performance guarantees.</p>
      </section>

      <section className="bg-white py-16">
        <div className="section-container px-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we answer during consultations"
            description="Still unsure? Reach out for a discovery call to explore your unique situation."
          />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="section-container px-4 py-16">
        <SectionHeading
          eyebrow="Knowledge Hub"
          title="Resources to stay informed"
          description="Short reads on wealth, insurance, and responsible borrowing crafted for Indian investors."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">{post.category}</p>
              <h3 className="mt-3 font-serif text-xl text-brand-navy">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <p className="mt-4 text-xs text-slate-500">
                {post.readingTime} · {new Date(post.publishedOn).toLocaleDateString('en-IN')}
              </p>
              <Link href="/resources" className="mt-4 inline-flex items-center text-sm font-semibold text-brand-teal">
                Read more <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container px-4 pb-20">
        <CTASection
          eyebrow="Ready to begin?"
          title="Book a free 30-minute consultation"
          description="Share your goals and documents securely—Prakash will map next steps within one business day."
          primary={{ href: '/contact', label: 'Schedule consultation' }}
          secondary={{ href: siteConfig.whatsappHref, label: 'WhatsApp us' }}
        >
          <ContactForm variant="compact" />
        </CTASection>
        <p className="mt-4 text-xs text-slate-500">
          By submitting, you consent to being contacted by phone/WhatsApp/email. We never share your information with third parties.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd({ page: 'Home' })) }}
      />
    </>
  );
}
