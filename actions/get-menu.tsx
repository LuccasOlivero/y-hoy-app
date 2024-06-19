import { Drink } from "../types";

const URL = "http://localhost:3001/api/drinks";

export default async function getAllDrinks(): Promise<Drink[]> {
  const res = await fetch(URL, {
    headers: {
      "Cache-Control": "must-revalidate, no-cache, no-store, max-age=5",
    },
  });
  const data = await res.json();
  return data;
}
