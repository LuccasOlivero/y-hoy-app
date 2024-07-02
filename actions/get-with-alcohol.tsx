import axios from "axios";
import { Drink } from "../types";

const URL = "http://localhost:3001/api/drinks/with-alcohol";

export default async function getWithAlcohol(): Promise<Drink[]> {
  const res = await axios.get(URL);
  return res.data;
}
