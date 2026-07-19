import { restaurant } from '@/lib/data';

export default function ReserveCTA() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-[var(--line)] bg-cream px-8 py-12 text-center shadow-soft-sm">
      <p className="mx-auto mb-8 max-w-md text-muted">
        Réservez votre table en quelques secondes via Google — confirmation immédiate et
        disponibilités en temps réel.
      </p>
      <a href={restaurant.reserveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
        Réserver avec Google
      </a>
      <div className="mt-9 flex flex-wrap justify-center gap-12">
        <div>
          <span className="text-[0.72rem] uppercase tracking-[0.14em] text-gold">Téléphone</span>
          <br />
          <a href={`tel:${restaurant.phoneIntl}`} className="hover:text-gold">{restaurant.phone}</a>
        </div>
        <div>
          <span className="text-[0.72rem] uppercase tracking-[0.14em] text-gold">Horaires</span>
          <br />
          7j/7 · 7h – 00h
        </div>
      </div>
    </div>
  );
}
