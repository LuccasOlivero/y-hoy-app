import { text } from "stream/consumers";

export const questions = [
  {
    id: 1,
    title: "¿Prefieres bebidas dulces o amargas?",
    options: [
      { id: 1, response: "Dulces" },
      { id: 2, response: "Amargas" },
    ],
    text: [
      {
        en: "Para días calurosos te recomendamos cervezas de cuerpo liviano y refrescantes. Para el frío, cervezas más robustas y contundentes. Para la cena, te recomendamos cervezas de fuentes frescas y dulces.",
        es: "Para días calurosos te recomendamos cervezas de cuerpo liviano y refrescantes. Para el frío, cervezas más robustas y contundentes. Para la cena, te recomendamos cervezas de fuentes frescas y dulces.",
      },
    ],
  },
  {
    id: 2,
    title: "¿Te gustan las bebidas con alcohol?",
    options: [
      { id: 3, response: "Sí" },
      { id: 4, response: "No" },
    ],
    text: [
      {
        en: "For hot days, we recommend beer and refreshing drinks. For cold, we recommend robust and concentrated drinks. For dinner, we recommend fresh and sweet drinks.",
        es: "Para días calurosos te recomendamos cervezas de cuerpo liviano y refrescantes. Para el frío, cervezas más robustas y contundentes. Para la cena, te recomendamos cervezas de fuentes frescas y dulces.",
      },
    ],
  },
];
