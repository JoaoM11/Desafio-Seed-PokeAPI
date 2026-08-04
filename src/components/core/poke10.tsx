"use client";

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { Pokemon, getPokemons, getPokemonDetails } from "../../app/api/api";
import { Card } from "../ui/card";
import Link from "next/link";

export function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pokemons_per_page = 18;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<Pokemon | null>(null);
  const [searchError, setSearchError] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const [allNames, setAllNames] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    const fetchAllNames = async () => {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151",
        );
        const data = await res.json();
        const names = data.results.map(
          (p: { name: string }) => p.name,
        ) as string[];
        setAllNames(names);
      } catch (error) {
        console.error("Error fetching pokemon names:", error);
      }
    };
    fetchAllNames();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (value: string) => {
    setSearchTerm(value);

    const term = value.trim().toLowerCase();
    if (term.length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = allNames
      .filter((name) => name.includes(term))
      .slice(0, 6);

    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  };

  const runSearch = async (term: string) => {
    const cleanTerm = term.trim().toLowerCase();
    if (!cleanTerm) {
      setSearchResult(null);
      setSearchError("");
      return;
    }

    setIsSearching(true);
    setSearchError("");
    setSearchResult(null);
    setShowSuggestions(false);

    try {
      const pokemon = await getPokemonDetails(cleanTerm);
      setSearchResult(pokemon);
    } catch (error) {
      setSearchError(`Nenhum pokemon encontrado para "${term}"`);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    runSearch(searchTerm);
  };

  const handleSuggestionClick = (name: string) => {
    setSearchTerm(name);
    setShowSuggestions(false);
    runSearch(name);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResult(null);
    setSearchError("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div>
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/images/FundoSite.jpeg')",
        }}
      />

      <header className="fixed top-0 left-0 w-full h-16 lg:h-20 bg-[#FFDE00] flex items-center justify-between px-4 lg:px-20 z-[999]">
        <div className="flex items-center">
          <Link href="/" className="flex items-center -gap-3">
            <img
              src="/images/PokebolaLogo.webp"
              alt="Logo"
              className="h-[64px] w-auto block"
            />

            <div className="flex items-center leading-none mt-[-10px] lg:mt-[-10px]">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-pokemon text-[#3B4CCA]">
                Poke
              </h1>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-pokemon text-[#FF0000]">
                10
              </h1>
            </div>
          </Link>
        </div>
      </header>

      <div className="pt-16 lg:pt-20 mx-5 md:mx-10 lg:mx-20 min-h-screen pb-10">
        <h2 className="text-center text-[#3B4CCA] text-6xl md:text-8xl font-pokemon py-12 tracking-widest mb-4">
          vitrine
        </h2>

        <div ref={searchBoxRef} className="relative max-w-md mx-auto mb-10 px-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleInputChange(e.target.value)}
              onFocus={() => setShowSuggestions(suggestions.length > 0)}
              placeholder="Buscar pokemon pelo nome..."
              autoComplete="off"
              className="flex-1 px-4 py-2 rounded-lg border-2 border-[#3B4CCA] bg-white focus:outline-none focus:border-[#3B4CCA] transition-colors"
            />
            <button
              type="submit"
              className="p-2 bg-[#3B4CCA] text-white rounded-lg hover:bg-[#2d3aa8] transition-colors"
            >
              <Search size={20} />
            </button>
          </form>

          {showSuggestions && (
            <ul className="absolute left-4 right-14 mt-1 bg-white border-2 border-[#3B4CCA] rounded-lg shadow-lg overflow-hidden z-50">
              {suggestions.map((name) => (
                <li key={name}>
                  <button
                    type="button"
                    onClick={() => handleSuggestionClick(name)}
                    className="w-full text-left px-4 py-2 capitalize hover:bg-[#FFDE00]/30 transition-colors"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {searchTerm && (
          <div className="text-center mb-6">
            <button
              onClick={clearSearch}
              className="text-sm text-[#3B4CCA] hover:underline"
            >
              Limpar busca e voltar para a vitrine
            </button>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4">
          {searchTerm && (
            <div className="flex justify-center">
              {isSearching && (
                <div className="w-48 h-64 bg-gray-200 animate-pulse rounded-lg border-2 border-gray-300" />
              )}

              {!isSearching && searchError && (
                <p className="text-red-500 font-bold text-lg">
                  {searchError}
                </p>
              )}

              {!isSearching && searchResult && (
                <Card
                  title={searchResult.name.toUpperCase()}
                  imageSource={searchResult.sprites.front_default}
                />
              )}
            </div>
          )}

          {!searchTerm && (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
              {isLoading
                ? Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-48 h-64 bg-gray-200 animate-pulse rounded-lg border-2 border-gray-300"
                    />
                  ))
                : pokemons.map((pokemon) => (
                    <div key={pokemon.id}>
                      <Card
                        title={pokemon.name.toUpperCase()}
                        imageSource={pokemon.sprites.front_default}
                      />
                    </div>
                  ))}
            </div>
          )}
        </div>

        {!searchTerm && (
          <div className="flex justify-center items-center gap-6 p-12">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className={`p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeft size={24} />
            </button>

            <span className="text-lg font-bold text-[#3B4CCA]">
              Página {page}
            </span>

            <button
              onClick={() => setPage((p) => p + 1)}
              className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}