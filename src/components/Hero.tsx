import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { restaurant, heroImage } from '@/lib/data';
import { getGoogleRating } from '@/lib/googlePlaces';

export default async function Hero() {
  const { rating, reviewCount } = await getGoogleRating();
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden text-center text-paper max-sm:min-h-0 max-sm:items-start max-sm:pt-[8vh] max-sm:pb-[9vh]">
      <div className="absolute inset-0 bg-[#100e0c]">
        <Image
          src={heroImage}
          alt="La salle de la brasserie CANCAN à L’Haÿ-les-Roses"
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover opacity-55"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#100e0c]/60 via-[#100e0c]/25 to-[#100e0c]/80" />

      <div className="relative z-10 max-w-3xl px-6">
        <p className="mb-6 text-[0.74rem] font-semibold uppercase tracking-[0.4em] text-gold-soft">
          {restaurant.tagline}
        </p>
        <h1 className="pl-[0.16em] font-serif text-[clamp(3.6rem,13vw,8.5rem)] font-bold leading-[0.9] tracking-[0.16em]">
          CANCAN
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[clamp(1rem,2.4vw,1.35rem)] font-light text-[#EDE6D9]">
          L’esprit bistrot parisien au cœur de L’Haÿ-les-Roses. Cuisine maison, terrasse
          ensoleillée et bar à cocktails — du matin jusqu’au soir.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3.5">
          <Link href="/carte" className="btn btn-gold">Voir la carte</Link>
          <a href={restaurant.reserveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Réserver</a>
          <a href={`tel:${restaurant.phoneIntl}`} className="btn btn-ghost">Nous appeler</a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5 text-[0.82rem] text-[#EDE6D9]">
          <span className="flex text-gold-soft">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
            ))}
          </span>
          {rating.toString().replace('.', ',')} / 5 · {reviewCount} avis Google
        </div>
      </div>
    </section>
  );
}
