import axios from "axios";
import { Drink } from "../types";

const URL = "http://localhost:3001/api/drinks/beers";

export default async function getBeers(): Promise<Drink[]> {
  const res = await axios.get(URL);
  return res.data;
}
