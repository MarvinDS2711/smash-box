import { restaurant } from './data';

/**
 * Récupère la note et le nombre d'avis en direct depuis l'API Google Places (New).
 * Nécessite deux variables d'environnement :
 *   GOOGLE_PLACES_API_KEY  = votre clé API Google Cloud (Places API activée)
 *   GOOGLE_PLACE_ID        = l'identifiant Google du restaurant (place_id)
 *
 * Sans clé configurée, la fonction renvoie les valeurs par défaut (data.ts),
 * afin que le site fonctionne toujours. Les données sont mises en cache 24h.
 */
export async function getGoogleRating(): Promise<{ rating: number; reviewCount: number }> {
  const fallback = { rating: restaurant.rating, reviewCount: restaurant.reviewCount };
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return fallback;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount' },
      next: { revalidate: 86400 }, // rafraîchit une fois par jour
    });
    if (!res.ok) return fallback;
    const data = (await res.json()) as { rating?: number; userRatingCount?: number };
    return {
      rating: typeof data.rating === 'number' ? data.rating : fallback.rating,
      reviewCount:
        typeof data.userRatingCount === 'number' ? data.userRatingCount : fallback.reviewCount,
    };
  } catch {
    return fallback;
  }
}
