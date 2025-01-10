import { Recipe } from "@cooklang/cooklang-ts";

export async function fetchRecipes(): Promise<Recipe[] | null> {
  const recipes = await fetch(process.env.URL + "/api/recipes");

  if (!recipes.ok) {
    return null;
  }

  return await recipes.json();
}

export async function fetchRecipe(
  recipeName: string,
): Promise<Recipe[] | null> {
  const url = process.env.URL + "/api/recipe/" + recipeName;
  const recipe = await fetch(url);

  if (!recipe.ok) {
    return null;
  }

  return await recipe.json();
}
