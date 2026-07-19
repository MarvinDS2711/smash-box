export default function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-ink pb-16 pt-24 text-center text-paper">
      <div className="wrap">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold-soft">{eyebrow}</p>
        <h1 className="font-serif text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-tight">{title}</h1>
        <div className="mx-auto my-6 h-[2px] w-[52px] bg-gold" />
        {subtitle && <p className="mx-auto max-w-2xl text-[1.02rem] text-[#C9C0B2]">{subtitle}</p>}
      </div>
    </section>
  );
}
