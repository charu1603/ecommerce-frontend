import head1 from "../assets/head1.jpg";
import head2 from "../assets/head2.jpg";
import head3 from "../assets/head3.jpg";
import head4 from "../assets/head4.jpg";
import head5 from "../assets/head5.jpg";
import head6 from "../assets/head5.jpg";
import bike from "../assets/bike.jpg";
import bike1 from "../assets/bike2.jpg";
import bike2 from "../assets/bike3.jpg";
import bike3 from "../assets/bike4.jpg";
import bike4 from "../assets/bike5.jpg";
import car from "../assets/car.jpg";
import car1 from "../assets/car3.jpg";
import car2 from "../assets/car4.jpg";
import car3 from "../assets/car5.jpg";
import cos from "../assets/cos1.jpg";
import cos1 from "../assets/cos2.jpg";
import cos2 from "../assets/cos3.jpg";
import cos3 from "../assets/cos4.jpg";

export const products = [
  // Headphones

  {
    id: 9,
    name: "Tesla Model 3",
    price: 399.99,
    category: "cars",
    image: car,
    description:
      "Electric sedan with autopilot capabilities and long-range battery.",
  },
  {
    id: 10,
    name: "BMW 3 Series",
    price: 419.99,
    category: "cars",
    image: car1,
    description:
      "Luxury sports sedan with advanced technology and performance.",
  },
  {
    id: 11,
    name: "Audi A4",
    price: 389.99,
    category: "cars",
    image: car2,
    description:
      "Premium sedan with quattro all-wheel drive and elegant design.",
  },
  {
    id: 12,
    name: "Mercedes-Benz C-Class",
    price: 439.99,
    category: "cars",
    image: car3,
    description:
      "Luxury sedan with advanced safety features and refined interior.",
  },
  {
    id: 96,
    name: "Mercedes-Benz C-Class",
    price: 439.99,
    category: "cars",
    image: car3,
    description:
      "Luxury sedan with advanced safety features and refined interior.",
  },
  {
    id: 1,
    name: "Sony  Headphones",
    price: 349.99,
    category: "headphones",
    image: head1,
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.",
  },
  {
    id: 2,
    name: "Apple AirPods Pro",
    price: 249.99,
    category: "headphones",
    image: head2,
    description:
      "Active Noise Cancellation for immersive sound. Transparency mode for hearing and connecting with the world around you.",
  },
  {
    id: 3,
    name: "Bose QuietComfort 35 II",
    price: 299.99,
    category: "headphones",
    image: head3,
    description:
      "World-class noise cancellation. Alexa-enabled. Balanced audio performance at any volume.",
  },
  {
    id: 4,
    name: "Sennheiser HD 660 S",
    price: 499.99,
    category: "headphones",
    image: head4,
    description:
      "Open-back audiophile headphones with natural, detailed sound reproduction.",
  },
  {
    id: 99,
    name: "Sennheiser HD 660 S",
    price: 499.99,
    category: "headphones",
    image: head5,
    description:
      "Open-back audiophile headphones with natural, detailed sound reproduction.",
  },
  {
    id: 98,
    name: "Sennheiser HD 660 S",
    price: 499.99,
    category: "headphones",
    image: head6,
    description:
      "Open-back audiophile headphones with natural, detailed sound reproduction.",
  },
  // Bikes
  {
    id: 5,
    name: "Trek Domane SL 7",
    price: 4999.99,
    category: "bikes",
    image: bike,
    description:
      "Endurance road bike with IsoSpeed technology for comfort on long rides.",
  },
  {
    id: 6,
    name: "Specialized Stumpjumper",
    price: 3299.99,
    category: "bikes",
    image: bike1,
    description: "Trail mountain bike with 29-inch wheels and full suspension.",
  },
  {
    id: 7,
    name: "Giant TCR Advanced Pro",
    price: 2799.99,
    category: "bikes",
    image: bike2,
    description:
      "Lightweight carbon road bike designed for racing and performance.",
  },
  {
    id: 8,
    name: "Cannondale Quick CX 3",
    price: 899.99,
    category: "bikes",
    image: bike3,
    description:
      "Versatile hybrid bike perfect for commuting and recreational riding.",
  },
  {
    id: 100,
    name: " Quick CX 3",
    price: 899.99,
    category: "bikes",
    image: bike4,
    description:
      "Versatile hybrid bike perfect for commuting and recreational riding.",
  },
  // Cars

  // Cosmetics
  {
    id: 13,
    name: "Fenty Beauty Foundation",
    price: 36.99,
    category: "cosmetics",
    image: cos,
    description: "Full-coverage foundation with 50 shades for all skin tones.",
  },
  {
    id: 14,
    name: "Charlotte Tilbury Lipstick",
    price: 38.99,
    category: "cosmetics",
    image: cos1,
    description:
      "Matte revolution lipstick with long-lasting color and comfort.",
  },
  {
    id: 15,
    name: "Urban Decay Palette",
    price: 54.99,
    category: "cosmetics",
    image: cos2,
    description: "12-shade eyeshadow palette with highly pigmented colors.",
  },
  {
    id: 16,
    name: "Glossier Cloud Paint",
    price: 18.99,
    category: "cosmetics",
    image: cos3,
    description: "Gel-cream blush that blends seamlessly for a natural flush.",
  },
];

export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id) => {
  return products.find((product) => product.id === Number.parseInt(id));
};
