import axios from "axios";
import { Drink } from "../types";

const URL = "http://localhost:3001/api/drinks/sparkling";

export default async function getSparkling(): Promise<Drink[]> {
  const res = await axios.get(URL);
  return res.data;
}
