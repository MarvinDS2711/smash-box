import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactInfo from '@/components/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact & accès',
  description:
    'Contactez le restaurant CANCAN à L’Haÿ-les-Roses : adresse, téléphone, horaires et plan d’accès.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Nous trouver" subtitle="2 Rue Dispan, 94240 L’Haÿ-les-Roses — ouvert tous les jours de 7h à minuit." />
      <section className="py-24">
        <div className="wrap">
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
