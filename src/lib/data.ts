/**
 * Données publiques du restaurant CANCAN — L'Haÿ-les-Roses.
 * Sources : Google Maps / Google Business, Tripadvisor, avis clients publics.
 * Règle : ne jamais inventer. Les informations manquantes sont marquées "À compléter".
 */

export const restaurant = {
  name: 'CANCAN',
  legalName: 'CCR RESTO', // dénomination sociale à confirmer
  tagline: 'Brasserie parisienne · L’Haÿ-les-Roses',
  description:
    'Brasserie et restaurant français au cœur de L’Haÿ-les-Roses. Cuisine maison, plat du jour renouvelé, terrasse ensoleillée et bar à cocktails — du matin jusqu’au soir.',
  address: {
    street: '2 Rue Dispan',
    postalCode: '94240',
    city: 'L’Haÿ-les-Roses',
    country: 'FR',
    full: '2 Rue Dispan, 94240 L’Haÿ-les-Roses',
  },
  geo: { lat: 48.77912, lng: 2.338972 },
  phone: '01 77 99 50 24',
  phoneIntl: '+33177995024',
  email: 'À compléter',
  hours: 'Tous les jours · 7h00 – 00h00 (service continu)',
  rating: 4.6,
  reviewCount: 194,
  ranking: '#2 des restaurants à L’Haÿ-les-Roses',
  priceRange: '€€',
  socials: {
    instagram: 'https://www.instagram.com/cancan94240/',
    facebook: 'https://www.facebook.com/p/Cancan94240-61576780155742/',
    google:
      'https://www.google.com/search?q=Cancan+restaurant+L%27Ha%C3%BF-les-Roses',
  },
  maps: {
    embed:
      "https://www.google.com/maps?q=2%20Rue%20Dispan,%2094240%20L'Ha%C3%BF-les-Roses&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=2+Rue+Dispan+94240+L%27Ha%C3%BF-les-Roses",
  },
  reserveUrl:
    'https://www.google.com/maps/reserve/v/dine/c/asq3QBAA6NI?source=pa&opi=89978449&hl=fr-FR',
  siteUrl: 'https://www.cancan-lhay.fr',
} as const;

export type Speciality = { label: string; icon: string };
export const specialities: Speciality[] = [
  { label: 'Cuisine maison', icon: 'ChefHat' },
  { label: 'Produits frais', icon: 'Leaf' },
  { label: 'Terrasse & véranda', icon: 'Sun' },
  { label: 'Bar à cocktails', icon: 'Martini' },
  { label: 'Petit-déjeuner', icon: 'Croissant' },
  { label: 'Planches le soir', icon: 'CalendarDays' },
  { label: 'Menu enfant', icon: 'Baby' },
  { label: 'Happy Hours', icon: 'Heart' },
];

export type Feature = { title: string; text: string; icon: string };
export const features: Feature[] = [
  {
    title: 'Service continu',
    text: 'Ouvert de 7h à minuit, 7j/7. On vous accueille à toute heure, sans coupure.',
    icon: 'Clock',
  },
  {
    title: 'Belle terrasse',
    text: 'Une terrasse agréable en plein centre-ville, idéale aux beaux jours.',
    icon: 'Home',
  },
  {
    title: 'Bar & cocktails',
    text: 'Cocktails, apéritifs et une sélection de vins pour prolonger la soirée.',
    icon: 'Wine',
  },
  {
    title: 'Événements privés',
    text: 'Anniversaires, mariages, afterworks : privatisation possible, jusqu’à 70 couverts.',
    icon: 'PartyPopper',
  },
];

export type MenuItem = { name: string; desc?: string; price?: string; photo?: string };
export type MenuCategory = { category: string; items: MenuItem[]; note?: string };

/**
 * Carte reconstituée à partir des informations publiques (Google, avis).
 * Les prix exacts figurent uniquement sur les photos du menu : ils restent
 * "À compléter" (champ price non renseigné) tant qu'ils ne sont pas confirmés.
 * Une seule photo de plat est utilisée lorsqu'elle existe publiquement.
 */
