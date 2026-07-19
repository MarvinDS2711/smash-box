'use client';

import { useState } from 'react';
import { menu } from '@/lib/data';

function Price({ price }: { price?: string }) {
  if (!price) return null;
  return <span className="shrink-0 whitespace-nowrap font-serif text-[1.05rem] text-ink">{price}</span>;
}

export default function MenuSection() {
  const [active, setActive] = useState(menu[0].category);
  const current = menu.find((c) => c.category === active) ?? menu[0];

  return (
    <div>
      <div className="no-scrollbar mb-12 mt-10 flex snap-x flex-nowrap gap-2.5 overflow-x-auto pb-2">
        {menu.map((c) => (
          <button
            key={c.category}
            onClick={() => setActive(c.category)}
            aria-pressed={active === c.category}
            className={`shrink-0 snap-start whitespace-nowrap rounded-full border px-5 py-2 text-[0.78rem] tracking-[0.08em] transition-all duration-300 ${
              active === c.category
                ? 'border-transparent bg-ink text-paper'
                : 'border-[var(--line)] bg-transparent text-anthracite hover:bg-ink hover:text-paper'
            }`}
          >
            {c.category}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-2xl text-left">
        <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-serif text-2xl">{current.category}</h3>
          {current.note && (
            <span className="text-[0.74rem] uppercase tracking-[0.14em] text-gold">{current.note}</span>
          )}
        </div>

        <ul className="flex flex-col">
          {current.items.map((it) => (
            <li
              key={it.name}
              className="flex items-baseline justify-between gap-6 border-b border-dashed border-[var(--line)] py-3.5"
            >
              <div>
                <span className="font-medium">{it.name}</span>
                {it.desc && <p className="mt-0.5 text-[0.86rem] text-muted">{it.desc}</p>}
              </div>
              <Price price={it.price} />
            </li>
          ))}
        </ul>

        <p className="mt-9 text-[0.86rem] italic text-muted">
          Prix nets en euros, taxes et service compris. Carte susceptible d’évoluer selon les
          arrivages et la saison.
        </p>
      </div>
    </div>
  );
}
