import { Category, Origin } from "@prisma/client";

const Beef: Category = "Beef";
const Asian: Origin = "Asian";

export const recipes = [
  {
    id: 1,
    name: "Gesang Gey",
    description: "Gesang Gey",
    category: Beef,
    vegan: false,
    cook_time: 45,
    thumbnail: "https://www.youtube.com/",
    origin: Asian,
    ingredient_id: 1,
    measure_id: 1,
    step_id: 1,
    user_id: 1,
  },
  {
    id: 2,
    name: "Gesang Gey",
    description: "Gesang Gey",
    category: Beef,
    vegan: false,
    cook_time: 45,
    thumbnail: "https://www.youtube.com/",
    origin: Asian,
    ingredient_id: 2,
    measure_id: 2,
    step_id: 2,
    user_id: 2,
  },
  {
    id: 3,
    name: "Gesang Gey",
    description: "Gesang Gey",
    category: Beef,
    vegan: false,
    cook_time: 45,
    thumbnail: "https://www.youtube.com/",
    origin: Asian,
    ingredient_id: 3,
    measure_id: 3,
    step_id: 3,
    user_id: 3,
  },
];
