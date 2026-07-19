import { Star } from 'lucide-react';
import Reveal from './Reveal';
import { restaurant, reviews } from '@/lib/data';

export default function Reviews({
  rating = restaurant.rating,
  reviewCount = restaurant.reviewCount,
}: {
  rating?: number;
  reviewCount?: number;
}) {
  return (
    <div>
      <div className="mb-3 mt-8 flex flex-wrap items-center justify-center gap-6">
        <span className="font-serif text-[3.6rem] leading-none text-gold-soft">
          {rating.toString().replace('.', ',')}
        </span>
        <div className="text-left">
          <span className="flex text-gold-soft">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
            ))}
          </span>
          <p className="text-[0.86rem] tracking-wide text-[#C9C0B2]">
            Sur {reviewCount} avis Google · {restaurant.ranking}
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.1}>
            <figure className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
              <span className="mb-3.5 flex text-gold-soft">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <blockquote className="text-[0.98rem] italic text-[#E7DFD1]">“{r.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold font-serif font-semibold text-ink">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <b className="block text-[0.9rem] not-italic text-paper">{r.name}</b>
                  <span className="text-[0.74rem] text-[#A99E8C]">{r.city}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
