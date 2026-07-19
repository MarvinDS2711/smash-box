import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { restaurant } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité et de protection des données personnelles du restaurant CANCAN à L’Haÿ-les-Roses.',
  alternates: { canonical: '/politique-confidentialite' },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Informations" title="Politique de confidentialité" />
      <section className="py-20">
        <article className="wrap max-w-3xl leading-relaxed text-[#3a352f] [&_h2]:mb-2.5 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-ink [&_li]:mb-2 [&_p]:mb-3.5 [&_ul]:list-disc [&_ul]:pl-5">
          <p>
            La présente politique décrit la manière dont le restaurant CANCAN collecte, utilise et
            protège les données personnelles des utilisateurs, conformément au RGPD (Règlement UE
            2016/679) et à la loi « Informatique et Libertés ».
          </p>
          <h2>Responsable du traitement</h2>
          <p>
            CANCAN — {restaurant.address.full}. Contact :{' '}
            <a className="text-gold" href={`tel:${restaurant.phoneIntl}`}>{restaurant.phone}</a> — Email :{' '}
            <span className="italic text-muted">à compléter</span>.
          </p>
          <h2>Données collectées</h2>
          <p>Via le formulaire de réservation, les données suivantes peuvent être collectées :</p>
          <ul>
            <li>Nom et prénom</li>
            <li>Numéro de téléphone</li>
            <li>Adresse email</li>
            <li>Date, heure et nombre de couverts souhaités</li>
            <li>Commentaire libre (préférences, allergies, occasion)</li>
          </ul>
          <h2>Finalités</h2>
          <p>
            Ces données servent uniquement à traiter et confirmer les demandes de réservation. Elles
            ne font l’objet d’aucune cession ni vente à des tiers.
          </p>
          <h2>Durée de conservation</h2>
          <p>
            Les données sont conservées le temps nécessaire au traitement de la demande, puis
            supprimées ou archivées conformément aux obligations légales.
          </p>
          <h2>Cookies</h2>
          <p>
            Le site peut utiliser des cookies de mesure d’audience et des services tiers (Google
            Maps, réseaux sociaux, module de réservation). Un bandeau de consentement permettra
            d’accepter ou de refuser les cookies non essentiels.
          </p>
          <h2>Vos droits</h2>
          <p>
            Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation,
            d’opposition et de portabilité. Pour les exercer, contactez le restaurant. Vous pouvez
            aussi saisir la CNIL (<a className="text-gold" href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
          </p>
        </article>
      </section>
    </>
  );
}
