'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { restaurant } from '@/lib/data';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/carte', label: 'Carte' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/avis', label: 'Avis' },
  { href: '/reservation', label: 'Réservation' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <div className="bg-ink text-[0.76rem] tracking-[0.08em] text-[#EAE2D4]">
        <div className="wrap flex h-10 items-center justify-center gap-3 sm:justify-between">
          <span className="hidden sm:block">Ouvert 7j/7 · 7h – 00h · Service continu</span>
          <span className="flex items-center gap-3">
            <a href={`tel:${restaurant.phoneIntl}`} className="opacity-85 hover:text-gold-soft hover:opacity-100">
              {restaurant.phone}
            </a>
            <span className="opacity-40">·</span>
            <a href={restaurant.reserveUrl} target="_blank" rel="noopener noreferrer" className="opacity-85 hover:text-gold-soft hover:opacity-100">
              Réserver
            </a>
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'border-b border-[var(--line)] bg-paper/85 shadow-soft-sm' : 'bg-paper/70'
        }`}
      >
        <div className="wrap flex h-[74px] items-center justify-between">
          <Link href="/" className="pl-[0.42em] font-serif text-2xl font-bold tracking-brand" aria-label="CANCAN — accueil">
            CANCAN
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigation principale">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative py-1.5 text-[0.82rem] tracking-[0.08em] text-anthracite"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${restaurant.phoneIntl}`} className="btn btn-outline">
              <Phone size={15} /> Appeler
            </a>
            <a href={restaurant.reserveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Réserver
            </a>
          </div>

          <button
            className="p-2 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[80] flex flex-col bg-ink px-8 pt-20 text-paper transition-transform duration-500 ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <button
          className="absolute right-6 top-6 text-paper"
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
        >
          <X size={30} />
        </button>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-3.5 font-serif text-3xl"
          >
            {l.label}
          </Link>
        ))}
        <a href={`tel:${restaurant.phoneIntl}`} className="btn btn-gold mt-8 justify-center">
          <Phone size={16} /> {restaurant.phone}
        </a>
      </div>
    </>
  );
}
