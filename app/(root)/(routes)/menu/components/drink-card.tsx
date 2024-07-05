import { Drink } from "@/types";
import DrinkItem from "./drink-item";

interface DrinkType {
  drinks: Drink[];
  title: string;
}

export default function DrinksCard({ drinks, title }: DrinkType) {
  return (
    <div className="min-w-64 outline outline-[#A98A4D] rounded-sm w-full">
      {drinks.length === 0 && "No se encontraror bebidas. Reinicie la pagina"}

      <div className="px-2 w-full bg-[#CFC795]">
        <h2 className="text-[#267b40] relative inline-block tracking-widest uppercase w-full text-2xl">
          {title}
          <span className="text-stroke-sub">{title}</span>
        </h2>
      </div>

      <div className="px-2 w-full">
        {drinks.map((drink) => (
          <DrinkItem key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
}
