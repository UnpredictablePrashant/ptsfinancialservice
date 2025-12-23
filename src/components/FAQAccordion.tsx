import type { FAQItem } from '@/types';

type Props = {
  items: FAQItem[];
};

const FAQAccordion = ({ items }: Props) => (
  <div className="space-y-3" role="region" aria-label="Frequently asked questions">
    {items.map((faq, index) => (
      <details
        key={faq.question}
        className="group rounded-2xl border border-slate-100 bg-white px-6 py-4 shadow-sm"
        open={index === 0}
      >
        <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-brand-navy">
          <span>{faq.question}</span>
          <span className="text-brand-gold transition group-open:rotate-45" aria-hidden="true">
            +
          </span>
        </summary>
        <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
      </details>
    ))}
  </div>
);

export default FAQAccordion;
