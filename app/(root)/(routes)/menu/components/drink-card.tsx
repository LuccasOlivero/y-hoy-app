import { formatter } from "@/lib/utils";
import { Drink } from "@/types";

interface DrinkType {
  drink: Drink;
}

export default function DrinkCard({ drink }: DrinkType) {
  return (
    <div>
      <div className="flex justify-between font py-1">
        <p className="font-normal uppercase">
          {drink.name}
          {drink.description?.length ? ` (${drink.description})` : ""}
        </p>

        {/* generacion de puntos entre los elementos p */}
        <span className="flex-1 border-b border-dotted border-gray-300 relative bottom-1"></span>
        <p className="bg-[#D0B17D] rounded-sm font">
          {formatter.format(+drink.price)}
        </p>
      </div>
    </div>
  );
}
