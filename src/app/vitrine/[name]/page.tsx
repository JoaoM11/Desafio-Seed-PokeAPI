import { getPokemonDetails } from "../../api/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

type PageProps = {
  params: Promise<{ name: string }>;
};

export default async function PokemonDetailsPage({ params }: PageProps) {
  const { name } = await params;

  let pokemon;
  try {
    pokemon = await getPokemonDetails(name);
  } catch (error) {
    notFound();
  }

  const image =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-16 lg:pt-20 px-4 md:px-10 lg:px-20 pb-16">
      <header className="fixed top-0 left-0 w-full h-16 lg:h-20 bg-[#FFDE00] flex items-center justify-between px-4 lg:px-20 z-[999]">
        <div className="flex items-center">
          <Link href="/" className="flex items-center -gap-3">
            <img
              src="/images/PokebolaLogo.webp"
              alt="Logo"
              className="h-[64px] w-auto block"
            />
            <h1 className="text-xl md:text-2xl font-pokemon text-[#3B4CCA]">
              Poke<span className="text-[#FF0000]">10</span>
            </h1>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto">
        <Link href="/vitrine" className="inline-block mt-8 lg:mt-8 mb-8 w-48">
         <Button label="← Voltar" variant="primary" />
      </Link>

        <div className="bg-white border-2 border-[#3B4CCA] rounded-2xl p-6 md:p-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-pokemon text-[#FF0000] mb-6 text-center">
            {pokemon.name.toUpperCase()}
          </h2>

          <img
            src={image}
            alt={pokemon.name}
            className="w-48 h-48 md:w-64 md:h-64 object-contain mb-8"
          />

          <div className="grid grid-cols-2 gap-6 w-full max-w-md mb-8 text-center">
            <div>
              <p className="text-sm text-gray-500">Altura</p>
              <p className="text-xl font-bold text-[#3B4CCA]">
                {pokemon.height / 10} m
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Peso</p>
              <p className="text-xl font-bold text-[#3B4CCA]">
                {pokemon.weight / 10} kg
              </p>
            </div>
          </div>

          <div className="w-full max-w-md mb-8">
            <h3 className="text-lg font-bold text-[#3B4CCA] mb-3">
              Habilidades
            </h3>
            <div className="flex flex-wrap gap-2">
              {pokemon.abilities.map((a) => (
                <span
                  key={a.ability.name}
                  className="px-3 py-1 bg-[#FFDE00]/30 border border-[#3B4CCA] rounded-full text-sm capitalize"
                >
                  {a.ability.name.replace("-", " ")}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md">
            <h3 className="text-lg font-bold text-[#3B4CCA] mb-3">
              Status Base
            </h3>
            <div className="flex flex-col gap-3">
              {pokemon.stats.map((s) => (
                <div key={s.stat.name}>
                  <div className="flex justify-between text-sm mb-1 capitalize">
                    <span>{s.stat.name.replace("-", " ")}</span>
                    <span className="font-bold">{s.base_stat}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#3B4CCA]"
                      style={{
                        width: `${Math.min((s.base_stat / 150) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}