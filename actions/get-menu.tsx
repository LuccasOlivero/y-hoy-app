import axios from "axios";
import { Drink } from "../types";

const URL = "http://localhost:3001/api/drinks";

export default async function getAllDrinks(): Promise<Drink[]> {
  const res = await axios.get(URL);
  return res.data;
}
