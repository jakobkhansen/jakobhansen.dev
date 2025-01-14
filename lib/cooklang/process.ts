import { Recipe } from "./types";

export function preprocess_recipe(recipe: Recipe): Recipe {
  return {
    ...recipe,
  };
}
