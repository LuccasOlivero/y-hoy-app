import axios from "axios";
import { Drink } from "../types";
import { revalidatePath } from "next/cache";

const URL = `http://localhost:3001`;

export default async function getNonAlcoholicDrinks(): Promise<Drink[]> {
  const res = await axios.get(
    `${URL}/api/non-alcoholic/a62df06e-3347-4f02-8a23-558207995dda`
  );

  revalidatePath("/api/non-alcoholic/a62df06e-3347-4f02-8a23-558207995dda");
  return res.data;
}
