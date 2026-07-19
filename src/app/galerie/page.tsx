import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    'La galerie photo du restaurant CANCAN à L’Haÿ-les-Roses : salle, terrasse, assiettes, bar et cocktails.',
  alternates: { canonical: '/galerie' },
};

export default function GaleriePage() {
  return (
    <>
      <PageHero eyebrow="Galerie" title="L’atmosphère CANCAN" subtitle="Salle, terrasse, assiettes et cocktails." />
      <section className="py-24">
        <div className="wrap">
          <Gallery />
        </div>
      </section>
    </>
  );
}
