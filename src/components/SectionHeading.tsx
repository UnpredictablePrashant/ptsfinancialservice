type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
};

const SectionHeading = ({ eyebrow, title, description, alignment = 'center' }: SectionHeadingProps) => {
  const alignClass = alignment === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">{eyebrow}</p>}
      <h2 className="mt-2 font-serif text-3xl text-brand-navy sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-slate-600">{description}</p>}
    </div>
  );
};

export default SectionHeading;
