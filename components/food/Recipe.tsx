import { Metadata } from "@cooklang/cooklang-ts";
import { Ingredient, Recipe as RecipeType } from "../../lib/cooklang/types";

type Props = {
  recipe: RecipeType;
};

export function Recipe({ recipe }: Props) {
  const metadata = recipe.metadata.map as unknown as Metadata;
  const ingredientList = useFilterIngredients(recipe.ingredients);
  console.log(ingredientList);

  return (
    <div className="mdx m-auto max-w-2xl">
      <h1>{metadata.title}</h1>
      <h2>Ingredients</h2>
      {ingredientList.map((ingredient) => (
        <div key={ingredient.name}>
          <span>{ingredient.name}</span>
        </div>
      ))}
    </div>
  );
}

const useFilterIngredients = (ingredients: Ingredient[]) => {
  return ingredients.filter((ingredient) => {
    return ingredient.modifiers == "";
  });
};
