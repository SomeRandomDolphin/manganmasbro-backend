import { Category, Origin } from "@prisma/client";

const Desserts: Category = "Desserts";
const Beef: Category = "Beef";
const Pork: Category = "Pork";
const Mediterranean: Origin = "Mediterranean";
const Scandinavian: Origin = "Scandinavian";
const Western: Origin = "Western";

export const recipes = [
  {
    id: 1,
    name: "Flan",
    description: "Flan is a sweet custard topped with a caramel sauce. It’s popular in countries with Spanish influence, like Mexico, parts of Central and South America, and the Philippines, each with their version.",
    category: Desserts,
    vegan: false,
    cook_time: 455,
    thumbnail: "https://www.simplyrecipes.com/thmb/81DDN-JmyLF4q4x3ji9US5EinZY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Flan-LEAD-4babaa6635e84aa583e40beeffdc9e61.jpg",
    origin: Mediterranean ,
    ingredient_id: 1,
    measure_id: 1,
    step_id: 1,
    user_id: 1,
  },
  {
    id: 2,
    name: "Swedish Meatballs",
    description: "Flavored with nutmeg and cardamom, these little beef-and-pork meatballs are best served with a Swedish meatball sauce—a rich roux-based and beef stock gravy, spiked with sour cream and a little lingonberry jelly.",
    category: Beef,
    vegan: false,
    cook_time: 80,
    thumbnail: "https://www.simplyrecipes.com/thmb/6Rt-QgGkNCX3cBm7IUN-0W8JZC0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__12__swedish-meatballs-vertical-a-1800-3083961bedc349f28fcf3b42f2f9a0e9.jpg",
    origin: Scandinavian,
    ingredient_id: 2,
    measure_id: 2,
    step_id: 2,
    user_id: 2,
  },
  {
    id: 3,
    name: "Microwave Bacon",
    description: "Forget those special bacon cooking gadgets. A plate and paper towels are all you need to microwave mess-free, crispy bacon in minutes.",
    category: Pork,
    vegan: false,
    cook_time: 6,
    thumbnail: "https://www.simplyrecipes.com/thmb/4JFyH0WJwRhUpSpntwZQTzxhOpo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Microwave-Bacon-LEAD-1-0b402bfbfba14b84b62c28afe288ea60.jpg",
    origin: Western,
    ingredient_id: 3,
    measure_id: 3,
    step_id: 3,
    user_id: 3,
  },
]; 