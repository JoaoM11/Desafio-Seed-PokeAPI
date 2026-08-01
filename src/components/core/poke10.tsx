"use client";

import React, { useEffect, useState } from "react";
import { Pokemon, getPokemons } from "../../app/api/api";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pokemons_per_page = 18;

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      setPokemons([]);
      try {
        const data = await getPokemons(page, pokemons_per_page);
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full h-16 lg:h-20 bg-[#3B4CCA] flex items-center justify-between px-4 lg:px-20 z-[999]">
        <div className="flex items-center">
          <link href="/" className="flex items-center -gap-3">
            <img
              src="/icons/pokeball_logo.png"
              alt="Logo"
              className="h-8 md:h-10 lg:h-12 w-auto block"
            />

            <div className="flex items-center leading-none mt-[-10px] lg:mt-[-10px]">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-pokemon text-[#FFFFFF]">
                Poke
              </h1>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-pokemon text-[#FF0000]">
                Pet
              </h1>
            </div>
          </link>
        </div>
      </header>

      <div className="pt-16 lg:pt-20 mx-5 md:mx-10 lg:mx-20 min-h-screen bg-[#FAFAFA] bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] pb-10">
        <h2 className="text-center text-[#FF0000] text-6xl md:text-8xl font-pokemon py-12 drop-shadow-[5px_5px_0px_#3B4CCA] tracking-widest mb-4">
          POKEDEX
        </h2>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
            {isLoading
              ? Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-48 h-64 bg-gray-200 animate-pulse rounded-lg border-2 border-gray-300"
                  />
                ))
              : pokemons.map((pokemon) => (
                  <div
                    key={pokemon.id}
                    className="hover:-translate-y-2 transition-transform duration-300"
                  >
                    <Card
                      title={pokemon.name.toUpperCase()}
                      imageSource={pokemon.sprites.front_default}
                    />
                  </div>
                ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 p-12">
          <Button
            label="Anterior"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            variant="primary"
            disabled={page === 1}
            className={page === 1 ? "opacity-50 cursor-not-allowed" : ""}
          />

          <Button
            label="Próximo"
            onClick={() => setPage((p) => p + 1)}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
}