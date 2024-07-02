import axios from "axios";
import { Drink } from "../types";

const URL = "http://localhost:3001/api/drinks/no-alcohol";

export default async function getNoAlcohol(): Promise<Drink[]> {
  const res = await axios.get(URL);
  return res.data;
}
