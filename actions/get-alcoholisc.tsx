import axios from "axios";
import { Drink } from "../types";

export default async function getAlcoholicDrinks(): Promise<Drink[]> {
  const URL = `http://localhost:3001/api/alcoholic/e7c584f1-9ba1-4348-9086-c1471ea7b3bc`;
  const res = await axios.get(URL);
  return res.data;
}
