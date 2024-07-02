import { Drink as DrinkType } from "@/types";

import Container from "../components/container";
import { formatter } from "@/lib/utils";

import getWine from "@/actions/get-wine";
import getBeers from "@/actions/get-beers";
import getNoAlcohol from "@/actions/get-no-alcohol";
import getWithAlcohol from "@/actions/get-with-alcohol";
import getSparkling from "@/actions/get-sparkling";

export default async function Menu() {
  const withAlcohol = await getWithAlcohol();
  const noAlcohol = await getNoAlcohol();
  const sparkling = await getSparkling();
  const beers = await getBeers();
  const wines = await getWine();

  return (
    <Container>
      <h2 className="text-4xl text-[#A98A4D] font-bold uppercase relative inline-block tracking-widest my-4">
        {"<"} bebidas! {">"}
        <span className="text-stroke-title">
          {"<"} bebidas! {">"}
        </span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <DrinksList drinks={withAlcohol} title="Con alcohol" />
        <DrinksList drinks={noAlcohol} title="Sin alcohol" />
        <DrinksList drinks={beers} title="Cervezas" />
        <DrinksList drinks={sparkling} title="Espumantes" />
        <DrinksList drinks={wines} title="Vinos" />
      </div>
    </Container>
  );
}

interface Test {
  drinks: DrinkType[];
  title: string;
}

export function DrinksList({ drinks, title }: Test) {
  return (
    <div className="max-w-xs border-[.2rem] border-[#A98A4D] rounded-sm w-full">
      {drinks.length === 0 && "no hay nada pa"}

      <div className="px-2 w-full bg-[#CFC795]">
        <h2 className="text-[#267b40] relative inline-block tracking-widest uppercase w-full text-2xl">
          {title}
          <span className="text-stroke-sub">{title}</span>
        </h2>
      </div>

      <div className="px-2 w-full">
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
}

interface Test2 {
  drink: DrinkType;
}

export function DrinkCard({ drink }: Test2) {
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
