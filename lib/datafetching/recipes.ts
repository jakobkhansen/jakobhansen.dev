import { Recipe } from "@cooklang/cooklang-ts";

export async function fetchRecipes(): Promise<Recipe[]> {
  console.log(process.env.URL);
  const recipes = await fetch(process.env.URL + "/api/recipes");

  if (!recipes.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return await recipes.json();
}

export async function fetchRecipe(recipeName: string): Promise<Recipe[]> {
  const url = process.env.URL + "/api/recipe/" + recipeName;
  console.log(url);
  const recipe = await fetch(url);

  if (!recipe.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return await recipe.json();
}
