import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import { restaurant } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#141210] pt-16 pb-8 text-[0.9rem] text-[#C9C0B2]">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 pl-[0.42em] font-serif text-[1.7rem] font-bold tracking-brand text-paper">
              CANCAN
            </div>
            <p className="max-w-[280px] text-[#A99E8C]">
              Brasserie & restaurant français à L’Haÿ-les-Roses. Cuisine maison, terrasse et cocktails, 7j/7.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={restaurant.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de CANCAN"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
              >
                <Instagram size={17} />
              </a>
              <a
                href={restaurant.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de CANCAN"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">Navigation</h3>
            {[
              ['/', 'Accueil'],
              ['/carte', 'Carte'],
              ['/galerie', 'Galerie'],
              ['/avis', 'Avis'],
              ['/reservation', 'Réservation'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="block py-1 text-[#C9C0B2] hover:text-paper">
                {label}
              </Link>
            ))}
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">Contact</h3>
            <a href={restaurant.maps.directions} target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-paper">
              {restaurant.address.full}
            </a>
            <a href={`tel:${restaurant.phoneIntl}`} className="block py-1 hover:text-paper">
              {restaurant.phone}
            </a>
            <span className="block py-1">Email : {restaurant.email}</span>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">Informations</h3>
            <Link href="/mentions-legales" className="block py-1 hover:text-paper">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="block py-1 hover:text-paper">Politique de confidentialité</Link>
            <a href={restaurant.reserveUrl} target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-paper">Réserver</a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[0.78rem] text-[#8E8577]">
          <span>© {year} CANCAN · L’Haÿ-les-Roses. Tous droits réservés.</span>
          <span>Cuisine maison · Terrasse · Cocktails</span>
        </div>
      </div>
    </footer>
  );
}
