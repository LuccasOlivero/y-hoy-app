import getAllDrinks from "@/actions/get-menu";
import Container from "../components/container";

export default async function Menu() {
  const drinks = await getAllDrinks();

  return (
    <Container>
      <h2>Bebias!</h2>

      {drinks.map((drink) => (
        <div key={drink.id}>
          <p>{drink.name}</p>
          <p>{drink.price}</p>
          <p>{drink.description}</p>
          <p>{drink.percentAlcohol}</p>
          <p>{drink.amargor}</p>
          <p>{drink.flavor}</p>
        </div>
      ))}
    </Container>
  );
}
