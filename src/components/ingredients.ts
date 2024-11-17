

export interface Ingredient {
    icon: string;
    label: string;
  }
  
  export const allIngredients = [
    
    { icon:"🥕" ,link: "https://streak-stats.demolab.com?user=ahmedmsayeem&theme=gruvbox&border_radius=4.5", label: "Github2" },
    { icon: "🍌",link:"https://github-readme-stats.vercel.app/api?username=ahmedmsayeem&show_icons=true&theme=gruvbox", label: "Github1" },
    { icon: "🫐",link:"https://leetcode.card.workers.dev/Sayeem_Ahmed?theme=auto&font=patrick_hand&extension=null", label: "Leetcode" },
    { icon: "🥂", label: "Champers?" }
    // "https://streak-stats.demolab.com?user=ahmedmsayeem&theme=gruvbox&border_radius=4.5"
    
    
  ];
  
  const [tomato, lettuce, cheese] = allIngredients;
  export const initialTabs = [tomato, lettuce, cheese];
  
  export function getNextIngredient(
    ingredients: Ingredient[]
  ): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }
  