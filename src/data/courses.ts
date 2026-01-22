export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Classic Cocktails",
    description: "Learn timeless cocktail recipes.",
    price: 99,
    image: "../public/assets/images/courses/cours_1.jpg",
  },
  {
    id: 2,
    title: "Modern Mixology",
    description: "Trendy techniques and flavors.",
    price: 129,
    image: "../public/assets/images/courses/cours_2.jpg",
  },
  {
    id: 3,
    title: "Non-Alcoholic Drinks",
    description: "Creative mocktails and blends.",
    price: 79,
    image: "../public/assets/images/courses/cours_3.jpg",
  },
  {
    id: 4,
    title: "Home Bartender",
    description: "Everything for your home bar.",
    price: 89,
    image: "../public/assets/images/courses/cours_4.jpg",
  },
  {
    id: 5,
    title: "Advanced Bartending",
    description: "Professional bartender skills.",
    price: 149,
    image: "../public/assets/images/courses/cours_5.jpg",
  },
  {
    id: 6,
    title: "Cocktail Aesthetics",
    description: "Presentation & garnish mastery.",
    price: 69,
    image: "../public/assets/images/courses/cours_6.jpg"
  },
];