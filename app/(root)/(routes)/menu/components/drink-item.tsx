import { Drink } from "@/types";

interface DrinkType {
  drink: Drink;
}

export default function DrinkItem({ drink }: DrinkType) {
  function getDescription(description: string | undefined) {
    if (!description) return "";

    if (description.length < 9) {
      return `(${description})`;
    }

    return (
      <span className="text-xs flex font-light leading-none relative top-[-.1rem] text-pretty">
        {`(${drink.description})`}
      </span>
    );
  }

  return (
    <div className="flex justify-between font py-1 gap-x-1">
      <p className="font-normal uppercase relative">
        {drink.name}
        {getDescription(drink.description)}
      </p>

      {/* generacion de puntos enter los elementos p */}
      <span className="flex-1 border-b border-dotted border-gray-300 relative bottom-1 w-full"></span>

      <div className="grid items-center">
        <p className="bg-[#D0B17D] rounded-sm font-extrabold items-center">
          {drink.price}
        </p>
      </div>
    </div>
  );
}
