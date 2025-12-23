type Props = {
  name: string;
  title: string;
  quote: string;
};

const TestimonialCard = ({ name, title, quote }: Props) => (
  <article className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
    <p className="text-lg text-brand-navy">“{quote}”</p>
    <div className="mt-6">
      <p className="font-semibold text-brand-teal">{name}</p>
      <p className="text-sm text-slate-500">{title}</p>
    </div>
  </article>
);

export default TestimonialCard;
