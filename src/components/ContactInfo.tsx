import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { restaurant } from '@/lib/data';

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-[1fr_1.1fr]">
      <div className="flex flex-col gap-6">
        <Line icon={<MapPin size={22} strokeWidth={1.5} />} label="Adresse">
          {restaurant.address.street}
          <br />
          {restaurant.address.postalCode} {restaurant.address.city}
        </Line>
        <Line icon={<Phone size={22} strokeWidth={1.5} />} label="Téléphone">
          <a href={`tel:${restaurant.phoneIntl}`} className="hover:text-gold">
            {restaurant.phone}
          </a>
        </Line>
        <Line icon={<Mail size={22} strokeWidth={1.5} />} label="Email">
          {restaurant.email}
        </Line>
        <Line icon={<Clock size={22} strokeWidth={1.5} />} label="Horaires">
          Tous les jours · 7h00 – 00h00
          <br />
          Service continu
        </Line>
        <div className="mt-2 flex flex-wrap gap-3">
          <a href={restaurant.maps.directions} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Itinéraire
          </a>
          <a href={`tel:${restaurant.phoneIntl}`} className="btn btn-outline">
            Appeler
          </a>
        </div>
      </div>

      <div className="min-h-[340px] overflow-hidden rounded-2xl border border-[var(--line)] shadow-soft-sm">
        <iframe
          title="Localisation du restaurant CANCAN sur Google Maps"
          src={restaurant.maps.embed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full min-h-[340px] w-full border-0"
        />
      </div>
    </div>
  );
}

function Line({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 shrink-0 text-gold">{icon}</span>
      <div>
        <b className="mb-1 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">
          {label}
        </b>
        <p className="m-0 text-ink">{children}</p>
      </div>
    </div>
  );
}
