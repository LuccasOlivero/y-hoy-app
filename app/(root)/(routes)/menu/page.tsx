import getAlcoholicDrinks from "@/actions/get-alcoholisc";
import getNonAlcoholicDrinks from "@/actions/get-non-alcoholics";
import getBeerDrinks from "@/actions/get-beers";
import getSparklingDrinks from "@/actions/get-sparklings";
import getWineDrinks from "@/actions/get-wines";

import DrinksCard from "./components/drink-card";

export default async function Menu() {
  const alcoholic = await getAlcoholicDrinks();
  const nonAlcoholic = await getNonAlcoholicDrinks();
  const beers = await getBeerDrinks();
  const sparkling = await getSparklingDrinks();
  const wines = await getWineDrinks();

  return (
    <div className="container mx-auto">
      <div className="flex justify-center w-full">
        <h2 className="text-4xl text-[#A98A4D] font-bold uppercase relative inline-block tracking-widest my-4">
          {"<"} bebidas! {">"}
          <span className="text-stroke-title">
            {"<"} bebidas! {">"}
          </span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-2">
        <DrinksCard drinks={alcoholic} title="Con alcohol" />
        <DrinksCard drinks={nonAlcoholic} title="Sin alcohol" />
        <DrinksCard drinks={beers} title="Cervezas" />
        <DrinksCard drinks={sparkling} title="Espumantes" />
        <DrinksCard drinks={wines} title="Vinos" />
      </div>
    </div>
  );
}
