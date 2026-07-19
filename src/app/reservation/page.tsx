import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ReserveCTA from '@/components/ReserveCTA';

export const metadata: Metadata = {
  title: 'Réserver une table',
  description:
    'Réservez votre table au restaurant CANCAN à L’Haÿ-les-Roses via Google. Confirmation immédiate, 7j/7.',
  alternates: { canonical: '/reservation' },
};

export default function ReservationPage() {
  return (
    <>
      <PageHero eyebrow="Réservation" title="Réservez votre table" subtitle="Réservation en ligne instantanée via Google." />
      <section className="py-24">
        <div className="wrap">
          <ReserveCTA />
        </div>
      </section>
    </>
  );
}
