export type FavoritePokemon = {
  name: string;
  image: string;
};

const STORAGE_KEY = "poke10-favorites";

export function getFavorites(): FavoritePokemon[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function isFavorite(name: string): boolean {
  return getFavorites().some(
    (f) => f.name.toLowerCase() === name.toLowerCase(),
  );
}

export function toggleFavorite(pokemon: FavoritePokemon): FavoritePokemon[] {
  const favorites = getFavorites();
  const exists = favorites.some(
    (f) => f.name.toLowerCase() === pokemon.name.toLowerCase(),
  );

  const updated = exists
    ? favorites.filter(
        (f) => f.name.toLowerCase() !== pokemon.name.toLowerCase(),
      )
    : [...favorites, pokemon];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("favoritesChanged"));

  return updated;
}