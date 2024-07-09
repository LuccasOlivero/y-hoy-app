import axios from "axios";
import { Drink } from "../types";
import { revalidatePath } from "next/cache";

const URL = `http://localhost:3001`;

export default async function getAlcoholicDrinks(): Promise<Drink[]> {
  const res = await axios.get(
    `${URL}/api/drink/e7c584f1-9ba1-4348-9086-c1471ea7b3bc`
  );

  revalidatePath("/api/drink/e7c584f1-9ba1-4348-9086-c1471ea7b3bc");
  return res.data;
}
