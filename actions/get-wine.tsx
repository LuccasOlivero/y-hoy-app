import axios from "axios";
import { Drink } from "../types";

const URL = "http://localhost:3001/api/drinks/wines";

export default async function getWine(): Promise<Drink[]> {
  const res = await axios.get(URL);
  return res.data;
}
