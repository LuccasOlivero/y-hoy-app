import getAlcoholicDrinks from "@/actions/get-alcoholisc";
import getNonAlcoholicDrinks from "@/actions/non-alcoholics";
import getBeerDrinks from "@/actions/get-beers";
import getSparklingDrinks from "@/actions/get-sparklings";
import getWineDrinks from "@/actions/get-wines";

import DrinksList from "./components/drink-list";
import Container from "../components/container";

export default async function Menu() {
  const alcoholic = await getAlcoholicDrinks();
  const nonAlcoholic = await getNonAlcoholicDrinks();
  const beers = await getBeerDrinks();
  const sparkling = await getSparklingDrinks();
  const wines = await getWineDrinks();

  return (
    <Container>
      <h2 className="text-4xl text-[#A98A4D] font-bold uppercase relative inline-block tracking-widest my-4">
        {"<"} bebidas! {">"}
        <span className="text-stroke-title">
          {"<"} bebidas! {">"}
        </span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <DrinksList drinks={alcoholic} title="Con alcohol" />
        <DrinksList drinks={nonAlcoholic} title="Sin alcohol" />
        <DrinksList drinks={beers} title="Cervezas" />
        <DrinksList drinks={sparkling} title="Espumantes" />
        <DrinksList drinks={wines} title="Vinos" />
      </div>
    </Container>
  );
}
