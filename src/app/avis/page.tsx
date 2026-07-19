import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reviews from '@/components/Reviews';
import { restaurant } from '@/lib/data';
import { getGoogleRating } from '@/lib/googlePlaces';

export const metadata: Metadata = {
  title: 'Avis clients',
  description:
    'Les avis des clients du restaurant CANCAN à L’Haÿ-les-Roses. Noté 4,6/5 sur Google.',
  alternates: { canonical: '/avis' },
};

export default async function AvisPage() {
  const { rating, reviewCount } = await getGoogleRating();
  return (
    <>
      <PageHero eyebrow="Ils en parlent" title="Vos avis" subtitle={`Noté ${rating.toString().replace('.', ',')}/5 sur ${reviewCount} avis Google.`} />
      <section className="bg-ink py-24">
        <div className="wrap text-center">
          <Reviews rating={rating} reviewCount={reviewCount} />
          <a href={restaurant.socials.google} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-11">
            Voir tous les avis Google
          </a>
        </div>
      </section>
    </>
  );
}
