export type Cocktail = {
  id: string;
  name: string;
  price?: string;
  image: string; // путь к картинке
};

export const cocktails: Cocktail[] = [
  { id: "aqua-fizz", name: "Aqua Fizz", price: "29,99 €", image: "/assets/images/Aqua_Fizz.jpg" },
  { id: "brew-highball", name: "Brew Highball", price: "29,99 €", image: "/assets/images/Brew_Highball.jpg" },
  { id: "peaches", name: "Peaches", price: "29,99 €", image: "/assets/images/Peaches.jpg" },
  { id: "vedette", name: "Vedette", price: "29,99 €", image: "/assets/images/Vedette.jpg" },
  { id: "aquarita", name: "Aquarita", price: "29,99 €", image: "/assets/images/Aquarita.jpg" },
  { id: "mojo", name: "Mojo", price: "29,99 €", image: "/assets/images/Mojo.jpg" },
  { id: "storm", name: "Storm", price: "29,99 €", image: "/assets/images/Storm.jpg" },
  { id: "young-fashioned", name: "Young Fashioned", price: "29,99 €", image: "/assets/images/Young_Fashiong.jpg" },
];
