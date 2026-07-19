import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import MenuSection from '@/components/MenuSection';

export const metadata: Metadata = {
  title: 'La carte',
  description:
    'Découvrez la carte du restaurant CANCAN à L’Haÿ-les-Roses : entrées, salades, plats maison, brunch, desserts, cocktails et vins.',
  alternates: { canonical: '/carte' },
};

export default function CartePage() {
  return (
    <>
      <PageHero
        eyebrow="La carte"
        title="Notre carte"
        subtitle="Cuisine maison, généreuse et renouvelée régulièrement. Prix nets en euros, taxes et service compris."
      />
      <section className="py-24">
        <div className="wrap">
          <div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-gold/30 bg-cream px-6 py-4 text-center text-[0.82rem] uppercase tracking-[0.1em] text-anthracite">
            <b className="text-gold">Happy Hours 17h – 20h</b> · Cocktails classiques 7 € · Mocktails 6 € ·
            Verre de vin 25cl 7 € · Pinte de Silver 5,5 €
          </div>
          <MenuSection />
        </div>
      </section>
    </>
  );
}
