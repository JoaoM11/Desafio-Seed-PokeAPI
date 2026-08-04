"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
import { isFavorite, toggleFavorite } from "../../utils/favorites";

type CardProps = {
  title: string;
  imageSource: string;
};

export function Card({ title, imageSource }: CardProps) {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    setFavorited(isFavorite(title));
  }, [title]);

  const handleToggleFavorite = () => {
    toggleFavorite({ name: title, image: imageSource });
    setFavorited((prev) => !prev);
  };

  return (
    <div className="relative w-48 h-auto bg-[#FAFAFA] border-2 border-[#3B4CCA] rounded-lg p-6 overflow-hidden flex flex-col items-center">
      <button
        onClick={handleToggleFavorite}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-black/5 transition-colors"
        aria-label="Favoritar"
      >
        <Heart
          size={22}
          className={
            favorited ? "fill-red-500 text-red-500" : "text-gray-400"
          }
        />
      </button>

      <h2 className="font-semibold text-xl text-[#3B4CCA] truncate px-8">
        {title}
      </h2>

      <img src={imageSource} alt={title} className="pb-4" />

      <Link href={`/vitrine/${title.toLowerCase()}`}>
        <Button label="Detalhes" variant="primary" />
      </Link>
    </div>
  );
}