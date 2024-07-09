import axios from "axios";
import { Drink } from "../types";
import { revalidatePath } from "next/cache";

const URL = `http://localhost:3001`;

export default async function getSparklingDrinks(): Promise<Drink[]> {
  const res = await axios.get(
    `${URL}/api/drink/a61b1337-27ba-4f4b-b9a6-e44f05ddfddd`
  );

  revalidatePath("/api/drink/a61b1337-27ba-4f4b-b9a6-e44f05ddfddd");
  return res.data;
}
