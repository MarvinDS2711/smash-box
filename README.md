# CANCAN — Site web premium (Next.js 15)

Site vitrine du restaurant **CANCAN**, brasserie française à L’Haÿ-les-Roses (94240).
Projet **Next.js 15** (App Router) · **TypeScript** · **Tailwind CSS** · **Framer Motion** · **Lucide Icons**.

## 🚀 Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de production :

```bash
npm run build
npm run start
```

> Node.js 18.18+ recommandé.

## 🗂️ Architecture

```
src/
├─ app/
│  ├─ layout.tsx                 # Layout global, fonts, SEO, JSON-LD Restaurant
│  ├─ page.tsx                   # Accueil (Hero + toutes les sections)
│  ├─ globals.css                # Design system (Tailwind + composants)
│  ├─ sitemap.ts / robots.ts     # SEO technique
│  ├─ not-found.tsx              # Page 404
│  ├─ carte/ galerie/ avis/
│  ├─ reservation/ contact/
│  ├─ mentions-legales/
│  └─ politique-confidentialite/
├─ components/                   # Navbar, Footer, Hero, MenuSection, Gallery,
│                                # Reviews, ReservationForm, ContactInfo, Reveal…
└─ lib/
   └─ data.ts                    # Toutes les données du restaurant (source unique)
```

## ✍️ Personnalisation

Tout le contenu est centralisé dans **`src/lib/data.ts`** : coordonnées, horaires,
note Google, carte, avis, galerie. Modifiez ce fichier pour mettre à jour le site.

### Points marqués « À compléter »
Conformément à la consigne de ne rien inventer, les informations non vérifiées
publiquement sont marquées `À compléter` :
- Email du restaurant
- Prix exacts de la carte (visibles uniquement sur les photos du menu)
- Informations légales (SIRET, société, hébergeur…)

### Photos
Les images sont des **placeholders libres de droits (Unsplash)**. Remplacez-les par
les vraies photos du restaurant :
1. Déposez vos images dans `public/images/`.
2. Remplacez les URL dans `src/lib/data.ts` (galerie, carte) et dans les composants
   `Hero.tsx`, `page.tsx`, `ReservationForm.tsx`.
3. Pour de meilleures performances, servez-les en **WebP/AVIF** (géré automatiquement
   par `next/image`).

## 🔍 SEO & Performance
- Metadata complètes (title, description, Open Graph, Twitter Card, canonical).
- **JSON-LD Schema.org `Restaurant`** (adresse, horaires, note, géolocalisation).
- `sitemap.xml` et `robots.txt` générés automatiquement.
- `next/image` : lazy-loading, formats AVIF/WebP, responsive `sizes`.
- Polices optimisées via `next/font` (pas de FOUT, `display: swap`).

## ♿ Accessibilité
- Navigation clavier complète, `focus-visible` visible, lien « Aller au contenu ».
- ARIA sur le menu mobile, la galerie/lightbox et les icônes sociales.
- Contrastes conformes AA, textes ALT sur toutes les images.

## 🎨 Design
Palette inspirée de l’ambiance bistrot vintage : blanc cassé, beige, anthracite,
noir, brun et doré discret (aucune couleur flashy).
Typographies : **Playfair Display** (titres) + **Inter** (texte).

## 🔌 Réservation
Le formulaire est prêt à être connecté à **Zenchef** ou **TheFork**, ou à un envoi
email. Voir `src/components/ReservationForm.tsx`.

---
© CANCAN · L’Haÿ-les-Roses. Données issues de sources publiques (Google, Tripadvisor).

## 🔄 Mise à jour automatique de la note Google
Le nombre d'avis et la note se mettent à jour tout seuls si vous connectez l'API
Google Places :
1. Créez une clé API sur https://console.cloud.google.com (activez « Places API (New) »).
2. Récupérez le `place_id` du restaurant.
3. Copiez `.env.example` en `.env.local` et renseignez `GOOGLE_PLACES_API_KEY` et `GOOGLE_PLACE_ID`.
Sans configuration, les valeurs par défaut (194 avis · 4,6/5) s'affichent. Les données
sont rafraîchies une fois par jour.
