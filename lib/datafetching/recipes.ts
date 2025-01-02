import { Recipe } from "@cooklang/cooklang-ts";

export async function fetchRecipes(): Promise<Recipe[]> {
  console.log(process.env.VERCEL_URL);
  const recipes = await fetch(process.env.URL + "/api/recipes");

  if (!recipes.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return await recipes.json();
}
