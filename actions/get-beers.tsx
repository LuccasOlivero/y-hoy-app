import axios from "axios";
import { Drink } from "../types";

const URL = `http://localhost:3001/api/ce3a9dde-487f-413d-9f94-b90a60c89835/beer`;

export default async function getBeerDrinks(): Promise<Drink[]> {
  const res = await axios.get(URL);
  return res.data;
}
