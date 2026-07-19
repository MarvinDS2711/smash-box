'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery } from '@/lib/data';

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const move = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'ArrowRight') move(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, close, move]);

  return (
    <>
      <div className="masonry">
        {gallery.map((g, i) => (
          <button
            key={g.src}
            onClick={() => setIndex(i)}
            className="group relative block w-full overflow-hidden rounded-2xl shadow-soft-sm"
            aria-label={`Agrandir : ${g.caption}`}
          >
            <Image
              src={g.src}
              alt={`${g.caption} — CANCAN L’Haÿ-les-Roses`}
              width={800}
              height={600}
              sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8 text-left text-[0.78rem] tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {g.caption}
            </span>
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photo"
        >
          <button className="absolute right-7 top-6 text-white" onClick={close} aria-label="Fermer">
            <X size={34} />
          </button>
          <button
            className="absolute left-6 top-1/2 flex h-13 w-13 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-3 text-white"
            onClick={(e) => { e.stopPropagation(); move(-1); }}
            aria-label="Photo précédente"
          >
            <ChevronLeft size={26} />
          </button>
          <Image
            src={gallery[index].src.replace('w=800', 'w=1400').replace('w=900', 'w=1400')}
            alt={gallery[index].caption}
            width={1400}
            height={1000}
            className="max-h-[86vh] w-auto rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-6 top-1/2 flex h-13 w-13 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-3 text-white"
            onClick={(e) => { e.stopPropagation(); move(1); }}
            aria-label="Photo suivante"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </>
  );
}
