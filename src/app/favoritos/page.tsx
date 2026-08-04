"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "../../components/ui/card";
import { getFavorites, FavoritePokemon } from "../../utils/favorites";

export default function FavoritosPage() {
  const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());

    const handleChange = () => setFavorites(getFavorites());
    window.addEventListener("favoritesChanged", handleChange);
    return () => window.removeEventListener("favoritesChanged", handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-16 lg:pt-20 px-4 md:px-10 lg:px-20 pb-16">
      <header className="fixed top-0 left-0 w-full h-16 lg:h-20 bg-[#FFDE00] flex items-center px-4 lg:px-20 z-[999]">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/PokebolaLogo.webp"
            alt="Logo"
            className="h-8 md:h-10 w-auto block"
          />
          <h1 className="text-xl md:text-2xl font-pokemon text-[#3B4CCA]">
            Poke<span className="text-[#FF0000]">10</span>
          </h1>
        </Link>
      </header>

      <div className="max-w-md mx-auto text-center">
        <Link
          href="/vitrine"
          className="inline-block mt-24 lg:mt-8 mb-4 whitespace-nowrap px-6 py-2 bg-[#3B4CCA] text-white font-bold rounded-lg hover:bg-[#2d3aa8] transition-colors"
        >
          ← Voltar para a Vitrine
        </Link>
      </div>

      <h2 className="text-center text-[#3B4CCA] text-5xl md:text-7xl font-pokemon py-12 tracking-widest mb-4">
        Favoritos
      </h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Você ainda não favoritou nenhum pokemon.
        </p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {favorites.map((pokemon) => (
            <Card
              key={pokemon.name}
              title={pokemon.name.toUpperCase()}
              imageSource={pokemon.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}