import Reveal from './Reveal';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { specialities } from '@/lib/data';

export default function Specialities() {
  return (
    <section className="py-28">
      <div className="wrap">
        <SectionHeading eyebrow="Nos spécialités" title="Fait maison, produits frais" />
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {specialities.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="group flex h-full flex-col items-center gap-3.5 rounded-2xl border border-[var(--line)] bg-paper px-4 py-9 text-center transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-ink">
                <Icon
                  name={s.icon}
                  size={34}
                  strokeWidth={1.4}
                  className="text-gold transition-colors group-hover:text-gold-soft"
                />
                <span className="text-[0.86rem] font-medium tracking-wide text-ink transition-colors group-hover:text-paper">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
