import axios from "axios";
import { Drink } from "../types";

const URL = `http://localhost:3001/api/sparkling/a61b1337-27ba-4f4b-b9a6-e44f05ddfddd`;

export default async function getSparklingDrinks(): Promise<Drink[]> {
  const res = await axios.get(URL);
  return res.data;
}
