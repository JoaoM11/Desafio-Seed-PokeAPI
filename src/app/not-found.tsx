"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";


export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white px-6 py-12 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 bg-repeat z-0"
        style={{
          backgroundImage: "url('/images/FundoSite.jpeg')",
          backgroundSize: '150px 150px',
        }}
      ></div>

      <div className="z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-8 md:gap-12">
        
        <div className="flex items-end justify-center gap-4 md:gap-6 relative">
          
          <div className="relative group">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-black/10 rounded-full blur-sm group-hover:bg-black/20 transition-all duration-300"></div>
              
              <Image
                src="/images/PokebolaLogo.webp"
                alt="Pokebola"
                width={128}
                height={128}
                className="h-20 w-auto md:h-28 lg:h-32 animate-bounce-slow hover:animate-shake"
              />
          </div>

        </div>

          <div className="space-y-6">
            <h1 className="text-[#FF0000] text-5xl md:text-7xl lg:text-8xl font-pokemon leading-none tracking-tight mb-8">
             Oops!
           </h1>
  
           <h2 className="text-black text-2xl md:text-3xl font-bold font-sans">
            Erro 404
           </h2>

          <p className="text-gray-700 text-sm md:text-base lg:text-lg max-w-md mx-auto font-sans leading-relaxed">
            Parece que a página que você tentou acessar não existe...
        </p>
      </div>

        <div className="mt-4 w-full sm:w-auto">
          <Link href="/vitrine" className="inline-flex w-full sm:w-auto items-center justify-center">
            <Button 
                label="Voltar para a Vitrine" 
                variant="primary" 
                className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 bg-[#FF0000] hover:bg-[#CC0000] text-white" // Exemplo de estilização direta se o Button permitir
            />
          </Link>
        </div>
      </div>

    </main>
  );
}