import { Button } from "./button";
import Link from "next/link";

type TaskProps = {
  title: string;
  imageSource: string;
};

export function Card({ title, imageSource }: TaskProps) {
  return (
    <div
      className={`w-48 h-auto bg-[#FAFAFA] border-2 border-[#B3A125] rounded-lg  p-6 overflow-hidden flex flex-col items-center`}
    >
      <h2 className="font-semibold text-xl text-[#3B4CCA] truncate px-8">
        {title}
      </h2>

      <img src={imageSource} alt={title} className={`pb-4`} />

      <Link href={`/vitrine/${title.toLowerCase()}`}>
        <Button label="Details" variant="primary"></Button>
      </Link>
    </div>
  );
}