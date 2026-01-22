export type Cocktail = {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string[];
};

export const cocktails: Cocktail[] = [
  { 
    id: "aqua-fizz", 
    name: "Aqua Fizz", 
    price: "29,99 €", 
    image: "../public/assets/images/Aqua_Fizz.jpg" ,
    description: 
    [
      "4 drops vanilla extract",
      "8 drops orange blossom water",
      "30 ml lemon juice",
      "10 ml sugar syrup",
      "30 ml cream or whole milk",
      "30 ml Aquafina soda",
      "1 drop egg white",
      "20 ml Blue Curaçao (Kuyper)",
      "60 ml gin (Roku)"
    ]
  },
  { 
    id: "brew-highball", 
    name: " Gold Brew Highball", 
    price: "29,99 €", 
    image: "../public/assets/images/Brew_Highball.jpg" ,
    description: [
      "60 ml cold brew coffee",
      "5 ml lemon juice",
      "40 ml dark rum (Cruzan)",
      "5 ml coffee liqueur (Kahlúa)",
      "40 ml Aquafina soda",
      "5 ml sugar syrup"
    ]
  },
  { 
    id: "peaches", 
    name: "Peaches", 
    price: "29,99 €", 
    image: "../public/assets/images/Peaches.jpg",
    description: [
      "20 ml peach purée",
      "10 ml peach syrup",
      "60 ml Aquafina soda",
      "40 ml gin (Roku)",
      "5 ml lemon juice"
    ]
  },
  { 
    id: "vedette", 
    name: "Aqua Vedette", 
    price: "29,99 €", 
    image: "../public/assets/images/Vedette.jpg",
    description: [
      "10 mint leaves",
      "20 ml cucumber juice",
      "15 ml sugar syrup",
      "15 ml lime juice",
      "10 ml Blue Curaçao (Kuyper)",
      "50 ml gin (Roku)",
      "50 ml Aquafina soda"
    ]
  },
  { 
    id: "aquarita", 
    name: "Aquarita", 
    price: "29,99 €", 
    image: "../public/assets/images/Aquarita.jpg",
    description: 
    [
      "4 drops vanilla extract",
      "8 drops orange blossom water",
      "30 ml lemon juice",
      "10 ml sugar syrup",
      "30 ml cream or whole milk",
      "30 ml Aquafina soda",
      "1 drop egg white",
      "20 ml Blue Curaçao (Kuyper)",
      "60 ml gin (Roku)"
    ]
  },
  { 
    id: "mojo", 
    name: "Passion Mojo", 
    price: "29,99 €", 
    image: "../public/assets/images/Mojo.jpg",
    description: [
      "4 lime wedges",
      "20 mint leaves",
      "30 ml passion fruit juice",
      "40 ml Aquafina soda",
      "10 ml sugar syrup",
      "60 ml white rum (Cruzan)"
    ]
  },
  { 
    id: "storm", 
    name: "Quiet Storm", 
    price: "29,99 €", 
    image: "../public/assets/images/Storm.jpg",
    description: [
      "15 ml ginger juice",
      "50 ml dark rum (Cruzan)",
      "8 drops Angostura bitters",
      "10 ml sugar syrup",
      "20 ml lemon juice",
      "60 ml Aquafina soda"
    ]
  },
    
  { 
    id: "young-fashioned", 
    name: "Young Fashioned", 
    price: "29,99 €", 
    image: "../public/assets/images/Young_Fashiong.jpg",
    description: [
      "1 drop vanilla extract",
      "5 ml honey",
      "45 ml whiskey (Maker's Mark)",
      "2 drops Angostura bitters",
      "90 ml Aquafina soda"
    ]
  },
];