export const menu: MenuCategory[] = [
  {
    category: "Entrées",
    items: [
      { name: "Saladette de tentacules de calamar", desc: "Chimichuri, lait de coco", price: "10,5 €" },
      { name: "Œuf mollet", desc: "Rémoulade à la Granny Smith, mouillettes et herbes fraîches", price: "8,5 €" },
      { name: "Terrine du chef", desc: "Au foie de volaille et mendiants", price: "8 €" },
      { name: "Aspic de tomates à l'ancienne", desc: "Basilic, crémeux de stracciatella", price: "9 €" },
      { name: "Fraîcheur de roquette", desc: "Melon, croûtons et lardons", price: "9 €" },
    ],
  },
  {
    category: "Salades",
    items: [
      { name: "Salade de chèvre", desc: "Chèvre toasté, salade, tomates, lard, pommes, vinaigrette au miel", price: "17 €" },
      { name: "Caesar Cancan", desc: "Poulet aux céréales, parmesan, tomates, croûtons, lard", price: "18 €" },
      { name: "La Crétoise", desc: "Salade, tomates, féta, olives, concombre, oignons pickles, croûtons", price: "17 €" },
      { name: "La Caraïbe", desc: "Salade, crevettes, avocat, mangue, grenade, tomates, sauce cocktail", price: "17 €" },
    ],
  },
  {
    category: "Tartines",
    items: [
      { name: "Avocado toast", desc: "Purée d'avocat, œuf mollet, féta, oignons pickles", price: "17 €" },
      { name: "Croque Tartufata", desc: "Jambon, comté, salade, tomate", price: "17 €" },
      { name: "Focaccia", desc: "Pomodorini et buffala, salade, tomates", price: "18 €" },
    ],
  },
  {
    category: "Plats",
    note: "Supplément garnitures 3,5 €",
    items: [
      { name: "Rumsteak « Sashimi »", desc: "Servi bleu · arancini au cantal, salade thaï, sauce du tigre qui pleure", price: "22,5 €" },
      { name: "Faux-filet extra 250g", desc: "Sauce au choix, frites, salade", price: "27 €" },
      { name: "Tartare au couteau traditionnel", desc: "Frites, salade", price: "22 €" },
      { name: "Cheeseburger", desc: "Steak haché, potato bun, sauce américaine, lard, tomates, cornichons doux, oignons rouges", price: "17,9 €" },
      { name: "Chicken burger", desc: "Potato bun, poulet aux céréales, lard, tomates, cornichons doux, oignons rouges", price: "17,6 €" },
      { name: "Poulet à la jerk", desc: "Épices douces jamaïcaines, mayonnaise mangue épicée, coleslaw, frites", price: "17,9 €" },
      { name: "Grillade de veau", desc: "Risotto artichauts & petits pois, pesto genovese, jus corsé", price: "18,5 €" },
    ],
  },
  {
    category: "Poissons",
    items: [
      { name: "Steak de thon", desc: "Purée aux olives et vierge d'été", price: "19 €" },
      { name: "Filet de rouget", desc: "Caviar d'aubergine, roquette et pesto genovese", price: "22 €" },
    ],
  },
  {
    category: "Végétarien",
    items: [
      { name: "Risotto artichauts & petits pois", desc: "Chips de légumes", price: "16,5 €" },
    ],
  },
  {
    category: "Le soir · dès 17h",
    items: [
      { name: "Planche charcuterie", desc: "Jambon de Parme, chorizo, saucisse sèche, terrine maison, jambon blanc", price: "18 €" },
      { name: "Planche fromagère", desc: "Saint-nectaire, cantal, bleu, tome, camembert", price: "18 €" },
      { name: "Planche Tex Mex", desc: "Sticks de mozzarella, wings de poulet, calamars à la romana, frites", price: "18 €" },
      { name: "Nems (x4)", price: "7 €" },
      { name: "Arancini (x3)", price: "8 €" },
      { name: "Assiette de saucisse sèche ou cantal", price: "8 €" },
      { name: "Assiette de frites", price: "5 €" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "La brioche perdue", desc: "Caramel beurre salé (+2 € boule glace vanille)", price: "8 €" },
      { name: "Fondant chocolat", desc: "Farine d'avoine, sans gluten (+2 € boule glace coco)", price: "8 €" },
      { name: "Cheesecake framboise-passion", price: "9 €" },
      { name: "Sablé aux fruits rouges", desc: "Chantilly, vanille", price: "8,5 €" },
      { name: "Tiramisu café", desc: "Aux graines de chia", price: "8 €" },
      { name: "Duo de crêpes", desc: "Confiture, Nutella ou sucre", price: "7 €" },
      { name: "Café gourmand", desc: "3 mignardises du moment", price: "10 €" },
      { name: "Un fromage au choix", price: "5,5 €" },
      { name: "3 fromages au choix", desc: "Cantal, bleu, st-nectaire, camembert, tome", price: "12 €" },
    ],
  },
  {
    category: "Glaces",
    items: [
      { name: "Chocolat liégeois-Oreo", desc: "2 boules chocolat, Oreo, coulis chocolat, chantilly", price: "12 €" },
      { name: "Café liégeois", desc: "2 boules café, coulis café, chantilly", price: "12 €" },
      { name: "Fraise Melba", desc: "2 boules fraise, fraises fraîches, coulis fruits rouges, chantilly", price: "12 €" },
      { name: "Vanille gourmande", desc: "Glace vanille, cookies-chocolat, chantilly, caramel", price: "12 €" },
      { name: "1 boule de glace", price: "3,5 €" },
      { name: "2 boules de glace", price: "6,5 €" },
      { name: "3 boules de glace", desc: "Vanille, fraise, chocolat, citron, café, pistache (chantilly +2 €)", price: "9 €" },
    ],
  },
  {
    category: "Menu enfant",
    items: [
      { name: "Menu enfant", desc: "Mini burger, steak haché ou poulet croustillant · frites fraîches · un soft au choix et un dessert", price: "14 €" },
    ],
  },
  {
    category: "Petit-déjeuner",
    items: [
      { name: "Le Français", desc: "Café, café crème, chocolat chaud ou thé · une tartine ou une viennoiserie · jus d'orange 15cl", price: "7,9 €" },
      { name: "L'Anglais", desc: "Boisson chaude · une tartine et une viennoiserie · jus d'orange · œufs brouillés poitrine fumée ou nature", price: "12,9 €" },
    ],
  },
  {
    category: "Cocktails création",
    note: "Tous à 10 €",
    items: [
      { name: "Red Lips", desc: "Vodka, litchi, cranberry, citron", price: "10 €" },
      { name: "French Kiss", desc: "Gentiane, jus de pomme, citron, blanc d'œuf, cannelle", price: "10 €" },
      { name: "Pinky Bloom", desc: "Liqueur passion, vodka, crème de framboise, citron", price: "10 €" },
      { name: "Neige Fondante", desc: "Saké, cointreau, citron, grenadine", price: "10 €" },
      { name: "French 75", desc: "Gin, citron, sucre, prosecco", price: "10 €" },
      { name: "La Vie en Rose", desc: "Martini blanc, cranberry, citron, sirop de rose", price: "10 €" },
      { name: "La Madeleine", desc: "Amaretto, triple sec, ananas", price: "10 €" },
      { name: "Nos Mules", desc: "London (gin) · Cuban (rhum ambré) · Oaxala (mezcal) · Moscow (vodka), citron, ginger beer", price: "10 €" },
      { name: "Cancan", desc: "Vodka, litchi, cranberry", price: "10 €" },
      { name: "CBD Sour", desc: "Rhum arrangé au CBD, citron vert, sucre", price: "10 €" },
    ],
  },
  {
    category: "Cocktails classiques",
    note: "Tous à 9 €",
    items: [
      { name: "Piña Colada", desc: "Rhum, ananas, coco", price: "9 €" },
      { name: "Negroni", desc: "Martini rosso, gin, campari", price: "9 €" },
      { name: "Jäger Bomb", desc: "Jägermeister, Red Bull", price: "9 €" },
      { name: "Old Fashion", desc: "Bourbon, eau pétillante, angostura, sucre, orange", price: "9 €" },
      { name: "Cosmopolitan", desc: "Vodka, triple sec, citron, cranberry", price: "9 €" },
      { name: "Margarita", desc: "Tequila, triple sec, citron vert, sirop de sucre", price: "9 €" },
      { name: "Mojito", desc: "Rhum, citron vert, sucre de canne, menthe, perrier", price: "9 €" },
      { name: "Sex on the Beach", desc: "Vodka, ananas, crème de pêche, grenadine", price: "9 €" },
      { name: "Caïpirinha", desc: "Cachaça, citron vert, sucre", price: "9 €" },
      { name: "Nos Sours", desc: "Whisky / amaretto / pisco, citron vert, sucre, blanc d'œuf", price: "9 €" },
      { name: "Mojito fruité", desc: "Framboise, fraise, passion, mangue ou litchi", price: "9 €" },
    ],
  },
  {
    category: "Mocktails",
    note: "Tous à 8 €",
    items: [
      { name: "Pink Diamond", desc: "Purée de framboise, citron, fleur d'oranger, ginger beer", price: "8 €" },
      { name: "Summer Time", desc: "Infusion hibiscus, menthe, passion, concombre", price: "8 €" },
      { name: "Virgin Mojito", desc: "Citron vert, menthe fraîche, sucre de canne, perrier", price: "8 €" },
      { name: "Apple Pear", desc: "Jus de poire, pomme, citron, marc café", price: "8 €" },
      { name: "Koh Samui", desc: "Purée de litchi, tonic, fleur d'oranger", price: "8 €" },
    ],
  },
  {
    category: "Apéritifs",
    items: [
      { name: "Ricard, Pastis 2cl", price: "4 €" },
      { name: "Martini rouge ou blanc 5cl", price: "4 €" },
      { name: "Salers 5cl", price: "4 €" },
      { name: "Campari 5cl", price: "4 €" },
      { name: "Kir au chardonnay 14cl", desc: "Cassis, mûre, framboise, rose, pêche ou violette", price: "5,2 €" },
      { name: "Coupe de champagne AOC 10cl", price: "9 €" },
      { name: "Coupe de prosecco DOC 14cl", price: "7 €" },
      { name: "Cidre « La Mordue » brut 27,5cl", price: "6,5 €" },
      { name: "Nos Spritz 25cl", desc: "Aperol, Saint Germain, Campari, Italicus, Martini ou Gentiane", price: "9 €" },
    ],
  },
  {
    category: "Bières",
    note: "Pression 25cl / 50cl",
    items: [
      { name: "Silver", desc: "Pression", price: "3,8 / 7 €" },
      { name: "Grimbergen blonde", desc: "Pression", price: "4,8 / 8,9 €" },
      { name: "Demory Paris IPA", desc: "Pression", price: "4,8 / 9 €" },
      { name: "1664 blanche", desc: "Pression", price: "4,8 / 9 €" },
      { name: "Anos Teke", desc: "Pression", price: "4,5 / 8 €" },
      { name: "Tuborg", desc: "Pression", price: "4,5 / 8 €" },
      { name: "Picon bière", desc: "Pression", price: "4,5 / 8 €" },
      { name: "Monaco ou panaché", desc: "Pression", price: "4 / 7,8 €" },
      { name: "1664 sans alcool 33cl", desc: "Bouteille", price: "6 €" },
      { name: "Desperados, Corona, Pietra, Limoncella, La Chouffe 25cl", desc: "Bouteille", price: "6,5 €" },
    ],
  },
  {
    category: "Vins & Champagnes",
    note: "Verre 14/25cl · pichet 50cl · bouteille 75cl",
    items: [
      { name: "Chardonnay IGP — blanc", desc: "Pays d'Oc, Le Sudiste", price: "5 / 8,9 / 17,2 / 26 €" },
      { name: "Curius Contre Toute Attente — blanc", desc: "Vin de France, moelleux", price: "6,5 / 11,9 / 20,7 / 32,5 €" },
      { name: "Coteaux du Giennois AOP — blanc", desc: "Sauvignon, Clément & Florian Berthier", price: "7 / 12,9 / 24,7 / 37,5 €" },
      { name: "Sancerre AOP — blanc", desc: "P. Cherrien", price: "8,5 / 15,9 / 30,7 / 44,5 €" },
      { name: "IGP Méditerranée — rosé", desc: "La Demoiselle Sans Gène Bio", price: "5 / 9,4 / 17,7 / 26,5 €" },
      { name: "Château Sainte Marguerite — rosé", desc: "Cru Classé", price: "8 / 14,9 / 23,7 / 38,5 €" },
      { name: "IGP Pays d'Oc — rouge", desc: "Le Sudiste, Merlot Syrah", price: "5 / 8,9 / 17,2 / 26 €" },
      { name: "IGP Côtes Catalanes — rouge", desc: "Cuvée Atypique Bio", price: "6 / 10,4 / 20,7 / 30,5 €" },
      { name: "Côtes de Bourg AOP — rouge", desc: "Hipster de Barbe", price: "6 / 10,9 / 20,7 / 31,5 €" },
      { name: "Saint-Amour AOP — rouge", desc: "Domaine du Clos des Carrières, C. Terrier", price: "8 / 14,9 / 23,7 / 38,5 €" },
      { name: "Pic Saint-Loup AOP — rouge", desc: "Maginier", price: "8 / 14,9 / 23,7 / 38,5 €" },
      { name: "Bourgogne Côtes Chalonnaise AOP — rouge", desc: "Millebuis, Pinot Noir", price: "9 / 15,9 / 24,7 / 39,5 €" },
      { name: "Lussac Saint-Émilion AOP — rouge", desc: "Château Roc de Boissac", price: "8 / 14,9 / 23,7 / 38,5 €" },
      { name: "Côte d'Auvergne — rouge", desc: "La Légendaire · 75cl", price: "49 €" },
      { name: "Pomerol AOP — rouge", desc: "Le Carillon de Rouget · 75cl", price: "78 €" },
      { name: "Châteauneuf-du-Pape AOP — rouge", desc: "Les Granières de la Nerthe Bio · 75cl", price: "78 €" },
      { name: "Saint-Julien — rouge", desc: "Connétable de Talbot · 75cl", price: "85 €" },
      { name: "Albéric Duvat — champagne", desc: "Brut · 75cl", price: "69 €" },
      { name: "Ruinart — champagne", desc: "Brut · 75cl", price: "95 €" },
    ],
  },
  {
    category: "Spiritueux",
    items: [
      { name: "Jameson", desc: "Whisky · 4cl", price: "7,5 €" },
      { name: "Jack Daniel's", desc: "Whisky · 4cl", price: "9 €" },
      { name: "Chivas Regal 12 ans", desc: "Whisky · 4cl", price: "10 €" },
      { name: "Nikka From The Barrel", desc: "Whisky · 4cl", price: "11 €" },
      { name: "Maker's Mark 12 ans", desc: "Bourbon · 4cl", price: "11 €" },
      { name: "Ballantine's", desc: "Whisky · 4cl", price: "8 €" },
      { name: "Glenlivet", desc: "Whisky · 4cl", price: "10 €" },
      { name: "Aberlour", desc: "Whisky · 4cl", price: "11 €" },
      { name: "Four Roses", desc: "Bourbon · 4cl", price: "10 €" },
      { name: "Cardhu", desc: "Whisky · 4cl", price: "11 €" },
      { name: "Johnnie Walker Red Label", desc: "Whisky · 4cl", price: "9 €" },
      { name: "The Duke", desc: "Whisky · 4cl", price: "14 €" },
      { name: "Cachaça", desc: "Rhum · 4cl", price: "8 €" },
      { name: "Havana Club", desc: "Rhum · 4cl", price: "8 €" },
      { name: "La Hechicera", desc: "Rhum · 4cl", price: "10 €" },
      { name: "Bumbu Original", desc: "Rhum · 4cl", price: "10 €" },
      { name: "Bumbu Cream", desc: "Rhum · 4cl", price: "10 €" },
      { name: "Bally", desc: "Rhum · 4cl", price: "13 €" },
      { name: "Kraken", desc: "Rhum · 4cl", price: "10 €" },
      { name: "Don Papa", desc: "Rhum · 4cl", price: "10 €" },
      { name: "Diplomatico", desc: "Rhum · 4cl", price: "10 €" },
      { name: "Zacapa XO", desc: "Rhum · 4cl", price: "19 €" },
      { name: "Gordon's", desc: "Gin · 4cl", price: "7,5 €" },
      { name: "Monkey 47", desc: "Gin · 4cl", price: "10 €" },
      { name: "Beefeater", desc: "Gin · 4cl", price: "10 €" },
      { name: "Bombay Sapphire", desc: "Gin · 4cl", price: "10 €" },
      { name: "Bulldog", desc: "Gin · 4cl", price: "12 €" },
      { name: "Wyborowa", desc: "Vodka · 4cl", price: "7,5 €" },
      { name: "Guillotine", desc: "Vodka · 4cl", price: "11 €" },
      { name: "Grey Goose", desc: "Vodka · 4cl", price: "11 €" },
      { name: "Zubrowka Bison Grass", desc: "Vodka · 4cl", price: "9 €" },
      { name: "Absolut", desc: "Vodka · 4cl", price: "9 €" },
      { name: "Camino", desc: "Tequila · 4cl", price: "7,5 €" },
      { name: "Patron Silver", desc: "Tequila · 4cl", price: "13 €" },
      { name: "Celosa Rosé", desc: "Tequila · 4cl", price: "19 €" },
      { name: "Dassaï 45 Junmai", desc: "Saké · 6cl", price: "11 €" },
      { name: "Rémy Martin XO", desc: "Cognac · 4cl", price: "24 €" },
      { name: "Martel XO", desc: "Cognac · 4cl", price: "24 €" },
    ],
  },
  {
    category: "Digestifs & liqueurs",
    items: [
      { name: "Bailey's, Amaretto, Limoncello, Get 27, Get 31, Manzana", desc: "4cl", price: "8 €" },
      { name: "Pom'chataigne, La Gauloise", desc: "4cl", price: "9 €" },
      { name: "Poire, Prune, Framboise, Verveine", desc: "4cl", price: "9 €" },
      { name: "Armagnac, Calvados, Cognac", desc: "4cl", price: "9,5 €" },
    ],
  },
  {
    category: "Boissons fraîches",
    items: [
      { name: "Coca-Cola / Coca Zero 33cl", price: "4,6 €" },
      { name: "Perrier 33cl", price: "4,6 €" },
      { name: "Vittel 25cl", price: "4,6 €" },
      { name: "Limonade 25cl", price: "4,6 €" },
      { name: "Schweppes Tonic / Agrumes 25cl", price: "4,6 €" },
      { name: "Orangina 25cl", price: "4,6 €" },
      { name: "Oasis 25cl", price: "4,6 €" },
      { name: "Thé glacé maison", desc: "Pêche, citron, hibiscus, passion", price: "5,5 €" },
      { name: "Café frappé", price: "6 €" },
      { name: "Milkshake", desc: "Vanille, fraise ou chocolat", price: "6 €" },
      { name: "Ginger Beer « La French » Bio 25cl", price: "6 €" },
      { name: "Red Bull 25cl", price: "5 €" },
      { name: "San Benedetto 50cl", desc: "Avec ou sans bulles", price: "5,5 €" },
      { name: "San Benedetto 1L", desc: "Avec ou sans bulles", price: "7 €" },
      { name: "Fruit pressé", desc: "Orange ou citron", price: "6 €" },
      { name: "Jus de fruit 25cl", desc: "Orange, ananas, abricot, cranberry, tomate, pomme, mangue, goyave, banane, fraise…", price: "4,6 €" },
    ],
  },
  {
    category: "Boissons chaudes",
    items: [
      { name: "Expresso « Richard »", desc: "Torréfaction française arabica", price: "2,2 €" },
      { name: "Décaféiné", price: "2,2 €" },
      { name: "Noisette", price: "2,3 €" },
      { name: "Double café", price: "4,2 €" },
      { name: "Café crème", price: "4,5 €" },
      { name: "Chocolat chaud", price: "4,5 €" },
      { name: "Cappuccino", price: "5,5 €" },
      { name: "Café ou chocolat viennois", price: "6 €" },
      { name: "Irish Café", price: "9 €" },
      { name: "Vin chaud", price: "6 €" },
      { name: "Grog", price: "7,5 €" },
      { name: "Thés La Route des Comptoirs", desc: "Sélection bio", price: "4,8 €" },
      { name: "Tisanes La Route des Comptoirs", desc: "Verveine, camomille, tilleul bio", price: "4,8 €" },
      { name: "Choco Caramel", desc: "Chocolat chaud, sirop caramel, chantilly", price: "6,5 €" },
      { name: "Choco Nuts", desc: "Chocolat chaud, sirop noisette, chantilly", price: "6,5 €" },
      { name: "Choco Vanille", desc: "Chocolat chaud, sirop vanille, chantilly", price: "6,5 €" },
      { name: "Lait chaud vanille", price: "5,5 €" },
    ],
  },
];

