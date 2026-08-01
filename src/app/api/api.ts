export interface Pokemon {
  id: number;
  name: string;
  description: string;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];

  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];

  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}

export interface GetPokemonDTO {
  results: { name: string; url: string }[];
}

export interface CreatePokemonDTO {
  name: string;
  description: string;
  imageUrl: string;
}

export async function getPokemons(
  page: number = 1,
  limit: number = 18,
): Promise<Pokemon[]> {
  const totalKanto = 151;

  const offset = (page - 1) * limit;

  if (offset >= 151) return [];

  const adjustedLimit =
    offset + limit > totalKanto ? totalKanto - offset : limit;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${adjustedLimit}&offset=${offset}`,
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    },
  );

  const data: GetPokemonDTO = await response.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: { url: string }) => {
      const res = await fetch(pokemon.url);
      return res.json();
    }),
  );

  return pokemonDetails;
}

export async function getPokemonDetails(name: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    cache: "force-cache",
  });
  if (!response.ok) throw new Error("Failed to fetch pokemon details");
  return response.json();
}