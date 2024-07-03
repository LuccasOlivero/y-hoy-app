import axios from "axios";
import { Drink } from "../types";

export default async function getNonAlcoholicDrinks(): Promise<Drink[]> {
  const URL = `http://localhost:3001/api/a62df06e-3347-4f02-8a23-558207995dda/non-alcoholic`;
  const res = await axios.get(URL);
  return res.data;
}
