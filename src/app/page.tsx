import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative pt-16 lg:pt-20">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('./public/images/FundoSite.jpeg')",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-white/80 pointer-events-none" />

      <header className="fixed top-0 left-0 w-full h-16 lg:h-20 bg-white flex items-center justify-between px-4 lg:px-20 z-[999]">
        <div className="flex items-center">
          <Link href="/" className="flex items-center -gap-3">
            <img
              src="/images/PokebolaLogo.webp"
              alt="Logo"
              className="h-[64px] w-auto block"
            />

            <div className="flex items-center leading-none mt-[-10px] lg:mt-[-10px]">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-hollow text-[#3B4CCA]">
                Poke
              </h1>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-pokemon text-[#FF0000]">
                10
              </h1>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6 lg:text-xl text-black z-[1000] ">
          <a
            href="#sobre-nos"
            className="cursor-pointer hover:underline underline-offset-4 decoration-[#FFDE00] decoration-2 transition-all"
          >
            Sobre nós
          </a>

          <a
            href="#nossa-proposta"
            className="cursor-pointer hover:underline underline-offset-4 decoration-[#FFDE00] decoration-2 transition-all"
          >
            Nossa Proposta
          </a>

          <Link
            href="/vitrine"
            className="outline outline-2 outline-[#FFDE00] hover:bg-[#FFDE00] hover:text-white rounded-lg px-4 py-1 transition-all duration-300 font-bold"
          >
            Vitrine
          </Link>
        </nav>
      </header>

      <section className="relative h-[226px] md:h-[386px] lg:min-h-[calc(100vh-5rem)] w-full overflow-hidden">
        <div className="relative z-10 flex items-center justify-center h-full px-8 md:px-14 lg:px-28">
          <div className="flex flex-col items-center text-center gap-4 md:gap-10 lg:gap-20">
            <div className="flex flex-col gap-5 md:gap-8 lg:gap-20">
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-16 lg:mt-[-210px]">
                <h2 className="font-hollow text-2xl md:text-4xl lg:text-6xl text-black">
                </h2>
                <div className="flex justify-center items-center leading-none lg:mt-[-50px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                  <h1 className="text-4xl md:text-6xl lg:text-9xl font-pokemon text-[#3B4CCA] [-webkit-text-stroke:2px_#B3A125] lg:[-webkit-text-stroke:4px_#B3A125] [text-shadow:1px_1px_0px_#1D2C5E] lg:[text-shadow:8px_8px_0px_#1D2C5E]">
                  </h1>
                  <h1 className="text-4xl md:text-6xl lg:text-9xl font-pokemon text-[#FF0000] [-webkit-text-stroke:2px_#B3A125] lg:[-webkit-text-stroke:4px_#B3A125] [text-shadow:1px_1px_0px_#1D2C5E] lg:[text-shadow:8px_8px_0px_#7A0000] lg:ml-[-10px]">
                  </h1>
                </div>
              </div>
              <p className="text-black text-xs md:text-base lg:text-xl text-center">
                Sua Vitrine de Pokemons!
              </p>
            </div>
            <Link
              href="/vitrine"
              className="flex w-32 h-8 md:w-64 md:h-10 lg:w-128 lg:h-16"
            >
              <Button label="Ver Catálogo!" variant="CTA"></Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="sobre-nos"
        className="relative scroll-mt-20 w-full min-h-fit flex flex-col items-center overflow-hidden py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-40"
      >
        <div className="relative z-10 flex flex-col items-center mb-12 w-full">
          <span className="relative inline-block">
            <span className="relative z-10 font-pokemon text-2xl md:text-3xl lg:text-6xl text-[#3B4CCA]">
              Sobre Nós!
            </span>
            <div className="absolute -bottom-2 lg:-bottom-6 -left-6 w-[60%] h-1 lg:h-2 bg-[#FFDE00] z-0 opacity-70 rounded-full" />
          </span>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-10 lg:px-20">
          <div className="md:w-1/2 lg:w-1/2 px-4 md:px-6 lg:px-10">
            <p className="text-black text-xs md:text-base lg:text-2xl indent-8 leading-relaxed text-justify px-4 md:px-6 lg:px-8">
              Somos uma fan-made pokedex com o intuito de funcionar como um
              trade center de Pokemons! Conquiste pokemons que você ainda não
              possui em sua pokedex ou ofereça seus repetidos para outros
              usuários adquirirem. Entre em nosso catálogo e veja nossa
              disponibilidade de trocas!
            </p>
          </div>

          <div className="md:w-1/2 lg:w-1/2 flex justify-end">
            <div className="relative group">
              <div className="absolute -top-4 -left-4 lg:-left-6 w-[90%] h-[105%] border-4 border-[#FFDE00] rounded-2xl z-0 pointer-events-none transition-transform group-hover:scale-105" />

            
            </div>
          </div>
        </div>
      </section>

      <section
        id="nossa-proposta"
        className="relative scroll-mt-20 min-h-fit py-16 md:py-24 lg:py-32 w-full overflow-hidden flex flex-col items-center"
      >
        <div className="relative z-20 flex flex-col items-center justify-center gap-8 px-20 py-16 md:px-32 md:py-24 lg:px-80 lg:py-32 ">
          <div className="relative z-10 flex items-center justify-center h-full">
            <span className="relative inline-block">
              <span className="relative z-10 font-pokemon text-2xl md:text-3xl lg:text-6xl text-[#FF0000]">
                Nossa Proposta!
              </span>
              <div className="absolute -bottom-2 lg:-bottom-6 -left-6 w-[60%] h-1 lg:h-2 bg-[#FFDE00] z-0 opacity-70 rounded-full" />
            </span>
          </div>

          <div className="flex flex-col text-black text-xs md:text-base lg:text-2xl indent-8 md:p-12 lg:p-12 gap-4">
            <p>
              A proposta desse site é pôr em prática os treinamentos do
              onboarding, consumindo a PokeAPI e criando uma vitrine com os
              dados recebidos.
            </p>
            <p>
              A identidade visual foi baseada nos sites dos anos 2000 de
              pokemon, com backgrounds com muita informação mas adaptado para um
              design mais clean nos textos e decorações.
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <img
              src="/images/pokeball.png"
              alt="pokeball"
              className="h-20 md:h-32 lg:h-40 -rotate-[15deg] hover:scale-110 transition-transform duration-300"
            />
            <Link
              href="./vitrine"
              className="flex md:w-64 md:h-12 lg:w-[32rem] lg:h-16"
            >
              <Button label="Ir para Vitrine" variant="CTA"></Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}