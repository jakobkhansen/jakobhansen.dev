import { Recipe } from "./types";

export function preprocess_recipe(recipe: Recipe): Recipe {
  findIngredientSection(recipe);
  filterIngredients(recipe);
  return recipe;
}

function findIngredientSection(recipe: Recipe) {
  recipe.sections.forEach((section, secNum) => {
    section.content.forEach((content) => {
      const step = content.value;
      step.items.forEach((item) => {
        if (item.type === "ingredient") {
          const ingredient = recipe.ingredients[item.index];
          ingredient.extra = {
            ...ingredient.extra,
            section: secNum,
          };
        }
      });
    });
  });
}

function filterIngredients(recipe: Recipe) {
  recipe.extra = {
    ...recipe.extra,
    filteredIngredients: recipe.ingredients.filter((ingredient) => {
      return ingredient.modifiers === "";
    }),
  };
}
