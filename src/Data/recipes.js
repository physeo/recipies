export const categories = {
  breakfast: "Breakfast",
  soups: "Soups",
  pastas: "Pastas",
  chickenAndFish: "Chicken and Fish",
  beefAndPork: "Beef and Pork",
  chinese: "Chinese",
  mexican: "Mexican",
  sidesAndSauces: "Sides and Sauces",
  preserves: "Preserves",
};

const units = {
  c: "Cup",
  tbs: "Tablespoon",
  tsp: "Teaspoon",
  oz: "Ounces",
  lb: "Pound",
};

export const recipes = [
  {
    title: "Thin Pancakes",
    category: categories.breakfast,
    ingredients: [
      {
        amount: "3",
        units: "",
        name: "Eggs",
      },
      {
        amount: "1/3",
        units: units.c,
        name: "Sugar",
      },
      {
        amount: "1",
        units: units.c,
        name: "Milk",
      },
      {
        amount: "1",
        units: units.c,
        name: "Flour",
      },
    ],
    directions: [
      "Mix all ingredients until smooth consistency without lumps.",
      "Cook on griddle with butter as the non-stick (halfway unwrap a stick).",
    ],
  },
  {
    title: "Yeggy German Pancakes",
    category: categories.breakfast,
    ingredients: [
      {
        amount: "6",
        units: "",
        name: "Eggs",
      },
      {
        amount: "1",
        units: units.c,
        name: "Flour",
      },
      {
        amount: "1",
        units: units.tsp,
        name: "salt",
      },
      {
        amount: "4",
        units: units.tbs,
        name: "Melted Butter",
      },
      {
        amount: "1",
        units: units.c,
        name: "Milk",
      },
    ],
    directions: [
      "Mix the eggs, flour, and salt.",
      "Add and mix the melted butter and milk.",
      "Cook on griddle with spray or butter.",
      "Pour on in a straightish line, tip the griddle to allow it to spread and thin out along the griddle.",
    ],
  },
  {
    title: "Apple Butter Pancakes",
    category: categories.breakfast,
    ingredients: [
      {
        amount: "2",
        units: units.c,
        name: "Buttermilk pancake/waffle mix",
      },
      {
        amount: "2/3",
        units: units.c,
        name: "Apple Butter",
      },
      {
        amount: "2/3",
        units: units.c,
        name: "Water",
      },
      {
        amount: "1",
        units: units.tsp,
        name: "Apple Pie Spice (optional)",
      },
    ],
    directions: [
      "Heat a skillet or griddle to medium.",
      "Mix together all ingredients in a bowl.",
      "Spoon 1/4 cup of the batter into the pan for each pancake.",
      "When bubbles are visible in the middle of the pancake, flip gently.",
      "Continue making pancakes until batter is gone - we got about 13 pancakes from this recipe.",
    ],
  },
  {
    title: "Banana Pancakes",
    category: categories.breakfast,
    ingredients: [
      {
        amount: "1",
        units: units.c,
        name: "Mashed Bananas (about 2 medium)",
      },
      {
        amount: "2",
        units: units.c,
        name: "Wheat Blends Pancake Mix",
      },
      {
        amount: "1",
        units: units.tsp,
        name: "Vanilla Extract",
      },
      {
        amount: "1/2",
        units: units.tsp,
        name: "Cinnamon",
      },
      {
        amount: "1 1/2",
        units: units.c,
        name: "Water",
      },
    ],
    directions: [
      "Combine mashed bananas, pancake mix, 1/3 cup syrup, vanilla, cinnamon and water in bowl.",
      "Stir just until blended. Heat skillet over medium-high heat or electric griddle to 350°F.",
      "SPRAY cooking surface and pancake turner with no-stick cooking spray. Pour 1/4 cup batter for each pancake onto hot griddle.",
      "Cook about 1 1/2 minutes per side or until golden brown. Repeat process until all batter is used.",
    ],
  },
  {
    title: "French Toast",
    category: categories.breakfast,
    ingredients: [
      {
        amount: "",
        units: "",
        name: "Thick, dense bread slices",
      },
      {
        amount: 2,
        units: "",
        name: "Eggs",
      },
      {
        amount: "2/3",
        units: units.c,
        name: "Milk",
      },
      {
        amount: "1/4",
        units: units.tsp,
        name: "Ground Cinnamon (optional)",
      },
      {
        amount: "1/4",
        units: units.tsp,
        name: "Ground Nutmeg (optional)",
      },
      {
        amount: "1",
        units: units.tsp,
        name: "Vanilla Extract (optional)",
      },
    ],
    directions: [
      "Preheat griddle",
      "Mix together ingredients in a shallow tupperware",
      "Dip both sides of bread slices into the mixture and place on the griddle until both sides are cooked and dry",
    ],
  },
  {
    title: "Breakfast Burritos",
    category: categories.breakfast,
    ingredients: [
      {
        amount: "1/2 - 2/3",
        units: "bag",
        name: "Frozen Hashbrowns",
      },
      {
        amount: "6-8",
        units: units.oz,
        name: "Sausage",
      },
      {
        amount: "4-5",
        units: "",
        name: "Eggs",
      },
      {
        amount: "Handful",
        units: "",
        name: "Cheese",
      },
      {
        amount: "2-4",
        units: units.tbs,
        name: "Butter",
      },
      {
        amount: "",
        units: "",
        name: "Water",
      },
      {
        amount: "",
        units: "",
        name: "Tortillas",
      },
      {
        amount: "",
        units: "",
        name: "Toppings (salsa, ketchup)",
      },
    ],
    directions: [
      "Melt 1-2 Tbs butter in a pan, then add hashbrowns with some water if they are frozen",
      "Cover with lid and remember to stir and add water as needed until completely thawed (remember to flip and stir carefully so they don’t end up like mashed potatoes)",
      "Once, thawed, allow to sit longer between flipping so they can brown",
      "While allowing the hash browns to thaw, brown sausage and drain off some grease OR drain all and remove sausage to a paper towel lined plate",
      "Add beaten eggs and cheese in with sausage and cook, stirring occasionally until eggs are cooked through",
      "IF you removed sausage and all the grease, then add 1 tbs butter and melt. Then add eggs, cheese, and sausage, cooking until done",
    ],
  },
  {
    title: "Basil Scramble",
    category: categories.breakfast,
    ingredients: [
      {
        amount: "5-6",
        units: "",
        name: "Eggs",
      },
      {
        amount: "Handful",
        units: "",
        name: "Cheese",
      },
      {
        amount: "1",
        units: "",
        name: "Tomato",
      },
      {
        amount: "8-10",
        units: "",
        name: "Fresh basil leaves, sliced",
      },
    ],
    directions: [
      "Make like scrambled eggs with cheese, add tomatoes and basil thrown on top after the eggs are finished",
    ],
  },
  {
    title: "Eggs Benedict",
    category: categories.breakfast,
    ingredients: [
      {
        amount: "2-3",
        units: "",
        name: "Eggs",
      },
      {
        amount: "",
        units: "",
        name: "Hollandaise Sauce Packet",
      },
      {
        amount: "",
        units: "",
        name: "Butter",
      },
      {
        amount: "",
        units: "",
        name: "Milk",
      },
      {
        amount: "",
        units: "",
        name: "Lemon Juice",
      },
      {
        amount: "",
        units: "",
        name: "Canadian Bacon or Ham",
      },
      {
        amount: "",
        units: "",
        name: "English Muffins",
      },
    ],
    directions: [
      "Turn oven on to lowest setting to use as a warming drawer. Begin water boiling/simmering for poached eggs",
      "Make the hollandaise sauce according to package directions (I’m sorry you get cheater sauce but you are welcome to figure out homemade if you feel so inclined) and leave on lowest setting to keep warm, stirring occasionally to avoid getting lumps in the sauce",
      "Toast English muffins and place face up on a pan, place in the warming oven",
      "Brown the ham or canadian bacon lightly in a pan and arrange on the warm English muffins",
      "Finish poaching the eggs in the pot and place on top (using a slotted spoon, I think it’s easiest) of the ham muffins",
      "Place on a plate and then cover in sauce",
    ],
  },
  {
    title: "Eggy in a Basket",
    category: categories.breakfast,
    ingredients: [
      {
        amount: "",
        units: "",
        name: "Bread Slices",
      },
      {
        amount: "",
        units: "",
        name: "Eggs",
      },
      {
        amount: "",
        units: "",
        name: "Butter",
      },
      {
        amount: "",
        units: "",
        name: "Salt and Pepper",
      },
    ],
    directions: [
      "Cut the potatoes in half long-wise so you have to long pieces instead of two chunky sides",
      "Cut each long piece into thin ⅛-¼ inch thick slices",
      "Set aside while you melt the butter on Medium-high heat (6-7)",
      "Throw in the potatoes and stir around to coat them all in the butter",
      "Add some water and cover to speed up the cooking process",
      "Once you can stab through a potato easily, let them cook in the pan, flipping occasionally so you don’t squish them too much",
      "They are done when they start to brown on the white part of the potato",
    ],
  },
  {
    title: "Cauliflower/Broccoli Soup",
    category: categories.soups,
    ingredients: [
      {
        amount: "",
        units: "",
        name: "Whole head of Cauliflower or 2-3 Crowns of Broccoli",
      },
      {
        amount: "1/4",
        units: units.c,
        name: "Butter (or 1/2 with cube of garlic)",
      },
      {
        amount: "1/3",
        units: units.c,
        name: "Flour",
      },
      {
        amount: "2",
        units: units.c,
        name: "Chicken Broth (or one cube bouillon w/same amount of water)",
      },
      {
        amount: "2",
        units: units.c,
        name: "Milk",
      },
      {
        amount: "1-2",
        units: units.c,
        name: "Grated Cheese",
      },
      {
        amount: "",
        units: "",
        name: "Garlic and Onion Powder",
      },
    ],
    directions: [
      "Fill pot less ⅓ full of water",
      "cut up cauliflower or broccoli into chunks and throw in boiling water until easy to stab through",
      "Chop or use the food processor to desired bite size and set aside",
      "Melt butter (include garlic cube if desired)",
      "Add flour and whisk until it makes a bubbly paste",
      "Stir another 30 seconds then add broth and whisk until it thickens, then add the milk, cheese, and seasonings (to taste) and whisk until it thickens to a chowder consistency (more cheese-thicker soup).",
      "Add vegetables and stir with LADLE or they get stuck in the whisk",
    ],
  },
  {
    title: "Ham Veggie Chowder",
    category: categories.soups,
    ingredients: [
      {
        amount: "2-4",
        units: units.c,
        name: "Chicken Broth",
      },
      {
        amount: "2 1/2",
        units: units.c,
        name: "Diced Potatoes",
      },
      {
        amount: "1",
        units: units.c,
        name: "Diced Carrots",
      },
      {
        amount: "1/2",
        units: units.c,
        name: "Minced Celery",
      },
      {
        amount: "",
        units: "",
        name: "Garlic and Onion Powder",
      },
      {
        amount: "1",
        units: units.tsp,
        name: "Salt",
      },
      {
        amount: "1/4",
        units: units.tsp,
        name: "Pepper",
      },
      {
        amount: "1",
        units: units.c,
        name: "Diced Ham",
      },
      {
        amount: "",
        units: "",
        name: "Cheese Sauce",
      },
      {
        amount: "1/4",
        units: units.c,
        name: "Butter",
      },
      {
        amount: "1/4",
        units: units.c,
        name: "Flour",
      },
      {
        amount: "2",
        units: units.c,
        name: "Milk",
      },
      {
        amount: "2",
        units: units.c,
        name: "Shreeded Cheddar Cheese",
      },
    ],
    directions: [
      "In a medium saucepan bring the soup ingredients, except ham, to boil for 10 minutes or until vegetables are tender. Add ham.",
      "In a small saucepan melt butter",
      "Stir in flour and milk",
      "Add cheese to mixture and whisk until melted.",
      "Add cheese sauce to soup mixture and stir until mixed",
    ],
  },
  {
    title: "",
    category: categories.soups,
    ingredients: [
      {
        amount: "1",
        units: units.lb,
        name: "Ground Beef",
      },
      {
        amount: "",
        units: "",
        name: "Taco Seasoning Packet",
      },
      {
        amount: "1/2",
        units: "",
        name: "Onion",
      },
      {
        amount: "1-2",
        units: units.c,
        name: "Beef Broth",
      },
      {
        amount: "",
        units: "",
        name: "Spicy, low sodium V8 Veggie juice, smallest bottle you can find",
      },
      {
        amount: "1",
        units: "Can",
        name: "Corn",
      },
      {
        amount: "1",
        units: "Can",
        name: "Olives",
      },
      {
        amount: "1",
        units: "Can",
        name: "Kidney Beans",
      },
      {
        amount: "1",
        units: "Can",
        name: "Other Beans",
      },
      {
        amount: "",
        units: "",
        name: "Sour Cream",
      },
    ],
    directions: [
      "Chop onion and place in pan with hamburger meat",
      "Brown hamburger and onions and make into taco meat using the packet instructions",
      "Put meat into the big pot",
      "Drain all of the cans and add into the big pot",
      "Add in the broth and as much of the veggie juice as you want",
      "Heat through and serve with sour cream",
      "This makes A LOT of soup",
    ],
  },
  {
    title: "",
    category: categories.soups,
    ingredients: [
      {
        amount: "",
        units: "",
        name: "",
      },
    ],
    directions: [""],
  },
  {
    title: "",
    category: categories.soups,
    ingredients: [
      {
        amount: "",
        units: "",
        name: "",
      },
    ],
    directions: [""],
  },
  {
    title: "",
    category: categories.soups,
    ingredients: [
      {
        amount: "",
        units: "",
        name: "",
      },
    ],
    directions: [""],
  },
  {
    title: "",
    category: categories.soups,
    ingredients: [
      {
        amount: "",
        units: "",
        name: "",
      },
    ],
    directions: [""],
  },
  {
    title: "",
    category: categories.soups,
    ingredients: [
      {
        amount: "",
        units: "",
        name: "",
      },
    ],
    directions: [""],
  },
  {
    title: "",
    category: categories.soups,
    ingredients: [
      {
        amount: "",
        units: "",
        name: "",
      },
    ],
    directions: [""],
  },
  {
    title: "",
    category: categories.soups,
    ingredients: [
      {
        amount: "",
        units: "",
        name: "",
      },
    ],
    directions: [""],
  },
  {
    title: "",
    category: categories.soups,
    ingredients: [
      {
        amount: "",
        units: "",
        name: "",
      },
    ],
    directions: [""],
  },
  {
    title: "",
    category: categories.pastas,
    ingredients: [
      {
        amount: "",
        units: "",
        name: "",
      },
    ],
    directions: [""],
  },
];
