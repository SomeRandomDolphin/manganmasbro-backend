import { Category, Origin } from "@prisma/client";

// Category
const Desserts: Category = "Desserts";
const Beef: Category = "Beef";
const Pork: Category = "Pork";
const Sandwiches: Category = "Sandwiches";
const Chicken: Category = "Chicken"
// const Seafood: Category = "Seafood"
const Vegetarian: Category = "Vegetarian"
// const Lamb: Category = "Lamb"
// const Turkey: Category = "Turkey"
const Pasta: Category = "Pasta"
// const Rice: Category = "Rice"
const Soup: Category = "Soup"
// const Salads: Category = "Salads"
const Pizza: Category = "Pizza"

// Origin
const Mediterranean: Origin = "Mediterranean";
const Scandinavian: Origin = "Scandinavian";
const Western: Origin = "Western";
const Asian: Origin = "Asian";
// const MiddleEastern: Origin = "MiddleEastern";
const Indian: Origin = "Indian";
// const African: Origin = "African";
const LatinAmerican: Origin = "LatinAmerican";
const SoutheastAsian: Origin = "SoutheastAsian";
// const EasternEuropean: Origin = "EasternEuropean";

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
  {
    id: 4,
    name: "Cuban Sandwich (Cubano)",
    description: "The Cuban sandwich, better known as a Cubano, begins with soft, slightly sweet Cuban bread. Heaps of heavily seasoned pork roast and sliced ham alternating between layers of Swiss cheese and sour pickles. The sandwich is cemented together with yellow mustard and a garlic butter schmear. I mean, it’s practically complete meal you can eat while walking? Sign me up for all of that.",
    category: Sandwiches,
    vegan: false,
    cook_time: 25,
    thumbnail: 'https://www.simplyrecipes.com/thmb/li61VRNwk1nHlkRwVV6vOKImzBI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__01__Authentic-Cuban-Sandwich-LEAD-3-d2a86aa6171947fb83af960c53a968b0.jpg',
    origin: LatinAmerican,
    ingredient_id: 4,
    measure_id: 4,
    step_id: 4,
    user_id: 1,
  },
  {
    id: 5,
    name: "Chicken Korma",
    description: "Korma is prepared by marinating and then braising a meat in a yogurt or cream base. The dish is traditionally cooked on low heat for around an hour until the meat is tender and the sauce turns into a rich and creamy glaze.",
    category: Chicken,
    vegan: false,
    cook_time: 55,
    thumbnail: 'https://www.simplyrecipes.com/thmb/4hc8OyybQ9Wh53NVEx8vxQzfKvI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__05__Chicken-Korma-LEAD-1-68475a749cd646b89137c9f6fddf6122.jpg',
    origin: Indian,
    ingredient_id: 5,
    measure_id: 5,
    step_id: 5,
    user_id: 2,
  },
  {
    id: 6,
    name: "Sigeumchi Namul",
    description: "This seasoned spinach is a Korean classic banchan. It's simple to make with just a few ingredients: blanched spinach, garlic, scallions, sesame oil, sesame seeds, and just a little sugar.",
    category: Vegetarian,
    vegan: true,
    cook_time: 16,
    thumbnail: 'https://www.simplyrecipes.com/thmb/GlXckt234UJ8z57U3kPzgvpJD0I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Spinach-Banchan-LEAD-9-bfab68c0349a40608138205ed159951d.jpg',
    origin: Asian,
    ingredient_id: 6,
    measure_id: 6,
    step_id: 6,
    user_id: 3,
  },
  {
    id: 7,
    name: "Miso Soup",
    description: "This version of the traditional Japanese dish, Miso Soup is drizzled with sesame oil and sprinkled with togarashi for a lightly smoky and savory spin.",
    category: Soup,
    vegan: true,
    cook_time: 30,
    thumbnail: 'https://www.simplyrecipes.com/thmb/KSmzTEtoPAP4lY-zifb5maKHnPk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Miso-Soup-LEAD-8-423fc6f9345148e68b570a7ba29e5748.jpg',
    origin: Asian,
    ingredient_id: 7,
    measure_id: 7,
    step_id: 7,
    user_id: 1,
  },
  {
    id: 8,
    name: "Chicken Adobo",
    description: "The classic Filipino chicken adobo is a stew that is cooked either by braising or simmering. Its tangy flavors come from the basic ingredients of garlic, vinegar, crushed peppercorns, soy sauce, broth, bay leaves, and a dash of salt. Sometimes, pork belly chunks can be added with the chicken, which elevates the dish to an even more superb level.",
    category: Chicken,
    vegan: false,
    cook_time: 100,
    thumbnail: 'https://www.simplyrecipes.com/thmb/ORuftUM3byXimFlYyas4QE4RQGs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chicken-Adobo-LEAD-3-ac4f46d35d494effa40d935b93320f9d.jpg',
    origin: SoutheastAsian,
    ingredient_id: 8,
    measure_id: 8,
    step_id: 8,
    user_id: 2,
  },
  {
    id: 9,
    name: "Homemade Pepperoni Pizza",
    description: "This pepperoni pizza is so good, you'll forget delivery exists.",
    category: Pizza,
    vegan: false,
    cook_time: 25,
    thumbnail: 'https://www.simplyrecipes.com/thmb/2MQuChhZANaSSxdL1a0tA6nBgmQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg',
    origin: Western,
    ingredient_id: 9,
    measure_id: 9,
    step_id: 9,
    user_id: 3,
  },
  {
    id: 10,
    name: "Pasta Carbonara",
    description: "Spaghetti alla carbonara. Luscious and wonderfully indulgent, pasta carbonara takes as long to make as it does to cook the pasta. The ingredients are simple—just spaghetti (or another long pasta), and the carbonara is made with pancetta or bacon, eggs, Parmesan, a little olive oil, salt and pepper. The silky carbonara sauce is created when the beaten eggs are tossed with the hot pasta and a little fat from the pancetta or bacon.",
    category: Pasta,
    vegan: false,
    cook_time: 30,
    thumbnail: "https://www.simplyrecipes.com/thmb/9DSEOemXX-gGJQBJqsY-qDzRjDw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Spaghetti-Carbonara-LEAD-6-b3880a6eb49f4158be6f13885c797ded.jpg",
    origin: "Mediterranean" ,
    ingredient_id: 10,
    measure_id: 10,
    step_id: 10,
    user_id: 1,
  },
  {
    id: 11,
    name: "Smashed Tomato Pasta",
    description: "Type 'homemade tomato sauce' into your Google search box and you’ll turn up nearly 400 million results. Some demand hours at the stove, others are fabulously unfussy. This smashed tomato pasta leans heavily towards the easy end of the spectrum. It calls for just five ingredients, takes about 10 minutes of hands-on time, and results in a sauce you’ll find yourself turning to again and again.",
    category: "Pasta",
    vegan: false,
    cook_time: 70,
    thumbnail: "https://www.simplyrecipes.com/thmb/OBoz-vO35Gt9t5h13Dwr35U5Q7A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Smashed-Tomato-Pasta-LEAD-7-97b2ed1341c145359bd4f5cee6a57dc6.jpg",
    origin: "Mediterranean",
    ingredient_id: 11,
    measure_id: 11,
    step_id: 11,
    user_id: 2,
  },
  {
    id: 12,
    name: "Sheet Pan Grilled Cheese Sandwiches",
    description: "This simple sheet pan technique allows you to make five grilled cheese sandwiches at the same time—meaning everyone around the table gets an equally gooey and warm sandwich at the same time—with barely more effort than it takes to prep one. We went with four types of cheese—goat, white cheddar, provolone, and Swiss—for these buttery, rich sheet pan grilled cheese sandwiches, but feel free to change the cheeses up depending on what you like or what you have in your fridge. You could also dress these up with a few added toppings, like spinach, basil leaves, and tomato slices—or allow folks to customize their own sandwich. Your grilled cheese, your choice.",
    category: "Sandwiches",
    vegan: false,
    cook_time: 20,
    thumbnail: "https://www.simplyrecipes.com/thmb/RXAvsY-gOzWqmGZZBMHTF9wiuN8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Sheet-Pan-Grilled-Cheese-Sandwiches-LEAD-4-e66e37767e0d4748af66c29ebc3c4cf3.jpg",
    origin: "Western",
    ingredient_id: 12,
    measure_id: 12,
    step_id: 12,
    user_id: 3,
  },
]; 