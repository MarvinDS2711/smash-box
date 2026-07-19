import Link from 'next/link';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import Specialities from '@/components/Specialities';
import MenuSection from '@/components/MenuSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import ReserveCTA from '@/components/ReserveCTA';
import ContactInfo from '@/components/ContactInfo';
import { restaurant, features } from '@/lib/data';
import { getGoogleRating } from '@/lib/googlePlaces';

export default async function Home() {
  const { rating, reviewCount } = await getGoogleRating();
  return (
    <>
      <Hero />

      {/* Bandeau infos */}
      <div className="bg-ink text-[#E7DFD1]">
        <div className="wrap flex flex-wrap justify-center gap-x-10 gap-y-4 py-7 text-[0.82rem] uppercase tracking-[0.12em] max-sm:gap-x-7">
          <span>Ouvert <b className="text-gold-soft">7j/7</b></span>
          <span><b className="text-gold-soft">7h – 00h</b></span>
          <span>Service <b className="text-gold-soft">continu</b></span>
          <span><b className="text-gold-soft">Terrasse</b></span>
          <span>Bar à <b className="text-gold-soft">cocktails</b></span>
        </div>
      </div>

      {/* Présentation */}
      <section className="py-28 max-sm:py-16">
        <div className="wrap max-w-3xl">
          <Reveal>
            <p className="eyebrow">La maison</p>
            <h2 className="title">Une brasserie de quartier, l’âme d’un bistrot parisien</h2>
            <div className="rule" />
            <p className="mb-4 text-muted">
              CANCAN est une brasserie et un restaurant français au centre de L’Haÿ-les-Roses. Dans
              un décor vintage soigné, on y sert une cuisine maison, généreuse et changeante : des
              classiques français revisités, un plat du jour renouvelé et une jolie sélection de
              vins et de cocktails.
            </p>
            <p className="text-muted">
              Ouvert en continu de 7h à minuit, 7 jours sur 7, CANCAN accompagne toutes les
              envies — un café le matin, un déjeuner en terrasse, un afterwork ou un dîner entre
              amis. L’accueil chaleureux d’Anne et de son équipe fait le reste.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-10 text-center">
              {[
                [restaurant.rating.toString().replace('.', ',') + '/5', 'Note Google'],
                ['7j/7', 'Service continu'],
              ].map(([b, s]) => (
                <div key={s}>
                  <b className="block font-serif text-3xl text-ink">{b}</b>
                  <span className="text-[0.76rem] uppercase tracking-[0.12em] text-muted">{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pourquoi venir */}
      <section className="bg-cream py-28 max-sm:py-16">
        <div className="wrap">
          <SectionHeading
            eyebrow="Pourquoi venir"
            title="Le plaisir d’un vrai lieu de vie"
            lead="Un même endroit pour le café du matin, le déjeuner, l’apéro et le dîner."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-[var(--line)] bg-paper p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-soft">
                  <Icon name={f.icon} size={40} strokeWidth={1.4} className="mb-5 text-gold" />
                  <h3 className="mb-2 font-serif text-xl">{f.title}</h3>
                  <p className="m-0 text-[0.92rem] text-muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Spécialités */}
      <Specialities />

      {/* Carte (extrait) */}
      <section className="bg-cream py-28 max-sm:py-16" id="carte">
        <div className="wrap text-center">
          <SectionHeading
            eyebrow="La carte"
            title="Notre carte"
            lead="Une cuisine maison, généreuse et renouvelée régulièrement."
          />
          <MenuSection />
          <Link href="/carte" className="btn btn-primary mt-10">Voir toute la carte</Link>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-28 max-sm:py-16">
        <div className="wrap">
          <SectionHeading eyebrow="Galerie" title="L’atmosphère CANCAN" lead="Salle, terrasse, assiettes et cocktails." />
          <div className="mt-14">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Avis */}
      <section className="bg-ink py-28 max-sm:py-16">
        <div className="wrap text-center">
          <SectionHeading eyebrow="Ils en parlent" title="Vos avis" light />
          <Reviews rating={rating} reviewCount={reviewCount} />
          <a href={restaurant.socials.google} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-11">
            Voir tous les avis Google
          </a>
        </div>
      </section>

      {/* Réservation */}
      <section className="py-28 max-sm:py-16">
        <div className="wrap">
          <SectionHeading eyebrow="Réservation" title="Réservez votre table" />
          <div className="mt-13 pt-1">
            <ReserveCTA />
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section className="bg-cream py-28 max-sm:py-16">
        <div className="wrap">
          <SectionHeading eyebrow="Localisation" title="Nous trouver" />
          <div className="mt-13 pt-1">
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#141210] text-center text-paper">
        <div className="px-6 py-28 max-sm:py-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold-soft">À bientôt</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.4rem)] font-semibold">Passez nous voir</h2>
          <p className="mx-auto mb-8 mt-4 max-w-xl text-[#EDE6D9]">
            Café, déjeuner, apéritif ou dîner — la porte du CANCAN est ouverte de 7h à minuit.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a href={restaurant.reserveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Réserver une table</a>
            <a href={`tel:${restaurant.phoneIntl}`} className="btn btn-ghost !border-white/40 !text-paper">{restaurant.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
