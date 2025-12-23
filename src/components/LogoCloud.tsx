type LogoCloudProps = {
  title: string;
  logos: string[];
  columns?: 2 | 3 | 4;
};

const columnClass: Record<NonNullable<LogoCloudProps['columns']>, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4'
};

const LogoCloud = ({ title, logos, columns = 3 }: LogoCloudProps) => (
  <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">{title}</p>
    <div className={`mt-4 grid gap-3 ${columnClass[columns]} md:grid-cols-4`}>
      {logos.map((logo) => (
        <div
          key={logo}
          className="flex h-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-3 text-center text-sm font-semibold text-brand-navy"
          aria-label={`${logo} logo placeholder`}
        >
          {logo}
        </div>
      ))}
    </div>
  </div>
);

export default LogoCloud;
