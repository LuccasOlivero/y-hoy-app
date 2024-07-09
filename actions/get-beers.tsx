import axios from "axios";
import { Drink } from "../types";
import { revalidatePath } from "next/cache";

const URL = `http://localhost:3001`;

export default async function getBeerDrinks(): Promise<Drink[]> {
  const res = await axios.get(
    `${URL}/api/drink/ce3a9dde-487f-413d-9f94-b90a60c89835`
  );

  revalidatePath("/api/drink/ce3a9dde-487f-413d-9f94-b90a60c89835");
  return res.data;
}
