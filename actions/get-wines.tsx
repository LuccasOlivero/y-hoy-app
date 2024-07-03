import axios from "axios";
import { Drink } from "../types";

export default async function getWineDrinks(): Promise<Drink[]> {
  const URL = `http://localhost:3001/api/02b13d96-eb46-4eea-a55f-9684a1420516/wine`;
  const res = await axios.get(URL);
  return res.data;
}
