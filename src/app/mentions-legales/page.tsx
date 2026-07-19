import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { restaurant } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du restaurant CANCAN, 2 Rue Dispan, 94240 L’Haÿ-les-Roses.',
  alternates: { canonical: '/mentions-legales' },
};

const Tbc = () => <span className="italic text-muted">à compléter</span>;

export default function MentionsPage() {
  return (
    <>
      <PageHero eyebrow="Informations" title="Mentions légales" />
      <section className="py-20">
        <article className="wrap max-w-3xl leading-relaxed text-[#3a352f] [&_h2]:mb-2.5 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-ink [&_p]:mb-3.5">
          <p>
            Conformément aux articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la
            Confiance dans l’économie numérique (LCEN), les informations suivantes sont portées à la
            connaissance des utilisateurs du site.
          </p>
          <h2>Éditeur du site</h2>
          <p>
            <strong>CANCAN</strong> — Brasserie & restaurant<br />
            {restaurant.address.full}<br />
            Téléphone : <a className="text-gold" href={`tel:${restaurant.phoneIntl}`}>{restaurant.phone}</a><br />
            Email : <Tbc /><br />
            Exploité par la société <Tbc /> (dénomination à confirmer)<br />
            SIRET / RCS : <Tbc /> — Capital social : <Tbc /><br />
            TVA intracommunautaire : <Tbc />
          </p>
          <h2>Directeur de la publication</h2>
          <p><Tbc /> (représentant légal de l’établissement).</p>
          <h2>Hébergement</h2>
          <p><Tbc /> — nom de l’hébergeur, adresse et téléphone à renseigner lors de la mise en ligne.</p>
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des éléments du site (textes, mise en page, éléments graphiques, marque
            « CANCAN ») est protégé au titre du droit d’auteur et du droit des marques. Toute
            reproduction sans autorisation écrite préalable est interdite. Les photographies de
            démonstration proviennent de banques d’images libres de droits (Unsplash) et ont vocation
            à être remplacées par les visuels propres au restaurant.
          </p>
          <h2>Responsabilité</h2>
          <p>
            L’éditeur s’efforce d’assurer l’exactitude des informations diffusées (carte, prix,
            horaires), données à titre indicatif et susceptibles d’évoluer. Sa responsabilité ne
            saurait être engagée en cas d’erreur ou d’indisponibilité temporaire du site.
          </p>
        </article>
      </section>
    </>
  );
}