export type GalleryImage = { src: string; caption: string };
export const gallery: GalleryImage[] = [
  { src: '/images/salle.jpg', caption: 'La salle' },
  { src: '/images/veranda.jpg', caption: 'La véranda & la terrasse' },
  { src: '/images/bar.jpg', caption: 'Le bar' },
  { src: '/images/cocktail.jpg', caption: 'Cocktail Cancan' },
  { src: '/images/rumsteak.jpg', caption: 'Rumsteak « Sashimi »' },
  { src: '/images/cafe.jpg', caption: 'Café viennois' },
  { src: '/images/croissants.jpg', caption: 'Les viennoiseries' },
  { src: '/images/ambiance.jpg', caption: 'L’ambiance vintage' },
  { src: '/images/facade.jpg', caption: 'La façade' },
];

export type Review = { name: string; city: string; stars: number; text: string };
export const reviews: Review[] = [
  {
    name: 'Happiness276396',
    city: 'L’Haÿ-les-Roses',
    stars: 5,
    text: 'Enfin un endroit à L’Haÿ-les-Roses avec une excellente cuisine dans un très joli cadre. Devenus habitués — café, verre, déjeuner, dîner — jamais déçus. Carte très intéressante, plat du jour qui change, produits frais très bien travaillés. Patrons adorables.',
  },
  {
    name: 'Loryane M',
    city: 'Avis Tripadvisor',
    stars: 5,
    text: 'La carte est à la fois classique et originale. J’y vais une fois par mois tellement l’ambiance est agréable et les plats délicieux, de l’entrée au dessert. Je recommande la pièce de bœuf et la tarte aux pommes ou le cheesecake. Un vrai régal.',
  },
  {
    name: 'Maps751240',
    city: 'Avis Tripadvisor',
    stars: 5,
    text: 'Bonne ambiance, salle spacieuse, très bon accueil, service rapide, belle carte bien diversifiée, très bon rapport qualité-prix, menu enfant avec choix. Une belle découverte à L’Haÿ. On reviendra !',
  },
];

export const heroImage = '/images/facade.jpg';
