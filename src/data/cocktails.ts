export type Cocktail = {
  id: string;
  name: string;
  image: string; // путь к картинке
};

export const cocktails: Cocktail[] = [
  { id: "aqua-fizz", name: "Aqua Fizz", image: "/assets/images/Aqua_Fizz.jpg" },
  { id: "brew-highball", name: "Brew Highball", image: "/assets/images/Brew_Highball.jpg" },
  { id: "peaches", name: "Peaches", image: "/assets/images/Peaches.jpg" },
  { id: "vedette", name: "Vedette", image: "/assets/images/Vedette.jpg" },
  { id: "aquarita", name: "Aquarita", image: "/assets/images/Aquarita.jpg" },
  { id: "mojo", name: "Mojo", image: "/assets/images/Mojo.jpg" },
  { id: "storm", name: "Storm", image: "/assets/images/Storm.jpg" },
  { id: "young-fashioned", name: "Young Fashioned", image: "/assets/images/Young_Fashiong.jpg" },
];
