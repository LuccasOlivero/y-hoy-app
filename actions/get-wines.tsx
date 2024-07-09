import axios from "axios";
import { Drink } from "../types";
import { revalidatePath } from "next/cache";

const URL = `http://localhost:3001`;

export default async function getWineDrinks(): Promise<Drink[]> {
  const res = await axios.get(
    `${URL}/api/drink/02b13d96-eb46-4eea-a55f-9684a1420516`
  );

  revalidatePath("/api/drink/02b13d96-eb46-4eea-a55f-9684a1420516");
  return res.data;
}
