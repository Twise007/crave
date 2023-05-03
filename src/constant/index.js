import {
  beans,
  curry,
  jollofR,
  okra,
  amala,
  fried,
  egusi,
  woman,
  blackMan,
  chef,
  t1,
  t2,
  t3,
  t4,
} from "../assets";


import { GiCoffeeCup, GiFullPizza, GiApothecary } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";

const sideMenu = [
  { name: "Coffee", link: "/coffee", icon: GiCoffeeCup },
  { name: "Fast Food", link: "/fastfood", icon: IoFastFoodSharp },
  { name: "Pizza", link: "/pizza", icon: GiFullPizza },
  { name: "Naija Menu", link: "/naijamenu", icon: GiApothecary },
];

const testimoniesData = [
  {
    id: 1,
    image: t1,
    name: "micheal owen",
    description:
      "I enjoy premium services Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ullam commodi autem natus harum consequatur. Quis quisquam blanditiis, nulla amet tempore architecto repellat velit saepe laboriosam unde quas laborum culpa!",
  },
  {
    id: 2,
    image: t2,
    name: "belinda smith",
    description:
      "I enjoy premium services Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ullam commodi autem natus harum consequatur. Quis quisquam blanditiis, nulla amet tempore architecto repellat velit saepe laboriosam unde quas laborum culpa!",
  },
  {
    id: 3,
    image: t3,
    name: "samual joe",
    description:
      "I enjoy premium services Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ullam commodi autem natus harum consequatur. Quis quisquam blanditiis, nulla amet tempore architecto repellat velit saepe laboriosam unde quas laborum culpa!",
  },
  {
    id: 4,
    image: t4,
    name: "lisa satish",
    description:
      "I enjoy premium services Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ullam commodi autem natus harum consequatur. Quis quisquam blanditiis, nulla amet tempore architecto repellat velit saepe laboriosam unde quas laborum culpa!",
  },
];

const staffs = [
  {
    id: 1,
    image: woman,
    title: "Customer Representative",
    name: "Alicia Keys",
    fb: "https://facebook.com",
    tw: "https://twitter.com",
    li: "https://linkedin.com",
  },
  {
    id: 2,
    image: chef,
    title: "Senior Chef Manager",
    name: "John Lee",
    fb: "https://facebook.com",
    tw: "https://twitter.com",
    li: "https://linkedin.com",
  },
  {
    id: 3,
    image: blackMan,
    title: "Managing Director",
    name: "Samuel Edwards",
    fb: "https://facebook.com",
    tw: "https://twitter.com",
    li: "https://linkedin.com",
  },
];

const popularMenu = [
  {
    id: 1,
    image: beans,
    title: "Beans and fried plantains",
    description:
      "Porridge beans is a popular and flavorful one-pot bean dish that is widely enjoyed. It is made by cooking bean in a rich and spicy tomato-based sauce with a variety of ingredients such as onions, peppers, and seasonings. fried plantians",
    price: "500",
  },
  {
    id: 2,
    image: curry,
    title: "rice with curry",
    description:
      "Rice with soup is a popular and flavorful one-pot rice dish that is widely enjoyed in India and other Aisa countries. It is made by cooking rice in a rich and spicy tomato-based sauce with a variety of ingredients such as onions, peppers, and seasonings.",
    price: "1500",
  },
  {
    id: 3,
    image: jollofR,
    title: "jollof rice",
    description:
      "Nigeria jollof rice is a popular and flavorful one-pot rice dish that is widely enjoyed in Nigeria and other West African countries. It is made by cooking rice in a rich and spicy tomato-based sauce with a variety of ingredients such as onions, peppers, and seasonings.",
    price: "1200",
  },
  {
    id: 4,
    image: okra,
    title: "okra soup",
    description:
      "Okra soup is a popular and flavorful one-pot okra dish that is widely enjoyed in Nigeria and other West African countries. It is made by cooking okra in a rich and spicy tomato-based sauce with a variety of ingredients such as onions, peppers, ponmo, cray fish, and varities.",
    price: "1100",
    country: "Ghana",
  },
  {
    id: 5,
    image: egusi,
    title: "egusi soup and Semo",
    description:
      "Egusi soup is a popular and flavorful one-pot egusi dish that is widely enjoyed in Nigeria and other West African countries. It is made by cooking okra in a rich and spicy tomato-based sauce with a variety of ingredients such as onions, peppers, ponmo, cray fish, and varities.",
    price: "1300",
    country: "Nigeria",
  },
  {
    id: 6,
    image: fried,
    title: "Fried rice",
    description:
      "Fried rice is a popular and flavorful one-pot rice dish that is widely enjoyed in Nigeria and other past of the world. It is made by cooking rice in a rich and sauce with a variety of ingredients such as onions, peppers, and seasonings.",
    price: "1100",
    country: "Ghana",
  },
];

const heroBanner = [
  {
    id: 1,
    image: jollofR,
    title: "jollof rice",
    description:
      "Nigeria jollof rice is a popular and flavorful one-pot rice dish that is widely enjoyed in Nigeria and other West African countries. It is made by cooking rice in a rich and spicy tomato-based sauce with a variety of ingredients such as onions, peppers, and seasonings.",
    price: "1200",
  },

  {
    id: 2,
    image: curry,
    title: "rice with curry",
    description:
      "Rice with soup is a popular and flavorful one-pot rice dish that is widely enjoyed in India and other Aisa countries. It is made by cooking rice in a rich and spicy tomato-based sauce with a variety of ingredients such as onions, peppers, and seasonings.",
    price: "1500",
  },
  {
    id: 3,
    image: fried,
    title: "Fried rice",
    description:
      "Fried rice is a popular and flavorful one-pot rice dish that is widely enjoyed in Nigeria and other past of the world. It is made by cooking rice in a rich and sauce with a variety of ingredients such as onions, peppers, and seasonings.",
    price: "1100",
  },
  {
    id: 4,
    image: okra,
    title: "okra soup",
    description:
      "Okra soup is a popular and flavorful one-pot okra dish that is widely enjoyed in Nigeria and other West African countries. It is made by cooking okra in a rich and spicy tomato-based sauce with a variety of ingredients such as onions, peppers, ponmo, cray fish, and varities.",
    price: "1100",
    country: "Ghana",
  },
];

const popularMeal = [
  {
    id: 1,
    image: amala,
    title: "Amala and Ewedu",
    price: "1100",
    country: "Nigeria",
  },
  {
    id: 2,
    image: curry,
    title: "rice with curry",
    price: "1500",
    country: "India",
  },
  {
    id: 3,
    image: okra,
    title: "okra soup",
    price: "1100",
    country: "Ghana",
  },
  {
    id: 4,
    image: beans,
    title: "Beans and fried plantains",
    price: "500",
    country: "Nigeria",
  },
];

export { popularMenu, heroBanner, popularMeal, staffs, testimoniesData, sideMenu };
